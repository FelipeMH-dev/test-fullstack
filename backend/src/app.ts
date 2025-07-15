import express from "express";
import cors from "cors";
import itemRoutes from "./api/routes/itemRoutes";
import { errorHandler } from "./middleware/ErrorHandler";
import { verifyHeaders } from "./middleware/VerifyHeaders";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/items", verifyHeaders, itemRoutes);
app.use(errorHandler);

export default app;
