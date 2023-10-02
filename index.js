// Import del modulo de express
// Se guarda en una constante llamada express

const express = require('express');

//Instaciar el modulo en una app
// El cual sera llamado en futuros endpoint
const app = express();

//SOLICITUDES:

//configuracion de la primera respuesta a una solicitud (INDEX)
app.get('/', (req, res) => {
    res.send('Hola mundo :3');
});

//LOGIN
app.get('/login', (req, res) => {
    res.send('Login');
    
}); 

//AVIONES
app.get('/aviones', (req, res) => {
    res.send('Listar Aviones');
}   );

app.put('/updateAviones', (req, res) => { 
    res.send('Actualizar Aviones');
}   );

//AUTOS
app.get('/autos', (req, res) => {
    res.send('Listar Autos');
}   );  

//MOTOS
app.get('/motos', (req, res) => {
    res.send('Listar Motos');
}   );

//TRENES
app.get('/trenes', (req, res) => {
    res.send('Listar Trenes');
}   );



//PUERTO:

//Configuracion del puerto  por el cual se escuchara la solicitud
app.listen(3000, () => { 
    console.log('Servidor en el puerto 3000');
});

