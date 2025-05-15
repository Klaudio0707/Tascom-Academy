"use strict";
const seatButtons = document.querySelectorAll('.seat');
// Adiciona o evento de clique para cada botão
seatButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Alterna a classe 'selected' ao botão clicado
        button.classList.toggle('reserved');
    });
});
