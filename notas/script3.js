/* let edad = 18; */ //let es una variable que puede ser reasignada
/* const edad1 = 18; */ //const es una variable que -NO- puede ser reasignada

/* edad = 20; */ // puede ser reasignado el valor de "edad" ya que fue creado con la variable "let" ahora edad es igual a 20

//para ver el valor en la consola se usa "console.log (variable)"

//ejemplo 1

/* let ingreseSuNombre = prompt("ingrese su nombre señor");
let salida = ingreseSuNombre + " " + "ingresado";
console.log(salida);
alert(salida); */

//ejemplo 2

/* let ingresarNombre = prompt("¿cual es tu nombre maestro?");
let salida = "su nombre es  " + ingresarNombre;
console.log(salida);
alert(salida);
let salida1 = "nombre correctamente ingresado";
alert(salida1); */

//operadores logicos
// ==(le importa solo que el dato sea igual)
// ===(tiene que ser igual el dato y el tipo de dato, es decir no es lo mismo un string que un number o un buleano),
// >, <, <=, >=, !, !=, !==, &&(and),

/* --------------------------------------------------------------------------- */

/* ------ IF ------ */

/* let numero = 3;

 if (numero == 3) {
 console.log("el numero si es 3");
} else {
console.log("el numero definitivamente no es 3");
} */

/* ------------------------------------------------------------------------------- */

/* ------ FOR ------ */

/* let numeroIngresado = parseInt(prompt("ingresar un numero "));
 for (let i = 1; i <= 10; i++) {
let resultado = numeroIngresado * i;
alert(numeroIngresado + " X " + i + " = " + resultado);
} */

/* ------------------------------------------------------------------------------- */

/* ------ WHILE ------ */

/* let entrada = prompt("ingresar algun dato: ")
while (entrada === "ESC") {
  alert("El usuario ingreso: " + entrada)
  entrada = prompt("ingrese otro dato: ")
} */

/* ------------------------------------------------------------------------------- */

/* ------ DO WHILE ------ */

/* let repetir = false;
 do{
 console.log("¡Solo una vez!");
 }while(repetir)

 let numero = 0;
 do{
   numero = prompt("Ingresar Número");       //Repetimos con do...while mientras el usuario ingresa un n°

   console.log(numero);

 }while(parseInt(numero)); */ //Si el parseo no resulta un número se interrumpe el bucle.

/* ------------------------------------------------------------------------------- */

/* ------ SWITCH ------ */

/* let entrada = prompt("Ingresar un nombre");
 //Repetimos hasta que se ingresa "ESC"
 while(entrada != "ESC" ){
    switch (entrada) {
        case "ANA":
             alert("HOLA ANA");
             break;
         case "JUAN":
             alert("HOLA JUAN");
             break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
 } */
