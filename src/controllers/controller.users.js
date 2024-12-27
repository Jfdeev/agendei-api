//controla fluxo de entrada e saida de dados da rota doctor

import serviceUser from '../service/service.users.js';

async function Inserir(req, res) {

    const { name, email, password} = req.body;

    const user = await serviceUser.Inserir(name, email, password);
    res.status(201).json(user);
}

async function Login(req, res) {
    const { email, password } = req.body;

    const user = await serviceUser.Login(email, password);

    res.status(200).json(user);
}

async function Profile(req, res) {
    const  id_user  = req.id_user;

    const user = await serviceUser.Profile(id_user);

    res.status(200).json(user);
}


export default {Inserir, Login, Profile};