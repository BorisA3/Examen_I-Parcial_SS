// importar express
const express = require("express");

// Importar handlebars como template engine
const exphbs = require("express-handlebars");

// Importar body parser que nos permite acceder al cuerpo de la peticion HTTPP
const bodyParser = require("body-parser");

// Importar la funcion de calculo
const { calcularInteresCompuesto } = require("./calcularInteresCompuesto");


// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Crear una ruta para /
// Informacion sobre los verbos HTTP
//https://developer.mozilla.org/es/docs/Web/HTTP/Methods
app.get("/", (req,res, next) => {
    res.render("formulario");
});

app.post("/InteresCompuesto", (req, res, next) => {
    // Asignacion por desctucturing
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { capitalInicial, tasaInteres, periodo} = req.body;
    console.log(req.body);

    const cuotas = calcularInteresCompuesto(capitalInicial, tasaInteres, periodo);

    res.render("resultado", { cuotas });
});

// Inicializar el servidor en un puerto en especifico
app.listen(5000, () => {
    console.log("Servidor ejecutandose en el puerto 5000");
});