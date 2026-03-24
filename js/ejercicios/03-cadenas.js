let resultado = ""; //en esta la variable se  va a guardar un texto concatenado y comienza vacio
let continuar = true; //le asigna el valor verdadero (booleano).Mientras continuar sea true, el ciclo se repite.

while (continuar) {
  let texto = prompt("Ingresa una cadena de texto:");

  // Si el usuario presiona cancelar en prompt
  if (texto === null) { //cuando presiona el boton cancelar
    break;
  }

  // Concatenar con guión
  if (resultado === "") {
    resultado = texto;
  } else {
    resultado += "-" + texto;
  }

  // Confirmar si desea continuar
  continuar = confirm("¿Deseas ingresar otra cadena?");
}

// Mostrar resultado final
alert("Cadenas concatenadas: " + resultado);
