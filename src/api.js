import express from "express";
import userRoutes from "./routes/user.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", transactionRoutes);
app.use(errorMiddleware);

export default app;
