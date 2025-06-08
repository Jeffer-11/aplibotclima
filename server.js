const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Redirigir todas las rutas al index.html (para SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor estático corriendo en el puerto ${PORT}`);
}); 