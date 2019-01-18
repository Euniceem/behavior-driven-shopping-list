class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }
  check() {
    this.isDone = true;
  }
  uncheck() {
    this.isDone = false;
  }
  render(num) {
    let checkBox;
    let start;
    let end = '</li>';
    let spanStart = '<span>';
    let spanEnd = '</span>';
    let removeButton = "<button onclick='removeItemButtonClicked(" + num + ")'>X</button>"

    let listItem = spanStart + this.name + spanEnd;
    listItem += spanStart + this.description + spanEnd;

    if (this.isDone === false) {
      start = "<li class='completed_false'>";
      checkBox = "<input type = 'checkbox' onchange ='changeCheckedStatus(" + num + ",this)' >";
    } else if (this.isDone === true) {
      start = "<li class='completed_true'>";
      checkBox = "<input type = 'checkbox' onchange ='changeCheckedStatus(" + num + ",this)' Checked>";
    }

    return start + checkBox + listItem + removeButton + end;
  }
}

// module.exports = Item;