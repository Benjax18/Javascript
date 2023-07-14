// numeros aleatorios entre 0 y 1 peeero solo contando el 0 sin llegar al 1
console.log(Math.random());


let caraca="213123gshsj";

// para ver la cantidad de elementos que contiene una variable
console.log(caraca.length);

// math.floor redondea y multiplicando math random por el numero que quieres que se formen numeros aleatorios 
let ale= Math.floor(Math.random()*10); // aqui se formaran numeros aleatorios de 0 a 10 pero sin contar el 10
console.log(ale);
// elemento aleatorio de caracteres 
let alea= Math.floor(Math.random()*caraca.length);

console.log(alea);

let nombre ="benyi";
let alerr=nombre.charAt(3);

console.log(alerr)
