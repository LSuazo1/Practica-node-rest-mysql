const { Producto } = require('../models/producto');
const { Item } = require('../models/item');
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

        res.json({ item })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProductos,guardarItem
}