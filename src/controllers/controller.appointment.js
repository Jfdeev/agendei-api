import serviceApoint from '../service/service.appointment.js';

async function ListarByUser(req, res) {
    const id_user  = req.id_user;

    const appointments = await serviceApoint.Listar(id_user)

    res.json(appointments);
}

async function Inserir(req, res) {
    const id_user = req.id_user;
    const { id_service, id_doctor, booking_date, booking_hour } = req.body;

    const appointment = await serviceApoint.Inserir(id_user, id_service, id_doctor, booking_date, booking_hour);

    res.status(201).json(appointment);
}

async function Deletar(req, res) {

    const id_user = req.id_user;
    const id_appointment = req.params.id_appointment;

    const appointment = await serviceApoint.Deletar(id_user, id_appointment);

    res.status(200).json(appointment);
}


export default { ListarByUser, Inserir, Deletar };