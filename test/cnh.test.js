const { obterCnh } = require("../src/cnh");

test("Valida CNH idade igual 18", async () => {
    expect(obterCnh(18)).toBeTruthy();
});

test("Valida CNH idade menor 18", async () => {
    expect(obterCnh(15)).toBeFalsy();
});