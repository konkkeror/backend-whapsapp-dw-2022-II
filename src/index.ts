import express, {Application, Request, Response} from 'express';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Backend de whatsapp  en Typescript');
});

app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});


