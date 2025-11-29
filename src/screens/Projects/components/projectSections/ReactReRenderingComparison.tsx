import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReactReRenderingComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="font-normal text-[#e5e9f0] text-lg">
          React Re-rendering
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-does-re-rendering-mean-in-react?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Re-rendering →</a>
        <a href="https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/what-does-re-rendering-mean-in-react/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">GitHub: Re-rendering Guide →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Triggers */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">What Triggers Re-rendering?</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-3">State Changes</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded">
                  <div>setState(newValue)</div>
                  <div>{'setCount(prev => prev + 1)'}</div>
                  <div className="text-[#43d9ad] mt-1">→ Re-render</div>
                </div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-3">Prop Changes</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded">
                  <div>{'<Child count={5} />'}</div>
                  <div>{'<Child count={6} />'}</div>
                  <div className="text-[#43d9ad] mt-1">→ Child re-renders</div>
                </div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-3">Parent Re-render</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded">
                  <div>Parent state changes</div>
                  <div>All children re-render</div>
                  <div className="text-[#43d9ad] mt-1">→ Even if props unchanged</div>
                </div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-3">Context Changes</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded">
                  <div>Context.Provider value changes</div>
                  <div className="text-[#43d9ad] mt-1">→ All consumers re-render</div>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Re-rendering Process</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-[#43d9ad] font-bold">1.</div>
                <div>
                  <div className="text-[#43d9ad] text-sm">State/Props Change</div>
                  <div className="text-[#607b96] text-xs mt-1">Component receives new state or props</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#43d9ad] font-bold">2.</div>
                <div>
                  <div className="text-[#43d9ad] text-sm">Render Function Called</div>
                  <div className="text-[#607b96] text-xs mt-1">Function body executes → new JSX</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#43d9ad] font-bold">3.</div>
                <div>
                  <div className="text-[#43d9ad] text-sm">Virtual DOM Comparison</div>
                  <div className="text-[#607b96] text-xs mt-1">New vDOM compared to previous (diffing)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#43d9ad] font-bold">4.</div>
                <div>
                  <div className="text-[#43d9ad] text-sm">DOM Updates</div>
                  <div className="text-[#607b96] text-xs mt-1">Only differences applied to real DOM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Optimization */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Optimization Techniques</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">React.memo</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs">
                  <div>Prevents re-render if props</div>
                  <div>haven't changed</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">useMemo</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs">
                  <div>Memoize expensive</div>
                  <div>computations</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">useCallback</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs">
                  <div>Memoize function</div>
                  <div>references</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">PureComponent</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs">
                  <div>Shallow comparison</div>
                  <div>of props/state</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`RE-RENDERING IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Re-rendering is when React calls a component's
render function again to update the DOM.

WHAT TRIGGERS RE-RENDERING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Component State Changes
   const [count, setCount] = useState(0);
   setCount(count + 1); // → re-render

2. Props Change
   <Child name="Alice" />  // → re-render Child
   <Child name="Bob" />

3. Parent Re-renders
   Parent state changes → all children re-render
   (even if their props didn't change)

4. Context Value Changes
   <Provider value={newValue}>
   All consumers re-render

RE-RENDERING PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: State or props change
Step 2: React calls component function
Step 3: New JSX is generated (new vDOM)
Step 4: vDOM compared to previous (diffing)
Step 5: Only differences applied to real DOM
Step 6: Browser displays updated UI

PERFORMANCE CONSIDERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Re-rendering itself is cheap. The work happens in:
  1. Running component function
  2. Diffing vDOM (usually fast)
  3. Updating actual DOM (slowest part)

But unnecessary re-renders waste CPU:
  - Complex calculations run again
  - Expensive operations repeated
  - Child components unnecessarily re-render

OPTIMIZATION TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. React.memo
   Prevent re-render if props unchanged
   const MyComponent = React.memo(Component);

2. useMemo
   Memoize expensive computations
   const result = useMemo(() => expensiveCalc(), [deps]);

3. useCallback
   Memoize function references
   const handleClick = useCallback(() => {...}, [deps]);

4. PureComponent
   Shallow comparison of props & state
   class Pure extends React.PureComponent

5. Key Prop
   Help React identify which items changed
   <Item key={item.id} />

6. Code Splitting
   Load code lazily with React.lazy()
   const LazyComponent = React.lazy(() => import('./Component'));`}
</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactReRenderingComparison;
