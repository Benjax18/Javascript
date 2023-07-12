// un joven gana un premio de loteria 
// quiso hacer una fiesta
// y compro una maquina que 
// solo deja pasar mayores de 18
// el primero que dentre despues de las 2am no paga





function pasaono(edad){
    if (edad>18){
        alert("puedes pasar crack");
    }
    else if (edad<0){
        alert("na compare vives en otro planeta");
        alert("fueraa");
    }
    else if (edad==18){
        alert("uff dentro justito eh");
    }
    else{
        alert("menor de edad pana valiste");
    }

}
let edad = prompt("ingrese su edad... ")

pasaono(edad)


