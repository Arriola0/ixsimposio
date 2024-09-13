const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
let interval;

const chatBox = document.getElementById('chat-box');




function moveCarousel(index) {
    currentIndex = (index + images.length) % images.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startCarousel() {
    interval = setInterval(() => {
        moveCarousel(currentIndex + 1);
    }, 4000); // Cambia la imagen cada 3 segundos
}

function stopCarousel() {
    clearInterval(interval);
}

nextButton.addEventListener('click', () => {
    stopCarousel();
    moveCarousel(currentIndex + 1);
    startCarousel();
});

prevButton.addEventListener('click', () => {
    stopCarousel();
    moveCarousel(currentIndex - 1);
    startCarousel();
});

startCarousel();







function selectOption(button, option) {
    // Agregar el mensaje del usuario al chat
    addMessage(option, 'user-message');

    // Generar la respuesta del bot
    getBotResponse(option);

    // Ocultar el botón después de seleccionarlo
    button.style.display = 'none';
}

function addMessage(message, className, imageUrl) {
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${className}`;
    
    // Verifica si es un mensaje del bot para agregar la imagen del robot
    if (className === 'bot-message') {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Robot';
        imgElement.className = 'bot-image';
        messageElement.appendChild(imgElement);
    }
    
    const textElement = document.createElement('span');
    textElement.innerText = message;
    messageElement.appendChild(textElement);
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    let botResponse = '';
    let imageUrl = '';  // URL de la imagen para la respuesta específica

    if (message.toLowerCase().includes('fecha')) {
        botResponse = 'El simposio se llevará a cabo el día Miercoles 16 de octubre de 2024.';
        imageUrl = './img/bootD.png';  // Reemplaza con la ruta de la imagen correspondiente
    } else if (message.toLowerCase().includes('dónde')) {
        botResponse = 'El simposio se realizará en el Centro de Convenciones Colina Country Club.';
        imageUrl = './img/bootB.png';  // Reemplaza con la ruta de la imagen correspondiente
    } else if (message.toLowerCase().includes('tema')) {
        botResponse = 'El tema es: "Inteligencia Artificial en la Administración"';
        imageUrl = './img/bootC.png';  // Reemplaza con la ruta de la imagen correspondiente
    } 
    else if (message.toLowerCase().includes('actividades')) {
        botResponse = '¡No te lo puedes perder! Será una experiencia increible, con grandes exposiciones, una deliciosa cena, artistas invitados, música, regalos y mucho más.';
        imageUrl = './img/bootC.png';  // Reemplaza con la ruta de la imagen correspondiente
    } else {
        botResponse = 'Para más información puedes comunicarte directamente con una persona: "4070-5701"';
        imageUrl = './img/bootA.png';  // Reemplaza con la ruta de la imagen correspondiente
    }

    setTimeout(() => {
        addMessage(botResponse, 'bot-message', imageUrl);
    }, 500);
}
