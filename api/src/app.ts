import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registerUsers, singIn } from "./controllers/UserController";
import { createQuestionnaires, getMetrics, getQuestionnaires } from "./controllers/QuestionnairesController";


const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS");
})

//Usuarios
app.post("/register-user", registerUsers)
app.post("/users/login", singIn)
app.post("/create-questionnaires", createQuestionnaires )
app.get("/questionnaires/get-all", getQuestionnaires)
app.get("/data/get", getMetrics)
export default app;