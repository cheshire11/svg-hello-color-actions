const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hej! Bonjour! Guten Tag! Yo!");
  });
});
