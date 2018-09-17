//declaramos la funcion

function saludo(){
	
		//tarea de la funcion
		console.log("hola");

}

saludo();

//FUNCIONES CON PARAMETROS

//Declaramos la funcion
function operacion(digito1, digito2){
	var resultado = digito1 + digito2;
	console.log("resultado: ", resultado);
}

operacion(5, 7);
operacion(10, 5);

//FUNCIONES CON RETORNO SIN PARAMETROS
function retorno1(){
	var numero = 5;
	return numero;
}
console.log(retorno1());

//FUNCIONES CON RETORNO CON PARAMETRO 
function retorno2(numero){
	return numero;
}
console.log(retorno2(60));