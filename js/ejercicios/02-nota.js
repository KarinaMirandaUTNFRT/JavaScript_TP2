const pantalla = document.getElementById("pantalla");
const nota = parseFloat(prompt("Ingresa la nota"));
if (isNaN(nota)) {
  alert("Introduce un numero valido");
} else if (nota < 0 || nota > 10) {
  alert("Numero erroneo ( debe ser un valor entre 0 y 10");
} else {
  if (nota > 0 && nota <= 2) {
    alert("Muy deficiente");
  }
  else if (nota >  2 && nota <=4 ) {
    alert("deficiente");
  }
  else if (nota > 4  && nota <=6 ) {
    alert("Suficiente");
  }
  else if (nota > 6  && nota <=7 ) {
    alert("Bien");
  }
  else if (nota > 7  && nota <= 9) {
    alert("Notable");
  } else {
    alert("sobresaliente");
  }
}
