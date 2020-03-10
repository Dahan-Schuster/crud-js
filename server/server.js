const app = require('./config/express');

app.listen(9000, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});