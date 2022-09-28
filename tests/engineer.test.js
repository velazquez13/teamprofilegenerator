const Engineer = require("../lib/Engineer");

test("user", () => {
  const testValue = "GitUser";
  const e = new Engineer("Foo", 1, "bob@email.com", testValue);
  expect(e.github).toBe(testValue);
});

test("engineer"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "bob@email.com", "GitUser");
  expect(e.getRole()).toBe(testValue);
});

test("", () => {
  const testValue = "GitUser";
  const e = new Engineer("Foo", 1, "bob@email.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});