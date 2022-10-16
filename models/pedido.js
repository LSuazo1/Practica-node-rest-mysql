const {db}=require('../config/db');
const {DataTypes}=require('sequelize');

const Pedido=db.define('pedidos',{
    idPedido:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    idProducto:{
        type:DataTypes.INTEGER,
        foreignKey:true
    },
    idCliente:{
        type:DataTypes.INTEGER,
        foreignKey:true
    },
},{
    tableName:'pedidos'
});


module.exports={Pedido};