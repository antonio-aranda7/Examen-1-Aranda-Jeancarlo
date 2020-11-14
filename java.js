var x = 0;
var array = Array();



var fruits = ["shrek", "Un Mondo Feliz", "La vida inútil de Pito Pérez", "El club de la pelea"];
document.getElementById("demo").innerHTML = fruits;

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 //alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";

 var e = " ";   
    
 for (var y=0; y<array.length; y++)
 {
   e +=  array[y] + "<br/>";
 }
 document.getElementById("Result").innerHTML = e;

 
}




  function myFunction() {

   addvale=document.getElementById("peli").value;

    fruits.push(addvale);
    document.getElementById("demo").innerHTML = fruits;
  }
    
/*
function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e +=  array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}
*/