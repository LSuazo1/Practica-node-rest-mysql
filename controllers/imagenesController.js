const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Producto } = require('../models/producto');
const { Item } = require('../models/item');




const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


const upload = multer({ storage: storage });

exports.upload2 = upload.array("archivo");

exports.subirImagenes = async (req, res) => {
    const files=req.files;
    console.log(files);
    try {
      const items= files.map(async (file )=> {
        const item1 = {
          nombre: file.filename,
          idProducto: 3
      }
        const item = Item.build(item1);
        await item.save();
      
      });
      res.json({items});
    }catch(e){
      res.status(400).json(e)
    }
     
   
 };

 const mostrarImagen = async (req, res) => {
  const { id } = req.params


  const item = await Item.findByPk(id);

  if (!item) {
      return res.status(400).json({ msg: "`El usuario  con el ${id} no existe en al bd`" });
  }


  if (item.nombre) {
      const pathImagen = path.join(__dirname, '../uploads', item.nombre);
      if (fs.existsSync(pathImagen)) {
          return res.sendFile(pathImagen);
      }
  }
  const pathImagen = path.join(__dirname, '../assets', 'no-image.jpg');

  res.sendFile(pathImagen);
}

const mostrarImagenes = async (req, res) => {
  const { id } = req.params


  const items = await Item.findAll({where:{idProducto:req.params.id}});
  console.log(items);

  if (items.length === 0) {
      return res.status(400).json({ msg: "`El usuario  con el ${id} no existe en al bd`" });
  }

  res.json({items})
}
module.exports ={mostrarImagen,mostrarImagenes}