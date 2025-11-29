import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HigherOrderFunctions: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Higher-Order Functions
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-the-definition-of-a-higher-order-function?practice=practice&tab=quiz">
          greatfrontend: Higher-Order Functions →
        </a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx">
          github: Higher-Order Functions (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* Definition */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">What is a Higher-Order Function?</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ Takes Functions as Arguments</div>
                  <div>Accepts one or more functions as parameters</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ Returns a Function</div>
                  <div>Produces a function as output (or both)</div>
                </div>
              </div>
            </div>

            {/* Common Patterns */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Common Patterns</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Takes Function Argument</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`// Array methods
[1, 2, 3].map(x => x * 2)
[1, 2, 3].filter(x => x > 1)

// setTimeout
setTimeout(() => {
  console.log('later');
}, 1000);`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Returns Function</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
add5(3); // 8`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Real-World Examples</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Decorators/Wrappers</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`function withLogging(fn) {
  return function(...args) {
    console.log('calling', fn.name);
    return fn(...args);
  };
}

const logged = 
  withLogging(Math.max);`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Function Composition</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`const compose = (f, g) => 
  x => f(g(x));

const square = x => x * x;
const double = x => x * 2;

const doubleThenSq = 
  compose(square, double);
doubleThenSq(3); // 36`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2">
              <div className="text-[#43d9ad] font-bold">Benefits of Higher-Order Functions</div>
              <div className="grid grid-cols-2 gap-3 text-sm text-[#607b96]">
                <div>• Reusable function factories</div>
                <div>• Flexible behavior through callbacks</div>
                <div>• Easier function composition</div>
                <div>• Abstract common patterns</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`HIGHER-ORDER FUNCTIONS

Definition: A function that takes one or more functions as arguments
and/or returns a function as its result.


Why They Matter:
- Fundamental to functional programming
- Enable code reuse and abstraction
- Used extensively in JavaScript libraries and frameworks
- Found in Array methods: map, filter, reduce, forEach


Examples of Taking Functions:

1. ARRAY METHODS
  const numbers = [1, 2, 3, 4];
  
  // map - transform each element
  numbers.map(x => x * 2);  // [2, 4, 6, 8]
  
  // filter - keep items matching predicate
  numbers.filter(x => x > 2);  // [3, 4]
  
  // reduce - combine to single value
  numbers.reduce((sum, x) => sum + x, 0);  // 10


2. CUSTOM HIGHER-ORDER FUNCTION
  function applyTwice(fn, x) {
    return fn(fn(x));
  }
  
  const square = x => x * x;
  applyTwice(square, 2);  // 16 (square(square(2)))


3. EVENT LISTENERS (Higher-order in nature)
  element.addEventListener('click', function(e) {
    console.log('Clicked!');
  });


Examples of Returning Functions:

1. FUNCTION FACTORY (Currying)
  function makeMultiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = makeMultiplier(2);
  const triple = makeMultiplier(3);
  
  double(5);  // 10
  triple(5);  // 15


2. DECORATOR PATTERN
  function memoize(fn) {
    const cache = {};
    
    return function(arg) {
      if (arg in cache) {
        return cache[arg];
      }
      const result = fn(arg);
      cache[arg] = result;
      return result;
    };
  }
  
  const expensiveFn = memoize(slowCalculation);


3. FUNCTION COMPOSITION
  const compose = (f, g) => x => f(g(x));
  
  const addOne = x => x + 1;
  const double = x => x * 2;
  
  const addOneThenDouble = 
    compose(double, addOne);
  
  addOneThenDouble(5);  // 12


Real-World Use Cases:
- API request wrappers with error handling
- Middleware in Express.js
- Reducers in Redux
- Custom Hooks in React
- Lodash functions: debounce, throttle, memoize`}
            </pre>
          </div>

          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-[#43d9ad] text-left pb-4">Aspect</th>
                  <th className="text-[#43d9ad] text-left pb-4">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">Definition</td>
                  <td className="py-2 align-top">Function that takes/returns other functions</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Takes Function</td>
                  <td className="py-2 align-top">Array methods (map, filter), event listeners, callbacks</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Returns Function</td>
                  <td className="py-2 align-top">Factories, decorators, middleware, composition</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Functional Programming</td>
                  <td className="py-2 align-top">Core concept; enables composition and reuse</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Common Pattern</td>
                  <td className="py-2 align-top">Currying, memoization, middleware, decorators</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default HigherOrderFunctions;
