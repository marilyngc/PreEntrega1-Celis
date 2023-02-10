// alert(
//   "Vas a tener que ingresar el numero de animales que hay en tu veterinaria" +
//     " " +
//     " Vamos a calcular el total de gramos de comida que tiene que comer tus animales"
// );
// let i = 1;
// let contadorG = 0;
// let contadorM = 0;
// let contadorP = 0;
// let peso;
// let gramos;
// let acumular = 0;
// let promedioGramos;

// let animalesExistentes = parseInt(
//   prompt("Ingrese la cantidad de animales existentes ")
// );

// do {
//   let tamano = prompt(
//     "Ingrese tamaño del perro (Grande o Muy grande) número: " + i
//   );

//   do {
//     gramos = parseInt(
//       prompt("Ingrese los gramos que come el perro número: " + i)
//     );
//   } while (gramos < 50);

//   do {
//     peso = parseInt(prompt("Ingrese el peso del animal número: " + i));
//   } while (peso < 1);

//   // Calculos y acciones

//   acumular = acumular + gramos;

//   if (peso > 25) {
//     contadorP++;
//   }

//   if (tamano == "Grande" || tamano == "grande" || tamano == "GRANDE") {
//     contadorG++;
//   } else if (
//     tamano == "Muy Grande" ||
//     tamano == "muy grande" ||
//     tamano == "MUY GRANDE"
//   ) {
//     contadorM++;
//   }

//   i++;
// } while (i <= animalesExistentes);

// promedioGramos = acumular / i;

// alert("Existen " + contadorG + " animales grandes");
// alert("Existen " + contadorM + " animales muy grandes");
// alert("Existen " + contadorP + " animal con peso de mas de 25 kilos");
// alert("El promedio de gramos que come los perros es : " + promedioGramos);

// /** if (tamano == "Miniatura" && peso < 4) {
// } else if (tamano == "Pequeña" && 5 <= peso <= 4) {
// } else if (tamano == "Mediana" && 16 <= peso <= 29) {
// } else if (tamano == "Grande" && 30 <= peso <= 50) {
// } else if (tamano == "Muy Grande" || peso >= 51) {
// } */

/** MEJORO EL CODIGO DE ARRIBA */
/** PRE ENTREGA 2 */

let i = 0;
let veterinarios = [
  { nombre: "Luisa", edad: 21, profesión: "Cirujana" },
  { nombre: "Juan", edad: 30, profesión: "Medico Clinico" },

  { nombre: "Lucas", edad: 19, profesión: "Practicante" },
  { nombre: "Veronca", edad: 25, profesión: "Cirujana" },
];
let nombreAnimal = prompt("Ingrese el nombre del animal ");
let veterinarioDelAnimal = prompt("Elija el veterinario " + veterinarios);
let comidaAnimal = prompt("Ingrese la cantidad en pesos que come el animal");
let nuevoAnimal;

function capturar() {
  class Animales {
    constructor(nombre, veterinario, comida) {
      this.nombre = nombre;
      this.veterinario = veterinario;
      this.comida = comida;
    }
  }

  let nombreCapturado = nombreAnimal;
  let veterinarioCapturado = veterinarioDelAnimal;
  let comidaCapturada = comidaAnimal;

  // OBJETO
  nuevoAnimal = new Animales(
    nombreCapturado,
    veterinarioCapturado,
    comidaCapturada
  );

  agregar();
}

let baseDatos = [];

function agregar() {
  baseDatos.push(nuevoAnimal);
  console.log(baseDatos);
}

capturar();
// const item = veterinarios.find((element) => {
//   return if (veterinarioDelAnimal == element) {
//        break;
//     }

// });
// console.log(item);

// function buscar(element) {
//   return element == veterinarioDelAnimal;
// }
// console.log(veterinarios.find(buscar));
// veterinarios.forEach((element) => {
//   veterinarioDelAnimal == element;
//   break;
//   // if (veterinarioDelAnimal == element) {
//   //   break;
//   // }
// });

// for (i = 0; i < nombresDeVeterinarios.length; i++) {
//   do {
//     veterinarioDelAnimal = prompt("Elija el veterinario disponible ");
//   } while (veterinarioDelAnimal != nombresDeVeterinarios.length);
//   console.log(nombresDeVeterinarios[i]);
// }
// for (const veterinarios of nombresDeVeterinarios) {
//   do {
//     veterinarioDelAnimal = prompt("Elija el veterinario disponible ");
//   } while (veterinarioDelAnimal != nombresDeVeterinarios);
//   console.log(veterinarios);
// }
//do {
// do {
//     veterinarioDelAnimal = prompt("Elija el veterinario disponible ");
//   } while (veterinarioDelAnimal != nombresDeVeterinarios);
//   i++;
// } while (i < nombreAnimal);
