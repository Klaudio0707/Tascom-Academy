"use strict";
const buttons = document.querySelectorAll(".seat");
let counter = 0;
// Obter o elemento onde o contador será exibido
const counterDisplay = document.getElementById("out-reserved");
// Adicionar um evento de clique a cada botão
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Alternar seleção
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
            counter--; // Decrementar contador
        }
        else {
            button.classList.add("selected");
            counter++; // Incrementar contador
        }
        // Atualizar o contador no HTML
        if (counterDisplay) {
            counterDisplay.textContent = `Cadeiras selecionadas: ${counter}`;
        }
    });
});
