for (let i = 1; i <= 500; i++) {
  //Iniciamos el bucle del 1 al 500
  let mensaje = i;
  if (i % 4 === 0) {
    mensaje += " (Múltiplo de 4)";
  }
  if (i % 9 === 0) {
    mensaje += " (Múltiplo de 9)";
  }
  document.writeln(mensaje + "<br>");

  //CADA 5 LÍNEAS Dibujamos la línea horizontal
  // Usamos módulo 5 para saber si estamos en una posición múltiplo de 5
  if (i % 5 === 0) {
    document.writeln("<hr>"); // <hr> es la etiqueta HTML para línea horizontal
  }
}
