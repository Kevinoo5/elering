import nordpool from './controllers/nordpool';
import parcelmachines from "./controllers/parcelmachines";
// @ts-ignore
import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', nordpool);
app.use('/', parcelmachines);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
