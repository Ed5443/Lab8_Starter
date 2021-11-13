// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('+1(408)000-8888 is phonenumber', () =>{
    expect(functions.isPhoneNumber('1(408)000-8888')).toBe(true);
});

test('(408)512-4444 is phonenumber', () =>{
    expect(functions.isPhoneNumber('(408)512-4444')).toBe(true);
});

test('(1234)56789000 is not phonenumber', () =>{
    expect(functions.isPhoneNumber('(1234)56789000')).toBe(false);
});

test('123456789 is not phonenumber', () =>{
    expect(functions.isPhoneNumber('123456789')).toBe(false);
});

test('hello@gmail.com is email', () =>{
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
});

test('Edward1234@ucsd.edu is email', () =>{
    expect(functions.isEmail('Edward1234@ucsd.edu')).toBe(true);
});

test('hello@gmail.ucsd.net is not email', () =>{
    expect(functions.isEmail('hello@gmail.ucsd.net')).toBe(false);
});

test('1234567@1234567.12345 is not email', () =>{
    expect(functions.isEmail('1234567@1234567.12345')).toBe(false);
});

test('password_ is password', () =>{
    expect(functions.isStrongPassword('password_')).toBe(true);
});

test('Edward12345678 is password', () =>{
    expect(functions.isStrongPassword('Edward12345678')).toBe(true);
});

test('hi is not password', () =>{
    expect(functions.isStrongPassword('hi')).toBe(false);
});

test('1234567@1234567 is not password', () =>{
    expect(functions.isStrongPassword('1234567@1234567')).toBe(false);
});

test('12/9/2021 is date', () =>{
    expect(functions.isDate('12/9/2021')).toBe(true);
});

test('1/29/1999 is date', () =>{
    expect(functions.isDate('1/29/1999')).toBe(true);
});

test('2/22/22 is not date', () =>{
    expect(functions.isDate('2/22/22')).toBe(false);
});

test('1999/12/25 is not date', () =>{
    expect(functions.isDate('1999/12/25')).toBe(false);
});

test('a34f23 is hex color', () =>{
    expect(functions.isHexColor('a34f23')).toBe(true);
});

test('ABC is hex color', () =>{
    expect(functions.isHexColor('ABC')).toBe(true);
});

test('gh99f23 is not hex color', () =>{
    expect(functions.isHexColor('gh99f23')).toBe(false);
});

test('1234 is not hex color', () =>{
    expect(functions.isHexColor('1234')).toBe(false);
});
