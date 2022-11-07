const {Router}=require('express');
const {getProductos,guardarItem,guardarPedido}=require('../controllers/productoController');
const imagenesControlle=require('../controllers/imagenesController');
const {mostrarImagenes,mostrarImagen}=require('../controllers/imagenesController');
const route=new Router();

route.get('/productos',getProductos);

route.post('/enviar',guardarItem);

//Aqui vamos a guardar en la tabla intermedia;
route.post('/guardarPedido',guardarPedido);


//route.post('/subirImagenes',subirImagenes);


route.get('/mostrar/:id',mostrarImagen);

route.get('/mostrarImagenes/:id',mostrarImagenes)

module.exports =route;
