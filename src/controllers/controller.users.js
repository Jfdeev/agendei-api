//controla fluxo de entrada e saida de dados da rota doctor

import serviceUser from '../service/service.users.js';

async function Inserir(req, res) {

    const { name, email, password} = req.body;

    const user = await serviceUser.Inserir(name, email, password);
    res.status(201).json(user);
}





export default {Inserir};