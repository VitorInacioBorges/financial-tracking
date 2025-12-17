import { Router } from "express";
import controller from "../controllers/transaction.controller.js";
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/transaction/:id", authMiddleware(), controller.create);

router.get("/transactions/:id", authMiddleware(), controller.list);

router.get("/transactions/type/:id", authMiddleware(), controller.filter);

router.put("/transaction/:id", authMiddleware(), controller.update);

router.delete("/transaction/:id", authMiddleware(), controller.delete);;
