const { test, expect } = require('@jest/globals');

test('hello controller should return "Hello, World!"', () => {
	expect(helloController()).toBe('Hello, World!');
});