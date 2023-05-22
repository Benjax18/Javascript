 dncofla= parseFloat( prompt("cofla Cuanto dinero tienes? "));
dnrobert= parseFloat( prompt("roberto Cuanto dinero tienes? "));
 dnpedro= parseFloat( prompt(" pedro Cuanto dinero tienes? "));



if (dncofla>=0.6 && dncofla<1){
    alert ("cofla tu comprate un helado de agua");
    dncofla=dncofla-0.6
    alert("y te sobran: "+ dncofla);
}

else if (dncofla>=1 && dncofla<1.6){
    alert ("cofla tu comprate un helado de crema");
    alert("y te sobran: "+ (dncofla-1));
}


else if (dncofla>=1.6 && dncofla<1.7){
    alert ("cofla tu comprate bombom helado marca heladix");
    alert("y te sobran: "+ (dncofla-1.6));
}

else if (dncofla>=1.7 && dncofla<1.8){
    alert ("cofla tu comprate el bombom helado marca heladovich");
    alert("y te sobran: "+ (dncofla-1.7))
}

else if (dncofla>=1.8 && dncofla<2.9){
    alert ("cofla tu Comprate un bombom helado marca helardo");
    alert("y te sobran: "+ (dncofla-1.8));
}

else if (dncofla>=2.9){
    alert ("cofla tu comprate un potecito de helados con confite: ");
    alert("y te sobran: "+ (dncofla-2.9));
}
else {
    alert("Lo siento cofla pobre no te alcanza para nada, anda a comprar debajo del puente");

}

if (dnrobert>=0.6 && dnrobert<1){
    alert ("roberto tu comprate un helado de agua");
}

else if (dnrobert>=1 && dnrobert<1.6){
    alert ("roberto tu comprate un helado de crema");
}


else if (dnrobert>=1.6 && dnrobert<1.7){
    alert ("roberto tu comprate bombom helado marca heladix");
}

else if (dnrobert>=1.7 && dnrobert<1.8){
    alert ("roberto tu comprate el bombom helado marca heladovich");
}

else if (dnrobert>=1.8 && dnrobert<2.9){
    alert ("roberto tu Comprate un bombom helado marca helardo");
}

else if (dnrobert>=2.9){
    alert ("roberto tu comprate un potecito de helados con confite: ");
}
else {
    alert("Lo siento roberto pobre no te alcanza para nada, anda a comprar debajo del puente");

}

if (dnpedro>=0.6 && dnpedro<1){
    alert ("pedro tu comprate un helado de agua");
}

else if (dnpedro>=1 && dnpedro<1.6){
    alert ("pedro tu comprate un helado de crema");
}


else if (dnpedro>=1.6 && dnpedro<1.7){
    alert ("pedro tu comprate bombom helado marca heladix");
}

else if (dnpedro>=1.7 && dnpedro<1.8){
    alert ("pedro tu comprate el bombom helado marca heladovich");
}

else if (dnpedro>=1.8 && dnpedro<2.9){
    alert ("pedro tu Comprate un bombom helado marca helardo");
}

else if (dnpedro>=2.9){
    alert ("pedro tu comprate un potecito de helados con confite: ");
}
else {
    alert("Lo siento pedro pobre no te alcanza para nada, anda a comprar debajo del puente");

}