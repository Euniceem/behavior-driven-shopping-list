// let Item = require('../js/shopping-list-item.js');

class List {
  constructor() {
    this.items = [];

  }
  addItem(item) {
    if (item instanceof Item) {
      this.items.push(item);
    } else {
      throw new Error;
    }
  }
  removeItem(item) {
    if (item instanceof Item) {
      let index = this.items.indexOf(item);
      if (index >= 0) {
        this.items.splice(index, 1);
      } else {
        throw new Error;
      }
    } else
      if (item === undefined) {
        this.items.pop();
      } else {
        throw new Error;
      }
  }

  render() {
    let start = '<ul>';
    let end = '</ul>';
    let tempList = '';

    for (var i = 0; i < this.items.length; i++) {
      tempList = tempList.concat(this.items[i].render());

    }
    return start + tempList + end;
  }
}

// module.exports = List