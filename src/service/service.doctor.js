// este arquivo é responsavel por realizar os serviços 
// de doctor apatir das dependencias injetadas das requisições

import repoDoctor from '../repositories/repository.doctor.js';

async function Listar() {
    const doctors = await repoDoctor.Listar();
    return doctors;
}

export default { Listar };