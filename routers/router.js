const {Router}=require('express');
const {getProductos,guardarItem}=require('../controllers/productoController');
const route=new Router();

route.get('/productos',getProductos);

route.post('/enviar',guardarItem);

module.exports =route;
