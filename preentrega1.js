alert(
  "Vas a tener que ingresar el numero de animales que hay en tu veterinaria" +
    " " +
    " Vamos a calcular el total de gramos de comida que tiene que comer tus animales"
);
let i = 1;
let contadorG = 0;
let contadorM = 0;
let contadorP = 0;
let peso;
let gramos;
let acumular = 0;
let promedioGramos;

let animalesExistentes = parseInt(
  prompt("Ingrese la cantidad de animales existentes ")
);

do {
  let tamano = prompt(
    "Ingrese tamaño del perro (Grande o Muy grande) número: " + i
  );

  do {
    gramos = parseInt(
      prompt("Ingrese los gramos que come el perro número: " + i)
    );
  } while (gramos < 50);

  do {
    peso = parseInt(prompt("Ingrese el peso del animal número: " + i));
  } while (peso < 1);

  // Calculos y acciones

  acumular = acumular + gramos;

  if (peso > 25) {
    contadorP++;
  }

  if (tamano == "Grande" || tamano == "grande" || tamano == "GRANDE") {
    contadorG++;
  } else if (
    tamano == "Muy Grande" ||
    tamano == "muy grande" ||
    tamano == "MUY GRANDE"
  ) {
    contadorM++;
  }

  i++;
} while (i <= animalesExistentes);

promedioGramos = acumular / i;

alert("Existen " + contadorG + " animales grandes");
alert("Existen " + contadorM + " animales muy grandes");
alert("Existen " + contadorP + " animal con peso de mas de 25 kilos");
alert("El promedio de gramos que come los perros es : " + promedioGramos);

/** if (tamano == "Miniatura" && peso < 4) {
} else if (tamano == "Pequeña" && 5 <= peso <= 4) {
} else if (tamano == "Mediana" && 16 <= peso <= 29) {
} else if (tamano == "Grande" && 30 <= peso <= 50) {
} else if (tamano == "Muy Grande" || peso >= 51) {
} */
