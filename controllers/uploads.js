/*const path = require('path');
const fs = require('fs');

const { subirArchivo } = require('../helpers/subir-archivo');
const { Producto } = require('../models/producto');
const { Item } = require('../models/item');
const cargarArchivo = async (req, res) => {

    console.log(req.files.archivo.name);
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json('No hay archivos que subir.');
    }

    if (!req.files.archivo) {
        return res.status(400).json('No hay archivos que subir.');
    }


    try {
        //imagenes
        const nombre = await subirArchivo(req.files, undefined, 'imgs');
        console.log(nombre);
        res.json({
            nombre
        });

    } catch (msg) {
        res.status(400).json({ msg })
    }


}
const actualizarImagen = async (req, res) => {

    const { id } = req.params


    const producto = await Producto.findByPk(id);

    if (!producto) {
        return res.status(400).json({ msg: "`El usuario  con el ${id} no existe en al bd`" });
    }


    //TODO: Limpia imagenes previas
    if (producto.img) {
        const pathImagen = path.join(__dirname, '../uploads', 'productos', producto.img);
        if (fs.existsSync(pathImagen)) {
            fs.unlinkSync(pathImagen);
        }
    }

    try {
        const { archivo } = req.files;
        const nombreImagenes =subirImagenes(archivo)
        console.log(nombreImagenes);
        res.json({ nombreImagenes })
    } catch (error) {
        console.log(error);
    }


    // producto.img=nombre;

    // producto.save();

    //res.json(producto);
}


const subirImagenes = (archivo) => {

    let contador = 0;
    const nombreImagenes=['No tiene nada'];
     archivo.forEach(async (archivo) => {
        archivo = await subirArchivo(archivo, undefined, 'productos');
        contador = contador + 1;
        console.log('Contador:', contador);
        nombreImagenes.push(archivo);
        console.log(nombreImagenes);
    });
     console.log(nombreImagenes);
    return nombreImagenes;
}

const mostrarImagen = async (req, res) => {
    const { id } = req.params


    const producto = await Producto.findByPk(id);

    if (!producto) {
        return res.status(400).json({ msg: "`El usuario  con el ${id} no existe en al bd`" });
    }


    if (producto.img) {
        const pathImagen = path.join(__dirname, '../uploads', 'productos', producto.img);
        if (fs.existsSync(pathImagen)) {
            return res.sendFile(pathImagen);
        }
    }
    const pathImagen = path.join(__dirname, '../assets', 'no-image.jpg');

    res.sendFile(pathImagen);
}


module.exports = {
    cargarArchivo,
    actualizarImagen,
    mostrarImagen
}*/