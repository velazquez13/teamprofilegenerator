const Intern = require("../lib/intern");

test("school", () => {
  const testValue = "UCD";
  const e = new Intern("Foo", 1, "bob@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("intern", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "bob@email.com", "UCD");
  expect(e.getRole()).toBe(testValue);
});

test("school via getSchool()", () => {
  const testValue = "UCD";
  const e = new Intern("Foo", 1, "bob@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});