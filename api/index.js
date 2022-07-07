const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");
const port = 4242;
app.use(express.static(path.join(__dirname, 'public')))

routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;
