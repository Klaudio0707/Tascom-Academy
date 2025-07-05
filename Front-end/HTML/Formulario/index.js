// Seleciona os elementos do DOM
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("list");
const outTarefas = document.getElementById("outInput");

let incrementador = 0;

// Atualiza o contador no DOM
const  updateCounter = () => {
  outTarefas.innerHTML = `<pre>Total de tarefas: ${incrementador}</pre>`;
}

// Cria o elemento da tarefa
function createTaskElement(title, description, dateCreate) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskContent = document.createElement("div");
  taskContent.classList.add("card");

  const taskDetails = document.createElement("div");
  taskDetails.innerHTML = `
    <h3 class="title">${title}</h3>
    <p class="description">${description}</p>
    <span>${dateCreate}</span>
  `;

  const taskActions = document.createElement("div");
  taskActions.classList.add("actions");

  // Botão de excluir
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    taskItem.remove();
    incrementador--;
    updateCounter();
  });

  // Botão de editar
  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.classList.add("edit-button");

  editButton.addEventListener("click", () => {
    const newTitle = prompt("Editar título:", title);
    const newDescription = prompt("Editar descrição:", description);

    if (newTitle && newDescription) {
      title = newTitle.trim();
      description = newDescription.trim();
      taskDetails.innerHTML = `
        <h3 class="title">${title}</h3>
        <p class="description">${description}</p>
        <span>${dateCreate}</span>
      `;
    } else {
      alert("Edição cancelada ou campos inválidos!");
    }
  });

  taskActions.appendChild(deleteButton);
  taskActions.appendChild(editButton);
  taskContent.appendChild(taskDetails);
  taskContent.appendChild(taskActions);
  taskItem.appendChild(taskContent);

  return taskItem;
}

// Valida os campos do formulário
function validateForm(title, description) {
  if (!title || !description) {
    alert("Por favor, preencha todos os campos!");
    return false;
  }
  return true;
}
const formatarData = () => {
  let inputData = new Date();
  let dataFormatada = inputData.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
  });
  return dataFormatada;
}
let dateCreate = formatarData();
// Escuta o evento de envio do formulário
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskForm.title.value.trim();
  const description = taskForm.description.value.trim();

  if (validateForm(title, description)) {
    const taskElement = createTaskElement(title, description, dateCreate);
    taskList.appendChild(taskElement);

    incrementador++;
    updateCounter();
    taskForm.reset();
  }
});
