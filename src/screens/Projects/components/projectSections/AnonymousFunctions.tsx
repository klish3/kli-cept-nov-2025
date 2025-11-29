import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnonymousFunctions: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Anonymous Functions
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
        <a href="https://www.greatfrontend.com/questions/quiz/whats-a-typical-use-case-for-anonymous-functions?practice=practice&tab=quiz">
          greatfrontend: Anonymous Functions →
        </a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx">
          github: Anonymous Functions (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* Definition */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">What is Anonymous?</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ No Name</div>
                  <div>Function without explicit name</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ Usually Expression</div>
                  <div>Assigned to variable or used immediately</div>
                </div>
              </div>
            </div>

            {/* Common Patterns */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Common Patterns</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Assigned to Variable</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`const greet = function() {
  return 'Hello';
};

greet(); // 'Hello'`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Callback Parameter</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`setTimeout(function() {
  console.log('later');
}, 1000);`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Array Method</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`[1, 2, 3].map(function(x) {
  return x * 2;
});`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">IIFE (Immediately Invoked)</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`(function() {
  const private = 'secret';
  console.log(private);
})();`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Primary Use Cases</div>
              <div className="space-y-2 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">1. Event Handlers</div>
                  <pre className="text-xs whitespace-pre-wrap">{`button.addEventListener('click', 
  function(e) {
    alert('Button clicked!');
  }
);`}</pre>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">2. Array Methods (map, filter, reduce)</div>
                  <pre className="text-xs whitespace-pre-wrap">{`const doubled = numbers.map(
  function(n) { 
    return n * 2; 
  }
);

const evens = numbers.filter(
  function(n) { 
    return n % 2 === 0; 
  }
);`}</pre>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">3. Async Callbacks</div>
                  <pre className="text-xs whitespace-pre-wrap">{`fetch(url).then(function(res) {
  return res.json();
}).catch(function(err) {
  console.error(err);
});`}</pre>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">4. Private Scope (IIFE)</div>
                  <pre className="text-xs whitespace-pre-wrap">{`(function() {
  const secret = 'private';
  window.api = function() {
    return secret;
  };
})();`}</pre>
                </div>
              </div>
            </div>

            {/* Arrow Functions */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Modern: Arrow Functions</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">Traditional Anonymous</div>
                  <pre className="text-xs whitespace-pre-wrap">{`const nums = [1, 2, 3];
nums.map(function(x) {
  return x * 2;
});`}</pre>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">Arrow Function (Cleaner)</div>
                  <pre className="text-xs whitespace-pre-wrap">{`const nums = [1, 2, 3];
nums.map(x => x * 2);

// Or longer form:
nums.map((x) => {
  return x * 2;
});`}</pre>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2">
              <div className="text-[#43d9ad] font-bold">Key Benefits</div>
              <div className="grid grid-cols-2 gap-3 text-sm text-[#607b96]">
                <div>• No need for named function if used once</div>
                <div>• Perfect for callbacks and event handlers</div>
                <div>• Cleaner syntax with arrow functions (ES6+)</div>
                <div>• IIFE creates private scope (pre-ES6 modules)</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`ANONYMOUS FUNCTIONS

Definition: A function without an explicit name. Often used as function
expressions assigned to variables or passed as arguments.


Syntax:
  // Traditional
  const func = function() {
    // function body
  };
  
  // Arrow (ES6+)
  const func = () => {
    // function body
  };


Main Use Case: CALLBACKS

Anonymous functions are perfect for callbacks because:
1. They're used once (no need to name them)
2. They have access to surrounding scope (closure)
3. They keep code compact and inline


TYPICAL USE CASES:

1. EVENT HANDLERS
  button.addEventListener('click', function(event) {
    console.log('Clicked!');
  });


2. ARRAY METHODS
  const numbers = [1, 2, 3, 4, 5];
  
  // map - transform array
  const doubled = numbers.map(function(x) {
    return x * 2;
  });
  
  // filter - select items
  const evens = numbers.filter(function(x) {
    return x % 2 === 0;
  });
  
  // reduce - combine items
  const sum = numbers.reduce(function(acc, x) {
    return acc + x;
  }, 0);


3. ASYNCHRONOUS OPERATIONS
  // Callback
  setTimeout(function() {
    console.log('After 1 second');
  }, 1000);
  
  // Promise then/catch
  fetch('/api/data')
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      console.error(error);
    });
  
  // Async/await
  async function load() {
    const data = await fetch('/api/data');
  }


4. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
  // Creates private scope (common before ES6 modules)
  (function() {
    const private = 'This is private';
    window.exposed = function() {
      return private;
    };
  })();
  
  // Called immediately, private variable hidden


5. FUNCTION COMPOSITION
  const compose = (f, g) => x => f(g(x));
  
  const add1 = x => x + 1;
  const double = x => x * 2;
  
  const doubleThenAdd1 = compose(add1, double);
  console.log(doubleThenAdd1(5)); // 11


MODERN APPROACH: ARROW FUNCTIONS (ES6+)

More concise syntax for anonymous functions:
  // Traditional
  numbers.map(function(x) { return x * 2; });
  
  // Arrow
  numbers.map(x => x * 2);
  
  // Multi-line arrow
  numbers.map(x => {
    const result = x * 2;
    return result;
  });


Benefits of Arrow Functions:
- Shorter syntax
- Lexical 'this' binding (no need to .bind())
- Great for callbacks and single-use functions


When NOT to Use Anonymous Functions:
- When function is used multiple times (give it a name for clarity)
- When debugging (named functions appear in stack traces)
- For class methods (use regular methods instead)`}
            </pre>
          </div>

          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-[#43d9ad] text-left pb-4">Use Case</th>
                  <th className="text-[#43d9ad] text-left pb-4">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">Event Handler</td>
                  <td className="py-2 align-top">addEventListener, onclick, setTimeout callbacks</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Array Methods</td>
                  <td className="py-2 align-top">map(), filter(), reduce(), forEach() transformations</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Promise Callbacks</td>
                  <td className="py-2 align-top">.then(), .catch(), async/await functions</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">IIFE (Immediately Invoked)</td>
                  <td className="py-2 align-top">
                    {`(function() { ... })()`}
                    {" - create private scope"}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Single-Use Functions</td>
                  <td className="py-2 align-top">Any function used only once; no need to name</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnonymousFunctions;
