// Importamos el modelo
import Citas from "../models/Citas.js"

//metodos CRUD

//crear una funcion para agregar citas

export const agregarCitas = async(req, res) =>{
    try {
        await Citas.create(req.body)
        res.json({msg: " Cita creada con exito"});

    } catch (error) {
        res.json({msg:error.message})
    }

}

//funcion O metodo mostar citas

export const getAllCitas = async (req,res) => {

    try {
        const citas = await Citas.findAll();
        res.json(citas);

    } catch (error) {
        res.json({msg:error.message})
    }
}


// funcion o metod mostrar una cita

export const getCita = async (req, res)=>{
    try {
        const cita = await Citas.findAll({
            where:{id:req.params.id}
        });
        res.json(cita[0]);

    } catch (error) {
        res.json({msg:error.message})
    }
    
}


// funcion o metodo modificar una cita

export const modificarCita = async (req, res)=>{
    try {
        await Citas.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({msg:"Se modifico una cita"});

    } catch (error) {
        res.json({msg:error.message})
    }
    
}


// funcion o metodo modificar una cita

export const eliminarCita = async(req, res)=>{
    try {
        let citas = Citas.findAll({where:{id:req.params.id} });
        if(!citas[0]){
            res.json({msg:"no se encuentra la cita"});
        }else{
        await citas[0].destroy();
            res.json({msg:"Se Elimino una cita"});
        }
        

    } catch (error) {
        res.json({msg:error.message})
    }
    
}
