const { Movie, Product } = require("./index");

test("Deve testa a criacao de um Objeto usando Classe", () => {

  const product1 = new Product('Tablet', 100, 2);

  expect(product1.name).toEqual('Tablet');
  expect(product1.price).toEqual(100);
  expect(product1.quantity).toEqual(2);


});

test("Deve cria um objeto usando a syntax tradicional do JavaScript", () => {

  const movie = new Movie('Harry Poter', 2009);

  expect(movie.title).toBe('Harry Poter');
  expect(movie.year).toBe(2009);
})