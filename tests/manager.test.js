const Manager = require("../lib/Manager");

test("office number", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "bob@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole()", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "bob@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "bob@email.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});