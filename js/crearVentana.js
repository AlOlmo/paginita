'use strict'
//Declarar variables globales con las opciones de la ventana
var opciones="left=100,top=100,width=250,height=150", i= 0; 
var ventana=null;



window.onload=function(){
	/*
//Poner el botón a la escucha de eventos
	let ej1 = document.getElementById("idej1");
	let ej2 = document.getElementById("idej2");
    
//Desactivar la funcionalidad por defecto de un formulario para que no refresque los datos al pulsars enviar
	
	ej1.addEventListener('click', function() {crearNuevaVentana("idej1")});
	ej2.addEventListener('click', function() {crearNuevaVentana("idej2")});
    
    */
	
    
    

}
	



	
function crearNuevaVentana(id){
	console.log("Se ha invocado la función")
	switch (document.getElementById(id)){
		case idej1:
		  ventana = window.open('init.html');
		  break;
		case idej2:
		  ventana = window.open('rElementosVentana.html');
		  break;
		case idej3:
		  ventana = window.open('redondeo.html');
		  break;
		default:
		  //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
		  break;
	  }
		//ventana = window.open('init.html');
		
		
  }

  
 
function addElement(texto){
	
	var capa = ventana.document.getElementById("capa");
	var h1 = ventana.document.createElement("h1");
	
    // Accede al contenido del texto de un elemento
	h1.innerHTML = texto;
	capa.appendChild(h1);
}

// Añade un nodo al arbol de un documento

function anadir_parrafo(){
	var capa = document.getElementById("cuerpo");
	var parrafo = document.createElement('p');
	var texto = document.createTextNode ("parrafo añadido");
	parrafo.appendChild(texto);
	capa.appendChild(parrafo);

}


// Inserta un parrafo antes de uno que ya existe

function insertar_antes(){

	var capa = document.getElementById("cuerpo");
	var parrafo = document.createElement('p');
	
	parrafo.appendChild(document.createTextNode("parrafo anterior al primero"));
	var elementoReferencia = capa.getElementsByTagName('p')[0];
	capa.insertBefore(parrafo,elementoReferencia);

}

function mostrar()
{
	document.getElementById("parrafoAyuda").style.visibility='visible';
		
}

function ocultar()
{
	document.getElementById("parrafoAyuda").style.visibility='hidden';
		
}
