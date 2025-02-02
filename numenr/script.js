// Función para abrir el modal
function openModal(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = src;
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

// Funciones para el scroll horizontal
function scrollLeft() {
    const scrollContainer = document.getElementById('image-scroll');
    scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth',
    });
}

function scrollRight() {
    const scrollContainer = document.getElementById('image-scroll');
    scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth',
    });
}
