window.onload =  function(){
  document.getElementById("nombreF").innerHTML += "Eduardo Gonzalez Flores";
  document.getElementById("controlF").innerHTML += "17390753";

  var peliculas = ['The Godfather', 'The Godfather Part II', 'Taxi Driver','The Shinning', 'Apocalypse Now'];
  for ( n=0; n<5; n++){
      document.getElementById("listaPeliculas").innerHTML+="<li>"+peliculas[n]+"</li>";
    }
  
}

var capturar = function(){
  const lstPersonaje = document.getElementsByClassName("personaje"),
      arrayGuardar = [];
  for (var i = 0; i < lstPersonaje.length; i++){
    arrayGuardar[i] = lstPersonaje[i].value;
    console.log (lstPersonaje[i].value);
    document.getElementById("listaPersonajes").innerHTML+="<li>"+lstPersonaje[i].value+"</li>";
  }
}

var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('select');
  }
}, false);

function eliminar(){
    var seleccionados = document.getElementsByClassName("select");    
    for (var i = seleccionados.length-1; i >= 0; i--) {
        seleccionados[i].parentElement.removeChild(seleccionados[i]);
    }
   
}

/*var capturaPeliculas = function(){
  let lstPelicula = document.getElementsByClassName("titulo"),
      arrayCaptura = [];
  for (var i = 0; i < lstPelicula.length; i++){
    arrayCaptura[i] = lstPelicula[i].value;
    console.log (lstPelicula[i].value);
    document.getElementById("listaPeliculas").innerHTML+="<li>"+lstPelicula[i].value+"</li>";
  }
}*/

