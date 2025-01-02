/**
 * Essa forma mais mordena de escreve codigo javascripte com class e construtores
 * e chamada de syntax sugar
 */

class Product {

  constructor (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  toString() {
    return `${this.name} - ${this.price} - ${this.quantity}`;
  }
}

/**
 * Exemplo de um codigo tradicional do javascript sem usa a syntax sugar 
 */

function Movie (title, year) {
  this.title = title;
  this.year = year;

  this.toString = () => {
    return `${this.title} -> ${this.year}`;
  }
}

module.exports = { Movie, Product };