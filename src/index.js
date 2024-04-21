import express from "express";
import cors from "cors";

//importamos la configuracion de 

import BD from '../config/db.js';

// Importamos el archivo de rutas
import citasRoutes from '../routes/Routes_Citas.js'
// definimos la variable app para trabajar con express
const app = express();
app.use(cors());  
app.use(express.json());
app.use('/citas',citasRoutes)


// autenticacion BD

try {
    await BD.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }



// muestra mensaje en el navegador
app.get('/', (req,res) => {
    console.log("Estamos conectados desde la web");
} );

// configuracion del puerto del servidor
app.listen(8000,() => {
    console.log("El servidor esta corriendo correctamente");
});