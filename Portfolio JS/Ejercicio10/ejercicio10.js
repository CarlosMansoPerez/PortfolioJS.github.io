/*

JS del Ejercicio 10, Traducción de los meses en inglés

*/

function traductor(){

  const MESES = { "Enero":"January",
                  "Febrero":"February", 
                  "Marzo":"March",
                  "Abril":"April",
                  "Mayo":"May",
                  "Junio":"June",
                  "Julio":"July",
                  "Agosto":"August",
                  "Septiembre":"September",
                  "Octubre":"October",
                  "Noviembre":"November",
                  "Diciembre":"December"};


  let mes = document.getElementById('mes').value;

  let numeroMes = mes - 1;
  let respuesta = (mes == "error")? "No has elegido mes" : MESES[mes];

  document.getElementById('nombreMes').innerHTML ="<p class=\"text-light fs-3 text-center\">En inglés sería <b class=\"fluorescente fs-1\">"+ respuesta+"</b></p>";

}