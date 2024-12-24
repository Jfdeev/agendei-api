// este arquivo é responsável por definir as rotas da aplicação

import { Router } from "express";
import controllerDoctors from "./controllers/controller.doctor.js";

const router = Router();

router.get("/doctors", controllerDoctors.Listar);

export default router;