const {Producto}= require('../models/producto');

const getProductos=async(req,res)=>{

    const productos=await Producto.findAll();

    res.json({productos})

}

module.exports={
    getProductos
}