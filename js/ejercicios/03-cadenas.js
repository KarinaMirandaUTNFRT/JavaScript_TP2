let resultado = "";
let continuar = true;

while (continuar) {
  let texto = prompt("Ingresa una cadena de texto:");

  // Si el usuario presiona cancelar en prompt
  if (texto === null) {
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
