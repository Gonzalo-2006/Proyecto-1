//Inicio de js

//Funciones: 

function color(){
    var texto = document.getElementById('nombreUsuario')
    texto.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
}

/*

print = descarga de document. 
 let nombre = "Andrey"
 nombre = "Gonzalo"
 alert(nombre)


function comparar(a,b){
   if(a>b){
    return ("a es mayor que b")
   }else if(a===b){
    return ("a es igual que b")
   }else if(a<b){
    return (" a es menor que b")
   }
}
console.log(comparar(3,6))


function comparar2(a, b) {
    let compara = a === b ? 'iguales' : a > b ? 'mayor' : 'menor';
    switch (compara) {
      case 'iguales':
        return("a es igual que b");
        break;
      case 'mayor':
        return("a es mayor que b");
        break;
      case 'menor':
        return("a es menor que b");
        break;
      default:
        return("No es posible comparar");
        break;
    }
  }

  console.log(comparar2(5, 10))
  console.log(comparar2(10, 5))
  console.log(comparar2(5, 5))
*/

// Interaccion
/*
var alerta = alert("Hola")
var promPt = prompt("Nombre")
var confirmar = confirm("Estas vivo?")

let cantidadDeDatos = prompt("Ingrese la cantidad de datos a registrar")
let lisataDeDatos  = []
for(a=0; a < cantidadDeDatos; a++){
  lisataDeDatos[a] = [prompt(`Ingrese el dato N°${a+1}:`)]
}
console.log(lisataDeDatos)

if(a == 2){
  return(mensaje(a))
}else{
  alert("Funcion no activa")
}


function mensaje(dato1){
  if( dato1== 2){
    return alert("Hola")
  }else{
    return ("sapa")
  }
}

let count = 0;
var holdbet = "Hold";
function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count ++;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count --;
    break;
  }

  if (count > 0) {
    holdbet = 'Bet'
  }
  return (count +""+holdbet)
}
console.log(cc(2)) 
console.log(cc(3))
console.log(cc(7))
console.log(cc('K')) 
console.log(cc('A'))

function almacen(val){
  const dato = {
    "ciudad": "cali",
    "comida": "pollo",
    "edad": 13
  }
  resultado = dato[val]
  return resultado
}
document.write(almacen("comida"))


*/  

function verDato(){
  var dato = document.getElementById("nombre").value; 
  var dato2 = document.getElementById("apellido").value; 
  alert(dato +" "+dato2)
}
/*
let listComi = {
  pera: "pera",
  sopa: "sopa",
  jugo: "jugo"
} 

let comida = [];
comida.push("platano","banano","pera")
console.log(comida.length)


function ver(){
  alert("hola")
}

console.log(listComi.pera)
*/
/*
function compara(){
  let dato = parseInt(prompt("ingrese un numero entre 1 y 5"))
  const matriz = [1,2,3,4,5]
  const compaRa = matriz.includes(dato)
  if(compaRa){
    return true
  }else{
    return false
  }
}
console.log(compara())


const a = [1,2,3,4,5]
const b = [1,2,3,4,5]
const c = "1,2,3,4,5"
console.log(a)
a.push(6)
console.log(a.length)
console.log(a)
console.log(a.length)

let dato = true
console.log(dato)

dato = String(dato)
console.log(dato)

dato = true
dato = Number(dato)
console.log(dato)
*/
  


 