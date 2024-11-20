import express, { json } from 'express';
import { loadRoutes } from './routes/loadRoutes';

const app = express();

app.use(json());
loadRoutes(app);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
})