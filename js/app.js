
document.addEventListener('DOMContentLoaded', () => {

    const abrir = document.getElementById('abrirModal');
    const cerrar = document.getElementById('cerrarModal');
    const modal = document.getElementById('proyecto1');


    const modalTitulo = document.getElementById('modal__titulo');
    const modalTexto = document.getElementById('modal__texto');
    const modalImagen = document.getElementById('modal__image');
    const modalLink = document.getElementById("modal-link");


    const proyectos = document.querySelectorAll(".proyect");


    proyectos.forEach((proyecto, index) => {
        proyecto.addEventListener('click', () => {
            console.log(proyectos);

            if (index === 0) {
                modalTitulo.textContent = "Carrito de Compras JS";
                modalImagen.src = "./img/contenido/1.png";
                modalTexto.textContent = "Este proyecto es un carrito de compras interactivo desarrollado con HTML, CSS y JavaScript puro, utilizando LocalStorage para almacenar los productos seleccionados por el usuario. Permite agregar, visualizar y eliminar productos del carrito, manteniendo los datos incluso al recargar la página. Es ideal como ejemplo de manejo de eventos, manipulación del DOM y persistencia local sin backend";
                modalLink.href = "https://carritocomprasls1.netlify.app/";
            } else if (index === 1) {
                modalTitulo.textContent = "Buscador de Clima";
                modalImagen.src = "./img/contenido/2.png";
                modalTexto.textContent = "Este proyecto es una aplicación web que permite buscar el clima actual de cualquier ciudad en tiempo real utilizando JavaScript y una API de datos meteorológicos (como OpenWeatherMap).Muestra información como temperatura, humedad, condiciones del clima y más, con una interfaz clara y responsive.Es un excelente ejemplo de consumo de APIs, manejo de promesas (fetch) y actualización dinámica del DOM.";
                modalLink.href = "https://buscaclima1.netlify.app/";
            } else if (index === 2) {
                modalTitulo.textContent = "Web de Hamburguesas";
                modalImagen.src = "./img/contenido/3.png";
                modalTexto.textContent = "Proyecto web centrado en una hamburguesería, con una interfaz atractiva y dinámica. La sección de productos incluye un menú desplegable con función “Cargar más”, que permite mostrar hamburguesas adicionales sin recargar la página.Utiliza HTML, CSS y JavaScript para gestionar el contenido y la experiencia del usuario. Ideal para practicar renderizado dinámico, manejo de eventos y diseño responsive.";
                modalLink.href = "https://hamburguesapg.netlify.app/";
            } else if (index === 3) {
                modalTitulo.textContent = "Administrador de Pacientes";
                modalImagen.src = "./img/contenido/4.png";
                modalTexto.textContent = "Aplicación desarrollada con HTML, CSS y JavaScript que permite crear, leer, actualizar y eliminar (CRUD) registros de pacientes en una veterinaria. Incluye formularios validados, edición de datos y eliminación de registros, todo con una interfaz intuitiva.Perfecto para demostrar habilidades en lógica de programación y gestión de datos en aplicaciones web.";
                modalLink.href = "https://admcitaveterinaria.netlify.app/";
            } else if (index === 4) {
                modalTitulo.textContent = "Buscador de Autos con Filtros";
                modalImagen.src = "./img/contenido/5.png";
                modalTexto.textContent = "Este proyecto consiste en un buscador dinámico con filtros múltiples, desarrollado con HTML, CSS y JavaScript.Permite al usuario buscar y filtrar elementos en tiempo real según criterios como texto, categoría, precio u otros atributos definidos.Ideal para practicar manipulación del DOM, eventos de entrada y lógica condicional.Es una herramienta útil para mejorar la experiencia del usuario en catálogos, tiendas o listados personalizados.";
                modalLink.href = "https://autosfiltro.netlify.app/";
            } else if (index === 5) {
                modalTitulo.textContent = "Landing Page Responsive";
                modalImagen.src = "./img/contenido/6.png";
                modalTexto.textContent = "Este proyecto es una Landing Page diseñada con HTML y CSS, enfocada en ofrecer una experiencia visual atractiva y completamente responsive.Cuenta con una estructura clara, encabezado llamativo, secciones informativas.Es ideal como página de inicio para marcas, productos o servicios, y demuestra habilidades en diseño web, maquetación y uso de flexbox/grid para adaptabilidad en diferentes dispositivos.";
                modalLink.href = "https://lpage01.netlify.app/";
            }

            modal.showModal();
        });
    });

    cerrar.addEventListener('click', () => {
        modal.close();
    });


})

//ANIMACION AL HACER SCROLL
const scrollItems = document.querySelectorAll('.scroll-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1 
});

scrollItems.forEach(item => {
    observer.observe(item)
})


// TEXTO EN MOVIMIENTO
const transform = document.getElementById('transform');
let i = 0, j = 0;

texto = ["Desarrollador Fronted", "Soporte TI", "HTML", "CSS", "JavaScript"];
d = 1;

setInterval(() => {

    let e = document.getElementById('transform');
    d ? i < texto[j].length ? (e.innerHTML += texto[j][i++])
        : (d = 0)
        : i > 0 ? (e.innerHTML = e.innerHTML.slice(0, -1), i--)
            : (d = 1, j = (j + 1) % texto.length, i = 0, e.innerHTML = "");
}, 150)



