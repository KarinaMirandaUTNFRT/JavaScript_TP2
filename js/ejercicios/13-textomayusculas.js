const textoUsuario = prompt(
  "Ingresá el texto que quieras convertir en mayusculas:",
);
if (textoUsuario !== null) {
  //Validamos que el usuario no haya presionado "Cancelar" (null)
  const textoMayusculas = textoUsuario.toUpperCase(); // con toUpperCase() transformamos el texto
  console.log("Original: " + textoUsuario);
  console.log("Transformado: " + textoMayusculas);
  alert("Tu texto en mayúsculas es:\n" + textoMayusculas);
  document.writeln("<h3>Resultado: " + textoMayusculas + "</h3>");
} else {
  alert("No ingresaste ningún texto.");
}
