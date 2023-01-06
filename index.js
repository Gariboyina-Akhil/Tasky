const taskContainer = document.querySelector(".Task_container");
console.log(taskContainer);


const globalStorage = [];


const newCard = ({
    id,
    imageUrl,
    taskTitle,
    taskType,
    taskDescription
}) =>`<div class="col-md-6 col-lg-3" id=${id}>
        <div class="card shadow" id="card">
          <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
            <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
          </div>
          <img src=${imageUrl} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${taskTitle}</h5>
            <p class="card-text">${taskDescription}</p>
            <span class="badge bg-primary">${taskType}</span>

          </div>
          <div class="card-footer text-muted d-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary">Open Task</button>
          </div>
        </div>
      </div>
    `

const doFirst = () =>{
  const local_storage = localStorage.getItem("tasky");
  if(!local_storage) return;

  const { cards } = JSON.parse(local_storage);

  cards.map((card) =>{
    const createNewCard = newCard(card);
    taskContainer.insertAdjacentHTML("beforeend", createNewCard);
    globalStorage.push(card);
  });
};

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("Image_url").value ,
        taskTitle: document.getElementById("Task_Title").value,
        taskType: document.getElementById("Task_Type").value,
        taskDescription:document.getElementById("Task_Description").value,
    };
    console.log(taskData);

    const createNewCard = newCard(taskData);
    taskContainer.insertAdjacentHTML("beforeend", createNewCard);
    globalStorage.push(taskData);
    localStorage.setItem("tasky", JSON.stringify({ cards: globalStorage}));
};