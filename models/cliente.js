const { db } = require('../config/db');
const { DataTypes } = require('sequelize');
const { Pedido } = require('../models/pedido');

const Cliente = db.define('cliente', {
    idCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'cliente'
});

Cliente.hasMany(Pedido, {
    foreignKey: 'idCliente',
    sourceKey: 'idCliente'
});

Pedido.belongsTo(Producto, {
    foreignKey: 'idCliente',
    sourceKey: 'idCliente'
});

module.exports = { Cliente };