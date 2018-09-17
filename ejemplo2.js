console.log("Hola Mundo")

//Variables numericas
var numero = 5;
console.log("numero: ", numero);


//variables de texto
var palabra = "palabras";
console.log("palabras: ", palabra);

//variables boleanas
var boleana = true;
console.log("boleana: ", boleana);

//variables de tipo arreglo (Array)
var colores = ["rojo", "amarillo", "azul"];;
console.log("colores: ", colores);

//variables de tipo objeto (object: propiedad y el valor)
var jugo = {"ingrediente1":"fresa", "ingrediente2":"mandarina", "ingrediente3":"platano"};
console.log("jugo: ", jugo);

//Variables DOM ("modelo de objetos del documento")
/*El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante javascript*/
var caja =document.querySelector("#caja");
console.log("caja: ", caja);
caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "orange";

var cajita =document.querySelector("#cajita");
console.log("cajita: ", cajita);
cajita.style.width = "110px";
cajita.style.height = "100px";
cajita.style.background = "black";