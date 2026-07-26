/**
 * SUNGLASS SHOP - Premium Clinic Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
        }
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust scroll position for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2.5. Mobile Menu System
    const navActions = document.querySelector('.nav-actions');
    if (navActions) {
        // Create Toggle Button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'mobile-menu-toggle';
        toggleBtn.setAttribute('aria-label', 'Abrir menú');
        toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        navActions.appendChild(toggleBtn);

        // Create Panel
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu-panel';
        mobileMenu.innerHTML = `
            <div class="mobile-menu-header">
                <a href="index.html" class="logo">
                    <img src="assets/logo_sunglasses.svg" alt="SUNGLASS SHOP" class="logo-img" style="height: 35px; width: auto; max-width: 180px;">
                </a>
                <button class="mobile-menu-close" aria-label="Cerrar menú"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <nav class="mobile-menu-links">
                <a href="index.html">Inicio</a>
                <a href="catalogo.html">Catálogo</a>
                <a href="servicios.html">Servicios</a>
                <a href="beneficios.html">Beneficios</a>
                <a href="convenios.html">Convenios</a>
                <a href="contacto.html">Contacto</a>
            </nav>
            <div class="mobile-menu-footer">
                <a href="https://wa.me/525512345678?text=Hola,%20quiero%20informaci%C3%B3n%20de%20Sunglass%20Shop%20%C3%93ptica." target="_blank" class="btn btn-outline-gold" style="display: flex; justify-content: center; align-items: center; gap: 8px; padding: 12px; border-radius: 50px; text-decoration: none; font-weight: 500; color: #fff; border: 2px solid var(--primary-gold);"><i class="fa-brands fa-whatsapp"></i> Agendar Cita</a>
            </div>
        `;
        document.body.appendChild(mobileMenu);

        // Toggle Actions
        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        const closeBtn = mobileMenu.querySelector('.mobile-menu-close');
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        // Close on link click
        mobileMenu.querySelectorAll('.mobile-menu-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
});

// 3. Mock Video Player for Visual Health Section
function playMockVideo(element) {
    const card = element.closest('.video-card');
    const title = card.querySelector('h4').innerText;
    
    alert(`Reproduciendo demostración: "${title}"\n\n(En un sitio real, aquí se abriría un video demostrativo mostrando la tecnología de la mica).`);
}

// 4. Catalog Logic
const urlParams = new URLSearchParams(window.location.search);
const marca = urlParams.get('marca');

if (marca && document.getElementById('catalogBrandName')) {
    document.getElementById('catalogBrandName').innerText = marca;
    const catalogGrid = document.getElementById('catalogGrid');
    
    let productsHTML = '';
    const images = [
        'images/glasses_model_1_1783196458318.png',
        'images/glasses_model_2_1783196465401.png',
        'images/glasses_model_3_1783196472344.png',
        'images/glasses_model_4_1783196479219.png'
    ];
    const styles = ['Clásico', 'Moderno', 'Aviador', 'Cuadrado', 'Redondo', 'Minimalista'];
    
    for(let i = 1; i <= 8; i++) {
        const randomStyle = styles[Math.floor(Math.random() * styles.length)];
        const randomImg = images[Math.floor(Math.random() * images.length)];
        productsHTML += `
            <div class="product-item" style="cursor: pointer;" onclick="openProductDetails('Modelo ${randomStyle}', '${marca}', '${randomImg}')">
                <div class="product-image">
                    <img src="${randomImg}" alt="Modelo ${randomStyle}">
                </div>
                <h4>Modelo ${randomStyle}</h4>
                <p>Armazón Oftálmico</p>
            </div>
        `;
    }
    
    catalogGrid.innerHTML = productsHTML;
}

// 5. Product Detail Modal Logic
const productModal = document.getElementById('productDetailModal');
const productImageViewer = document.getElementById('productImageViewer');
const product3DViewer = document.getElementById('product3DViewer');
const btnToggle3D = document.getElementById('btnToggle3D');
const mainProductImage = document.getElementById('mainProductImage');
const productThumbnails = document.getElementById('productThumbnails');

let is3DMode = false;

function openProductDetails(title, brand, mainImg) {
    document.getElementById('detailTitle').innerText = title;
    document.getElementById('detailBrand').innerText = brand;
    mainProductImage.src = mainImg;
    
    // Set mock description based on style
    const desc = document.getElementById('detailDescription');
    const mat = document.getElementById('detailMaterial');
    if (title.includes('Clásico') || title.includes('Cuadrado')) {
        desc.innerText = "Un diseño atemporal que combina elegancia y profesionalismo. Perfecto para el uso diario con un ajuste ergonómico excepcional.";
        mat.innerText = "Acetato Italiano de Alta Densidad";
    } else if (title.includes('Aviador') || title.includes('Minimalista')) {
        desc.innerText = "Estructura ultraligera y resistente que ofrece un confort inigualable sin comprometer el estilo vanguardista.";
        mat.innerText = "Titanio de Grado Aeroespacial";
    } else {
        desc.innerText = "Una pieza de diseño audaz que enmarca el rostro con sofisticación. Detalles premium en las bisagras y terminales.";
        mat.innerText = "Combinación de Metal y TR90";
    }

    // Generate thumbnails (mocking different angles)
    // We just reuse the main image for demo purposes, applying filters or just duplicates to simulate angles
    const thumbsHTML = `
        <img src="${mainImg}" class="thumbnail-img active" onclick="changeMainImage(this, '${mainImg}')" alt="Frente">
        <img src="${mainImg}" class="thumbnail-img" style="transform: scaleX(-1);" onclick="changeMainImage(this, '${mainImg}')" alt="Lado 1">
        <img src="${mainImg}" class="thumbnail-img" style="filter: contrast(1.2) brightness(0.9);" onclick="changeMainImage(this, '${mainImg}')" alt="Lado 2">
    `;
    productThumbnails.innerHTML = thumbsHTML;

    // Reset 3D mode
    is3DMode = false;
    updateViewers();

    // Show modal
    productModal.style.display = 'block';
    setTimeout(() => {
        productModal.classList.add('show');
    }, 10);
}

function closeProductModal() {
    productModal.classList.remove('show');
    setTimeout(() => {
        productModal.style.display = 'none';
    }, 300);
}

function changeMainImage(element, src) {
    // If in 3D mode, switch back to 2D
    if (is3DMode) {
        toggle3DMode();
    }
    
    mainProductImage.src = src;
    mainProductImage.style.transform = element.style.transform;
    mainProductImage.style.filter = element.style.filter;
    
    // Update active class
    document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
    element.classList.add('active');
}

function toggle3DMode() {
    is3DMode = !is3DMode;
    updateViewers();
}

function updateViewers() {
    if (is3DMode) {
        productImageViewer.classList.remove('active');
        product3DViewer.classList.add('active');
        btnToggle3D.innerHTML = '<i class="fa-solid fa-image"></i> Ver Fotos';
        btnToggle3D.style.backgroundColor = 'var(--primary-gold)';
    } else {
        product3DViewer.classList.remove('active');
        productImageViewer.classList.add('active');
        btnToggle3D.innerHTML = '<i class="fa-solid fa-cube"></i> Modo 3D';
        btnToggle3D.style.backgroundColor = 'var(--primary-dark)';
    }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeProductModal();
    }
});

function toggleFullScreen() {
    const viewer = document.getElementById('product3DViewer');
    if (!document.fullscreenElement) {
        if (viewer.requestFullscreen) {
            viewer.requestFullscreen();
        } else if (viewer.webkitRequestFullscreen) { /* Safari */
            viewer.webkitRequestFullscreen();
        } else if (viewer.msRequestFullscreen) { /* IE11 */
            viewer.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
}

// 5. Hero Slider Logic
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');

function nextSlide() {
    if (slides.length === 0) return;
    
    // Remove active class from current slide
    slides[currentSlideIndex].classList.remove('active');
    
    // Increment index and wrap around
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    // Add active class to new slide
    slides[currentSlideIndex].classList.add('active');
}

// Initialize slider if slides exist
if (slides.length > 0) {
    setInterval(nextSlide, 4000); // Change every 4 seconds
}

// 6. Scroll Animations (Intersection Observer)
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
});

// 7. Card Brand Carousel Auto-Cycling
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.card-carousel .carousel-slide');
    if (slides.length === 0) return;
    
    let currentIndex = 0;
    setInterval(() => {
        // Fade out current slide
        slides[currentIndex].style.opacity = 0;
        slides[currentIndex].style.pointerEvents = 'none';
        slides[currentIndex].classList.remove('active');
        
        // Advance index
        currentIndex = (currentIndex + 1) % slides.length;
        
        // Fade in new slide
        slides[currentIndex].style.opacity = 1;
        slides[currentIndex].style.pointerEvents = 'auto';
        slides[currentIndex].classList.add('active');
    }, 4000); // Transitions every 4 seconds
});
