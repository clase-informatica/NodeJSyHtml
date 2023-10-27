
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
   });

app.get('/datoI', (req, res) => {
    res.json([
        { "id": 1, "nombre": "opcion 1" },
        { "id": 2, "nombre": "opcion 2" },
        { "id": 3, "nombre": "opcion 3" }
    ]);
});

app.post('/data', (req, res) => {
    console.log('Dato recibido:', req.body.dato);
    res.json({ status: 'OK' });
});

app.listen(3000, () => console.log("Servidor iniciado en el puerto 3000"));
