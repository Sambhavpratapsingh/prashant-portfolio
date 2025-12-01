/* ===== NAVBAR MOBILE TOGGLE ===== */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
}

/* ===== FOOTER YEAR ===== */
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* ===== JOURNEY SLIDER (SWIPER) ===== */
document.addEventListener("DOMContentLoaded", () => {
    const journeySwiperEl = document.querySelector(".journey-swiper");

    if (journeySwiperEl && window.Swiper) {
        new Swiper(".journey-swiper", {
            loop: true,
            spaceBetween: 20,
            grabCursor: true,
            keyboard: { enabled: true },
            pagination: {
                el: ".journey-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
            },
        });
    }

    /* ===== LIGHTBOX ===== */
    const lightbox = document.getElementById("journeyLightbox");
    const lightboxImg = document.getElementById("journeyLightboxImg");
    const journeyImages = document.querySelectorAll(".journey-image");

    if (lightbox && lightboxImg && journeyImages.length) {
        journeyImages.forEach((img) => {
            img.addEventListener("click", () => {
                lightboxImg.src = img.src;
                lightbox.classList.add("open");
            });
        });

        lightbox.addEventListener("click", () => {
            lightbox.classList.remove("open");
            lightboxImg.src = "";
        });
    }
});
