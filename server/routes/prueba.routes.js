import { Router } from 'express';

const pruebaRouter = Router()

pruebaRouter.get('/hola_mundo', ( req, res ) => {
  console.log("comemelones");
  
  res.send('Welcome')
})

export default pruebaRouter