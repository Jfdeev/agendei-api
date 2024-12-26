//controla fluxo de entrada e saida de dados da rota doctor


import serviceDoctor from '../service/service.doctor.js';

async function Listar(req, res) {

    const name = req.query.name;
    const doctors = await serviceDoctor.Listar(name);
    res.status(200).json(doctors);
}

async function Inserir(req, res) {

    const { name, specialty, icon} = req.body;

    const doctor = await serviceDoctor.Inserir(name, specialty, icon);
    res.status(201).json(doctor);
}

async function Editar(req, res) {

    const { id_doctor } = req.params;
    const { name, specialty, icon} = req.body;

    const doctor = await serviceDoctor.Editar(id_doctor, name, specialty, icon);
    res.status(200).json(doctor);
}

async function Deletar(req, res) {
    
    const { id_doctor } = req.params;

    const doctor = await serviceDoctor.Deletar(id_doctor);
    res.status(200).json(doctor);
}

export default { Listar, Inserir, Editar, Deletar };