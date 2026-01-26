document.addEventListener('DOMContentLoaded', () => {
    
    // Menú Hamburguesa para Móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Lógica para el Filtro del Menú
    const filterBtns = document.querySelectorAll('.tab-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    item.style.display = 'block';
                    // Pequeña animación de entrada
                    item.style.opacity = '0';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Efecto de Scroll suave para navegadores antiguos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Ajuste por el navbar fijo
                    behavior: 'smooth'
                });
            }
        });
    });

    // ... (Tu código anterior del menú y filtros) ...

    // --- Lógica del Carrusel Hero ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Tiempo en milisegundos (5 segundos)

    function nextSlide() {
        // Quitar clase active de la imagen actual
        slides[currentSlide].classList.remove('active');
        
        // Calcular el índice de la siguiente imagen (si llega al final, vuelve a 0)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Poner clase active a la nueva imagen
        slides[currentSlide].classList.add('active');
    }

    // Iniciar el cambio automático solo si existen slides
    if(slides.length > 0){
        setInterval(nextSlide, slideInterval);
    }
});