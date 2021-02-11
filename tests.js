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
    it("should return false when passed true", function() {
        expect(isEven(true)).toBe(false);
    });
    it("should return false when passed false", function() {
        expect(isEven(false)).toBe(false);
    });
    it("should return false when passed null", function() {
        expect(isEven(null)).toBe(false);
    });
    it("should return false when passed undefined", function() {
        expect(isEven(undefined)).toBe(false);
    });
    it("should return false when called without an argument", function() {
        expect(isEven()).toBe(false);
    });
});

// Exercise #12 Test Drive an isVowel function
describe("isVowel", function() {
    it("should be a defined function", function() {
        expect(typeof(isVowel)).toBe("function");
    });
    it("should return a boolean when executed", function() {
        expect(typeof(isVowel())).toBe("boolean");
    });
    it("should return true when passed \"a\"", function() {
        expect(isVowel("a")).toBe(true);
    });
    it("should return true when passed \"A\"", function() {
        expect(isVowel("A")).toBe(true);
    });
    it("should return false when passed \"y\"", function() {
        expect(isVowel("y")).toBe(false);
    });
    it("should return false when passed 4", function() {
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when passed true", function() {
        expect(isVowel(true)).toBe(false);
    });
    it("should return false when passed false", function() {
        expect(isVowel(false)).toBe(false);
    });
    it("should return false when passed \"banana\"", function() {
        expect(isVowel("banana")).toBe(false);
    });
    it("should return false when passed null", function() {
        expect(isVowel(null)).toBe(false);
    });
    it("should return false when passed undefined", function() {
        expect(isVowel(undefined)).toBe(false);
    });
    it("should return false when called without an argument", function() {
        expect(isVowel()).toBe(false);
    });
});

// Exercise #13 Test Drive an add function
describe("add", function() {
    it("should be a defined function", function() {
        expect(typeof(add)).toBe("function");
    });
    it("should return a number when executed", function() {
        expect(typeof(add())).toBe("number");
    });
    it("should return 5 when passed 2 and 3", function() {
        expect(add(2, 3)).toBe(5);
    });
    it("should return -12 when passed -3 and -9", function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it("should return 11 when passed \"5\" and 6", function() {
        expect(add("5", 6)).toBe(11);
    });
    it("should return 6 when passed \"-4\" and \"10\"", function() {
        expect(add("-4", "10")).toBe(6);
    });
    it("should return NaN when passed \"banana\" and \"split\"", function() {
        expect(isNaN(add("banana", "split"))).toBe(true); // toBe is basically ===, when the result is NaN, the test code will do NaN === NaN >>> false >>> test fail with the old code
    });
    it("should return NaN when passed 2 and \"apples\"", function() {
        expect(isNaN(add(2, "apples"))).toBe(true);
    });
    it("should return NaN when called without arguments", function() {
        expect(isNaN(add())).toBe(true);
    });
});