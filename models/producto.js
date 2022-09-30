const {db}=require('../config/db');
const {DataTypes}=require('sequelize');

const Producto=db.define('producto',{
    idProducto:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    cantidad:{
        type:DataTypes.DOUBLE
    },
    descripcion:{
        type:DataTypes.STRING
    },
    precio:{
        type:DataTypes.DOUBLE
    }

},{
    tableName:'producto'
});


module.exports={Producto};