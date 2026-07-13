document.addEventListener("DOMContentLoaded", function(){

    console.log("✨ Mart Beauty Studio - Sitio web cargado correctamente");


});





// BOTÓN RESERVAR CITA WHATSAPP

function reservar(){


    let mensaje = 
    "Hola ✨ Mart Beauty Studio.\n\n" +
    "Me gustaría reservar una cita de belleza.\n" +
    "Quisiera conocer disponibilidad de horarios y servicios. 💕";


    let telefono = "593995166740";


    let url = 
    "https://wa.me/" + telefono +
    "?text=" + encodeURIComponent(mensaje);



    window.open(
        url,
        "_blank"
    );


}







// MENÚ RESPONSIVE

function mostrarMenu(){


    let menu = document.querySelector(".menu");


    if(menu.style.display === "flex"){


        menu.style.display = "none";


    }

    else{


        menu.style.display = "flex";

        menu.style.flexDirection = "column";

        menu.style.background = "#000";

        menu.style.position = "absolute";

        menu.style.top = "75px";

        menu.style.right = "0";

        menu.style.width = "220px";

        menu.style.padding = "25px";

        menu.style.borderRadius = "0 0 0 20px";


    }


}







// CERRAR MENÚ AL HACER CLICK EN UNA OPCIÓN

let enlaces = document.querySelectorAll(".menu a");


enlaces.forEach(function(enlace){


    enlace.addEventListener("click",function(){


        let menu = document.querySelector(".menu");


        if(window.innerWidth <= 900){


            menu.style.display = "none";


        }


    });


});