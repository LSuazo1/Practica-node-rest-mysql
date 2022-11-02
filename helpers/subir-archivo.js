const { v4: uuidv4 } = require('uuid');
const path = require('path');
const subirArchivo = (files,extensionesValidas= ['png', 'jpg', 'jpeg'],carpeta='') => {

    return new Promise((resolve, reject) => {


        const { name,...archivo } = files;
        const nombreCortado = name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];
        

        //Validar la extensiones
        if (!extensionesValidas.includes(extension)) {
          return reject(`La extension ${extension} no es permitida,las extensiones validas son ${extensionesValidas}`);
        }

        const nombreTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads/', carpeta,nombreTemp);

        // Use the mv() method to place the file somewhere on your server
        archivo.mv(uploadPath, (err) => {

            if (err) {
                return reject(err);
            }
            resolve( nombreTemp );
        });

    });


}


module.exports = {
    subirArchivo
}