const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");
const filter = document.querySelector("#filter");
form.addEventListener("submit", addList);
itemList.addEventListener("click", removedlt);
filter.addEventListener("keyup", filterItems);
function addList(e) {
  e.preventDefault();
  const inputValue = document.querySelector("#item").value;
  //Adding the input value to the list
  const newList = document.createElement("li");
  newList.className = "list-group-item ";
  newList.appendChild(document.createTextNode(inputValue));
  itemList.appendChild(newList);
  //Adding delete button
  const del = document.createElement("button");
  del.className = "btn btn-danger btn-sm float-right delete";
  del.appendChild(document.createTextNode("X"));
  newList.appendChild(del);
}
function removedlt(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.getElementsByTagName("li");
  //   console.log(items);
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      console.log("Not Equalll");
      item.style.display = "none";
    }
  });
}
