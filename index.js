// Import del modulo de express
// Se guarda en una constante llamada express

//const express = require('express');

//Instaciar el modulo en una app
// El cual sera llamado en futuros endpoint
//const app = express();

//SOLICITUDES:

//configuracion de la primera respuesta a una solicitud (INDEX)
/*app.get('/', (req, res) => {
    res.send('Hola mundo :3');
});

//LOGIN
app.get('/login', (req, res) => {
    res.send('Login');
    
}); 
//.................................................................
//AVIONES
app.get('/aviones', (req, res) => {
    res.send('Listar Aviones');
}   );

app.put('/updateAviones', (req, res) => { 
    res.send('Actualizar Aviones');
}   );

//.................................................................
// Operaciones CRUD para la entidad "Aviones"
app.post('/aviones', (req, res) => {
    res.send('Crear un avión');
});

app.delete('/aviones/:id', (req, res) => {
    const avionId = req.params.id;
    res.send(`Eliminar avión con ID ${avionId}`);
});

//.................................................................
//AUTOS
app.get('/autos', (req, res) => {
    res.send('Listar Autos');
}   );  
//.................................................................
// Operaciones CRUD para la entidad "Autos"
app.post('/autos', (req, res) => {
    res.send('Crear un auto');
});

app.put('/autos/:id', (req, res) => {
    const autoId = req.params.id;
    res.send(`Actualizar auto con ID ${autoId}`);
});

app.delete('/autos/:id', (req, res) => {
    const autoId = req.params.id;
    res.send(`Eliminar auto con ID ${autoId}`);
});

//.................................................................
//MOTOS
app.get('/motos', (req, res) => {
    res.send('Listar Motos');
}   );
//.................................................................
// Operaciones CRUD para la entidad "Motos"
app.post('/motos', (req, res) => {
    res.send('Crear una moto');
});


app.put('/motos/:id', (req, res) => {
    const motoId = req.params.id;
    res.send(`Actualizar moto con ID ${motoId}`);
});

app.delete('/motos/:id', (req, res) => {
    const motoId = req.params.id;
    res.send(`Eliminar moto con ID ${motoId}`);
});
//.................................................................

//TRENES
app.get('/trenes', (req, res) => {
    res.send('Listar Trenes');
}   );
//.................................................................
// Operaciones CRUD para la entidad "Trenes"
app.post('/trenes', (req, res) => {
    res.send('Crear un tren');
});

app.put('/trenes/:id', (req, res) => {
    const trenId = req.params.id;
    res.send(`Actualizar tren con ID ${trenId}`);
});

app.delete('/trenes/:id', (req, res) => {
    const trenId = req.params.id;
    res.send(`Eliminar tren con ID ${trenId}`);
});








//PUERTO:

//Configuracion del puerto  por el cual se escuchara la solicitud
app.listen(3000, () => { 
    console.log('Servidor en el puerto 3000');
});

*/

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
   // res.send('Funcionando...');
    res.render('index');
});

app.listen(3000, () => {
    console.log('Servidor en puerto 3000');
});