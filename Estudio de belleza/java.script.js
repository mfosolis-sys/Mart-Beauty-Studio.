function reservar(){


let mensaje =
"Hola Mart Beauty Studio, quiero reservar una cita.";


let telefono="593995166740";


window.open(

"https://wa.me/"+telefono+"?text="+encodeURIComponent(mensaje),

"_blank"

);


}





function mostrarMenu(){


let menu=document.querySelector(".menu");


if(menu.style.display==="flex"){

menu.style.display="none";

}

else{

menu.style.display="flex";

}


}