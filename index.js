const express = require('express');
const app = express();
const port = 3476;

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const itemRoutes = require('./routes/items');
app.use('/items', itemRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
