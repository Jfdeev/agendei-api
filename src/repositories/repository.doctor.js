//este arquivo é responsavel por realizar a comunicação com o banco de dados
//pode utilizar orm, ou qualquer outra forma de comunicação com o banco de dados
import { query } from '../database/sqlite.js';


async function Listar(name) {

    let filter = [];

    //simulando dados do banco
    let sql = `SELECT * FROM doctors `;

    if (name) {
        sql += `WHERE name like ? `;
        filter.push('%' + name + '%');
    }
    sql += `order by name`;

    const doctors = await query(sql, filter);

    return doctors;
}

async function Inserir(name, specialty, icon) {
    
    //simulando dados do banco
    let sql = `INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?)
    returning id_doctor`;

    const doctor = await query(sql, [name, specialty, icon]);

    return doctor[0];

}

async function Editar(id_doctor, name, specialty, icon) {
    
    //simulando dados do banco
    let sql = `UPDATE doctors SET name = ?, specialty = ?, icon = ? WHERE id_doctor = ?`;

    await query(sql, [name, specialty, icon, id_doctor]);

    return { id_doctor };
}

async function Deletar(id_doctor) {
    
    //simulando dados do banco
    let sql = `DELETE FROM doctors WHERE id_doctor = ?`;

    await query(sql, [id_doctor]);

    return { id_doctor };
}

export default { Listar, Inserir, Editar, Deletar };