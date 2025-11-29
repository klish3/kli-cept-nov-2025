import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Hoisting: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Explaining Hoisting in JavaScript
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
        <a href="https://www.greatfrontend.com/questions/quiz/explain-hoisting?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Hoisting →</a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-hoisting/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Hoisting (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* What is Hoisting */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">What is Hoisting?</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica] space-y-2">
              <div>Hoisting is JavaScript's behavior of moving declarations to the top of their scope</div>
              <div>during the compilation phase, before code execution.</div>
              <div className="text-[#43d9ad]">Variable and function declarations are hoisted, not initializations.</div>
            </div>
          </div>

          {/* Function Hoisting */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Function Hoisting</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div className="text-[#43d9ad] font-medium text-sm">Function Declaration (Hoisted)</div>
                <div className="text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]">
                  <pre>{`// Can call BEFORE declaration
sayHi(); // "Hi!" (works)

function sayHi() {
  console.log("Hi!");
}`}</pre>
                </div>
              </div>

              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div className="text-[#43d9ad] font-medium text-sm">Function Expression (Not Hoisted)</div>
                <div className="text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]">
                  <pre>{`// Error: can't call before declaration
sayHi(); // TypeError

const sayHi = function() {
  console.log("Hi!");
};`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Variable Hoisting */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Variable Hoisting Differences</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2">
                <div className="text-[#fea55f] font-medium text-sm">var (Hoisted)</div>
                <div className="text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]">
                  <pre>{`console.log(x); // undefined
var x = 5;
console.log(x); // 5`}</pre>
                </div>
                <div className="text-[#607b96] text-xs">Hoisted with undefined</div>
              </div>

              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2">
                <div className="text-[#fea55f] font-medium text-sm">let (TDZ)</div>
                <div className="text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]">
                  <pre>{`console.log(x); // ReferenceError
let x = 5;
console.log(x); // 5`}</pre>
                </div>
                <div className="text-[#607b96] text-xs">Not accessible until declaration</div>
              </div>

              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2">
                <div className="text-[#fea55f] font-medium text-sm">const (TDZ)</div>
                <div className="text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]">
                  <pre>{`console.log(x); // ReferenceError
const x = 5;
console.log(x); // 5`}</pre>
                </div>
                <div className="text-[#607b96] text-xs">Not accessible until declaration</div>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">How JavaScript Interprets Code</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3 text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]">
              <div>
                <div className="text-[#43d9ad] font-medium mb-1">Your Code:</div>
                <pre>{`console.log(x);
var x = 5;`}</pre>
              </div>
              <div>
                <div className="text-[#43d9ad] font-medium mb-1">Interpreted As:</div>
                <pre>{`var x; // declaration hoisted, initialized to undefined
console.log(x); // undefined
x = 5; // assignment stays in place`}</pre>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Best Practices</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica] space-y-1">
              <div>✓ Always declare variables before using</div>
              <div>✓ Use const/let instead of var</div>
              <div>✓ Declare functions before calling (even though allowed)</div>
              <div>✓ Understand Temporal Dead Zone (TDZ)</div>
              <div>✓ Don't rely on hoisting behavior</div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`HOISTING IN JAVASCRIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hoisting is the process where variables and functions
are moved to the top of their scope before execution.

KEY CONCEPT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

During the creation phase, JavaScript engine:
1. Allocates memory for variables and functions
2. Sets variable initial values
3. Reads the entire code (compilation phase)

Then during execution phase, code runs line by line.

FUNCTION HOISTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Function declarations are hoisted completely
Can call function BEFORE it's declared:

sayHi(); // Works! Output: "Hi"

function sayHi() {
  console.log("Hi");
}

✗ Function expressions are NOT hoisted

sayHi(); // TypeError: sayHi is not a function

const sayHi = function() {
  console.log("Hi");
};

VAR HOISTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var is hoisted with 'undefined' initialization

console.log(x); // undefined (not error!)
var x = 5;
console.log(x); // 5

Interpreted as:
var x;              // declaration
console.log(x);     // undefined
x = 5;              // assignment
console.log(x);     // 5

LET AND CONST HOISTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let and const ARE hoisted, but NOT initialized
Creates "Temporal Dead Zone" (TDZ)

console.log(x); // ReferenceError: Cannot access before init
let x = 5;

console.log(y); // ReferenceError: Cannot access before init
const y = 10;

TDZ:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const a = 1;

{
  // TDZ starts here
  console.log(a); // 1 (global a)
  
  // This line would throw ReferenceError if uncommented:
  // console.log(b); // Cannot access 'b' before initialization
  
  const b = 2; // TDZ ends here
  console.log(b); // 2 (local b)
}

PRACTICAL EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What you write:
console.log(name); // What does this print?
var name = "John";

JavaScript reads it as:
var name;              // Hoisted, undefined
console.log(name);     // undefined
name = "John";
console.log(name);     // "John"

BEST PRACTICES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Don't rely on hoisting - it's confusing
2. Always declare variables at the top
3. Use const by default, let when needed
4. NEVER use var
5. Declare functions before calling them
6. Understand it for reading others' code

SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Functions: Fully hoisted, can call before declaration
- var: Hoisted but undefined until assignment
- let/const: Hoisted but in TDZ until declaration
- Hoisting exists but shouldn't be relied upon in code`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hoisting;
