const Hapi = require('hapi');
const routes = require('./routes');

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    app: {}
});

const iniciarServer = async() => {

    try {
        await server.register(routes); //Registrar las rutas de la app
        await server.start();
        console.log(`Se inicio el servidor. Abrir en el navegador ${server.info.uri}`);
    } catch (err) {
        console.log(`Se presento un error al iniciar el servidor.`);
    }
};

iniciarServer();