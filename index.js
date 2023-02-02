let task = document.getElementById("todo");
let form = document.querySelector("form");
let list = document.getElementById("list");
let listTask = document.getElementById("list li");
let checked = document.querySelector("checked");
let today = new Date();
let dateOfDay = document.querySelector("h1");
const dayString = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

function storeList() {
  window.localStorage.list = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.list) {
    list.innerHTML = window.localStorage.list;
  }
}

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
}

dateOfDay.innerHTML = dayString[today.getDay()] + " " + dateParser(today);

getTodos();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li class="init">${task.value}</li>`;
  task.value = "";
  storeList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("init")) {
    e.target.classList.add("checked");
    e.target.classList.remove("init");
    storeList();
  } else if (e.target.classList.contains("checked")) {
    e.target.classList.add("done");
    e.target.classList.remove("checked");
    storeList();
  } else if (e.target.classList.contains("done")) {
    console.log("done !");
    e.target.classList.remove("done");
    e.target.remove();
    storeList();
  } else {
    console.log("?");
  }
});
