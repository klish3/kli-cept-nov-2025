import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReactContextOptimization: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Optimizing React Context to Reduce Rerenders
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
        <a href="https://www.greatfrontend.com/questions/quiz/how-would-one-optimize-the-performance-of-react-contexts-to-reduce-rerenders?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Context Optimization →</a>
        <a href="https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/how-would-one-optimize-the-performance-of-react-contexts-to-reduce-rerenders/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Context Optimization (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Common Issues */}
          <div className="space-y-3">
            <div className="font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm">❌ Context Performance Problem</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs space-y-2">
              <div>• Context update causes ALL consumers to rerender</div>
              <div>• Even if they use only part of the context value</div>
              <div>• Creates performance bottleneck in large trees</div>
              <div>• No fine-grained reactivity like external state managers</div>
            </div>
          </div>

          {/* Optimization Strategies */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">✓ Optimization Strategies</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
                <div>
                  <div className="text-[#43d9ad] font-medium mb-2">1. Split Contexts</div>
                  <div className="text-[#607b96] text-xs">Separate state and dispatch into different contexts</div>
                </div>
                <div className="bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs">
                  <pre>{`const StateContext = createContext();
const DispatchContext = createContext();

// Consumers that only dispatch won't rerender
// when state updates`}</pre>
                </div>
              </div>

              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
                <div>
                  <div className="text-[#43d9ad] font-medium mb-2">2. Memoize Context Value</div>
                  <div className="text-[#607b96] text-xs">Use useMemo to prevent unnecessary object recreation</div>
                </div>
                <div className="bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs">
                  <pre>{`const value = useMemo(() => ({
  state,
  setState
}), [state]);

return <Provider value={value} />;`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* More Strategies */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
              <div>
                <div className="text-[#43d9ad] font-medium mb-2">3. Memoize Consumers</div>
                <div className="text-[#607b96] text-xs">Wrap components in React.memo to skip rerenders</div>
              </div>
              <div className="bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs">
                <pre>{`const MyComponent = memo(function({
  // only subscribe to needed values
}) {
  return ...;
});`}</pre>
              </div>
            </div>

            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
              <div>
                <div className="text-[#43d9ad] font-medium mb-2">4. Use Custom Selector Hooks</div>
                <div className="text-[#607b96] text-xs">Create hooks that only select needed values</div>
              </div>
              <div className="bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs">
                <pre>{`function useUser() {
  const ctx = useContext(State);
  return ctx.user; // only value needed
}`}</pre>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Best Practices</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs space-y-1">
              <div>✓ Split contexts by update frequency</div>
              <div>✓ Memoize both providers and consumers</div>
              <div>✓ Use custom hooks to select only needed state</div>
              <div>✓ Consider Redux/Zustand for complex apps</div>
              <div>✓ Profile with React DevTools to find bottlenecks</div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`OPTIMIZING REACT CONTEXT PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React Context is great for simple state but can cause
performance issues in large component trees.

THE PROBLEM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When context value changes, ALL consumers rerender,
even if they use only a small part of the context.

Example problem:
const MyContext = createContext({ user, theme, notifications });

// This consumer only needs theme
function Toolbar() {
  const { theme } = useContext(MyContext);
  return <div style={{background: theme.bg}} />;
}

// Updates to user or notifications still rerender Toolbar!

OPTIMIZATION STRATEGIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SPLIT CONTEXTS BY CONCERN
   Separate different types of data:
   
   const ThemeContext = createContext();
   const UserContext = createContext();
   const NotificationContext = createContext();
   
   // Now Toolbar only rerenders when theme changes

2. SEPARATE STATE AND DISPATCH
   const StateContext = createContext();
   const DispatchContext = createContext();
   
   // Components that only dispatch don't rerender
   // when state changes

3. MEMOIZE CONTEXT VALUE
   const value = useMemo(() => ({
     state,
     setState
   }), [state]);
   
   return <Provider value={value}>{children}</Provider>;

4. MEMOIZE CONSUMERS
   const Toolbar = memo(function() {
     const { theme } = useContext(ThemeContext);
     return ...;
   });

5. USE CUSTOM SELECTOR HOOKS
   function useTheme() {
     const { theme } = useContext(MyContext);
     return theme;
   }
   
   // Components only rerender when theme changes

WHEN TO USE CONTEXT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Theme/styling data (changes rarely)
✓ Auth/user info (changes rarely)
✓ Small to medium apps
✓ Shallow component trees

WHEN TO USE EXTERNAL STATE MANAGER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Large apps with frequent updates
✓ Complex state logic
✓ Need fine-grained subscriptions
✓ Deep component trees
Use: Redux, Zustand, MobX, Jotai`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactContextOptimization;
