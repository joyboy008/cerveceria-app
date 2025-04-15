# 🍺 Cervecería App

Una aplicación fullstack sencilla hecha con **React + Node.js + TypeScript + SQLite**, que permite a los usuarios autenticarse y consultar cervecerías a través de la API pública [Open Brewery DB](https://www.openbrewerydb.org/).

---

## 🚀 Funcionalidades

- 🔐 Login y registro de usuarios con JWT
- 📄 Consumo de cervecerías desde una API pública
- ✅ Rutas protegidas con React Router + Context API
- 💾 Persistencia en SQLite
- 💡 Frontend optimizado para móviles
- 🧪 Pruebas unitarias para endpoints y middleware
- ✅ Boton para agregar mas resultados de busquedas al final del carrousel
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
- Jest

---

## ⚙️ Instalación

### 🔧 Backend

```bash
cd backend
npm install
npm run dev
```

Servidor corriendo en http://localhost:4000

### ✨ Frontend

```bash
cd frontend
npm install
npm run dev
```

App disponible en http://localhost:5173

---

🧪 Pruebas

El backend incluye pruebas unitarias con Jest para los siguientes endpoints y middleware:
📌 Endpoints probados:

    POST /auth/register

    POST /auth/login/:id

    GET /breweries/all

    GET /breweries/state?state=california

    GET /breweries/:id

🔐 Middleware probado:

    Autenticación con verifyToken (manejo de tokens JWT)

▶️ Ejecutar pruebas:

```bash
cd backend
npm run test
```
Recuerda modificar esta funcion en /test/breweries/ con un username y password ya almacenados en la base de datos.
```
beforeAll(async () => {
  // ✅ Usa un usuario que ya exista en tu base de datos
  const res = await request(app).post("/auth/login").send({
    username: "user",
    password: "Abc123.!",
  });

  token = res.body.token;
});
```

---

🔑 Endpoints útiles

    POST /auth/register → Registro de usuario

    POST /auth/login → Login de usuario

    GET /breweries/all → Obtener todas cervecerías

    GET /breweries/state → Buscar cervecerías por localidad california

    GET /breweries/:id → Buscar cerveceria por ID

---

🛡️ Autenticación

    Se usa JWT para proteger rutas del backend.

    El frontend usa useContext + localStorage para manejar sesión.

👨‍💻 Autor

    JoyBoy008
