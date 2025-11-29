import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReactHooksBenefitsComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Benefits of React Hooks
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-are-the-benefits-of-using-react-hooks?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: React Hooks Benefits →</a>
        <a href="https://github.com/greatfrontend/top-react-interview-questions/blob/main/questions/what-are-the-benefits-of-using-react-hooks/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Hooks Benefits (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Key Benefits Overview */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-3">
              <div className="font-medium text-[#43d9ad]">Code Quality</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div className="flex gap-2">
                  <div className="text-[#43d9ad] min-w-fit">✓ Readable</div>
                  <div className="text-xs">Functional code is simpler than class logic</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#43d9ad] min-w-fit">✓ Testable</div>
                  <div className="text-xs">Pure functions easier to unit test</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#43d9ad] min-w-fit">✓ Maintainable</div>
                  <div className="text-xs">Logic grouped with related concerns</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="font-medium text-[#43d9ad]">Development Speed</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div className="flex gap-2">
                  <div className="text-[#43d9ad] min-w-fit">✓ Less Boilerplate</div>
                  <div className="text-xs">No constructor, this binding, etc.</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#43d9ad] min-w-fit">✓ Reusable</div>
                  <div className="text-xs">Custom hooks extract shared logic</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#43d9ad] min-w-fit">✓ Less Code</div>
                  <div className="text-xs">Fewer lines to accomplish same thing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Hooks Benefits */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Major Hooks & Benefits</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">useState</div>
                  <div className="text-xs space-y-1">
                    <div>• Add state without class</div>
                    <div>• Clean, simple syntax</div>
                    <div>• Multiple independent states</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">useEffect</div>
                  <div className="text-xs space-y-1">
                    <div>• Replace lifecycle methods</div>
                    <div>• Group related logic</div>
                    <div>• Automatic cleanup</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Custom Hooks</div>
                  <div className="text-xs space-y-1">
                    <div>• Extract reusable logic</div>
                    <div>• Share state between components</div>
                    <div>• No render prop complexity</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Other Hooks</div>
                  <div className="text-xs space-y-1">
                    <div>• useContext (avoid prop drilling)</div>
                    <div>• useMemo (performance)</div>
                    <div>• useCallback (memoization)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Class vs Hooks Comparison */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Class vs Hooks Code Comparison</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[#fea55f] font-bold mb-2 [font-family:'Fira_Code',Helvetica] text-xs">Class Component (Verbose)</div>
                <div className="bg-[#011221] p-3 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]">
{`class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>{this.state.count}</div>
    );
  }
}`}
                </div>
              </div>
              <div>
                <div className="text-[#43d9ad] font-bold mb-2 [font-family:'Fira_Code',Helvetica] text-xs">Hooks (Simple)</div>
                <div className="bg-[#011221] p-3 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]">
{`function Counter() {
  const [count, setCount] 
    = useState(0);
  return (
    <div>{count}</div>
  );
}`}
                </div>
              </div>
            </div>
          </div>

          {/* Problems Hooks Solve */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Problems Hooks Solve</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[#fea55f] font-bold mb-2">❌ Class Components</div>
                  <div className="text-xs space-y-1">
                    <div>• Verbose boilerplate (constructor, super, this)</div>
                    <div>• Lifecycle methods scattered</div>
                    <div>• Hard to reuse stateful logic</div>
                    <div>• Complex HOCs/render props</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">✓ Hooks Solution</div>
                  <div className="text-xs space-y-1">
                    <div>• Simple, functional syntax</div>
                    <div>• Related logic grouped in useEffect</div>
                    <div>• Custom hooks for reusability</div>
                    <div>• No nesting needed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`REACT HOOKS BENEFITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hooks enable you to use state and other React features
without writing class components. They provide a simpler,
more powerful way to organize component logic.

KEY BENEFITS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SIMPLER CODE
   - No constructor, super(), this binding
   - Functional components are easier to read
   - Less boilerplate overall

2. STATEFUL FUNCTIONAL COMPONENTS
   - useState lets functional components have state
   - Multiple independent state variables
   - No need for class components

3. REUSABLE LOGIC (Custom Hooks)
   - Extract stateful logic into custom hooks
   - Share logic between components
   - Avoid render prop / HOC complexity

4. ORGANIZED SIDE EFFECTS
   - useEffect groups related logic together
   - Replaces multiple lifecycle methods
   - Setup and cleanup in one place

5. BETTER PERFORMANCE
   - useCallback, useMemo for optimization
   - Fine-grained dependency tracking
   - Avoid unnecessary re-renders


BEFORE - CLASS COMPONENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  
  componentDidMount() {
    console.log('Mounted');
  }
  
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}


AFTER - HOOKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Mounted');
  }, []);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

Result: Same functionality, cleaner code


CUSTOM HOOKS - REUSABLE LOGIC:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  
  return { count, increment, decrement };
}

// Use in any component
function CounterA() {
  const { count, increment } = useCounter();
  return <button onClick={increment}>{count}</button>;
}

function CounterB() {
  const { count, decrement } = useCounter(10);
  return <button onClick={decrement}>{count}</button>;
}


COMMON HOOKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
useState         - Add state to functional components
useEffect        - Handle side effects (mount/update/unmount)
useContext       - Consume context without nesting
useReducer       - Complex state management
useCallback      - Memoize functions
useMemo          - Memoize expensive values
useRef           - Access DOM directly
useLayoutEffect  - Like useEffect, but before paint`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Benefit</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Simpler Syntax</td>
                <td className="py-3 align-top">Functional components with hooks require less boilerplate than class components (no constructor, super, this binding)</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Easier to Read/Maintain</td>
                <td className="py-3 align-top">Code is more declarative and follows JavaScript conventions, making it easier to understand</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Reusable Logic</td>
                <td className="py-3 align-top">Custom hooks extract and share stateful logic across components without render props or HOCs</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Organized Effects</td>
                <td className="py-3 align-top">useEffect groups related side effects together, replacing multiple lifecycle methods scattered across component</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Better Performance</td>
                <td className="py-3 align-top">useCallback, useMemo, and dependency arrays provide fine-grained control over optimizations</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Easier Testing</td>
                <td className="py-3 align-top">Pure functions and hooks are simpler to unit test in isolation</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
