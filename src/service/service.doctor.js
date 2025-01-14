// este arquivo é responsavel por realizar os serviços 
// de doctor apatir das dependencias injetadas das requisições

import repoDoctor from '../repositories/repository.doctor.js';

async function Listar(name) {
    const doctors = await repoDoctor.Listar(name);
    return doctors;
}

async function Inserir(name, specialty, icon) {
    const doctor = await repoDoctor.Inserir(name, specialty, icon);
    return doctor;
}

async function Editar(id_doctor ,name, specialty, icon) {
    const doctor = await repoDoctor.Editar(id_doctor, name, specialty, icon);
    return doctor;
}

async function Deletar(id_doctor) {
    const doctor = await repoDoctor.Deletar(id_doctor);
    return doctor;
}

async function ListarServicos(id_doctor) {
    const services = await repoDoctor.ListarServicos(id_doctor);
    return services;
}

export default { Listar, Inserir, Editar, Deletar, ListarServicos };