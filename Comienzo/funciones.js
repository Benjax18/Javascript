// no puedes crear una funcion para todo. NO las funciones son para cada cosa algo diferente.
function saludar(){

    let respuesta= prompt (`hola que tal tu dia? `); // funcion sin parametros!

    if (respuesta=="bien"){
        alert(`que bueno simio `);
    }
    else if (respuesta =="mal") {
        alert(`que mal mi rey`);
    }
}
    
saludar()



function saluda (nom){

let respuesta= prompt (`hola  ${nombre} que tal tu dia? `); // funcion con parametros

if (respuesta=="bien"){
    alert(`que bueno simio ${nombre}`)
}
else if (respuesta =="mal") {
    alert(`que mal mi rey`)
}
}

let nombre = prompt("dime tu nombre: ")

saluda(nombre)


function sumar(n1,n2){
    let r= n1+n2
    return r      // funcion sumar 
}

let nume1= Number( prompt("ingrese un numero: "))  // NO OLVIDAR DE DECLARAR LAS VARIABLES NUMBER SI SON NUMEROS LOS QUE PIDES
let nume2=Number(prompt("ingrese otro numero: "))

resultado = sumar(nume1,nume2)
document.write(`el resultado de ${nume1} y ${nume2} es: ${resultado} `)


const salud= name => document.write (`Hola como aprendiste a usar las funciones de flecha eh? ${name}? `);

salud("benja")