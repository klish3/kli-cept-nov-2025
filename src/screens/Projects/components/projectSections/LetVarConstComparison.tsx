import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LetVarConstComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          let, var, const Differences
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-variables-created-using-let-var-or-const?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: let/var/const →</a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: let/var/const (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Variable Type Headers */}
          <div className="grid grid-cols-4 gap-4 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">
            <div>Aspect</div>
            <div>var</div>
            <div>let</div>
            <div>const</div>
          </div>

          {/* Scope Row */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Scope</div>
            <div className="space-y-2">
              <div className="text-xs">Function-scoped</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#fea55f] text-xs block mb-1">function scope()</code>
                <code className="text-[#607b96] text-xs block ml-2">if {'{'} var x = 1; {'}'}</code>
                <code className="text-[#607b96] text-xs block ml-2">console.log(x) // 1</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Block-scoped</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs block mb-1">if (true) {'{'}</code>
                <code className="text-[#607b96] text-xs block ml-2">let x = 1;</code>
                <code className="text-[#607b96] text-xs block ml-2">{'}'}</code>
                <code className="text-[#fea55f] text-xs block ml-2">// x is not defined</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Block-scoped</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs block mb-1">if (true) {'{'}</code>
                <code className="text-[#607b96] text-xs block ml-2">const x = 1;</code>
                <code className="text-[#607b96] text-xs block ml-2">{'}'}</code>
                <code className="text-[#fea55f] text-xs block ml-2">// x is not defined</code>
              </div>
            </div>
          </div>

          {/* Hoisting Row */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Hoisting</div>
            <div className="space-y-2">
              <div className="text-xs">Hoisted & initialized to undefined</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#607b96] text-xs block mb-1">console.log(x)</code>
                <code className="text-[#607b96] text-xs block mb-1">// undefined (not error)</code>
                <code className="text-[#43d9ad] text-xs block">var x = 1;</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Hoisted but not initialized</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#607b96] text-xs block mb-1">console.log(x)</code>
                <code className="text-[#fea55f] text-xs block mb-1">// ReferenceError (TDZ)</code>
                <code className="text-[#43d9ad] text-xs block">let x = 1;</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Hoisted but not initialized</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#607b96] text-xs block mb-1">console.log(x)</code>
                <code className="text-[#fea55f] text-xs block mb-1">// ReferenceError (TDZ)</code>
                <code className="text-[#43d9ad] text-xs block">const x = 1;</code>
              </div>
            </div>
          </div>

          {/* Reassignment Row */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Reassignment</div>
            <div className="space-y-2">
              <div className="text-xs">✓ Allowed</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs block">var x = 1;</code>
                <code className="text-[#43d9ad] text-xs block">x = 2; // OK</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">✓ Allowed</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs block">let x = 1;</code>
                <code className="text-[#43d9ad] text-xs block">x = 2; // OK</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">✗ Not allowed</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs block">const x = 1;</code>
                <code className="text-[#fea55f] text-xs block">x = 2; // TypeError</code>
              </div>
            </div>
          </div>

          {/* Re-declaration Row */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Re-declaration</div>
            <div className="space-y-2">
              <div className="text-xs">✓ Allowed (same scope)</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs block">var x = 1;</code>
                <code className="text-[#43d9ad] text-xs block">var x = 2; // OK</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">✗ Not allowed (same scope)</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs block">let x = 1;</code>
                <code className="text-[#fea55f] text-xs block">let x = 2; // Error</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">✗ Not allowed (same scope)</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs block">const x = 1;</code>
                <code className="text-[#fea55f] text-xs block">const x = 2; // Error</code>
              </div>
            </div>
          </div>

          {/* Temporal Dead Zone */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Temporal Dead Zone (TDZ)</div>
            <div className="space-y-2">
              <div className="text-xs">None</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs">Not applicable</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">From block start to declaration</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#fea55f] text-xs block mb-1">⚠ ReferenceError</code>
                <code className="text-[#607b96] text-xs block">before declaration</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">From block start to declaration</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <code className="text-[#fea55f] text-xs block mb-1">⚠ ReferenceError</code>
                <code className="text-[#607b96] text-xs block">before declaration</code>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="grid grid-cols-2 gap-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">When to Use</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#fea55f]">var: Avoid</div>
                  <div className="text-xs">Old, function-scoped, error-prone</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">let: Mutable values</div>
                  <div className="text-xs">Variables that need reassignment</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">const: Default choice</div>
                  <div className="text-xs">Prefer const by default, use let if needed</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Modern Standard</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad]">✓ Use const by default</div>
                  <div className="text-xs">Prevents accidental reassignment</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Use let when reassigning</div>
                  <div className="text-xs">Block-scoped, no hoisting confusion</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Never use var</div>
                  <div className="text-xs">Causes bugs, bad practice, unnecessary</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`var
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Function-scoped (not block-scoped)
• Hoisted with "undefined" initialization
• Can be redeclared in same scope
• Can be reassigned
• Initializes to undefined if hoisted but not assigned

Example:
function test() {
  console.log(x);  // undefined (hoisted)
  if (true) {
    var x = 1;
  }
  console.log(x);  // 1 (accessible outside if block!)
}

PROBLEM: Function scope is confusing for developers used to 
         block-scoping from other languages


let
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Block-scoped (inside {}, if, for, while, etc.)
• Hoisted but NOT initialized (Temporal Dead Zone)
• Cannot be redeclared in same scope
• Can be reassigned
• Accessing before declaration causes ReferenceError

Example:
function test() {
  console.log(x);  // ReferenceError (in TDZ)
  if (true) {
    let x = 1;
  }
  console.log(x);  // ReferenceError (x only exists in if block)
}

BETTER: Block scope matches intuition, no hoisting surprises


const
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Block-scoped (same as let)
• Hoisted but NOT initialized (Temporal Dead Zone)
• Cannot be redeclared in same scope
• Cannot be reassigned
• Must be initialized at declaration
• Objects/arrays can be mutated (const prevents reassignment, not mutation)

Example:
const x = 1;
x = 2;  // TypeError

const obj = { name: 'Alice' };
obj.name = 'Bob';  // OK (mutation allowed)
obj = {};  // TypeError (reassignment not allowed)

MODERN STANDARD: Prevents accidental reassignment


KEY DIFFERENCES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scope:
• var → function-scoped (confusing)
• let/const → block-scoped (predictable)

Hoisting:
• var → hoisted with undefined (accessible early)
• let/const → hoisted but in TDZ (ReferenceError if accessed)

Reassignment:
• var/let → can be reassigned
• const → cannot be reassigned

Redeclaration:
• var → can be redeclared
• let/const → cannot be redeclared

Temporal Dead Zone:
• var → no TDZ
• let/const → TDZ from block start to declaration


BEST PRACTICE TODAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFAULT TO const
   • Prevents accidental reassignment
   • Clearer intent
   • Makes code safer

2. USE let WHEN REASSIGNING
   • For loop counters
   • Variables that legitimately change
   • Temporary calculations

3. NEVER USE var
   • Old ES5 syntax
   • Function scope causes bugs
   • Hoisting behavior confusing
   • Use let/const instead

This approach makes code:
✓ Safer
✓ More predictable
✓ Easier to understand
✓ Less buggy`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Feature</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">var</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">let</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">const</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Scope</td>
                <td className="py-3 pr-4 align-top">Function</td>
                <td className="py-3 pr-4 align-top">Block</td>
                <td className="py-3 align-top">Block</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Hoisting</td>
                <td className="py-3 pr-4 align-top">Hoisted to undefined</td>
                <td className="py-3 pr-4 align-top">Hoisted but not initialized</td>
                <td className="py-3 align-top">Hoisted but not initialized</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Reassignable</td>
                <td className="py-3 pr-4 align-top">Yes</td>
                <td className="py-3 pr-4 align-top">Yes</td>
                <td className="py-3 align-top">No</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Redeclareble</td>
                <td className="py-3 pr-4 align-top">Yes</td>
                <td className="py-3 pr-4 align-top">No</td>
                <td className="py-3 align-top">No</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Temporal Dead Zone</td>
                <td className="py-3 pr-4 align-top">No</td>
                <td className="py-3 pr-4 align-top">Yes</td>
                <td className="py-3 align-top">Yes</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Recommendation</td>
                <td className="py-3 pr-4 align-top">Avoid</td>
                <td className="py-3 pr-4 align-top">When reassigning</td>
                <td className="py-3 align-top">Default choice</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
