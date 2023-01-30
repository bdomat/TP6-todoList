let task = document.getElementById("todo");
let form = document.querySelector("form");
let list = document.getElementById("list");
let listTask = document.getElementById("list li");
let checked = document.querySelector("checked");
let today = new Date();
let dateOfDay = document.querySelector("h1");

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

dateOfDay.innerHTML = dateParser(today);

getTodos();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${task.value}</li>`;
  task.value = "";
  storeList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
    storeList();
  } else {
    e.target.classList.add("checked");
    storeList();
  }
});
