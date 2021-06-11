const app = require('./app');

require('./database');

// starting the server
app.listen(app.get("port"));
//para ver que el servidor está en funcionamiento
console.log(`server on port, ${app.get("port")}`);
