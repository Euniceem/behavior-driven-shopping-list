let chai = require('chai');
let expect = chai.expect;
let Item = require('../js/shopping-list-item.js');
let List = require('../js/shopping-list.js');

describe("Shopping list Item", function () {

  describe("Item is a class", function () {

    it("should be function", function () {
      expect(Item).to.be.a("function");
    })
  })

  describe("Item has a property", function () {
    let steak = new Item('steak', 't-bone steak');
    it("named 'name'", function () {
      expect(steak).to.have.property('name');
    })
    it("named 'description'", function () {
      expect(steak).to.have.property('description');
    })
    it('named "isDone"', function () {
      expect(steak).to.have.property('isDone');
    })
  })

  describe("has a method named check", function () {
    let steak = new Item('steak', 't-bone steak');
    it("should be a function", function () {
      expect(steak.check).to.be.a("function");
    })
    it("should set items isDone property to true", function () {
      steak.check();
      expect(steak.isDone).to.be.true;
    })
  })

  describe("has a method named uncheck", function () {
    let steak = new Item('steak', 't-bone steak');
    it("should be a function", function () {
      expect(steak.uncheck).to.be.a("function");

    })
    it("should set items isDone property to false", function () {
      steak.check();
      steak.uncheck();
      expect(steak.isDone).to.be.false;
    })

  })

  describe("has a method named render", function () {
    let steak = new Item('steak', 't-bone steak');
    it("should be a function", function () {
      expect(steak.render).to.be.a("function");
    })

    it("should return a string", function () {
      expect(steak.render()).to.be.a("string");

    })

    it("should start with an <li tag", function () {
      expect(steak.render().slice(0, 3)).to.equal('<li');

    })
    it("should end with an </li> tag", function () {
      expect(steak.render().slice(-5)).to.equal('</li>');
    })
  })
})

describe('Shopping list', function () {

  describe("List is a class", function () {
    it("should be function", function () {
      expect(List).to.be.a("function");
    })
  })
  describe("has a property named 'items'", function () {
    let shoppingList = new List();
    it("should be function", function () {
      expect(shoppingList).to.have.property("items");
    })
    it('the items property should be an array', function () {
      expect(shoppingList.items).to.be.a("array");
    })
  })
  describe("has a method named addItem", function () {
    let shoppingList = new List();
    it("should be a function", function () {
      expect(shoppingList.addItem).to.be.a("function");
    })
    it("should add an Item object to the items array", function () {
      let steak = new Item('steak', 't-bone steak');
      shoppingList.addItem(steak);
      expect(shoppingList.items[0]).to.deep.equal(steak);
    })
    it("should return an error with anything other than an Item object", function () {
      expect(shoppingList.addItem.bind(shoppingList, 'cookies')).to.throw();
    })
  })
  describe("has a method named removeItem", function () {
    let shoppingList = new List();
    it("should be a function", function () {
      expect(shoppingList.removeItem).to.be.a("function");
    })
    it("should remove an Item object from the items array", function () {
      let steak = new Item('steak', 't-bone steak');
      let cookies = new Item('cookies', 'chocolate chip');
      shoppingList.items.length = 0;
      shoppingList.addItem(steak);
      shoppingList.addItem(cookies);
      shoppingList.removeItem(steak);
      expect(shoppingList.items[1]).to.equal(undefined);
    })
    it("should return an error if item does not exist in the list", function () {
      let steak = new Item('steak', 't-bone steak');
      let cookies = new Item('cookies', 'chocolate chip');
      shoppingList.items.length = 0;
      shoppingList.addItem(cookies);
      expect(shoppingList.removeItem.bind(shoppingList, steak)).to.throw();
    })
    it("should remove the last item in the list if there is no input", function () {
      let steak = new Item('steak', 't-bone steak');
      let cookies = new Item('cookies', 'chocolate chip');
      shoppingList.items.length = 0;
      shoppingList.addItem(cookies);
      shoppingList.addItem(steak);
      shoppingList.removeItem();
      expect(shoppingList.items[1]).to.equal(undefined);
    })
    it("should return an error with anything other than an Item object", function () {
      expect(shoppingList.removeItem.bind(shoppingList, 'cookies')).to.throw();
    })
  })

  describe("has a method named render", function () {
    let shoppingList = new List();
    let steak = new Item('steak', 't-bone steak');
    let cookies = new Item('cookies', 'chocolate chip');
    shoppingList.addItem(cookies);
    shoppingList.addItem(steak);
    it("should be a function", function () {
      expect(shoppingList.render).to.be.a("function");
    })

    it("should return a string", function () {
      shoppingList.render();
      expect(shoppingList.render()).to.be.a("string");
    })

    it("should start with an <ul> tag", function () {
      expect(shoppingList.render().slice(0, 4)).to.equal('<ul>');

    })
    it("should end with an </ul> tag", function () {
      expect(shoppingList.render().slice(-5)).to.equal('</ul>');
    })
  })
})