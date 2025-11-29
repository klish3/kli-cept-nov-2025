import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClosuresComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Closures
        </div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      <div className="text-xs text-[#43d9ad] space-y-1">
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-a-closure-and-how-why-would-you-use-one?practice=practice&tab=quiz">
          greatfrontend: Closures →
        </a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-is-a-closure-and-how-why-would-you-use-one/en-US.mdx">
          github: Closures (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* Definition */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">What is a Closure?</div>
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] text-sm">
                <div>A closure is a function that remembers variables from its enclosing scope, even after the outer function has finished executing.</div>
                <div className="text-[#43d9ad] mt-2 font-bold">Every function creates a closure!</div>
              </div>
            </div>

            {/* Simple Example */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Simple Closure Example</div>
              <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] text-[#607b96] text-sm">
                <pre className="text-xs whitespace-pre-wrap">{`function makeCounter() {
  let count = 0;
  
  return function increment() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 'count' is private - can only access via increment!`}</pre>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Common Use Cases</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Private Variables</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`function createUser(name) {
  let password = 'secret';
  
  return {
    getName: () => name,
    checkPassword: (p) => 
      p === password
  };
}

const user = createUser('Alice');
// password is private!`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Function Factories</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5);  // 10
triple(5);  // 15`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Callbacks & Async</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`function setupClickHandler(id) {
  let clicks = 0;
  
  document
    .getElementById(id)
    .addEventListener('click', () => {
      console.log(
        'Clicked ' + (++clicks) + 
        ' times'
      );
    });
}`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Memoization</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`function memoize(fn) {
  const cache = {};
  
  return function(arg) {
    if (arg in cache)
      return cache[arg];
    
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Scope Chain */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Scope Chain Visualization</div>
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">inner function</div>
                  <div className="text-[#43d9ad]">→</div>
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">outer function scope</div>
                  <div className="text-[#43d9ad]">→</div>
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">global scope</div>
                </div>
                <div className="text-xs text-[#fea55f]">Inner function can access all parent scopes!</div>
              </div>
            </div>

            {/* Common Pitfalls */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2">
              <div className="text-[#43d9ad] font-bold">⚠️ Common Pitfall: Loop Variable Closure</div>
              <div className="grid grid-cols-2 gap-3 text-sm text-[#607b96]">
                <div className="bg-[#011221] p-2 rounded border border-[#1e2d3d]">
                  <div className="text-[#fea55f] font-bold mb-1">❌ Wrong</div>
                  <pre className="text-xs">{`for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 3,3,3
  });
}`}</pre>
                </div>
                <div className="bg-[#011221] p-2 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-1">✓ Fixed</div>
                  <pre className="text-xs">{`for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0,1,2
  });
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`CLOSURES

Definition: A closure is a function that has access to variables from its
enclosing scope, even after the outer function has returned. The function
"closes over" the variables it needs.


How Closures Work:
1. Inner function is created inside outer function
2. Inner function references variables from outer scope
3. Outer function returns inner function
4. Variables from outer scope are still accessible in inner function
5. Those variables are said to be "closed over"


Simple Example:
  function outer() {
    let count = 0;  // Variable in closure
    
    return function inner() {
      count++;
      return count;
    };
  }
  
  const counter = outer();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
  
  // Each call remembers the previous count!
  // count persists between calls!


Why Closures are Useful:

1. DATA ENCAPSULATION (Private Variables)
  function createCounter() {
    let count = 0;  // Private!
    
    return {
      increment: () => ++count,
      decrement: () => --count,
      getCount: () => count
    };
  }
  
  const counter = createCounter();
  // count cannot be accessed directly - only through methods


2. FUNCTION FACTORIES
  function multiplyBy(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = multiplyBy(2);
  const triple = multiplyBy(3);
  
  double(5);  // 10
  triple(5);  // 15


3. CALLBACKS
  function setupButton(buttonId, message) {
    document
      .getElementById(buttonId)
      .addEventListener('click', function() {
        alert(message);  // Closes over 'message'
      });
  }
  
  setupButton('btn1', 'Hello!');
  setupButton('btn2', 'Goodbye!');


SCOPE CHAIN:
  var globalVar = 'global';
  
  function outer() {
    var outerVar = 'outer';
    
    function inner() {
      var innerVar = 'inner';
      
      // Can access all three:
      console.log(globalVar);    // ✓
      console.log(outerVar);     // ✓
      console.log(innerVar);     // ✓
    }
    
    inner();
  }


COMMON MISTAKE - Loop Variable Closure:
  // Problem:
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);  // 3, 3, 3 (all reference same i)
    }, 100);
  }
  
  // Solution 1: Use let (creates new i each iteration)
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);  // 0, 1, 2
    }, 100);
  }
  
  // Solution 2: Create new scope with IIFE
  for (var i = 0; i < 3; i++) {
    (function(j) {
      setTimeout(function() {
        console.log(j);  // 0, 1, 2
      }, 100);
    })(i);
  }


Key Points:
- Closures automatically created whenever function is defined
- Inner functions always have access to outer scope
- Closed-over variables persist as long as function exists
- Each function call creates new closure with own variables
- Essential for callbacks, event handlers, and private data`}
            </pre>
          </div>

          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-[#43d9ad] text-left pb-4">Concept</th>
                  <th className="text-[#43d9ad] text-left pb-4">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">Closure</td>
                  <td className="py-2 align-top">Function plus the variables it references from outer scope</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Scope Chain</td>
                  <td className="py-2 align-top">Order of scopes searched: local → outer function → global → window</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Closed Variables</td>
                  <td className="py-2 align-top">Variables from outer scope that inner function uses; persist in memory</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Private Data</td>
                  <td className="py-2 align-top">Variables in closure are inaccessible from outside; only accessible via returned function</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Common Use Case</td>
                  <td className="py-2 align-top">Event handlers, callbacks, counters, memoization, factory functions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClosuresComparison;
