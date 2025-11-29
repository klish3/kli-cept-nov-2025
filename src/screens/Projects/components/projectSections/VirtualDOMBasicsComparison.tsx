import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VirtualDOMBasicsComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="font-normal text-[#e5e9f0] text-lg">
          What is Virtual DOM?
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-virtual-dom-in-react?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Virtual DOM →</a>
        <a href="https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/what-is-virtual-dom-in-react/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">GitHub: Virtual DOM Guide →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* What is vDOM */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">What is the Virtual DOM?</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded">
              <div className="text-[#607b96] text-xs space-y-2">
                <div>• Lightweight copy of actual DOM kept in memory</div>
                <div>• JavaScript object representation of real DOM</div>
                <div>• Synced with real DOM through reconciliation</div>
                <div>• Main benefit: minimizes slow DOM operations</div>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">How Virtual DOM Works</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-[#43d9ad] font-bold text-sm">1.</div>
                <div>
                  <div className="text-[#43d9ad] text-sm">Initial Render</div>
                  <div className="text-[#607b96] text-xs mt-1">React creates vDOM tree (lightweight copy)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#43d9ad] font-bold text-sm">2.</div>
                <div>
                  <div className="text-[#43d9ad] text-sm">State/Props Change</div>
                  <div className="text-[#607b96] text-xs mt-1">New vDOM tree is created</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#43d9ad] font-bold text-sm">3.</div>
                <div>
                  <div className="text-[#43d9ad] text-sm">Diffing Algorithm</div>
                  <div className="text-[#607b96] text-xs mt-1">React compares new vDOM with previous (fast)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#43d9ad] font-bold text-sm">4.</div>
                <div>
                  <div className="text-[#43d9ad] text-sm">Update Real DOM</div>
                  <div className="text-[#607b96] text-xs mt-1">Only differences applied to real DOM (slow part minimized)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Benefits of Virtual DOM</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">Performance</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Batch updates together</div>
                  <div>• Minimal DOM operations</div>
                  <div>• Fast diffing in memory</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">Abstraction</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Declarative programming</div>
                  <div>• No manual DOM manipulation</div>
                  <div>• Easier to reason about</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">Cross-Platform</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• React Native uses same concept</div>
                  <div>• Consistent API</div>
                  <div>• Web + mobile</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">Predictability</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Consistent updates</div>
                  <div>• Easier debugging</div>
                  <div>• Testable</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`VIRTUAL DOM IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT IS THE VIRTUAL DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Virtual DOM = Lightweight copy of actual DOM
             kept in memory
             managed by JavaScript

It's a concept where React maintains a virtual
representation of the UI and syncs it with the
real DOM using reconciliation.

WHY VIRTUAL DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct DOM manipulation is SLOW:
  - Each DOM operation triggers reflow/repaint
  - Browser recalculates layout
  - Performance bottleneck

Virtual DOM allows:
  - Fast in-memory comparisons (diffing)
  - Batch updates together
  - Minimal actual DOM changes
  - Better performance overall

HOW IT WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: INITIAL RENDER
   React creates a vDOM tree
   vDOM is rendered to real DOM

Step 2: STATE CHANGE
   React creates NEW vDOM tree
   Uses updated state/props

Step 3: DIFFING (Reconciliation)
   Compare new vDOM with previous vDOM
   Find differences (fast operation in memory)
   Calculate minimal changes needed

Step 4: PATCH REAL DOM
   Apply only the differences to real DOM
   This is the slow part, but minimized

EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Initial render:
  vDOM: {
    type: 'div',
    children: [
      { type: 'p', text: 'Count: 0' }
    ]
  }
  Real DOM: <div><p>Count: 0</p></div>

User clicks button, count changes to 1:
  New vDOM: {
    type: 'div',
    children: [
      { type: 'p', text: 'Count: 1' }  ← CHANGED
    ]
  }

Diff: Only <p> text content changed
Update: Minimal update to real DOM

BENEFITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Performance
  - Minimizes slow DOM operations
  - Batches updates efficiently
  - Fast in-memory diffing

✓ Abstraction
  - Developers don't manipulate DOM directly
  - Declarative approach
  - Easier to understand component logic

✓ Cross-Platform
  - React Native uses same vDOM concept
  - Consistent development experience

✓ Predictability
  - Consistent, predictable updates
  - Easier to test
  - Easier to debug

DOWNSIDES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✗ Complexity
  - Overhead for very simple apps
  - Learning curve

✗ Not a Silver Bullet
  - Still limited by DOM speed for complex apps
  - Can't guarantee best performance
  - Depends on implementation

BOTTOM LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Virtual DOM is an excellent abstraction that
significantly improves web app performance by
minimizing expensive DOM operations while
providing developers with a cleaner, more
declarative API for building UIs.`}
</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualDOMBasicsComparison;
