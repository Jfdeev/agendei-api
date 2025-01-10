// este arquivo é responsavel por realizar os serviços 
// de doctor apatir das dependencias injetadas das requisições

import repoApoint from '../repositories/repository.appointment.js';

async function Listar(id_user) {
    const appointments = await repoApoint.Listar(id_user);
    return appointments;
}

async function Inserir(id_user, id_service, id_doctor, booking_date, booking_hour) {
    const appointment = await repoApoint.Inserir(id_user, id_service, id_doctor, booking_date, booking_hour);
    return appointment;
}

async function Deletar(id_user, id_appointment) {
    const appointment = await repoApoint.Deletar(id_user, id_appointment);
    return appointment;
}

export default { Listar, Inserir, Deletar };