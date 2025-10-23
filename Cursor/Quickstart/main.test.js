const assert = require('assert');

// Import the fibonacci function
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Test suite
console.log('Running fibonacci tests...\n');

let passed = 0;
let failed = 0;

function test(description, fn) {
    try {
        fn();
        console.log(`✓ ${description}`);
        passed++;
    } catch (error) {
        console.log(`✗ ${description}`);
        console.log(`  Error: ${error.message}`);
        failed++;
    }
}

// Test cases
test('fibonacci(0) should return 0', () => {
    assert.strictEqual(fibonacci(0), 0);
});

test('fibonacci(1) should return 1', () => {
    assert.strictEqual(fibonacci(1), 1);
});

test('fibonacci(2) should return 1', () => {
    assert.strictEqual(fibonacci(2), 1);
});

test('fibonacci(3) should return 2', () => {
    assert.strictEqual(fibonacci(3), 2);
});

test('fibonacci(4) should return 3', () => {
    assert.strictEqual(fibonacci(4), 3);
});

test('fibonacci(5) should return 5', () => {
    assert.strictEqual(fibonacci(5), 5);
});

test('fibonacci(6) should return 8', () => {
    assert.strictEqual(fibonacci(6), 8);
});

test('fibonacci(7) should return 13', () => {
    assert.strictEqual(fibonacci(7), 13);
});

test('fibonacci(10) should return 55', () => {
    assert.strictEqual(fibonacci(10), 55);
});

test('fibonacci(15) should return 610', () => {
    assert.strictEqual(fibonacci(15), 610);
});

test('fibonacci with negative number should throw error', () => {
    assert.throws(() => {
        fibonacci(-1);
    }, /Input must be a non-negative integer/);
});

test('fibonacci with negative number (-5) should throw error', () => {
    assert.throws(() => {
        fibonacci(-5);
    }, /Input must be a non-negative integer/);
});

// Test summary
console.log(`\n${'='.repeat(40)}`);
console.log(`Tests passed: ${passed}`);
console.log(`Tests failed: ${failed}`);
console.log(`Total tests: ${passed + failed}`);
console.log('='.repeat(40));

process.exit(failed > 0 ? 1 : 0);

