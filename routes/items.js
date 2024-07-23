const express = require('express');
const fs = require('fs');
const router = express.Router();
const dataFile = './data/items.json';

// Leer datos del archivo JSON
const readData = () => {
  const data = fs.readFileSync(dataFile, 'utf8'); // Asegúrate de leer como UTF-8
  return JSON.parse(data);
};

// Escribir datos al archivo JSON
const writeData = (data) => {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

// Listar todos los items
router.get('/', (req, res) => {
  try {
    const items = readData();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer los datos.' });
  }
});

// Agregar un nuevo item
router.post('/', (req, res) => {
  try {
    const items = readData();
    const newItem = req.body;
    items.push(newItem);
    writeData(items);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar los datos.' });
  }
});

module.exports = router;
