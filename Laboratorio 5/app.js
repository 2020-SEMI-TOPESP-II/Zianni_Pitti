const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const PORT = 3000;

const ESTUDIANTES = [
    {
        nombre: "Rodolfo Marciscano",
        edad: 24,
    },
    {
        nombre: "Gloria Riquelme",
        edad: 23,
    },
    {
        nombre: "Seth Delgado",
        edad: 22
    }
];

app.use(bodyParser.json());

app.get('/api/estudiantes/', (req, res) => {
    res.json({
        estudiantes:ESTUDIANTES,
        cantidad: ESTUDIANTES.length
    });
});

app.post('/api/estudiantes/', (req, res) => {
    console.log('Body: ', req.body);
    res.json({
        nombre: "RoZi",
    });
});

app.get('/api/estudiantes/:id', (req, res) => {
    res.json(ESTUDIANTES[req.params.id]); 
    });

app.put('/api/estudiantes/:id',(req,res) => {
    const{nombre,edad}=req.body;
    ESTUDIANTES[req.params.id]={nombre,edad};
    return res.send(`Ha sido modificada`);
});

app.delete('/api/estudiantes/:id',(req,res) => {
    ESTUDIANTES[req.params.id]={nombre:"",edad:""}
    return res.send(`Ha sido Eliminado ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Ejecutando en el puerto ${PORT}`);
});