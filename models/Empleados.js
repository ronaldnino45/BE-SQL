// importamos  la configuracion de la bbdd
import BD from "../config/db.js";
import{ DataTypes} from "sequelize";

const Empleados = BD.define('empleados',{
        nombre_empleado:
        { 
            type: DataTypes.STRING,
             allowNull: false
        },
        
         cargo:
         { 
            type: DataTypes.STRING,
                  allowNull: false
        },

         sueldo:
         { 
            type: DataTypes.STRING,
                  allowNull: false
        },


        telefono:
        { 
        type: DataTypes.STRING,
                 allowNull: false
        },

 });

 export default Empleados;