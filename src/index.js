const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json()); // Con esto nuestro modulo express podrá convertir cualquier objeto json

//Routes
app.use(require('./routes/users'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});