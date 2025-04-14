// src/routes/breweries.ts
import { Router, Request, Response } from "express";
import axios from "axios";

const router = Router();

router.get("/all", async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.openbrewerydb.org/v1/breweries?per_page=4"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener cervecerías:", error);
    res.status(500).json({ error: "No se pudieron obtener las cervecerías" });
  }
});

router.get("/state", async (_req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get(
      `https://api.openbrewerydb.org/v1/breweries?by_state=california&per_page=4`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error en la búsqueda de cervecerías:", error);
    res.status(500).json({ error: "Error al buscar cervecerías" });
  }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://api.openbrewerydb.org/v1/breweries/${id}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error en la búsqueda de cervecerías:", error);
    res.status(500).json({ error: "Error al buscar cervecerías" });
  }
});

export default router;
