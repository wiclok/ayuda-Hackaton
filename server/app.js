// Importaciones
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import { startDb } from './config/relations.js';
import { environments } from './config/environments.js'

// Configuración
const app = express();

const httpServer = createServer(app);
const io = new SocketServer(httpServer);

const PORT = process.env.PORT

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
app.use(helmet())
app.use(fileUpload)

// Rutas

// Socket.io

io.on('connection', (socket) => {
  console.log('Cliente conectado', socket.id);

  socket.emit('message', 'Bienvenido al chat');

  socket.on('new-message', (data) => {
    console.log(data);
    io.emit('new-message', data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado', socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
  startDb()
});