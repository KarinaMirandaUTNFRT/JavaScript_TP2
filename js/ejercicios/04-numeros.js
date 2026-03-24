let suma = 0;
//va ingresando numeros hasta que hace click en cancelar
while (true) {
  let entrada = prompt("Ingrese un número (Cancelar para salir):");
    if (entrada === null) {
    break;
  }
  let numero = Number(entrada);
  // Validar si es un número
  if (isNaN(numero)) { //necesita un valor para validarlo
    alert("No es un número válido");
    continue;
  }
  suma += numero;
}
alert("La suma total es: " + suma);
