const button = document.querySelector(".button");
const inputBox = document.querySelector(".input-box");
const listContainer = document.querySelector(".list-container");
function createCross(list) {
  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.className = "close";
  list.appendChild(span);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "checked"
 
  list.appendChild(checkBox);
  span.addEventListener("click", remove);
  function remove() {
    list.remove();   
  }

  checkBox.addEventListener("change", checked);
  function checked(event) {
    if(checkBox.checked){
      list.style.textDecoration="line-through";
    }
    else{
      list.style.textDecoration="none";
    }
  }

 
 

}

function createList() {
  const list = document.createElement("li");
  list.innerHTML = inputBox.value;
  listContainer.appendChild(list);
  createCross(list);
}

function add() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    createList();
  }
  inputBox.value = "";
}
button.addEventListener("click", add);
