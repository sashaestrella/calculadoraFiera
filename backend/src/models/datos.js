const connection = require("../db/database")

module.exports = {
    insertarDato(dato) {
        return new Promise((resolve, reject) => {
            let conexion = connection.iniciarConexion();
            conexion.connect((err) => {
                if (err) return;
                else conexion.query('insert into datos (dato) values ("' + dato + '");', (err, resultados) => {
                    if (err) {
                        reject(err);
                    } else {
                        conexion.end((err) => {
                            console.log("se ha cerrado la conexión");
                            resolve(resultados.insertId);
                        })
                    } 
                });
            })
        });
    },
    obtenerDatos() {
        return new Promise((resolve, reject) => {
            let conexion = connection.iniciarConexion();
            conexion.connect((err) => {
                if (err) return;
                else conexion.query('select * from datos;', (err, resultados) => {
                    if (err) {
                        reject(err);
                    } else {
                        conexion.end((err) => {
                            console.log("se ha cerrado la conexión");
                            resolve(resultados);
                        })
                    } 
                });
            })
        });
    }
}