import express, {Application, Request, Response} from 'express';
import Database, { prueba } from './modules/database';
import { conversacionesRouter } from './routers/conversaciones.router';
import { usuariosRouter } from './routers/usuarios.router';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/usuarios', usuariosRouter);
app.use('/conversaciones', conversacionesRouter);

const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Backend de whatsapp  en Typescript');
});

app.listen(port, () => {
  new Database();
  console.log(`Servidor levantado en el puerto ${port}`);
});


