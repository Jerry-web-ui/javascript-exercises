const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Jerry', () => {
    expect(values.firstName).toEqual('Jerry');
  });
  test('lastName is Villagracia', () => {
    expect(values.lastName).toEqual('Villagracia');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1993', () => {
    expect(values.birthYear).toEqual(1993);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Jerry Villagracia and I am 32 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Jerry Villagracia', () => {
    expect(values.fullName).toEqual('Jerry Villagracia');
  });
  test('age is 32', () => {
    expect(values.age).toEqual(32);
  });
});
