import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StateVsContextVsExternalManager: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Choosing Between State, Context, and External Managers
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
        <a href="https://www.greatfrontend.com/questions/quiz/how-do-you-decide-between-using-react-state-context-and-external-state-managers?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: State Management Options →</a>
        <a href="https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/how-do-you-decide-between-using-react-state-context-and-external-state-managers/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: State Management (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Three Options Comparison */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">State Management Options</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2">
                <div className="text-[#43d9ad] font-medium text-sm">useState</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>✓ Component-local state</div>
                  <div>✓ Simplest option</div>
                  <div>✓ No boilerplate</div>
                  <div className="text-[#fea55f]">✗ Can't share easily</div>
                </div>
              </div>

              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2">
                <div className="text-[#43d9ad] font-medium text-sm">Context API</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>✓ Share across tree</div>
                  <div>✓ Built-in to React</div>
                  <div>✓ Good for themes/auth</div>
                  <div className="text-[#fea55f]">✗ All consumers rerender</div>
                </div>
              </div>

              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2">
                <div className="text-[#43d9ad] font-medium text-sm">Redux/Zustand</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>✓ Complex state logic</div>
                  <div>✓ Fine-grained updates</div>
                  <div>✓ DevTools support</div>
                  <div className="text-[#fea55f]">✗ More boilerplate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Matrix */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Decision Matrix</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] overflow-x-auto">
              <table className="w-full [font-family:'Fira_Code',Helvetica] text-xs">
                <thead>
                  <tr className="border-b border-[#1e2d3d]">
                    <th className="text-[#43d9ad] text-left pb-3 pr-4">Criteria</th>
                    <th className="text-[#43d9ad] text-left pb-3 pr-4">Use useState</th>
                    <th className="text-[#43d9ad] text-left pb-3 pr-4">Use Context</th>
                    <th className="text-[#43d9ad] text-left pb-3">Use Redux</th>
                  </tr>
                </thead>
                <tbody className="text-[#607b96]">
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-2 pr-4">Scope</td>
                    <td className="py-2 pr-4">Single component</td>
                    <td className="py-2 pr-4">Component tree</td>
                    <td className="py-2">Application-wide</td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-2 pr-4">Update freq</td>
                    <td className="py-2 pr-4">Any</td>
                    <td className="py-2 pr-4">Low frequency</td>
                    <td className="py-2">Any (optimized)</td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-2 pr-4">Complexity</td>
                    <td className="py-2 pr-4">Low</td>
                    <td className="py-2 pr-4">Medium</td>
                    <td className="py-2">High</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">DevTools</td>
                    <td className="py-2 pr-4">React DevTools</td>
                    <td className="py-2 pr-4">React DevTools</td>
                    <td className="py-2">Redux DevTools</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Use Case Examples */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
              <div className="text-[#43d9ad] font-medium text-sm">useState Examples</div>
              <div className="text-[#607b96] text-xs space-y-1">
                <div>✓ Form input values</div>
                <div>✓ Toggle visibility</div>
                <div>✓ Modal open/close</div>
                <div>✓ Tab selection</div>
              </div>
            </div>

            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
              <div className="text-[#43d9ad] font-medium text-sm">Context Examples</div>
              <div className="text-[#607b96] text-xs space-y-1">
                <div>✓ User authentication</div>
                <div>✓ Theme (light/dark)</div>
                <div>✓ Language/i18n</div>
                <div>✓ User preferences</div>
              </div>
            </div>

            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
              <div className="text-[#43d9ad] font-medium text-sm">Redux/Zustand</div>
              <div className="text-[#607b96] text-xs space-y-1">
                <div>✓ Shopping cart</div>
                <div>✓ Complex app state</div>
                <div>✓ Time-travel debugging</div>
                <div>✓ Normalized data</div>
              </div>
            </div>

            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
              <div className="text-[#43d9ad] font-medium text-sm">Decision Tips</div>
              <div className="text-[#607b96] text-xs space-y-1">
                <div>• Start with useState</div>
                <div>• Add Context when needed</div>
                <div>• Use Redux for large apps</div>
                <div>• Profile before optimizing</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`CHOOSING STATE MANAGEMENT OPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React provides multiple ways to manage state. The best
choice depends on your application's needs.

OPTION 1: USESTATE (Component-Local)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best for:
✓ Form inputs and temporary UI state
✓ Component-specific state (modal open, tab)
✓ Simple applications
✓ When sharing isn't needed

Example:
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

Pros:
- Simplest, no boilerplate
- Good performance (no unnecessary renders)
- Easy to test

Cons:
- Can't share across components
- Prop drilling for nested components

OPTION 2: REACT CONTEXT (Shared State)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best for:
✓ Theme (light/dark mode)
✓ Authentication/User info
✓ Localization
✓ Infrequent updates

Example:
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

Pros:
- Share state across tree without prop drilling
- Built-in to React
- Good for static data

Cons:
- All consumers rerender on update
- Performance issues in large trees
- Limited debugging

OPTION 3: EXTERNAL STATE MANAGERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Options: Redux, Zustand, MobX, Recoil

Best for:
✓ Large, complex applications
✓ Frequent state updates
✓ Complex state logic
✓ Time-travel debugging needed

Example with Zustand:
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function App() {
  const count = useStore((state) => state.count);
  return <div>Count: {count}</div>;
}

Pros:
- Fine-grained reactivity (only needed renders)
- Complex state management
- DevTools and middleware
- Scalable for large apps

Cons:
- More boilerplate
- Learning curve
- Overkill for simple apps

DECISION FLOWCHART:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Is state shared?
  NO  → useState
  YES → Does it change frequently?
         NO  → Context API
         YES → External state manager (Redux/Zustand)

RECOMMENDATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Start with useState (Pareto principle)
2. Add Context when needed for shared, static data
3. Switch to Redux/Zustand for large apps
4. Measure performance before optimizing`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default StateVsContextVsExternalManager;
