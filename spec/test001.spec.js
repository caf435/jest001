const getCurrency = require("../index");

test("8 товаров", () => {
  expect(getCurrency(8)).toBe("8 рублей");
});
