let limite = parseInt(prompt("Ingresá un número para crear la pirámide (máximo 50):"));
if (isNaN(limite) || limite <= 0 || limite > 50) { //  Validamos la entrada
    alert("Por favor, ingresá un número válido entre 1 y 50.");
} else {
      for (let i = 1; i <= limite; i++) { // 3. BUCLE EXTERNO: Controla cuántas filas tendrá la pirámide
        let linea = "";                   //  variable para armar la fila
        for (let j = 1; j <= i; j++) {    //mprime la secuencia desde 1 hasta el valor de 'i'
            linea = linea + j;            // se agregan  números: 1, despues 2, luego 3...
        }
      document.writeln(linea + "<br>"); 
    }
}