/*      agregando el dato nombre al 1° parafo*/
var nombre = document.getElementById("nombre");
var contenidoNombre = document.createTextNode(" Jeancarlo Antonio Aranda Cen");
nombre.appendChild(contenidoNombre);
/*      agregando el dato numero de control al 2° parafo*/
var numero = document.getElementById("numero");
var contenidoNumero = document.createTextNode(" 17390318");
numero.appendChild(contenidoNumero);

/*      agregando personajes estaticos mediante Dom*/
var formularioPersonajes = document.getElementById("personajes");
var elementoPersona = document.getElementById("personaje");

var parrafopersonaje1 = document.createElement("p");
var parrafopersonaje2 = document.createElement("p");
var contenidoPersonaje1 = document.createTextNode("- Winnie the Pooh");
var contenidoPersonaje2 = document.createTextNode("- Ben 10");

parrafopersonaje1.appendChild(contenidoPersonaje1);
parrafopersonaje2.appendChild(contenidoPersonaje2);
formularioPersonajes.appendChild(parrafopersonaje1);
formularioPersonajes.appendChild(parrafopersonaje2);

/*      agregando mis peliculas favoritas usando DOM*/
var misPeliculas = ['El señor de los anillos', 'Intelestelar'];
for ( n=0; n<2; n++){
    document.getElementById("misPeliculas").innerHTML+="<li>"+misPeliculas[n]+"</li>";
}

/*      función para agregar personajes deseados mediante un boton*/
var x = 0;
var array = Array();
var valido = new RegExp(/^([A-Za-z0-9-\s-])+$/); 
function agregarPersonaje() {
    var personaje = document.getElementById("inputPersonaje").value;
    
    if (personaje === '' || personaje === 0 || personaje === null){               
        document.getElementById("errorPersonaje").innerHTML =" No ha ingresado ningun personaje" ;              
    }
    else{
        if (!valido.test(personaje)){
            document.getElementById("errorPersonaje").innerHTML = "El dato: " + document.getElementById("inputPersonaje").value + " es erroneo";
        }
        else{
            array[x] = document.getElementById("inputPersonaje").value;
            x++;
            var e = "";
            for (var i = 0; i <array.length; i++) {
            e +="- " + array[i] + "<br/>";
            }
            document.getElementById("pPersonaje").innerHTML = e;
            document.getElementById("errorPersonaje").innerHTML = "";
        }
    }
        contador++;
}

/*      función para agregar peliculas al arreglo de las "li"*/       
function agregarPelicula() {
    var lista = document.createElement("li");
    var pelicula = document.getElementById("inputPelicula").value;
    var textoCelda = document.createTextNode(pelicula);
    if (pelicula === '' || pelicula == 0 || pelicula == null ){
        document.getElementById("errorPelicula").innerHTML =" No ha ingresado ninguna Pelicula" ;
    }
    else {
        if (!valido.test(pelicula)){
        document.getElementById("errorPelicula").innerHTML = "El dato: " + document.getElementById("inputPelicula").value + " es erroneo";
        }
        else{
        lista.appendChild(textoCelda)
        document.getElementById("olPeliculas").appendChild(lista);
        document.getElementById("errorPelicula").innerHTML = "";
        }
    }
}

/*      Metodo d epoder selecionar las lineas del li que forman parte del arreglo para posteriormente eliminarlas*/
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('select');
    }
}, false);
/*      Metodo para eliminar peliculas mediante la selecion de estos*/
function eliminar(){
    var seleccionados = document.getElementsByClassName("select");    
    for (var i = seleccionados.length-1; i >= 0; i--) {
        seleccionados[i].parentElement.removeChild(seleccionados[i]);
        document.getElementById("errorPelicula").innerHTML ="" ;
    }

}

/*      función para quitar peliculas del mismo nombre que escribas y activndo el boton*/
function borrarPelicula(){
    var pelicula = document.getElementById("inputPelicula").value;
    var peliculasArray = document.getElementsByTagName("li");
    if (pelicula === '' || pelicula == 0){
        document.getElementById("errorPelicula").innerHTML =" No ha ingresado ninguna Pelicula" ;
    }else {
        for (var i = 0; i < peliculasArray.length; i++) {
            if (peliculasArray[i].textContent === pelicula) {
                document.getElementById("olPeliculas").removeChild(peliculasArray[i])
                document.getElementById("errorPelicula").innerHTML ="" ;
            }
        }
    }
}  