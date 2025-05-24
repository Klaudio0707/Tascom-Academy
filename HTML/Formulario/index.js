// Seleciona os elementos do DOM
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("list");
const outTarefas = document.getElementById("outInput");

let incrementador = 0;

const contador = (incremento) => {
    outTarefas.innerHTML = `<pre>Total de tarefas: ${incremento}</pre>`;
    console.log(incrementador);
    console.log(incremento);

}
function createTaskElement(title, description) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskContent = document.createElement("div");
  taskContent.classList.add("card");

  const taskDetails = document.createElement("div");
  taskDetails.innerHTML = `
    <h3 class="title">${title}</h3>
    <p class="description">${description}</p>
  `;  
  const taskActions = document.createElement("div");
  taskActions.classList.add("actions");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    taskItem.remove();
  });

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
      `;
    } else {
      alert("Edição cancelada ou campos inválidos!");
    }
  });

  taskContent.appendChild(taskDetails);
  taskContent.appendChild(taskActions);
  taskActions.appendChild(deleteButton);
  taskActions.appendChild(editButton);

  taskItem.appendChild(taskContent);

  return taskItem;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskForm.title.value.trim();
  const description = taskForm.description.value.trim();

  if (title && description) {
    incrementador++;
    contador(incrementador);
    const taskElement = createTaskElement(title, description);

    taskList.appendChild(taskElement);
    taskForm.reset();
  } else {
    alert("Por favor, preencha todos os campos!");
  }
});