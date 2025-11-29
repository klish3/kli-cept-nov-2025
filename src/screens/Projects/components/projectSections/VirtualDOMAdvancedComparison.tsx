import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VirtualDOMAdvancedComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="font-normal text-[#e5e9f0] text-lg">
          Virtual DOM: How It Works, Benefits & Downsides
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
        <a href="https://www.greatfrontend.com/questions/quiz/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Virtual DOM Advanced →</a>
        <a href="https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">GitHub: Advanced vDOM →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Detailed Process */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Detailed Virtual DOM Process</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-3">
              <div className="border-l-2 border-[#43d9ad] pl-3">
                <div className="text-[#43d9ad] text-sm font-medium">1. Initial Rendering</div>
                <div className="text-[#607b96] text-xs mt-1">React component → render() → vDOM tree created → real DOM</div>
              </div>
              <div className="border-l-2 border-[#43d9ad] pl-3">
                <div className="text-[#43d9ad] text-sm font-medium">2. State/Props Update</div>
                <div className="text-[#607b96] text-xs mt-1">setState() or props change → component re-renders</div>
              </div>
              <div className="border-l-2 border-[#43d9ad] pl-3">
                <div className="text-[#43d9ad] text-sm font-medium">3. New vDOM Created</div>
                <div className="text-[#607b96] text-xs mt-1">New vDOM tree with updated JSX</div>
              </div>
              <div className="border-l-2 border-[#43d9ad] pl-3">
                <div className="text-[#43d9ad] text-sm font-medium">4. Diffing/Reconciliation</div>
                <div className="text-[#607b96] text-xs mt-1">Compare new vDOM with old (fast, in-memory)</div>
              </div>
              <div className="border-l-2 border-[#43d9ad] pl-3">
                <div className="text-[#43d9ad] text-sm font-medium">5. Patch Real DOM</div>
                <div className="text-[#607b96] text-xs mt-1">Apply only differences to real DOM (minimized slow ops)</div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Benefits of Virtual DOM</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">Improved Performance</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Efficient updates</div>
                  <div>• Batch updates</div>
                  <div>• Minimize DOM operations</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">Declarative UI</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Describe desired state</div>
                  <div>• React handles updates</div>
                  <div>• Simplified development</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">Cross-Platform</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• React Native</div>
                  <div>• Consistent API</div>
                  <div>• Code reuse</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">Abstraction</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• No direct DOM manipulation</div>
                  <div>• Less error-prone</div>
                  <div>• Easier to reason about</div>
                </div>
              </div>
            </div>
          </div>

          {/* Downsides */}
          <div className="space-y-3">
            <div className="font-medium text-[#fea55f] text-sm">Downsides of Virtual DOM</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-xs mb-2">Complexity</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Learning curve</div>
                  <div>• Overhead for simple apps</div>
                  <div>• Extra abstraction layer</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-xs mb-2">Performance Limits</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Not always optimal</div>
                  <div>• Large apps still slow</div>
                  <div>• Manual optimization needed</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-xs mb-2">Memory Usage</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Maintain two DOM copies</div>
                  <div>• Extra memory consumption</div>
                  <div>• Overhead per component</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-xs mb-2">Diffing Overhead</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Diffing takes time</div>
                  <div>• Very large trees slow</div>
                  <div>• Can't avoid algorithm cost</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`VIRTUAL DOM: DETAILED GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HOW VIRTUAL DOM WORKS (DETAILED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INITIAL RENDER
   User opens app
   → React renders component
   → Creates vDOM tree (JS object)
   → Renders vDOM to actual DOM
   → Browser displays UI

2. USER INTERACTION / STATE CHANGE
   User clicks button / setState() called
   → Component function executes again
   → New JSX generated

3. NEW VDOM CREATED
   New vDOM tree created with new state
   Completely new object, different from old vDOM

4. DIFFING ALGORITHM (Reconciliation)
   React compares new vDOM with old vDOM
   This is FAST because it's in-memory JavaScript
   Identifies exactly which parts changed
   Creates a "diff" or "patch"

5. PATCH REAL DOM
   Only apply differences to real DOM
   This is SLOW, so React minimizes it
   Browser reflow/repaint only for changed elements
   Other elements untouched

EXAMPLE WALKTHROUGH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Initial State: count = 0
vDOM: { type: 'div', children: [{type: 'p', text: '0'}] }
Real DOM: <div><p>0</p></div>

User clicks button: count becomes 1
New vDOM: { type: 'div', children: [{type: 'p', text: '1'}] }

Diff: Only the text in <p> changed (0 → 1)
Patch: React updates only that <p>'s text
       Everything else stays the same

Real DOM after: <div><p>1</p></div>

BENEFITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. IMPROVED PERFORMANCE ✓
   - Direct DOM manipulation is SLOW
   - vDOM diffing in memory is FAST
   - Batch multiple updates together
   - Minimize total DOM operations
   - Better overall performance

2. DECLARATIVE UI ✓
   - Describe what UI should look like
   - React figures out HOW to update
   - Less error-prone than imperative
   - Easier to understand code
   - Simpler mental model

3. CROSS-PLATFORM ✓
   - React Native uses same vDOM concept
   - Web + Mobile consistent API
   - Code sharing possible
   - Similar development experience

4. ABSTRACTION ✓
   - No direct DOM manipulation needed
   - Developers don't think about DOM
   - Focus on state and logic
   - Less complexity in component code

DOWNSIDES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. COMPLEXITY ✗
   - Extra abstraction layer
   - More concepts to learn
   - Overhead for very simple apps
   - Not beneficial for static pages

2. NOT A SILVER BULLET ✗
   - Doesn't guarantee best performance
   - Very large apps still slow
   - Diffing algorithm has overhead
   - Can't avoid all slow operations

3. MEMORY OVERHEAD ✗
   - Maintain two DOM trees in memory
   - vDOM + actual DOM
   - Significant memory for large apps
   - Unnecessary for simple apps

4. DIFFING COST ✗
   - Comparing trees takes time
   - Very large vDOM trees slow
   - O(n) algorithm for linear time
   - Can't eliminate this cost

WHEN VIRTUAL DOM SHINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Complex, interactive UIs
✓ Frequent state changes
✓ Multiple data dependencies
✓ Large component trees
✓ Applications needing cross-platform

WHEN VIRTUAL DOM DOESN'T HELP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✗ Static pages
✗ Simple static content
✗ Vanilla JS is better
✗ Memory-constrained devices
✗ Server-side rendering only

BOTTOM LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Virtual DOM is an intelligent abstraction that
provides significant benefits for complex,
interactive applications by minimizing expensive
DOM operations. However, it comes with overhead
that isn't always justified for simple apps.`}
</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualDOMAdvancedComparison;
