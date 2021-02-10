// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Exercise #1 Take your first "Test Drive" by writing your first test!
describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });

    // Exercise #2 Ensure our function returns the right data type.
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });

    // Exercise #3 - Add a test to confirm actual vs. expected output.
    it("should return \"Hello, Jane!\" when passed \"Jane\"", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });

    // Exercise #4 Add another small, simple test
    it("should return \"Hello, Alex!\" when passed \"Alex\"", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    // Exercise #5 One more test before refactoring...
    it("should return \"Hello, Pat!\"", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    // Exercise #8 "Repeat" step (where we look for additional tests to add)
    it("should return \"Hello, World!\" when passed undefined", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\" when passed true", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\" when passed false", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\" when passed null", function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\" when passed NaN", function() {
        expect(sayHello(NaN)).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\" when passed ''", function() {
        expect(sayHello('')).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\" when passed 2.3", function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\" when passed '5'", function() {
        expect(sayHello('5')).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\" when passed [1, 2, 3]", function() {
        expect(sayHello([1, 2, 3])).toBe("Hello, World!");
    });
    it("should return \"Hello, World!\" when passed helloWorld", function() {
        expect(sayHello(helloWorld)).toBe("Hello, World!");
    });
});

// Exercise #10 Let's Test-Drive an isFive function!
describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean when called", function() {
        expect(typeof(isFive())).toBe("boolean");
    });
    it("should return true when passed 5", function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return true when passed '5'", function() {
        expect(isFive('5')).toBe(true);
    });
});

// Exercise #11 TDD process for testing and creating an isEven function
describe("isEven", function() {
    it("should be a defined function", function() {
        expect(typeof(isEven)).toBe("function");
    });
    it("should return a boolean when called", function() {
        expect(typeof(isEven())).toBe("boolean");
    });
    it("should return true when passed 2", function() {
        expect(isEven(2)).toBe(true);
    });
    it("should return true when passed -4", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when passed 3", function() {
        expect(isEven(3)).toBe(false);
    });
    it("should return false when passed \"banana\"", function() {
        expect(isEven("banana")).toBe(false);
    });
    it("should return true when passed 8", function() {
        expect(isEven(8)).toBe(true);
    });
    it("should return false when passed Infinity", function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when passed a boolean", function() {
        expect(isEven(true), isEven(false)).toBe(false);
    });
    it("should return false when passed undefined", function() {
        expect(isEven(undefined)).toBe(false);
    });
});