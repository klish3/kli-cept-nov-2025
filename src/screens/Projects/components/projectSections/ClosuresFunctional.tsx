import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClosuresFunctional: React.FC<Props> = ({
  showVisualExamples,
  setShowVisualExamples,
}) => {
  const [counterOutput, setCounterOutput] = React.useState<string>("");
  const [memoizationOutput, setMemoizationOutput] = React.useState<string>("");

  const handleCounterClick = () => {
    const makeCounter = () => {
      let count = 0;
      return () => {
        count++;
        return count;
      };
    };

    const counter = makeCounter();
    setCounterOutput("");
    setCounterOutput(`counter1(): ${counter()}\n`);
    setCounterOutput((prev) => prev + `counter1(): ${counter()}\n`);
    setCounterOutput((prev) => prev + `counter1(): ${counter()}\n`);
    
    const counter2 = makeCounter();
    setCounterOutput(
      (prev) => prev + `counter2(): ${counter2()} (separate closure)\n`
    );
  };

  const handleMemoClick = () => {
    const memoize = (fn: (n: number) => number) => {
      const cache: Record<number, number> = {};
      return (n: number) => {
        if (n in cache) {
          return `${cache[n]} (cached)`;
        }
        const result = fn(n);
        cache[n] = result;
        return `${result} (computed)`;
      };
    };

    const fibonacci = memoize((n: number): number => {
      if (n <= 1) return n;
      let a = 0, b = 1;
      for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
      }
      return b;
    });

    setMemoizationOutput("");
    setMemoizationOutput(`fib(10): ${fibonacci(10)}\n`);
    setMemoizationOutput((prev) => prev + `fib(10): ${fibonacci(10)}\n`);
    setMemoizationOutput((prev) => prev + `fib(5): ${fibonacci(5)}\n`);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Closures: Functional Patterns
        </div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <>
          {/* Closures Maintain State */}
          <div className="space-y-4">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium">
              Closures Maintain Private State
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Code:
              </div>
              <pre className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto">
                {`function makeCounter() {
  let count = 0; // Private variable
  return function() {
    return ++count; // Closure accesses count
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1(); // 1
counter1(); // 2
counter1(); // 3
counter2(); // 1 (separate closure)`}
              </pre>
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Output:
              </div>
              <div className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap">
                {counterOutput}
              </div>
            </div>
            <Button
              onClick={handleCounterClick}
              className="bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs"
            >
              Run Counter Example
            </Button>
            <div className="bg-[#4d5bce]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
              <div className="font-medium text-[#e5e9f0] mb-2">How it works:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>count is private to each closure</li>
                <li>No global variables needed</li>
                <li>Each instance has its own state</li>
                <li>Data encapsulation pattern</li>
              </ul>
            </div>
          </div>

          {/* Function Currying */}
          <div className="space-y-4">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium">
              Function Currying with Closures
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Code:
              </div>
              <pre className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto">
                {`function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
const triple = multiply(3);

double(5); // 10
triple(5); // 15

// Without closure, would need:
// multiply(2, 5) each time`}
              </pre>
            </div>
            <div className="bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
              <div className="font-medium text-[#e5e9f0] mb-2">Benefits:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Partial application of functions</li>
                <li>Create specialized functions</li>
                <li>Reduce repeated arguments</li>
                <li>Functional programming pattern</li>
              </ul>
            </div>
          </div>

          {/* Memoization */}
          <div className="space-y-4">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium">
              Memoization: Cache Results with Closures
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Code:
              </div>
              <pre className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto">
                {`function memoize(fn) {
  const cache = {}; // Private cache
  return function(n) {
    if (n in cache) {
      return cache[n]; // Return cached result
    }
    const result = fn(n);
    cache[n] = result; // Store in cache
    return result;
  };
}

const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
});`}
              </pre>
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Output:
              </div>
              <div className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap">
                {memoizationOutput}
              </div>
            </div>
            <Button
              onClick={handleMemoClick}
              className="bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs"
            >
              Run Memoization Example
            </Button>
            <div className="bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
              <div className="font-medium text-[#e5e9f0] mb-2">Benefits:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Avoids redundant calculations</li>
                <li>Improves performance</li>
                <li>Cache is private to function</li>
                <li>Transparent to caller</li>
              </ul>
            </div>
          </div>

          {/* Event Handlers */}
          <div className="space-y-4">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium">
              Closures in Event Handlers
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Pattern:
              </div>
              <pre className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto">
                {`for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.log('Button ' + i); // Closure captures i
  });
}

// Without closure (var would be wrong):
// All buttons would log the last i value

// With closure (let or IIFE):
// Each button logs its own index`}
              </pre>
            </div>
            <div className="bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
              <div className="font-medium text-[#e5e9f0] mb-2">Real-world use:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Each handler captures its own context</li>
                <li>Click handlers remember their data</li>
                <li>Prevents variable shadowing issues</li>
                <li>Use let/const to avoid closure bugs</li>
              </ul>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-8">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium mb-4">
              Common Functional Patterns
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d] overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1e2d3d]">
                    <th className="text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]">
                      Pattern
                    </th>
                    <th className="text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]">
                      Purpose
                    </th>
                    <th className="text-[#43d9ad] text-left pb-4 [font-family:'Fira_Code',Helvetica]">
                      Closure Benefit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Data Encapsulation
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Keep variables private
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Hide internal state
                    </td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Currying
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Partial function application
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Remember arguments
                    </td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Memoization
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Cache computation results
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Private cache storage
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Factory Functions
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Create multiple instances
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Each has own context
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Reference Links */}
          <div className="text-xs text-[#43d9ad] [font-family:'Fira_Code',Helvetica] space-y-1">
            <div>
              References:{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#e5e9f0]"
              >
                MDN Closures
              </a>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`A closure is a function that has access to variables from its outer scope.
The returned function "remembers" and can access its parent function's variables.

CLOSURE DEFINITION:
function outer() {
  const message = "Hello"; // Outer scope
  
  function inner() {
    console.log(message); // Accesses outer scope
  }
  
  return inner; // Returns closure
}

const greet = outer();
greet(); // "Hello" - closure remembers message!

PRACTICAL USE CASES:

1. DATA ENCAPSULATION (Private Variables):
function createBankAccount() {
  let balance = 0; // Private
  
  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance() { return balance; }
  };
}

const account = createBankAccount();
account.balance = 1000000; // Can't access directly!
account.deposit(100); // Must use method

2. CURRYING (Partial Application):
const multiply = (a) => (b) => a * b;
const double = multiply(2);
double(5); // 10

3. MEMOIZATION (Caching):
const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
});

4. EVENT HANDLERS:
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    console.log('Button ' + i); // i captured by closure
  };
}

KEY BENEFITS:
✓ Data privacy and encapsulation
✓ Avoid global variables
✓ Create specialized functions
✓ Implement callbacks and event handlers
✓ Functional programming support`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClosuresFunctional;
