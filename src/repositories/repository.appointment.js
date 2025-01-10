//este arquivo é responsavel por realizar a comunicação com o banco de dados
//pode utilizar orm, ou qualquer outra forma de comunicação com o banco de dados
import { query } from '../database/sqlite.js';


async function Listar(id_user) {

    //simulando dados do banco
    let sql = `SELECT a.id_appointment, s.description as service, d.name as doctor, d.specialty,
                a.booking_date, a.booking_hour, u.name as user, ds.price
               FROM appointments a
               JOIN services s ON (s.id_service = a.id_service)
               JOIN doctors d ON (d.id_doctor = a.id_doctor)
               JOIN users u ON (u.id_user = a.id_user)
               JOIN doctors_services ds ON (ds.id_doctor = a.id_doctor AND ds.id_service = a.id_service) 
               WHERE a.id_user = ?
               ORDER BY a.booking_date, a.booking_hour`;

    const appointments = await query(sql, id_user);

    return appointments;
}

async function Inserir(id_user, id_service, id_doctor, booking_date, booking_hour) {
    
    //simulando dados do banco
    let sql = `INSERT INTO appointments (id_user, id_service, id_doctor, booking_date, booking_hour)
               VALUES (?, ?, ?, ?, ?) returning id_appointment`;

    const appointment = await query(sql, [id_user, id_service, id_doctor, booking_date, booking_hour]);

    return appointment[0];
}

async function Deletar(id_user, id_appointment) {
    
    //simulando dados do banco
    let sql = `DELETE FROM appointments WHERE id_appointment = ? AND id_user = ?`;

    await query(sql, [id_appointment, id_user]);

    return {id_appointment};
}

export default { Listar, Inserir, Deletar };