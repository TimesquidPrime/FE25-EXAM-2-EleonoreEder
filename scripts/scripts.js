const tasks = [
  {
    name: "Take crocodile for a walk",
    description: "Fluffy needs his daily exercise",
    image: "croc.jpg",
    deadline: "24/05/2025",
    priority: 0,
  },
  {
    name: "Overthink the meaning of toast",
    description: "It is very mysterious and will require some contemplation",
    image: "toast.jpg",
    deadline: "18/08/2025",
    priority: 0,
  },
  {
    name: "Practice arguing with a rubber duck",
    description: "I better win this time, goddammit",
    image: "duck.jpg",
    deadline: "06/03/2026",
    priority: 0,
  },
  {
    name: "Convince your plants you're not a threat",
    description: "I mean, I keep killing them, but ...",
    image: "plant.jpg",
    deadline: "17/07/2025",
    priority: 0,
  },
  {
    name: "Refill soap without raising suspicion",
    description: "They might already be on to me",
    image: "soap.jpg",
    deadline: "03/09/2025",
    priority: 0,
  },
  {
    name: "Host a meeting with your plushies",
    description: "Discuss quarterly cuddle goals",
    image: "toy.jpg",
    deadline: "13/06/2025",
    priority: 0,
  },
  {
    name: "Stare into the fridge like it holds life's answers",
    description: "Clearly, it does",
    image: "fridge.jpg",
    deadline: "16/06/2025",
    priority: 0,
  },
  {
    name: "Organize your sock drawer by emotional support level",
    description: "Some are not performing adequately",
    image: "socks.jpg",
    deadline: "18/02/2026",
    priority: 0,
  },
  {
    name: "Make up a new holiday",
    description: "Celebrate it with a weird hat",
    image: "party.jpg",
    deadline: "31/01/2026",
    priority: 0,
  },
];

sortTasks();

function showCards() {
  tasks.forEach((val) => {
    document.getElementById("result").innerHTML += `
    <div>
        <div class="card" style="width: 18rem;">
            <img src="images/${val.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${val.name}</h5>
            <p class="card-text">${val.description}</p>
            <hr>
            <p class="card-text">Deadline: ${val.deadline}</p>
            <p class="card-text"><i class="fa-solid fa-triangle-exclamation"></i> Priority level:  <button class="btn btn-success btn-sm priority-btn"><span class="priorityNum">${val.priority}</span></button></p>
            <hr>
            <div class="d-flex justify-content-between">
            <button class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i> Delete</button>
            <button class="btn btn-secondary btn-sm done-btn"><i class="fa-regular fa-circle-check"></i> Done</button>
            </div>
          </div>
        </div>
    </div>
    `;
  });
  increasePriority();
}

showCards();

function increasePriority() {
  let priorityBtns = document.querySelectorAll(".priority-btn");

  priorityBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (tasks[index].priority < 5) {
        tasks[index].priority++;
        document.querySelectorAll(".priorityNum")[index].innerText =
          tasks[index].priority;
        changeColor(index);
      } else {
        alert("This task already has top priority");
      }
    });
  });
}

function changeColor(index) {
  if (tasks[index].priority <= 1) {
    document
      .querySelectorAll(".priority-btn")
      [index].classList.add("bg-success");
  } else if (tasks[index].priority <= 3) {
    document
      .querySelectorAll(".priority-btn")
      [index].classList.replace("bg-success", "bg-warning");
  } else {
    document
      .querySelectorAll(".priority-btn")
      [index].classList.replace("bg-warning", "bg-danger");
  }
}

function taskDone() {
  let doneBtns = document.querySelectorAll(".done-btn");

  doneBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      doneBtns[index].classList.add("bg-primary");
      tasks[index].priority = 0;
      document.querySelectorAll(".priorityNum")[index].innerText =
        tasks[index].priority;
      document
        .querySelectorAll(".priority-btn")
        [index].classList.remove("bg-warning", "bg-danger", "bg-success");
      document
        .querySelectorAll(".priority-btn")
        [index].classList.add("bg-secondary");
    });
  });
}

taskDone();

function sortTasks() {
  document.querySelector(".sort-btn").addEventListener("click", function () {
    tasks.sort((a, b) => b.priority - a.priority);
    console.log(tasks);
    document.getElementById("result").innerHTML = "";
    showCards();
  });
}
