const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');
const prevLightbox = document.getElementById('prev-lightbox');
const nextLightbox = document.getElementById('next-lightbox');
const lightboxCounter = document.getElementById('lightbox-counter');
let currentIndex = 0;

function showLightbox(index) {
    const imgSrc = galleryItems[index].querySelector('img').src;
    const imgAlt = galleryItems[index].querySelector('img').alt;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgAlt;
    lightboxCounter.textContent = `${index + 1} / ${galleryItems.length}`;
    lightbox.style.display = 'flex';
    currentIndex = index;
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showLightbox(index);
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg && e.target !== prevLightbox && e.target !== nextLightbox) {
        lightbox.style.display = 'galleryItems.lenth';
    }
});

prevLightbox.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    showLightbox(currentIndex);
});

nextLightbox.addEventListener('click', () => {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    showLightbox(currentIndex);
});