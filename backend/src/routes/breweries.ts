// src/routes/breweries.ts
import { Router, Request, Response } from "express";
import axios from "axios";
import verifyToken from "../middleware/auth";

const router = Router();

router.get("/all", verifyToken, async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.openbrewerydb.org/v1/breweries"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las cervecerías" });
  }
});

router.get(
  "/state",
  verifyToken,
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await axios.get(
        `https://api.openbrewerydb.org/v1/breweries?by_state=california`
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Error al buscar cervecerías" });
    }
  }
);

router.get(
  "/:id",
  verifyToken,
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const response = await axios.get(
        `https://api.openbrewerydb.org/v1/breweries/${id}`
      );
      res.json(response.data);
    } catch (error) {
      res.status(404).json({ error: "Error al buscar 1 cervecería" });
    }
  }
);

export default router;
