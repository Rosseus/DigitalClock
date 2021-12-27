function cargarReloj(){
// Parte de recopilacion de hora
let fechaHora = new Date();
let hora = fechaHora.getHours();
let minuto = fechaHora.getMinutes();
let segundo = fechaHora.getSeconds();

// Sumar cero.
if (minuto < 10 ) {
	minuto = "0" + minuto;
}

if (segundo < 10){
	segundo = "0" + segundo;
}

//funcionamiento de reloj
let tiempo = hora + ":" + minuto + ":" + segundo
let reloj = document.querySelector(".reloj")
reloj.innerText = tiempo 


//recarga pagina automático
setTimeout(cargarReloj,500)

}


cargarReloj();