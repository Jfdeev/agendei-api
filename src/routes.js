// este arquivo é responsável por definir as rotas da aplicação

import { Router } from "express";
import controllerDoctors from "./controllers/controller.doctor.js";
import controllerUsers from "./controllers/controller.users.js";
import controllerAppoint from './controllers/controller.appointment.js';
import jwt from "./token.js";

const router = Router();
//doctors
router.get("/doctors", jwt.VerifyToken, controllerDoctors.Listar);
router.post("/doctors", jwt.VerifyToken,controllerDoctors.Inserir);
router.put("/doctors/:id_doctor", jwt.VerifyToken,controllerDoctors.Editar);
router.delete("/doctors/:id_doctor", jwt.VerifyToken,controllerDoctors.Deletar);
router.get("/doctors/:id_doctor/services", jwt.VerifyToken,controllerDoctors.ListarServicos);

//Users
router.post("/users/register", controllerUsers.Inserir);
router.post("/users/login", controllerUsers.Login);
router.get("/users/profile", jwt.VerifyToken,controllerUsers.Profile);


//Reservas
router.get("/appointments", jwt.VerifyToken, controllerAppoint.ListarByUser);
router.post("/appointments", jwt.VerifyToken, controllerAppoint.Inserir);

export default router;