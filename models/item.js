const {db}=require('../config/db');
const {DataTypes}=require('sequelize');

const Item=db.define('items',{
    idItem:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    idProducto:{
        type:DataTypes.INTEGER,
        foreignKey:true
    },
},{
    tableName:'items'
});


module.exports={Item};