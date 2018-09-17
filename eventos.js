var recuadro = document.querySelector("#recuadro");

//eventos desde el DOM
function cambiarColor(){
		recuadro.style.background = "purple";

}

//EVENTOS DESDE JAVASCRIPT
var boton = document.querySelector("#boton");
	boton.addEventListener("mouseover",moverCaja)
		
		function moverCaja(){
			recuadro.style.width = "1100px";
			recuadro.style.transition = "1s width ease";
		}

//eventos desde DOM
function cambiarPocicion(){

		recuadro.style.width = "200px";
		recuadro.style.background = "green";

}