
const contraseña=(caracte,longitud)=>{
    let contraseña="";
    for (let x=0; x<longitud;x++){ // la variable x comienza en 0 para que al pasarle la longitud este bucle de tantas vueltas como lo diga la longitud.
        let random= Math.floor(Math.random()* caracte.length); // de aqui sale un numero aleatorio de la cadena de caracteres de la variable (caracte)
        contraseña+=caracte.charAt(random); // De aqui se muestra el elemento de la cadena por su indice y se guarda en la variable contraseña. y asi dara vueltas el bucle hasta llegar a la longitud dada.
    }
    return contraseña; // luego de que el bucle haya parado retornamos la variable contraseña con todos los elementos guardados

}


const generador=()=>{   // creando la funcion de generador  
    let longi= parseInt(numeros.value);   // pasando a entero los datos de la longitud 
    let lmayus="QWERTYUIOPASDFGHJKLÑZXCVBNM"; // creando variables que contengan caracteres(mayusculas,minusculas,especiales y numeros)
    let lminus="qwertyuiopasdfghjklñzxcvbnm";
    let lespecial="$#[]{}-()/%!'@&¡?";
    let nume="1234567890";
    let r=""; // creando una variable sin nada donde se mezclara todo segun lo que quieran en la contraseña
    if (longi>=8 && longi <=20 ){ // Condicional en el cual el usuario solo podra poner una longitud entre 8 a 20 caracteres si esto se concreta pasa al siguiente paso y si no mostrara en pantalla LA LONGITUD DEBE SER ENTRE 8 A 20 CARACTERES 
    if (mayusculas.checked) {r=r+lmayus}; // si quieren una contraseña con letras mayusculas solo ponen el check y automaticamente se agrega los datos 
    if (minusculas.checked) {r=r+lminus}; // de la variable que mayusculas (o la que marques) a la variable r.
    if (especiales.checked) {r=r+lespecial};
    if (lnumeros.checked) {r=r+nume};
    generarcontra.innerText="la contraseña generada es: " + contraseña(r,longi);} // luego con innerText llamamos a la funcion contraseña y le mandamos
    else {generarcontra.innerText="LA LONGITUD DEBE SER ENTRE 8 A 20 CARACTERES"}; 
    // las variables r y longitud para asi crear la contraeña y mostrarla en pantalla 
};

window.addEventListener('DOMContentLoaded',()=>{
    botong.addEventListener("click",()=>{ // al hacer click en el boton de "generar contraseña" llamara a la funcion generador.
        generador(); 
    })
});