const texto = prompt(" Para buscar la primeraa vocal debes Ingresar un texto:").toLowerCase();
if (texto !== null) {
    const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    let posicion = -1; // Usamos -1 para indicar que "no se encontró" todavía
    for (let i = 0; i < texto.length; i++) {
            if (vocales.includes(texto.charAt(i))) {  // 3. Si la letra actual está en nuestra lista de vocales...
            posicion = i+1;           // Guardamos la posición (el índice)
                  break;  // con 'break' para salimos del bucle, No nos interesa seguir buscando después de la primera
        }
    }
     if (posicion !== -1) {
        alert(`La primera vocal está en la posición ${posicion} ( y es la Letra: '${texto.charAt(posicion)}')`);
    } else {
        alert("No se encontraron vocales en el texto.");
    }
}
