const {db}=require('../config/db');
const {DataTypes}=require('sequelize');
const {Item}=require('../models/item');
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


Producto.hasMany(Item,{
    foreignKey:'idProducto',
    sourceKey:'idProducto'
});

Item.belongsTo(Producto,{
    foreignKey:'idProducto',
    targetId:'idProducto'
});

module.exports={Producto};