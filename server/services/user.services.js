import { UserModel } from '../models/user.model.js';
import { hashString } from '../helper/hashString.js'

// Create a new user
export const createUser = async (user) => {
  try {
    const hashedPassword = await hashString(user.password);
    user.password = hashedPassword;
    const newUser = await UserModel.create(user);
    return newUser;
  }
  catch (error) {
    console.error(error);
    throw new Error('Error creating user');
  }
}

// Get all users 
export const getAllUsers = async () => {
  try {
    const allUsers = await UserModel.findAll();
    return allUsers;
  } catch (err) {
    console.error(err);
    throw new Error('Error getting all users');
  }
}

// Get a user by ID
export const getUserById = async (id) => {
  try {
    const findUser = await UserModel.findOne( { where: { id } } );
    return findUser;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting user by id');
  }
}

// Get user by username
export const getUserByUserName = async (userName) => {
  try {
    const findUserByUserName = await UserModel.findOne( { where: { user_name: userName } } );
    return findUserByUserName;
  } catch (err) {
    console.error(err);
    throw new Error('Error getting user by user name');
  }
}

// Get user by email
export const getUserByEmail = async (email) => {
  try {
    const findUserByEmail = await UserModel.findOne( { where: { email } } );
    return findUserByEmail;
  } catch (err) {
    console.error(err);
    throw new Error('Error getting user by email');
  }
}

// Get user by email and password
export const getUserByEmailAndPassword = async (email, password) => {
  try {
    const findUserByEmailAndPassword = await UserModel.findOne( { where: { email, password } } );
    return findUserByEmailAndPassword;
  } catch (err) {
    console.error(err);
    throw new Error('Error getting user by email and password');
  }
}

// Update user
export const updateUser = async (id, updatedUser) => {
  try {
    const findUser = await getUserById(id);
    if (!findUser) {
      throw new Error('User not found');
    }
    const UpdatedUser = await findUser.update(updatedUser);
    return UpdatedUser;
  } catch (err) {
    console.error(err);
    throw new Error('Error updating user');
  }
}

// Delete user
export const deleteUser = async (id) => {
  try {
    const findUser = await getUserById(id);
    if (!findUser) {
      throw new Error('User not found');
    }
    await findUser.destroy();
    return 'User deleted successfully';
  } catch (err) {
    console.error(err);
    throw new Error('Error deleting user');
  }
}
