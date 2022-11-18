/* Desde el archivo /public/js/moviesList.js, capturar los siguientes elementos: <body>
y <h1>, ubicados en el archivo /views//moviesList.ejs */

let body = document.body
let h1 = document.querySelector("h1")


/* Haciendo uso del prompt, preguntar al usuario: “¿Desea modo oscuro?”. Si la
respuesta es afirmativa, agregar a la etiqueta <body> un color de fondo: #7f7f7f, y
la clase: fondoMoviesList */

let change = confirm("¿Desea modo oscuro?") //puse confirm xq me gusto mas xd
if (change) {
    body.style.backgroundColor = "#7f7f7f"
    body.classList.add("fondoMoviesList")
}


/* Agregar a la etiqueta <h1> el mensaje: “LISTADO DE PELÍCULAS” */
h1.innerText += "LISTADO DE PELÍCULAS"


/* Agregar a la etiqueta <h1> los siguientes estilos:
○ Color de la fuente: white.
○ Color de fondo: teal.
○ Relleno: 20px. */

h1.style.color = "white"
h1.style.backgroundColor = "teal"
h1.style.padding = "20px"

console.log(h1)