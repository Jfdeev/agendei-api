//este arquivo é responsavel por realizar a comunicação com o banco de dados
//pode utilizar orm, ou qualquer outra forma de comunicação com o banco de dados
import { query } from '../database/sqlite.js';


async function Listar() {

    //simulando dados do banco
    const sql = `SELECT * FROM doctors order by name`;

    const doctors = await query(sql, []);

    return doctors;
}

export default { Listar };