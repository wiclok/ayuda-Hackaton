import { createUser, getAllUsers, getUserByEmailAndPassword } from '../services/user.services.js'

export const registerUser = async (req, res) => {
  const user = req.body;
  const existingUser = await getUserByEmailAndPassword(user.email, user.password);
  if (existingUser) {
    return res.status(409).send({ message: 'El usuario ya existe' });
  }
  const createdUser = await createUser(user);
  const data = {
    createdUser,
  }
  return res.status(201).json(data);
}

export const loginUser = async (req, res) => {
  const user = req.body;
  await getUserByEmailAndPassword(user.email, user.password)
  
  if (!user) {
    return res.status(401).send({ message: 'Usuario o contraseña incorrectos' });
  }

  // generar token

  const data = {
    user,
  }

  return res.status(200).json(data);
}