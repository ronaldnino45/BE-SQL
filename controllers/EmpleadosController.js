// Importamos el modelo
import Empleados from "../models/Empleados.js"

//metodos CRUD

//crear una funcion para agregar citas

export const agregarEmpleados = async(req, res) =>{
    try {
        await Empleados.create(req.body)
        res.json({msg: " Empleado creado con exito"});

    } catch (error) {
        res.json({msg:error.message})
    }

}

//funcion O metodo mostar citas

export const getAllEmpleados = async (req,res) => {

    try {
        const empleados = await Empleados.findAll();
        res.json(empleados);

    } catch (error) {
        res.json({msg:error.message})
    }
}


// funcion o metod mostrar una cita

export const getEmpleado = async (req, res)=>{
    try {
        const empleado = await Empleados.findAll({
            where:{id:req.params.id}
        });
        res.json(empleado[0]);

    } catch (error) {
        res.json({msg:error.message})
    }
    
}


// funcion o metodo modificar una cita

export const modificarEmpleado = async (req, res)=>{
    try {
        await Empleados.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({msg:"Se modifico un Empleado"});

    } catch (error) {
        res.json({msg:error.message})
    }
    
}


// funcion o metodo modificar una cita

export const eliminarEmpleado = async(req, res)=>{
    try {
        let empleados = await Empleados.findAll({where:{id:req.params.id} });
        if(!empleados[0]){
            res.json({msg:"Empleado no existe"});
        }else{
        await empleados[0].destroy();
            res.json({msg:"Se borro el empleado de la BBDD"});
        }
        

    } catch (error) {
        res.json({msg:error.message})
    }
    
}
