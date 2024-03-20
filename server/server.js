const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware pentru a servi fișierele statice din directorul 'client/build'
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Ruta pentru pagina principală
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Ruta pentru profil
app.get('/profile', (req, res) => {
    // În loc să trimitem fișierele .jsx, puteți trimite pagina HTML
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// În cazul în care ruta nu este găsită, returnăm un mesaj de eroare
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

// Pornim serverul
app.listen(PORT, () => {
    console.log(`Serverul rulează pe http://localhost:${PORT}`);
});
