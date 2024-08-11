const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const offset = -index * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
});

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentIndex);

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('imagePreview');
        output.src = reader.result;
        output.classList.add('active');
    }
    reader.readAsDataURL(event.target.files[0]);
}


