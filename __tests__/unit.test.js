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
