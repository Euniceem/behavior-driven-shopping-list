let chai = require('chai');
let expect = chai.expect;
let Item = require('../js/shopping-list-item.js');
let List = require('../js/shopping-list.js');

describe("Shopping list Item", function () {

  describe("shoppingListItem is a class", function () {

    it("should be function", function () {
      expect(Item).to.be.a("function");
    })
  })

  describe("has a property named name", function () {
    let pizza = new Item('pizza', 'pepperoni pizza');
    expect(pizza.name).to.equal('pizza');
    expect(pizza.description).to.equal('pepperoni pizza');

  })

  describe("has a property named description", function () {
    expect(Item).to.have.property('description');

  })

  describe("has a property named isDone", function () {
    expect(Item).to.have.property('isDone');

  })

  describe("has a method named check", function () {

    it("should be a function", function () {
      expect(Item.check).to.be.a("function");

    })
    it("should set items isDone property to true", function () {
      let pasta = new Item('pasta', 'garlic cream fettucine');
      pasta.check();
      expect(pasta.isDone).to.be.true;
    })
  })

  describe("has a method named uncheck", function () {

    it("should be a function", function () {
      expect(Item.uncheck).to.be.a("function");

    })
    it("should set items isDone property to false", function () {
      let salad = new Item('salad', 'caesar salad');
      salad.check();
      salad.uncheck();
      expect(salad.isDone).to.be.false;
    })

  })

  describe("has a method named render", function () {

    it("should be a function", function () {
      expect(Item.render).to.be.a("function");

    })

    it("should return a string", function () {
      let chicken = new Item('chicken', 'fried chicken');
      expect(chicken.render()).to.be.a("string");

    })

    it("should be wrapped in li tags", function () {
      let seafood = new Item('seafood', 'crab legs');
      expect(seafood.render().slice(0, 4)).to.equal('<li>');
      expect(seafood.render().slice(0, -5)).to.equal('</li>');
    })
  })
})