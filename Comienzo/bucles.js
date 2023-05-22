// WHILE= Hasta que la condicion no sea falsa no parara
numero=0;
while (numero<10){

    numero++;
    document.write(numero+ "<br>");
}

// DO WHILE = lo mismo pero al reves primero se ejecuta luego se pregunta 

do {
    numero ++;
    document.write(numero+ "<br>");
}
while (numero<10)

// BREAK = sirve para que un while deje de ejecutarse.
// imagina para buscar un dato el while buscara y buscara hasta que lo encuentra y con un
// break si esque ya encontro los datos le dices que pare de  buscar
numero=0;
while (numero<1000){

    numero++;
    document.write(numero+ "<br>");

    if (numero == 10){
        break; // hasta que llegue a 10 PARA

    }
}

// For es parecido al while es un bucle indeterminado
// primero el for se declara una variable dentro de la condicion
// inicializamos
// condicion 
// iteramos = hacer lo mismo varias veces
  // i de incremento o decremento
for (let i = 0; i<6; i++){
    document.write(i + "<br>");

}

// CONTINUE =  pasar de ese elemento como que cuentas hasta diez 
// y dices continue 5 y se saltara el numero 5 por ejemplo: 1,2,3,4,6,7,8,9,10

for (let i = 0; i<6; i++){
    if (i ==4 ){
        continue ;
    }
    document.write(i + "<br>");

}

// for in demuestra la posicion en la que se encuentra cada elemento
// for of muestra todos los valores

// AMBOS RECORREN EL ARRAY solamente que uno guarda la posicion
// y el otro guarda el valor de la posicion
let animales=("leon","perro","gato")
animales.edad= 20 // añadir a animales una edad
 
for (animal in animales ){
    document.write(animales + "<br>"); // 0,1,2 edad

}

for (animal of animales ){
    document.write(animales + "<br>"); // leon perro gato

}
document.write(animales.edad) // 20


// sentencia Label

array1= ["jose","pepe","mario"]
array2=["lucho","matias","francisca", array1]

forRancio:
for(let array in array2){ //3 es la posicion de la array
    if (array== 3){
        for (let array of array1){
            document.write(array + "<br>")
            break forRancio // acaba con tooooodo el bucle
        }

    }
    else  {
        document.write(array2[array] + "<br>")
    }

}