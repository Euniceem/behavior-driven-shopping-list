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
  render() {
    let start;
    if (this.isDone === false) {
      start = "<li class='completed_false'>";
    } else if (this.isDone === true) {
      start = "<li class='completed_true'>";
    }
    let end = '</li>';
    let spanStart = '<span>';
    let spanEnd = '</span>';
    let listItem = spanStart + this.name + spanEnd;
    listItem += spanStart + this.description + spanEnd;
    return start + listItem + end;
  }
}

// module.exports = Item;