const images = document.querySelectorAll('.image img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

//  Open Lightbox

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = 'flex';
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

// Next Image

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// Previous Image

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

// Close Lightbox

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close on Background Click

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


// Filters

const filterButtons = document.querySelectorAll('.filters button');
const galleryImages = document.querySelectorAll('.gallery .image');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        document.querySelector('.filters .active').classList.remove('active');
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        galleryImages.forEach(image => {

            if (filter === 'all' || image.classList.contains(filter)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    });
});
