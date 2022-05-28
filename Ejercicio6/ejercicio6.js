document.getElementById('palindromo').addEventListener("click",esPalindromo);
function esPalindromo() {
    let cadena = document.getElementById('caracteres').value;
    let numchar = cadena.length;
    // eliminamos los espacios en blanco y mayusculas /minusculas
    cadena = cadena.toLowerCase();
	var car;
	var cadena_espac = "";
	var cadena_reves = "";

    for (i = 0; i < numchar; i++) {
		car = cadena.charAt(i);
                //Si el caracter es un espacio
		if (car != " ") {
			cadena_espac += car;
			cadena_reves = car + cadena_reves;
		}
	}
    if (cadena_espac == cadena_reves) {
            document.getElementById("resultadoPalindromo").innerHTML = "<p class=\"fs-3 tipoFuente\">La palabra introducida <b class=\"tipofuente sombraAmarilla fs-1 fluorescente sombraAmarilla\"> SI </b> es Palindromo";
        
    }
    else {
    document.getElementById("resultadoPalindromo").innerHTML = ( "<p class=\"fs-3\">La palabra introducida <b class=\"tipofuente fs-1 fluorescente sombraAmarilla\"> No</b> es Palindromo</p>");
        
}
}