// ================================
// MART BEAUTY STUDIO
// script.js
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("✨ Mart Beauty Studio cargado correctamente");

    const menu = document.querySelector(".menu");
    const enlaces = document.querySelectorAll(".menu a");
    const header = document.querySelector("header");

    //=========================
    // MENÚ RESPONSIVE
    //=========================

    window.mostrarMenu = function () {

        menu.classList.toggle("menu-activo");

    };

    //=========================
    // CERRAR MENÚ AL HACER CLICK
    //=========================

    enlaces.forEach(enlace => {

        enlace.addEventListener("click", () => {

            menu.classList.remove("menu-activo");

        });

    });

    //=========================
    // CAMBIAR NAVBAR AL HACER SCROLL
    //=========================

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("header-scroll");

        } else {

            header.classList.remove("header-scroll");

        }

    });

    //=========================
    // ANIMACIÓN AL HACER SCROLL
    //=========================

    const elementos = document.querySelectorAll(
        ".card, .imagen-about, .texto-about, .dato, .testimonio, .imagenes img"
    );

    const mostrarElemento = () => {

        elementos.forEach(elemento => {

            const posicion = elemento.getBoundingClientRect().top;

            const pantalla = window.innerHeight - 120;

            if (posicion < pantalla) {

                elemento.classList.add("mostrar");

            }

        });

    };

    mostrarElemento();

    window.addEventListener("scroll", mostrarElemento);

    //=========================
    // AÑO AUTOMÁTICO
    //=========================

    const anio = document.getElementById("anio");

    if (anio) {

        anio.textContent = new Date().getFullYear();

    }

});

//=========================
// BOTÓN WHATSAPP
//=========================

function reservar() {

    const telefono = "593995166740";

    const mensaje =
`Hola 😊

Me gustaría reservar una cita en Mart Beauty Studio.

Quisiera conocer la disponibilidad de horarios y los servicios.

Muchas gracias 💕`;

    const url =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}