const {Router}=require('express');
const {getProductos,guardarItem,guardarPedido}=require('../controllers/productoController');
const route=new Router();

route.get('/productos',getProductos);

route.post('/enviar',guardarItem);

//Aqui vamos a guardar en la tabla intermedia;
route.post('/guardarPedido',guardarPedido);

module.exports =route;
