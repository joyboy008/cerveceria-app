# 🍺 Cervecería App

Una aplicación fullstack sencilla hecha con **React + Node.js + TypeScript + SQLite**, que permite a los usuarios autenticarse y consultar cervecerías a través de la API pública [Open Brewery DB](https://www.openbrewerydb.org/).

---

## 🚀 Funcionalidades

- 🔐 Login y registro de usuarios con JWT
- 📄 Consumo de cervecerías desde una API pública
- ✅ Rutas protegidas con React Router + Context API
- 💾 Persistencia en SQLite
- 💡 Frontend optimizado para móviles

---

## 🧱 Tecnologías

### Frontend
- React
- TypeScript
- React Router
- Context API
- Axios

### Backend
- Node.js
- Express
- TypeScript
- SQLite3
- JWT + bcrypt

---

## ⚙️ Instalación

### 🔧 Backend

```bash
cd backend
npm install
npm run dev
Servidor corriendo en http://localhost:4000


cd frontend
npm install
npm run dev
App disponible en http://localhost:5173 (o el puerto de Vite)


--- 
🔑 Endpoints útiles

    POST /auth/register → Registro de usuario

    POST /auth/login → Login de usuario

    GET /breweries/all → Obtener todas cervecerías

    GET /breweries/state → Buscar cervecerías por localidad california

    GET /breweries/:id → Buscar cerveceria por ID

🛡️ Autenticación

    Se usa JWT para proteger rutas del backend.

    El frontend usa useContext + localStorage para manejar sesión.



👨‍💻 Autor

    JoyBoy008
