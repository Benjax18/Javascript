
const contraseña=(caracte,longitud)=>{
    let contraseña="";
    for (let x=0; x<longitud;x++){
        let random= Math.floor(Math.random()* caracte.length);
        contraseña+=caracte.charAt(random);
    }
    return contraseña;

}


const generador=()=>{   // creando la funcion de generador  
    let longi= parseInt(numeros.value);
    if (longi >0){generarcontra.innerText="F"};
    let lmayus="QWERTYUIOPASDFGHJKLÑZXCVBNM";
    let lminus="qwertyuiopasdfghjklñzxcvbnm";
    let lespecial="$#[]{}-()/%!'@&¡?";
    let r="";
    if (mayusculas.checked) {r=r+lmayus};
    if (minusculas.checked) {r=r+lminus};
    if (especiales.checked) {r=r+lespecial};

    generarcontra.innerText="la contraseña generada es: " +contraseña(r,longi);
};

window.addEventListener('DOMContentLoaded',()=>{
    botong.addEventListener("click",()=>{
        generador();
    })
});