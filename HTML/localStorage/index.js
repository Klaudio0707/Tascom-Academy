const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("list");
const outContador = document.getElementById("outContador");
const outConcluidas = document.getElementById("outConcluidas");

const count = () => {
  const tasks = loadTasks();
  incrementador = tasks.length;
  concluidas = tasks.filter(task => task.concluidas).length;

  outContador.textContent = `${incrementador}`;
  outConcluidas.textContent = `${concluidas}`;
};

const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const createTaskElement = (title, description, dateCreate, isConcluida) => {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskContent = document.createElement("div");
  taskContent.classList.add("card");

  const taskDetails = document.createElement("div");
  taskDetails.innerHTML = `
    <h3 class="title">${title}</h3>
    <p class="description">${description}</p>
    <p>Data: ${dateCreate}</p>
    <button class="btn_${isConcluida ? "concluida" : "nConcluida"}">${isConcluida ? "Concluída" : "Não Concluída"}</button>
  `;

  const toggleStatusButton = taskDetails.querySelector("button");
  toggleStatusButton.addEventListener("click", () => {
    const tasks = loadTasks();
    const taskIndex = tasks.findIndex(task => task.title === title && task.description === description);

    if (taskIndex !== -1) {
      tasks[taskIndex].concluidas = !tasks[taskIndex].concluidas;
      saveTasks(tasks);
      count();
      renderTasks(); // Atualiza a lista
    }
  });

  const taskActions = document.createElement("div");
  taskActions.classList.add("actions");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    const tasks = loadTasks().filter(task => task.title !== title || task.description !== description);
    saveTasks(tasks);
    count();
    renderTasks();
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.classList.add("edit-button");
  editButton.addEventListener("click", () => {
    const newTitle = prompt("Editar título:", title);
    const newDescription = prompt("Editar descrição:", description);

    if (newTitle && newDescription) {
      const tasks = loadTasks();
      const taskIndex = tasks.findIndex(task => task.title === title && task.description === description);

      if (taskIndex !== -1) {
        tasks[taskIndex].title = newTitle.trim();
        tasks[taskIndex].description = newDescription.trim();
        saveTasks(tasks);
        renderTasks();
      }
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
};

const renderTasks = () => {
  const tasks = loadTasks();
  taskList.innerHTML = ""; // Limpa a lista para evitar duplicação

  tasks.forEach(({ title, description, dateCreate, concluidas }) => {
    const taskElement = createTaskElement(title, description, dateCreate, concluidas);
    taskList.appendChild(taskElement);
  });

  count();
};

const formatarData = () => {
  const inputData = new Date();
  return inputData.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskForm.title.value.trim();
  const description = taskForm.description.value.trim();
  const dateCreate = formatarData();

  if (title && description) {
    const tasks = loadTasks();
    tasks.push({ title, description, dateCreate, concluidas: false });
    saveTasks(tasks);
    renderTasks();
    taskForm.reset();
  } else {
    alert("Por favor, preencha todos os campos!");
  }
});

document.addEventListener("DOMContentLoaded", renderTasks);
