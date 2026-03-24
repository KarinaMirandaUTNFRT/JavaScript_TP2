let numeroInicial = parseInt(prompt("Ingresá un número (no mayor a 50):"));
if (isNaN(numeroInicial) || numeroInicial > 50 || numeroInicial <= 0) { // Validamos que sea un número válido y menor a 50
    alert("Por favor, ingresá un número válido entre 1 y 50.");
} else {
    for (let i = numeroInicial; i >= 1; i--) { //BUCLE EXTERNO: Empieza en el número del usuario y BAJA (i--)
       for (let j = 0; j < i; j++) { //BUCLE INTERNO: Imprime el número 'i' tantas veces como su valor
            document.write(i);
        }
        document.write("<br>");
    }
}