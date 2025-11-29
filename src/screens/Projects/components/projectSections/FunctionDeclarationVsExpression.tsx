import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FunctionDeclarationVsExpression: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Function Declaration vs Expression
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
        <a href="https://www.greatfrontend.com/questions/quiz/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function?practice=practice&tab=quiz">
          greatfrontend: Function Declaration vs Expression →
        </a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx">
          github: Function Declaration vs Expression (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* Core Differences */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Core Differences</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad] font-bold">Declaration</div>
                  <div>Hoisted to top of scope</div>
                  <div className="text-xs text-[#fea55f]">Can call before defining</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad] font-bold">Expression</div>
                  <div>Not hoisted (var/let/const rules)</div>
                  <div className="text-xs text-[#fea55f]">Variable holds function reference</div>
                </div>
              </div>
            </div>

            {/* Hoisting Comparison */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Hoisting Behavior</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#43d9ad]">✓ Declaration Works</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`foo(); // Works!

function foo() {
  console.log('hello');
}

// Hoisted to:
// function foo() { ... }
// foo();`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f]">✗ Expression Fails</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`foo(); // Error!

var foo = function() {
  console.log('hello');
};

// Hoisted to:
// var foo = undefined;
// foo();`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Syntax Patterns */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Syntax Patterns</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Named Expression</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`const factorial = 
  function fact(n) {
    return n <= 1 ? 1 
           : n * fact(n-1);
  };

// 'factorial' available outside
// 'fact' only inside`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Anonymous Expression</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`const add = function(a, b) {
  return a + b;
};

// No name - variable is ref
// Useful for callbacks
setTimeout(function() {
  // anonymous function
}, 1000);`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">When to Use Each</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">Declaration</div>
                  <div className="space-y-1 text-xs">
                    <div>• Top-level functions</div>
                    <div>• Named functions</div>
                    <div>• Public API functions</div>
                    <div>• When hoisting is helpful</div>
                  </div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">Expression</div>
                  <div className="space-y-1 text-xs">
                    <div>• Callbacks & handlers</div>
                    <div>• IIFEs & closures</div>
                    <div>• Arrow functions (ES6+)</div>
                    <div>• Functions as values</div>
                  </div>
                </div>
              </div>
            </div>

            {/* TDZ Warning */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2">
              <div className="text-[#43d9ad] font-bold">⚠️ const/let are in Temporal Dead Zone</div>
              <div className="text-sm text-[#607b96] space-y-2">
                <div>With <span className="text-[#fea55f]">const</span> or <span className="text-[#fea55f]">let</span>, expressions are NOT hoisted usably:</div>
                <div className="bg-[#011221] p-2 rounded border border-[#1e2d3d] text-xs">
                  {`const foo = () => {}; // Must define before use!`}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`FUNCTION DECLARATION vs EXPRESSION

Key Difference: Hoisting behavior


FUNCTION DECLARATION
  function myFunc() {
    return 42;
  }
  
  Characteristics:
  - Hoisted to top of scope (whole function)
  - Can be called before it's defined
  - Always has a name
  - Function statement


FUNCTION EXPRESSION
  var myFunc = function() {
    return 42;
  };
  
  Characteristics:
  - Not hoisted (variable is, not function)
  - Must be defined before calling
  - Can be anonymous or named
  - Part of variable assignment


HOISTING DETAILS

Declarations are hoisted:
  foo(); // Works! Outputs 'hello'
  
  function foo() {
    console.log('hello');
  }


Expressions with var are partially hoisted:
  console.log(foo); // undefined
  foo(); // TypeError
  
  var foo = function() {
    console.log('hello');
  };
  
  // JavaScript reads this as:
  // var foo;
  // foo();
  // foo = function() { ... };


Expressions with const/let NOT hoisted:
  foo(); // ReferenceError: Cannot access 'foo' before initialization
  
  const foo = function() {
    console.log('hello');
  };
  
  // 'foo' in temporal dead zone until assignment


NAMED FUNCTION EXPRESSIONS
  const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
  };
  
  factorial(5); // Works
  fact(5); // ReferenceError - 'fact' not in outer scope
  
  // 'fact' only available inside the function for recursion


PRACTICAL IMPLICATIONS

Use Declarations for:
  - Module-level functions
  - Clear API functions
  - When hoisting is desirable


Use Expressions for:
  - Callbacks and array methods
  - Function composition
  - IIFEs (Immediately Invoked Function Expressions)
  - Arrow functions (ES6+)`}
            </pre>
          </div>

          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-[#43d9ad] text-left pb-4">Aspect</th>
                  <th className="text-[#43d9ad] text-left pb-4">Declaration</th>
                  <th className="text-[#43d9ad] text-left pb-4">Expression (var)</th>
                  <th className="text-[#43d9ad] text-left pb-4">Expression (const/let)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">Syntax</td>
                  <td className="py-2 pr-4 align-top">function foo() {}</td>
                  <td className="py-2 pr-4 align-top">var foo = function() {}</td>
                  <td className="py-2 align-top">const foo = function() {}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Hoisted</td>
                  <td className="py-2 pr-4 align-top">Fully (whole function)</td>
                  <td className="py-2 pr-4 align-top">Partially (var = undefined)</td>
                  <td className="py-2 align-top">Not hoisted (TDZ)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Call Before Define</td>
                  <td className="py-2 pr-4 align-top">Yes</td>
                  <td className="py-2 pr-4 align-top">No (TypeError)</td>
                  <td className="py-2 align-top">No (ReferenceError)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Must Have Name</td>
                  <td className="py-2 pr-4 align-top">Yes</td>
                  <td className="py-2 pr-4 align-top">No (anonymous OK)</td>
                  <td className="py-2 align-top">No (anonymous OK)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Use Case</td>
                  <td className="py-2 pr-4 align-top">Module API, public functions</td>
                  <td className="py-2 pr-4 align-top">Callbacks, closures</td>
                  <td className="py-2 align-top">Modern best practice for all</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionDeclarationVsExpression;
