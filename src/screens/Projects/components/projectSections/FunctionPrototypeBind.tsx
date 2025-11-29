import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FunctionPrototypeBind: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Function.prototype.bind
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
        <a href="https://www.greatfrontend.com/questions/quiz/explain-function-prototype-bind?practice=practice&tab=quiz">
          greatfrontend: Function.prototype.bind →
        </a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-function-prototype-bind/en-US.mdx">
          github: Function.prototype.bind (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* What bind Does */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">What bind() Does</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ Creates new function</div>
                  <div>Returns new function with <span className="text-[#fea55f]">this</span> permanently bound</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ Doesn't call immediately</div>
                  <div>Unlike <span className="text-[#fea55f]">call</span> and <span className="text-[#fea55f]">apply</span>, bind returns function for later use</div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Common Use Cases</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Event Handlers</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`button.addEventListener('click',
  this.handleClick
    .bind(this)
)`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Callbacks</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`setTimeout(
  this.updateData
    .bind(this),
  1000
)`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Array Methods</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`users.map(
  this.format
    .bind(this)
)`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Partial Application</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`const add5 =
  add.bind(null, 5)
add5(3) // 8`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">bind vs call vs apply</div>
              <div className="grid grid-cols-3 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">bind</div>
                  <div>Returns new bound function</div>
                  <div className="text-xs text-[#38a169] mt-2">No immediate execution</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">call</div>
                  <div>Executes immediately</div>
                  <div className="text-xs text-[#38a169] mt-2">Individual arguments</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">apply</div>
                  <div>Executes immediately</div>
                  <div className="text-xs text-[#38a169] mt-2">Array of arguments</div>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2">
              <div className="text-[#43d9ad] font-bold">⚠️ Important Points</div>
              <div className="grid grid-cols-2 gap-3 text-sm text-[#607b96]">
                <div>• <span className="text-[#fea55f]">this</span> cannot be changed once bound</div>
                <div>• Bound function can have preset arguments (currying)</div>
                <div>• Multiple bind calls create separate functions</div>
                <div>• Cannot unbind; must store reference to bound function</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`FUNCTION.PROTOTYPE.BIND() PATTERN

Purpose: Creates a new function with 'this' permanently bound

Basic Syntax:
  const boundFunc = originalFunc.bind(thisArg, arg1, arg2, ...)
  boundFunc(arg3, arg4, ...) // Call without passing 'this' again


Key Characteristics:
  1. Returns new function (doesn't execute immediately like call/apply)
  2. Permanently binds 'this' context
  3. Can preset arguments (partial application/currying)
  4. Bound function always uses the bound 'this', even if called differently


Use Case 1: Method as Callback
  const obj = {
    name: 'John',
    greet() { console.log(this.name); }
  };
  
  // Without bind (loses 'this'):
  setTimeout(obj.greet, 1000); // undefined
  
  // With bind (preserves 'this'):
  setTimeout(obj.greet.bind(obj), 1000); // 'John'


Use Case 2: Event Handlers (especially in Classes)
  class Button {
    constructor() {
      this.clicks = 0;
      this.element.addEventListener(
        'click',
        this.handleClick.bind(this)
      );
    }
    
    handleClick() {
      this.clicks++;
    }
  }


Use Case 3: Partial Application (Currying)
  function add(a, b, c) {
    return a + b + c;
  }
  
  const add5 = add.bind(null, 5);
  add5(3, 2); // 10 (5 is preset)


Comparison with call() and apply():
  func.call(thisArg, arg1, arg2)     // Executes immediately, args listed
  func.apply(thisArg, [arg1, arg2])  // Executes immediately, args as array
  func.bind(thisArg, arg1, arg2)     // Returns function, not executed`}
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
                  <td className="py-2 pr-4 align-top">Return Value</td>
                  <td className="py-2 align-top">New function, not execution result</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Immediate Execution</td>
                  <td className="py-2 align-top">No - function must be called later</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">this Binding</td>
                  <td className="py-2 align-top">Permanent - cannot change even if called with different context</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Argument Preset</td>
                  <td className="py-2 align-top">Yes - can preset some arguments for later calls</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Common Use Case</td>
                  <td className="py-2 align-top">Event handlers, array methods, setTimeout/setInterval callbacks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionPrototypeBind;
