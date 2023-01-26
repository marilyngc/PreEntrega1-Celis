// Realizar un programa que le pida al usuario cadenas de texto
// hasta que ingrese “Salir”. Una vez que sale, mostrarle en un alert los textos ingresados
// separados por una coma (,).

// let texto = prompt("Ingrese texto");
// let ingresoTotales = texto;
// while (texto !== "SALIR") {
//   console.log("Usted a ingresado: " + texto);
//   texto = prompt("Ingrese otro texto. Cuando quiera salir escriba SALIR ");
// }

// alert("Usted ingresó:" + ingresoTotales);

// Realizar un programa donde se le pida al usuario ingresar un número positivo y luego mostrar en pantalla
//  el conteo hacia atrás hasta llegar a 0.
// NOTA: Tener en cuenta validar que es un número positivo el que ingresó.

// let numero = parseInt(prompt("Ingrese un número positivo"));

// if (numero > 0) {
//   for (let i = 0; i < numero; numero--) {
//     console.log(numero);
//   }
// } else {
//   alert(
//     "El numero que intenta ingresar es negativo, intenta con un numero positivo"
//   );
// }
/** MAL */
// Pedirle al usuario que ingrese un número, realizar un conteo hacia atrás hasta llegar a 0 pero sólo
//  mostrando los números que son pares.

// let numero = parseInt(prompt("Ingrese numero positivo"));

// for (let i = 0; i < numero; numero--) {
//   if (numero % 2 !== 0) {
//     continue;
//   }
//   console.log(numero);
//   numero = parseInt(prompt("Ingrese numero positivo"));
// }
/** MAL O MAS O MENOS */
// Realizar un programa en donde se le pida al usuario 2 números y
// realice su multiplicación mediante sumas sucesivas
// (Ej.: El usuario ingresa los números 2 y 3, por lo cual
//     la multiplicación sería: 2 + 2 + 2 O 3 + 3 y tendría que devolver 6).

// Realice un programa que dados dos números, muestre todos los números
//  que están en medio de ambos.
//   (Ej: Ingreso 2 y 6, me tiene que mostrar 3, 4 y 5).

// let numero1 = parseInt(prompt("Ingrese número"));
// let numero2 = parseInt(prompt("Ingrese número"));

// if (numero1 == numero2) {
//   alert("Los numeros son iguales");
// } else if (numero1 < numero2) {
//   for (let i = numero1; numero1 < numero2; numero1++) {
//     console.log(numero1 + 1);
//   }
// }

// Realice un programa en donde se le solicite un número al usuario y
//  le muestre en pantalla cuántos dígitos tiene. (Ej: Si ingreso 27,
//      tiene que mostrarme 2.
//      Si ingreso 115 me tiene que mostrar 3)

// let numero1 = parseInt(prompt("Ingrese número"));
// while (numero1.length) {
//   alert(numero1);
//   numero1 = false;
// }
