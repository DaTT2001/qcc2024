let currentIndex = 0;
const images = document.querySelectorAll('.slider-img');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Tự động quay vòng từ ảnh cuối về ảnh đầu
    showImage(currentIndex);
}

// Tự động chuyển ảnh mỗi 3 giây
setInterval(nextImage, 3000);

// Bắt đầu với ảnh đầu tiên
showImage(currentIndex);
