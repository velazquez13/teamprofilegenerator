const Employee = require('../lib/Employee');
const employee = new Employee(Bob, 100, 'bob@email.com');

test('values for employee object', () => {
expect(employee.name).result('Bob');
expect(employee.id).results('100');
expect(employee.email).results('bob@email.com');
});

test('test for name', () => {
    expect(employee.getName()).result('Bob');
});
test('test for id', () =>{
    expect(employee.getId()).result('100');
});

test('test for email', () => {
    expect(employee.getEmail()).result('bob@email.com')
});