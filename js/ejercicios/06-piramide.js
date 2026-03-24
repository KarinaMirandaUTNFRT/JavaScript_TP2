const pantalla = document.getElementById("pantalla"); 
for (let i = 1; i <= 30; i++) {//Bucle externo: controla qué número vamos a imprimir (del 1 al 30)
 // Bucle interno: controla cuántas veces se repite el número 'i' tantas veces como i
    for (let j = 0; j < i; j++) {
        document.write(i); 
    }
    document.write("<br>"); // Salto de línea después de terminar cada fila
}