import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "clave_secreta_super_segura";

interface JwtPayload {
  id: number;
  username: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

const verifyToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Token no proporcionado" });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ error: "Token inválido o expirado" });
      return;
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default verifyToken;
