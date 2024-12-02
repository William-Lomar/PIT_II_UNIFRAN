import express, { json } from 'express';
import { loadRoutes } from './routes/loadRoutes';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

loadRoutes(app);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
})