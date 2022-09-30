const {Router}=require('express');
const {getProductos}=require('../controllers/productoController');
const route=new Router();

route.get('/productos',getProductos);



module.exports =route;
