//controla fluxo de entrada e saida de dados da rota doctor


import serviceDoctor from '../service/service.doctor.js';

async function Listar(req, res) {

    const doctors = await serviceDoctor.Listar();
    res.status(200).json(doctors);
}

export default { Listar };