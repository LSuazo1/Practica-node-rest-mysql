const express=require('express');
const { db } = require('../config/db');
const cors = require('cors');
const fileUpload=require('express-fileupload')
class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.conectarDB();
        this.middleware();
        this.route();
    }

    async conectarDB() {
        try {
            await db.authenticate();
            console.log('data cargada');
        } catch (error) {
            console.log(error);
        }
    }


    middleware() {
       // cors
        this.app.use(cors());

        //Lectura ytt paraseo del body
        this.app.use(express.json());

        //Fileupload - carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath : true
        }));
    }



    route(){
        this.app.use('/',require('../routers/router'));
        this.app.use('/api/',require('../routers/uploadsRoute'));
    }

    listen(){        
      this.app.listen(this.port,()=>{
        console.log(`express se esta corriendo por el servidor ${this.port}`);
    });
    }


}
module.exports = Server;