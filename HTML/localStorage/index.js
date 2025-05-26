// Seleciona os elementos do DOM
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("list");
const outContador = document.getElementById("outContador");
// Função para salvar tarefas no LocalStorage
let incrementador = 0;
const count=  () => {
  incrementador = loadTasks().length;
  outContador.innerHTML = `<pre>Total de tarefas: ${incrementador}</pre>`;
}
const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
// Função para carregar tarefas do LocalStorage
const loadTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

// Cria um elemento de tarefa
const createTaskElement = (title, description,dateCreate) => {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskContent = document.createElement("div");
  taskContent.classList.add("card");
  const taskDetails = document.createElement("div");
  taskDetails.innerHTML = `
    <h3 class="title">${title}</h3>
    <p class="description">${description}</p>
    <p>Data: ${dateCreate}</p>
  `;

  const taskActions = document.createElement("div");
  taskActions.classList.add("actions");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    const tasks = loadTasks().filter(
      (task) => task.title !== title || task.description !== description
    );
    saveTasks(tasks);
    incrementador--;
    count();
    taskItem.remove();
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.classList.add("edit-button");

  editButton.addEventListener("click", () => {
    const newTitle = prompt("Editar título:", title);
    const newDescription = prompt("Editar descrição:", description);

    if (newTitle && newDescription) {
      const tasks = loadTasks();
      const taskIndex = tasks.findIndex(
        (task) => task.title === title && task.description === description
      );

      if (taskIndex !== -1) {
        tasks[taskIndex].title = newTitle.trim();
        tasks[taskIndex].description = newDescription.trim();
        saveTasks(tasks);
      }

      title = newTitle.trim();
      description = newDescription.trim();
      taskDetails.innerHTML = `
        <h3 class="title">${title}</h3>
        <p class="description">${description}</p>
      `;
    } else {
      alert("Edição cancelada ou campos inválidos!");
    }
  });

  taskContent.appendChild(taskDetails);
  taskActions.appendChild(deleteButton);
  taskActions.appendChild(editButton);
  taskContent.appendChild(taskActions);

  taskItem.appendChild(taskContent);

  return taskItem;
};

// Renderiza todas as tarefas
const renderTasks = () => {
  const tasks = loadTasks();
  taskList.innerHTML = ""; // Limpa a lista para evitar duplicação

  tasks.forEach(({ title, description, dateCreate }) => {
    const taskElement = createTaskElement(title, description, dateCreate);
    taskList.appendChild(taskElement);
  });
};
//função com saida da data e hora atual formatada.
const formatarData = () => {
  let inputData= new Date();
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
count();
// Evento de envio do formulário
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskForm.title.value.trim();
  const description = taskForm.description.value.trim();
  if (title && description) {
    const tasks = loadTasks();
    tasks.push({ title, description, dateCreate });
    saveTasks(tasks);
    incrementador++;
    count();
    const taskElement = createTaskElement(title, description,dateCreate);
    taskList.appendChild(taskElement);
    
    taskForm.reset();
  } else {
    alert("Por favor, preencha todos os campos!");
  }
});

// Carrega e renderiza as tarefas ao carregar a página
document.addEventListener("DOMContentLoaded", renderTasks);