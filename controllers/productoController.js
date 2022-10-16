const { Producto } = require('../models/producto');
const { Item } = require('../models/item');
const {Pedido}=require('../models/pedido');
const getProductos = async (req, res) => {

    const productos = await Producto.findAll();

    res.json({ productos })

}

const guardarItem = async (req, res) => {

    // const producto = await Producto.findOne({idProducto:3});
    const item1 = {
        nombre: 'camisa',
        idProducto: 3
    }
    try {     

        const item = Item.build(item1);
        await item.save();
        console.log(item);
        res.json({ item });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}
const guardarPedido=async(req,res)=>{
    
    //creo un objeto para pedidos
    const pedido1={
        idProducto:3,
        idCliente:2
    }

    try {     
        // creo el build para el objeto
        const pedido2 = Pedido.build(pedido1);
        // con save para guardar el pedido 
        await pedido2.save();
        //retorna el pedido en un json 
        res.json({ pedido2 });
    } catch (error) {
        console.log(error);
        //retorna en el res el error
        res.json({ error });
    }


}

module.exports = {
    getProductos,guardarItem,guardarPedido
}