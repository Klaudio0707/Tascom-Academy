// Pega os elementos do DOM com tipagem correta
const form = document.getElementById('form') as HTMLFormElement;
const formSection = document.getElementById('exibir') as HTMLElement;
const cinemaSection = document.getElementById('ocultar') as HTMLElement;
const userNameDisplay = document.querySelector('header p#ocultar a.perfil') as HTMLAnchorElement;
const selectedCountDisplay = document.getElementById('out-reserved') as HTMLElement;
const seats = Array.from(document.querySelectorAll('.seat')) as HTMLButtonElement[];

// Guarda as cadeiras selecionadas
let selectedSeatsCount = 0;

// Inicialmente, mostra só o form e esconde as cadeiras
formSection.style.display = 'block';
cinemaSection.style.display = 'none';

// Listener para submissão do form
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nome = formData.get('nome') as string;

    if (!nome || nome.trim() === '') {
        alert('Por favor, informe seu nome');
        return;
    }

    // Mostra o nome do usuário no header
    userNameDisplay.textContent = nome;

    // Esconde o form e mostra as cadeiras
    formSection.style.display = 'none';
    cinemaSection.style.display = 'flex';
});

// Listener para clicar nas cadeiras
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) return;

        seat.classList.add('selected');
        seat.style.cursor = 'not-allowed';
        seat.disabled = true;

        selectedSeatsCount++;
        selectedCountDisplay.textContent = `Cadeiras selecionadas: ${selectedSeatsCount}`;
    });
});
