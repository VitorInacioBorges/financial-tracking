import { Router } from "express";
import controller from "../controllers/transaction.controllers.js";
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/transaction/:id", controller.create);

router.get("/transactions/:id", controller.list);

router.get("/transactions/type/:id", controller.filter);

router.put("/transaction/:id", controller.update);

router.delete("transaction/:id", controller.delete);
