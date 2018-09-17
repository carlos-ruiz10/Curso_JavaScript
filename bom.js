window.onload= function(){
    var imagen =document.getElementById("imagen");
    var browser = navigator.userAgent;
    var f = browser.search("Firefox");
    var c = browser.search("Chrome");
    var s = browser.search("Safari");

    console.log("Expresion: ", f);
    console.log("Expresion: ", c);
    console.log("Expresion: ", s);
    console.log(f > 1);
    console.log(c > 1);
    console.log(s > 1);
    if (f > 1) {
        document.getElementById("navegador").innerHTML = "Bienvenido usuario de Firefox";
        imagen.src = "img/Firefox.png";
        imagen.style.width = "100px";
        imagen.style.height = "100px";
    }
    if (c > 1) {
        document.getElementById("navegador").innerHTML = "Bienvenido usuario de Chrome";
        imagen.src = "img/chrome.png";
        imagen.style.width = "100px";
        imagen.style.height = "100px";
    }
    if (s > 1 && c < 1) {
        document.getElementById("navegador").innerHTML = "Bienvenido usuario de Safari";
        imagen.src = "img/Safari.png";
        imagen.style.width = "100px";
        imagen.style.height = "100px";
    }
    console.log("imagen: ", imagen);
    console.log("navegador: ", browser);

}
/*===============================================
the browser object model (BOM) allows JavaScript to "talk to" the browser.
==============================================*/

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("prueba");
x.innerHTML = "Ancho de la ventana interior del navegador: " + w + ", altura: " + h + ".";

/*===============================================
Window Screen Width
La propiedad screen.width devuelve el ancho de la pantalla del visitante en pixeles.
==============================================*/



document.getElementById("prueba2").innerHTML = "El ancho de la pantalla es: " + screen.width;

/*===============================================
Window Screen Height
La propiedad screen.Height devuelve el ancho de la pantalla del visitante en pixeles.
==============================================*/

document.getElementById("prueba3").innerHTML = "El alto de la pantalla es: " + screen.height;

/*===============================================
Window Location Href

==============================================*/
document.getElementById("prueba4").innerHTML = "La url de la página es :<br>" + window.location.href;

/*===============================================
Window History Back
==============================================*/
function goBack() {
	
    window.history.back()
}

/*===============================================
Window History Forward
==============================================*/
function goForward() {
    window.history.forward()
}

/*===============================================
JavaScript Window Navigator
==============================================*/
document.getElementById("prueba5").innerHTML = "cookiesEnabled is: " + navigator.cookieEnabled;

/*===============================================
Browser Application Name
==============================================*/
document.getElementById("prueba6").innerHTML = "El nombre de la app es: " + navigator.appName;
/*===============================================
Browser Application Code Name
==============================================*/
document.getElementById("prueba7").innerHTML = "el nombre clave de la aplicacion es: " + navigator.appCodeName;
/*===============================================
The Browser Engine
==============================================*/
document.getElementById("prueba8").innerHTML = "el producto es " + navigator.product;
/*===============================================
The Browser Version
==============================================*/
document.getElementById("prueba9").innerHTML = navigator.appVersion;
/*===============================================
The Browser Agent
==============================================*/

/*===============================================
The Browser Platform
==============================================*/
document.getElementById("prueba11").innerHTML = "cual es la plataforma utilizada: " + navigator.platform;
/*===============================================
The Browser Lenguaje
==============================================*/
document.getElementById("prueba12").innerHTML = "cual es el lenguaje que utiliza: " + navigator.language;
/*===============================================
Is The Browser Online?
==============================================*/
document.getElementById("prueba13").innerHTML = "el navegador esta en linea: " + navigator.onLine;
/*===============================================
Is Java Enabled?
==============================================*/
document.getElementById("prueba14").innerHTML = "el navegador esta habilitado: " + navigator.javaEnabled();

/*===============================================

==============================================*/
function myFunction() {
    alert("I am an alert box!");
}
/*===============================================
Confirm Box
==============================================*/
function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("prueba15").innerHTML = txt;
}
/*===============================================
Prompt
==============================================*/
function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Neftali Cabrera");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hola" + person + "! Como estas el dia de hoy?";
    }
    document.getElementById("prueba16").innerHTML = txt;
}

/*===============================================
JavaScript Timing Events
==============================================*/
function myFunction() {
    alert('Hola');
}
/*===============================================
JavaScript Timing Events
==============================================*/
function myFunction() {
    alert("Hola");
}
/*===============================================
Muestra la hora actual
==============================================*/
var myVar = setInterval(myTimer ,1000);
function myTimer() {
    var d = new Date();
    document.getElementById("prueba18").innerHTML = d.toLocaleTimeString();
}