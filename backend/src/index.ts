import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import breweryRoutes from "./routes/breweries";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/breweries", breweryRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
