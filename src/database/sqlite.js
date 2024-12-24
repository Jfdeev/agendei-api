import sqlite3 from 'sqlite3';

const SQlite = sqlite3.verbose();


// Função para executar comandos SQL e retornar uma Promise com o resultado
function query(comand, params, method = 'all') {
    return new Promise(function(resolve, reject) {
        db[method](comand, params, function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

const db = new SQlite.Database("./src/database/banco.db", 
                                SQlite.OPEN_READWRITE, (err) => {
                                    if (err) {
                                        console.error(err.message);
                                    } else {
                                        console.log('Connected to the database.');
                                    }
                                });
export { db, query };