function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close menu after selection and smooth scroll to the section
function closeMenuAndScrollTo(sectionId, buttonId) {
    const navLinks = document.querySelector('.nav-links');
    const section = document.getElementById(sectionId);

    // Smooth scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });

    // Close the hamburger menu
    navLinks.classList.remove('active');

    // Remove 'active' class from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    document.getElementById(buttonId).classList.add('active');
}

// Toggle visibility of the "Servicios" section
document.getElementById("servicios-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    var serviciosContent = document.getElementById("servicios-content");
    var industriasContent = document.getElementById("industrias-content");

    // Cerrar la sección Industrias si está abierta
    industriasContent.style.display = "none";  // Hide Industrias if open

    // Eliminar la clase 'active' de todos los botones del menú
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Alternar la sección Servicios
    if (serviciosContent.style.display === "flex") {
        serviciosContent.style.display = "none";
    } else {
        serviciosContent.style.display = "flex";
        this.classList.add('active'); // Añade la clase active si se abre
        serviciosContent.scrollIntoView({ behavior: "smooth" }); // Desplazarse a la sección
    }
});

// Definir la función updateContent
function updateContent(title, text) {
    const contentMenu = document.getElementById('content-menu');
    if (contentMenu) {
        contentMenu.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
        contentMenu.scrollIntoView({ behavior: "smooth" }); // Desplazarse al contenido actualizado
    }
}

// Código que agrega los listeners a los elementos del menú
document.querySelectorAll('.menu-content-item').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        // Elimina la clase 'active' de todos los elementos
        document.querySelectorAll('.menu-content-item').forEach(el => el.classList.remove('active'));
        // Añade la clase 'active' al elemento actual
        this.classList.add('active');
    });
});


// Escucha los clics en los enlaces del menú
document.getElementById('auditorias').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    updateContent('Fotografía', `En <strong>ESTUDIO D</strong> utilizamos las técnicas más avanzadas de fotografía a nivel internacional que requieren una planificación y una coordinación de todos los recursos que intervienen en ella.<br><br>Con estas técnicas logramos que el resultado de cada sesión fotográfica sea más eficiente y económica, desarrollando planes de trabajo para cada cliente en particular, considerando su segmento de mercado y ubicación geográfica. 
        <ul class="audit-list"> 
        <li><strong><a href="#">Fotografía de Bodas</a></strong></li>
        <li><strong><a href="#">Fotografía de Eventos</a></strong></li> 
        <li><strong><a href="#">Fotografía Publicitaria</a></strong></li> 
        <li><strong><a href="#">Sesiones Fotográficas</a></strong></li> 
        <li><strong><a href="#">Fotografía de Retrato</a></strong></li> 
        <li><strong><a href="#">Fotografía de Productos</a></strong></li> </ul>`);
});

document.getElementById('outsourcing').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    updateContent('Video', `En <strong>ESTUDIO D</strong> buscamos satisfacer las necesidades de creación visual que tienen las empresas y particulares que desean inmortalizar sus momentos especiales o promocionar sus productos y servicios.<br><br>Nuestros servicios incluyen:
        <ul class="audit-list">
        <li><strong><a href="#">Producción de Videos Corporativos</a></strong></li> 
        <li><strong><a href="#">Video Marketing</a></strong></li> 
        </ul>`);
});

document.getElementById('asesoramiento-tributario').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    updateContent('Servicios adicionales', `En <strong>ESTUDIO D</strong>, reconocemos que cada cliente tiene necesidades únicas y especiales. Nos dedicamos a ofrecer soluciones personalizadas que se adaptan tanto a empresas como a individuos, proporcionando imágenes de alta calidad para tus proyectos empresariales y para preservar tus momentos más especiales.

Nuestros servicios adicionales incluyen:<br><br>
    <ul class="audit-list">
    <li><strong><a href="#">Fotografía para Redes Sociales y Marketing Digital</a></strong></li> 
    <li><strong><a href="#">Impresión de Fotos y Productos Personalizados</a></strong></li> 
    <li><strong><a href="#">Edición y Retoque Fotográfico Profesional</a></strong></li> 
    <li><strong><a href="#">Creación de Álbumes y Fotolibros</a></strong></li> 
    </ul>
`);
});

// Toggle visibility of the "Industrias" section
document.getElementById("industrias-btn").addEventListener("click", function (event) {
    event.preventDefault();
    var industriasContent = document.getElementById("industrias-content");
    var serviciosContent = document.getElementById("servicios-content");

    // Cerrar la sección Servicios si está abierta
    serviciosContent.style.display = "none";

    // Eliminar la clase 'active' de todos los botones del menú
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Alternar la sección Industrias
    if (industriasContent.style.display === "flex") {
        industriasContent.style.display = "none";
    } else {
        industriasContent.style.display = "flex";
        this.classList.add('active'); // Añade la clase active si se abre
        industriasContent.scrollIntoView({ behavior: "smooth" }); // Desplazarse a la sección
    }
});

// Update content dynamically for Industrias
function updateIndustriesContent(title, text) {
    const contentMenu = document.getElementById('content-menu-industries');
    if (contentMenu) {
        contentMenu.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
        contentMenu.scrollIntoView({ behavior: "smooth" }); // Desplazarse al contenido actualizado
    }
}

// Add event listeners for industries menu items
document.getElementById('comercial').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Empresas', 'ESTUDIO D brinda soluciones integrales para empresas, mejorando la imagen y presentación de sus productos y servicios. <ul class="audit-list"> <li><strong><a href="#">Ver</a></strong></li></ul>');
});

document.getElementById('servicios').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Bodas', 'Capturamos los momentos más importantes de tu boda con creatividad y profesionalismo.<ul class="audit-list"> <li><strong><a href="#">Ver</a></strong></li></ul>');
});
document.getElementById('industria-manufacturera').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Prebodas', 'Sesiones fotográficas de preboda que capturan la esencia y emoción antes del gran día.<ul class="audit-list"> <li><strong><a href="#">Ver</a></strong></li></ul>');
});

document.getElementById('construccion').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Restaurantes', 'Fotografía y video para restaurantes, mostrando tus platos y ambiente de manera atractiva.<ul class="audit-list"> <li><strong><a href="#">Ver</a></strong></li></ul>');
});

document.getElementById('entidades-sin-fines-lucro').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Equipos de Trabajo', 'Sesiones fotográficas para equipos de trabajo, capturando la esencia y colaboración de tu equipo.<ul class="audit-list"> <li><strong><a href="#">Ver</a></strong></li></ul>');
});

document.getElementById('cooperativas').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Eventos', 'Fotografía y video para cualquier tipo de evento, asegurando que cada detalle sea capturado.<ul class="audit-list"> <li><strong><a href="#">Ver</a></strong></li></ul>');
});

document.getElementById('sector-publico').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Productos', 'Fotografía de productos que resalta las características y detalles de tus artículos.<ul class="audit-list"> <li><strong><a href="#">Ver</a></strong></li></ul>');
});


// Función para hacer scroll suave y marcar el botón activo
function scrollToSection(sectionId, buttonId) {
    // Desplazar suavemente a la sección
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });

    // Eliminar la clase active de todos los botones del menú
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Añadir la clase active al botón actual
    document.getElementById(buttonId).classList.add('active');
}

// Listeners para los botones del menú
document.getElementById('servicios-btn').addEventListener('click', function () {
    closeMenuAndScrollTo2('servicios-content', 'servicios-btn');
});

document.getElementById('industrias-btn').addEventListener('click', function () {
    closeMenuAndScrollTo2('industrias-content', 'industrias-btn');
});

document.getElementById('contactanos-btn').addEventListener('click', function () {
    closeMenuAndScrollTo('contactanos-section', 'contactanos-btn');
});

document.getElementById('quienes-somos-btn').addEventListener('click', function () {
    closeMenuAndScrollTo('quienes-somos-section', 'quienes-somos-btn');
});

//document.getElementById("se-parte-btn").addEventListener("click", function() {
//    window.location.href = "separte.html";
//});

//document.getElementById('se-parte-btn').addEventListener('click', function () {
//    closeMenuAndScrollTo('se-parte-section', 'se-parte-btn');
//});
document.addEventListener("DOMContentLoaded", function () {
    const seParteBtn = document.getElementById('se-parte-btn');
    const quienesSomosBtn = document.getElementById('quienes-somos-btn');

    if (seParteBtn) {
        seParteBtn.addEventListener('click', function (event) {
            const targetSection = document.getElementById('se-parte-section');
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = "separteED.html?scroll=se-parte-section";
            }
        });
    }

    if (quienesSomosBtn) {
        quienesSomosBtn.addEventListener('click', function (event) {
            const targetSection = document.getElementById('quienes-somos-section');
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = "quienessomosestudiod.html?scroll=quienes-somos-section";
            }
        });
    }

    // Detectar el parámetro 'scroll' o el hash en la URL para hacer el desplazamiento suave
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToSection = urlParams.get('scroll') || window.location.hash.slice(1);

    if (scrollToSection) {
        window.addEventListener("load", function () {
            const targetSection = document.getElementById(scrollToSection);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});




// Close menu after selection and smooth scroll to the section
function closeMenuAndScrollTo2(sectionId, buttonId) {
    const navLinks = document.querySelector('.nav-links');
    const section = document.getElementById(sectionId);

    // Smooth scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });

    // Close the hamburger menu
    navLinks.classList.remove('active');
}

// Función para mostrar/ocultar el dropdown de idioma
function toggleDropdown() {
    document.getElementById("languageDropdown").classList.toggle("show");
}

// Cerrar el dropdown si se hace clic fuera de él
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Cambia el número según cuándo quieres activar el efecto
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});