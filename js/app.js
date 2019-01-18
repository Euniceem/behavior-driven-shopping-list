// window.onload = function () {
let newShoppingList = new List();

document.getElementById('addItemForm').onsubmit = function (event) {
  event.preventDefault()
  addToShoppingList(event);
};

function addToShoppingList(e) {
  let itemName = e.target[0].value;
  let itemDescription = e.target[1].value;
  let newShoppingListItem = new Item(itemName, itemDescription);

  newShoppingList.addItem(newShoppingListItem);
  reRender();
}

function reRender() {
  let htmlList = newShoppingList.render()
  let content = document.getElementById('content');
  content.innerHTML = htmlList;
}
function changeCheckedStatus(idx, checkBox) {
  console.log(idx, checkBox.checked)
  if (checkBox.checked) {
    newShoppingList.items[idx].check();
  } else {
    newShoppingList.items[idx].uncheck();
  }
  reRender();
}
reRender();
// }