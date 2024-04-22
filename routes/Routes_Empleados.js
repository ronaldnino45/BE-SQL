// importamos express

import express from "express";

// importamos el controlador

import{agregarEmpleados} from  '../controllers/EmpleadosController.js';

import{getAllEmpleados} from  '../controllers/EmpleadosController.js';

import{getEmpleado} from  '../controllers/EmpleadosController.js';

import{modificarEmpleado} from  '../controllers/EmpleadosController.js';

import{eliminarEmpleado} from  '../controllers/EmpleadosController.js';

const router = express.Router();

router.post('/', agregarEmpleados);
router.get('/', getAllEmpleados);
router.get('/:id', getEmpleado);
router.put('/:id', modificarEmpleado);
router.delete('/:id', eliminarEmpleado);

export default router;