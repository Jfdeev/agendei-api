// este arquivo é responsável por definir as rotas da aplicação

import { Router } from "express";
import controllerDoctors from "./controllers/controller.doctor.js";

const router = Router();

router.get("/doctors", controllerDoctors.Listar);
router.post("/doctors", controllerDoctors.Inserir);
router.put("/doctors/:id_doctor", controllerDoctors.Editar);
router.delete("/doctors/:id_doctor", controllerDoctors.Deletar);





//Users


//Reservas

//Services (serviços prestados)
export default router;