const app = require('./app');
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
        console.log(`Servicio de usuarios ejecutándose en el puerto ${PORT}`);
    });
