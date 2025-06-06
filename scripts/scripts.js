const tasks = [
  {
    name: "Take crocodile for a walk",
    description: "Fluffy needs his daily exercise",
    image: "croc.jpg",
    deadline: "24/05/2025",
    priority: 1,
  },
  {
    name: "Overthink the meaning of toast",
    description: "It is very mysterious and will require some contemplation",
    image: "toast.jpg",
    deadline: "18/08/2025",
    priority: 1,
  },
  {
    name: "Practice arguing with a rubber duck",
    description: "I better win this time, goddammit",
    image: "duck.jpg",
    deadline: "06/03/2026",
    priority: 1,
  },
  {
    name: "Convince your plants you're not a threat",
    description: "I mean, I keep killing them, but ...",
    image: "plant.jpg",
    deadline: "17/07/2025",
    priority: 1,
  },
  {
    name: "Refill soap without raising suspicion",
    description: "They might already be on to me",
    image: "soap.jpg",
    deadline: "03/09/2025",
    priority: 1,
  },
  {
    name: "Host a meeting with your plushies",
    description: "Discuss quarterly cuddle goals",
    image: "toy.jpg",
    deadline: "13/06/2025",
    priority: 1,
  },
  {
    name: "Stare into the fridge like it holds life's answers",
    description: "Clearly, it does",
    image: "fridge.jpg",
    deadline: "16/06/2025",
    priority: 1,
  },
  {
    name: "Organize your sock drawer by emotional support level",
    description: "Some are not performing adequately",
    image: "socks.jpg",
    deadline: "18/02/2026",
    priority: 1,
  },
  {
    name: "Make up a new holiday",
    description: "Celebrate it with a weird hat",
    image: "party.jpg",
    deadline: "31/01/2026",
    priority: 1,
  },
];

tasks.forEach((val) => {
  document.getElementById("result").innerHTML += `
    <div>
        <div class="card" style="width: 18rem;">
            <img src="images/${val.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${val.name}</h5>
            <p class="card-text">${val.description}</p>
            <p class="card-text">Deadline: ${val.deadline}</p>
            <p class="card-text">Priority level:  <button class="btn btn-danger btn-sm">${val.priority}</button></p>
  </div>
</div>
    </div>
    `;
});
