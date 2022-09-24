const { somar, diminuir, multiplicar,dividir} = require("../src/calculator");

test("Somar dois valores válidos", async () => {
  expect(somar(5, 10)).toStrictEqual(15);
});

test("Diminuir dois valores válidos", async () => {
  expect(diminuir(15, 5)).toStrictEqual(10);
});

test("Multiplicar dois valores válidos", async () => {
  expect(multiplicar(3, 5)).toStrictEqual(15);
});

test("Dividir dois valores válidos", async () => {
  expect(dividir(15, 3)).toStrictEqual(5);
});