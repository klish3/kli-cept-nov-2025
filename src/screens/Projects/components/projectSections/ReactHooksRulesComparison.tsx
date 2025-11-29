import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReactHooksRulesComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Rules of React Hooks
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-are-the-rules-of-hooks?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Hooks Rules →</a>
        <a href="https://github.com/greatfrontend/top-react-interview-questions/blob/main/questions/what-are-the-rules-of-hooks/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Hooks Rules (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* The Two Rules */}
          <div className="bg-[#011221] p-4 border border-[#fea55f] [font-family:'Fira_Code',Helvetica]">
            <div className="text-[#fea55f] font-bold mb-2">⚠️ Two Essential Rules</div>
            <div className="space-y-2 text-sm text-[#607b96]">
              <div>1. Only call hooks at the top level (NOT in conditions/loops)</div>
              <div>2. Only call hooks from React components or custom hooks</div>
            </div>
          </div>

          {/* Rule 1 Breakdown */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Rule 1: Top Level Only</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2">
              <div className="flex gap-2 mb-2">
                <div className="text-[#43d9ad] font-bold min-w-fit">Why?</div>
                <div className="text-xs">React matches hooks by call order. Order must be consistent.</div>
              </div>
              <div className="text-[#fea55f] font-bold mb-2">❌ Wrong Patterns:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#1e2d3d] p-2 rounded">
                  <div className="text-[#fea55f] mb-1">In Condition</div>
                  {`if (x) { useState() }`}
                </div>
                <div className="bg-[#1e2d3d] p-2 rounded">
                  <div className="text-[#fea55f] mb-1">In Loop</div>
                  {`for (...) { useState() }`}
                </div>
                <div className="bg-[#1e2d3d] p-2 rounded">
                  <div className="text-[#fea55f] mb-1">In Function</div>
                  {`function fn() { useState() }`}
                </div>
                <div className="bg-[#1e2d3d] p-2 rounded">
                  <div className="text-[#fea55f] mb-1">In Try/Catch</div>
                  {`try { useState() }`}
                </div>
              </div>
              <div className="text-[#43d9ad] font-bold mb-2 mt-3">✓ Correct Pattern:</div>
              <div className="bg-[#1e2d3d] p-2 rounded text-xs">
                <div>function MyComponent() {"{"}</div>
                <div>  const [x, setX] = useState() ← Top level</div>
                <div>  if (...) {"{"} {"}"} ← Conditions after</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>

          {/* Rule 1 Example */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs">Problem: Order Changes</div>
              <div className="bg-[#011221] p-3 border border-[#fea55f] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]">
                <div>Render 1: [state1, state2, state3]</div>
                <div>Render 2: if x {`{`}</div>
                <div>  state1, state2 (state3 missing!)</div>
                <div>{`}`}</div>
                <div className="text-[#fea55f] mt-2">React can't match hooks!</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs">Solution: Always Same Order</div>
              <div className="bg-[#011221] p-3 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]">
                <div>Always: state1, state2, state3</div>
                <div>Conditional logic comes AFTER</div>
                <div className="text-[#43d9ad] mt-2">React can reliably map hooks</div>
              </div>
            </div>
          </div>

          {/* Rule 2 */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Rule 2: React Functions/Custom Hooks Only</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2">
              <div className="text-[#43d9ad] font-bold mb-2">✓ Allowed:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#1e2d3d] p-2 rounded">Function Component</div>
                <div className="bg-[#1e2d3d] p-2 rounded">Custom Hooks</div>
              </div>
              <div className="text-[#fea55f] font-bold mb-2 mt-3">❌ Not Allowed:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#1e2d3d] p-2 rounded">Regular Functions</div>
                <div className="bg-[#1e2d3d] p-2 rounded">Class Components</div>
              </div>
            </div>
          </div>

          {/* ESLint Setup */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">ESLint Plugin Catches Violations</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]">
              <div>npm install eslint-plugin-react-hooks</div>
              <div className="mt-2 text-[#43d9ad]">Rules:</div>
              <div className="mt-1">• react-hooks/rules-of-hooks (error)</div>
              <div>• react-hooks/exhaustive-deps (warn)</div>
              <div className="text-xs text-[#607b96] mt-2">Catches violations at dev time!</div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="space-y-2">
            <div className="font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm">Common Mistakes</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="space-y-2">
                <div>
                  <div className="text-[#fea55f] font-bold">1. Conditional Hooks</div>
                  <div className="text-xs">{`if (user) { useState() }`} ← WRONG</div>
                </div>
                <div>
                  <div className="text-[#fea55f] font-bold">2. Early Returns</div>
                  <div className="text-xs">if (!ready) return; useState() ← WRONG</div>
                </div>
                <div>
                  <div className="text-[#fea55f] font-bold">3. Loop Hooks</div>
                  <div className="text-xs">items.forEach(item {"=>"} useState()) ← WRONG</div>
                </div>
                <div>
                  <div className="text-[#fea55f] font-bold">4. Callback Hooks</div>
                  <div className="text-xs">{`onClick={() => useState()}`} ← WRONG</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`RULES OF REACT HOOKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React has two essential rules for hooks to work correctly.
Breaking them causes unpredictable behavior and bugs.

WHY THESE RULES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React tracks hooks by call ORDER, not by name.
- First useState() call = first state variable
- Second useState() call = second state variable
- etc.

If hook order changes between renders, React gets confused
and updates wrong state variables.


RULE 1: ONLY CALL HOOKS AT TOP LEVEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ CORRECT:
function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  if (count > 0) {
    // Logic here is fine
  }
  
  return <div>{count}</div>;
}

WHY: Hooks called in same order every render


✗ WRONG - CONDITIONAL:
function MyComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0); // Problem!
  }
}

Problem: If condition is false on re-render,
         useState isn't called and hooks shift


✗ WRONG - LOOP:
function MyComponent() {
  for (let i = 0; i < 5; i++) {
    useEffect(() => {}); // Problem!
  }
}

Problem: Loop may run different times,
         changing hook call count


✗ WRONG - EARLY RETURN:
function MyComponent() {
  if (!loaded) return <Loading />;
  
  const [data, setData] = useState(); // Problem!
}

Problem: Early return skips hooks,
         hooks called inconsistently


RULE 2: ONLY CALL FROM REACT FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ ALLOWED:
- Function components
- Custom hooks

✗ NOT ALLOWED:
- Regular JavaScript functions
- Class components
- Event handlers
- setTimeout/setInterval callbacks


CORRECT WITH CUSTOM HOOKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function useCustomHook() {
  const [state, setState] = useState(0);
  useEffect(() => { }, []);
  return state;
}

function MyComponent() {
  const value = useCustomHook(); // ✓ OK
  return <div>{value}</div>;
}

function eventHandler() {
  const [state, setState] = useState(0); // ✗ WRONG
}


ESLINT PLUGIN HELPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

npm install eslint-plugin-react-hooks

Then configure:
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}

Plugin catches violations at dev time!`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Rule</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Details & Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Top Level Only</td>
                <td className="py-3 align-top">Never in conditionals, loops, or nested functions. React tracks hooks by call order and must be consistent every render to match state variables correctly.</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">React Functions Only</td>
                <td className="py-3 align-top">Call only from function components or custom hooks. Hooks are React-specific and don't work in regular JS functions or class components.</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Breaking Rule 1</td>
                <td className="py-3 align-top">State updates get mismatched, setState updates wrong state, useState returns wrong values, undefined behavior, difficult-to-debug bugs</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Breaking Rule 2</td>
                <td className="py-3 align-top">Throws "rules of hooks" error. Hooks won't have access to fiber tree, state won't persist, component won't work as expected</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
