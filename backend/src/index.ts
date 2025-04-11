import express, { Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import breweryRoutes from './routes/breweries';
import verifyToken from './middleware/auth';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/breweries', breweryRoutes);

app.get('/profile', verifyToken, (req: Request, res: Response) => {
    res.json({
        message: 'Ruta protegida accedida con éxito 🎉',
        user: req.user,
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
