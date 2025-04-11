// src/routes/breweries.ts
import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();

// Obtener cervecerías
router.get('/', async (_req: Request, res: Response) => {
    try {
        const response = await axios.get('https://api.openbrewerydb.org/v1/breweries');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener cervecerías:', error);
        res.status(500).json({ error: 'No se pudieron obtener las cervecerías' });
    }
});

// Buscar cervecerías por nombre
router.get('/search', async (req: Request, res: Response): Promise<void> => {
    const query = req.query.query as string;

    if (!query) {
        res.status(400).json({ error: 'Falta parámetro de búsqueda' });
        return;
    }

    try {
        const response = await axios.get(
            `https://api.openbrewerydb.org/v1/breweries/search?query=${encodeURIComponent(query)}`
        );
        res.json(response.data); // sin return
    } catch (error) {
        console.error('Error en la búsqueda de cervecerías:', error);
        res.status(500).json({ error: 'Error al buscar cervecerías' });
    }
});


export default router;
