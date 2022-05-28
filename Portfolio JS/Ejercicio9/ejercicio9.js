/*

JS del Ejercicio 9, Array de los meses

*/

function buscarNombre(){

  const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  let mes = document.getElementById('mes').value;

  let numeroMes = mes - 1;
  let respuesta = "";

  if (numeroMes == -1)
    respuesta = "No has elegido número"
  else
    respuesta = MESES[numeroMes];

  document.getElementById('nombreMes').innerHTML = "<p class=\"text-light fs-3 tipoFuente text-center sombraNegra\">El número corresponde con el mes de <b class=\"fluorescente fs-1\">"+respuesta+"</b></p>";

}