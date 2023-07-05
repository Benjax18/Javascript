// son para validar algo 
// solo si es verdadero
if (10<15){
    document.write("hola");
}


let hola =prompt("dime tu nombre")

if (hola=="benja"){
    alert("verdadero tu nombre es: "+hola)

}
else if (hola=="simio"){
    alert("tu nombre no es benja, es: "+ hola)
}
else{
    alert("no ahi un nombre asi, cambiatelo.")
}

// if y else solamente puedes poner uno
// else if puedes poner los que quieras obviamente abajo del primer if
// si dejamos dos if los dos se ejecutaran