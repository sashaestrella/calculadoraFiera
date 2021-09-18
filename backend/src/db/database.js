const mysql = require('mysql');

module.exports = {
    iniciarConexion() {
        let createConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'calculadoradb',
        }); 
        
        return createConnection;
    }
}