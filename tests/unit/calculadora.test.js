const { resume } = require("react-dom/server");
const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'Erro'", () => {
  resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("somar 100 + 'banana' deveria retornar 'Erro'", () => {
  resultado = calculadora.somar(100, "banana");
  expect(resultado).toBe("Erro");
});
