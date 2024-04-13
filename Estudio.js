
// Interaccion 
//Preguntamos el nombre y lo guardamos en una variable
  /*let mensaje = prompt("Cual es tu nombre", "")
  console.log(mensaje)
  */

//Devolvemos ese valor
  //alert(mensaje)

//Preguntamos si el valor es correcto
  //var mensaje2 = confirm(`¿Tu eres ${mensaje}?`)

// Conversor de tipo
 //Tipo string
  /*
   let valor = true;
   alert(typeof valor)

   valor = String(valor)
   alert(typeof valor)
  */
 //Tipo numbres 
  /*
   let valor = "123"
   console.log(typeof valor)
   console.log(valor)

   valor = Number(valor)
   console.log(typeof valor)
   console.log(valor)
 */
 // Tipo boolean 
  /*
   let dato = ""
   console.log(typeof dato)
   dato = Boolean(dato)
   alert(dato)
   console.log(typeof dato)
   1 = true 
   0 = false
   "Hola" = true 
   "" = false 
  */
 // Condicionales
   // Condicional ternario: ? 
  /*
   let edad = parseInt(prompt("Edad?"))
   console.log(`Tu edad es ${edad}`)
   
   let paso = (edad < 5)? console.log("No pasa"): 
   (edad >= 5 && edad < 12)? console.log("Posible"): 
   (edad >= 13 && edad < 18)? console.log("Estas cerca"):
   (edad >= 18)? console.log("Pasa"): alert("No hay entradas")
  */

   //Un ejemplo de algoritmo 
   /*
   function decoded(encodedTxt) {
    let alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
    let decodedTxt = "";
    encodedTxt.toLowerCase().split("").forEach(item => {
        if (item === " ") {
            decodedTxt += item;
         }
        else if (alphabet.indexOf(item) != -1) {
            if (alphabet.indexOf(item) >= 5) {
                decodedTxt += alphabet[(alphabet.indexOf(item) - 5)];
            }
            else if (alphabet.indexOf(item) <= 4) {
                decodedTxt += alphabet[alphabet.length + alphabet.indexOf(item) - 5];
            }
         }
     });
     console.log(decodedTxt.toUpperCase());
   }
   const txtEncrypted = 'KJPN INF IJ PTX UWTLWFQFITWJX';
   decoded(txtEncrypted);
   
  // Pedir el nombre del usuario
var nombreUsuario = prompt("Por favor, introduce tu nombre:");

// Obtener el elemento h1
var h1Elemento = document.getElementById("nombreUsuario");

// Actualizar el contenido del h1 con el nombre del usuario
h1Elemento.textContent = "¡Hola, " + nombreUsuario + "!";

// Orientada a objetos POO

var lista = {
  nombre: "andrey",
  apellido: "portela",
  deportes: ["correr","futbol","tenis"]
}

var lista2 = ["Gonzalo","Ortiz",{deporte: "caminar",peliculas: "acción"}]

function fulNAme(){
  var dato = this.lista.nombre+" "+this.lista.apellido
  return dato
}
console.log(fulNAme())


var tarjeta = {
  //Properties o propiedades
  proietario: "Andrey",
  edadDePropietario: 18,
  montoTotal: 100+" col", 

  //Method o Aciones/Funciones
  deposito(depos){
    return (this.montoTotal = parseInt(this.montoTotal) + depos +" col")

  },
  retiro(ret){
    return this.montoTotal = parseInt(this.montoTotal) - ret +" col"
  }
}*/

class Tarjeta {
  constructor() {
    this.proietario ="",
    this.edadDePropietario =0,
    this.montoTotal = 0 +" col",

    this.depositos = function(depos){
      return (this.montoTotal = parseInt(this.montoTotal) + depos +" col")}

    this.retiro = function(ret){
      return this.montoTotal = parseInt(this.montoTotal) - ret +" col"}
    }
}

var user1 = new Tarjeta()
  user1.proietario = "Andrey"
  user1.edadDePropietario = 30
  user1.montoTotal = 600

var user2 = new Tarjeta()
  user2.proietario = "Andy"
  user2.edadDePropietario = 18
  user2.montoTotal = 600;

var user3 = new Tarjeta()
  user3.proietario = "Chalo"
  user3.edadDePropietario = 30 
  user3.montoTotal = 900;

console.log("Usuario 1: ",user1)
console.log("Usuario 2: ",user2)
console.log("Usuario 3: ",user3)

class Bolsillo extends Tarjeta{
  constructor(){
    super(Tarjeta)
    this.nombreDelBolsillo = ""
    this.montoDeBolsillo = 0
    this.ladoDelBolsillo = ""
  }
}

var user4 = new Bolsillo()
//Datos del Usuario en tarjeta
  user4.proietario = user1.proietario 
  user4.edadDePropietario = user1.edadDePropietario
  user4.montoTotal = user1.montoTotal
  

//Datos del bolsillo 
  user4.tamañoDeBolsillo = 40
  user4.nombreDelBolsillo = "Pedrito"
  user4.ladoDelBolsillo = "Derecho"
  user4.montoDeBolsillo  = parseInt(user1.montoTotal += user4.tamañoDeBolsillo)
 
console.log("Usuario 4: ",user4)


var user5 = new Bolsillo()
// Datos del Ususario en tarjeta
  user5.proietario = "Chalo Jr"
  user5.edadDePropietario = 18
  user5.montoTotal = user1.montoTotal += user4.montoTotal

// Datos del Bolsillo
  user5.tamañoDeBolsillo = 80
  user5.nombreDelBolsillo = user4.nombreDelBolsillo + 2
  user5.ladoDelBolsillo = "Izquierdo"
  user5.montoDeBolsillo = parseInt(user4.montoDeBolsillo += user5.tamañoDeBolsillo)

console.log("Usuario 5: ",user5)