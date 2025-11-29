import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReactBenefitsComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          React & Its Benefits
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-react-describe-the-benefits-of-react?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: React & Benefits →</a>
        <a href="https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/what-is-react-describe-the-benefits-of-react/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: React & Benefits (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* What is React */}
          <div className="grid grid-cols-1 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium text-[#43d9ad]">What is React?</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
              <div>
                <div className="text-[#43d9ad]">• JavaScript library for building UIs</div>
                <div className="text-xs text-[#607b96] ml-4">Developed by Facebook, now open-source and maintained by community</div>
              </div>
              <div>
                <div className="text-[#43d9ad]">• Component-based architecture</div>
                <div className="text-xs text-[#607b96] ml-4">Build encapsulated components that manage their own state</div>
              </div>
              <div>
                <div className="text-[#43d9ad]">• Declarative programming model</div>
                <div className="text-xs text-[#607b96] ml-4">Describe what UI should look like, React handles the updates</div>
              </div>
              <div>
                <div className="text-[#43d9ad]">• Uses Virtual DOM</div>
                <div className="text-xs text-[#607b96] ml-4">Efficiently updates actual DOM by comparing virtual representations</div>
              </div>
            </div>
          </div>

          {/* Core Benefits */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Performance Benefits</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad]">✓ Virtual DOM</div>
                  <div className="text-xs">Batch updates, minimal real DOM changes</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Reconciliation</div>
                  <div className="text-xs">Smart diffing algorithm finds optimal updates</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Efficient rendering</div>
                  <div className="text-xs">Only re-renders changed components</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Developer Experience</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad]">✓ JSX syntax</div>
                  <div className="text-xs">Write HTML-like code in JavaScript</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Component reusability</div>
                  <div className="text-xs">Build once, use everywhere</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ One-way data flow</div>
                  <div className="text-xs">Easier to debug and reason about state</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Concepts */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Scalability Features</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad]">✓ Unidirectional data flow</div>
                  <div className="text-xs">Props down, events up structure</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ State management patterns</div>
                  <div className="text-xs">Supports Redux, Context, Zustand</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Large ecosystems</div>
                  <div className="text-xs">Thousands of libraries and tools</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Community & Tools</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad]">✓ Large community</div>
                  <div className="text-xs">Abundant resources, tutorials, answers</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ DevTools</div>
                  <div className="text-xs">Excellent React DevTools browser extension</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Framework options</div>
                  <div className="text-xs">Next.js, Remix, Gatsby for full-stack</div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison with Vanilla JS */}
          <div className="space-y-2 mb-8">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">React vs Vanilla JavaScript</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d]">
                <div className="text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm font-medium mb-2">Vanilla JavaScript</div>
                <div className="space-y-2 text-xs [font-family:'Fira_Code',Helvetica] text-[#607b96]">
                  <div>❌ Manual DOM manipulation</div>
                  <div>❌ State scattered across HTML</div>
                  <div>❌ No component structure</div>
                  <div>❌ Harder to scale</div>
                  <div>❌ More boilerplate code</div>
                </div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d]">
                <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm font-medium mb-2">React</div>
                <div className="space-y-2 text-xs [font-family:'Fira_Code',Helvetica] text-[#607b96]">
                  <div>✓ Declarative UI updates</div>
                  <div>✓ Centralized state management</div>
                  <div>✓ Reusable components</div>
                  <div>✓ Scales to complex apps</div>
                  <div>✓ Less repetitive code</div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Ideal Use Cases</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[#43d9ad]">✓ Single Page Apps (SPAs)</div>
                  <div className="text-xs">Gmail, Trello, Figma</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Real-time dashboards</div>
                  <div className="text-xs">Analytics, admin panels</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Progressive Web Apps</div>
                  <div className="text-xs">Offline functionality</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Mobile apps (React Native)</div>
                  <div className="text-xs">iOS & Android development</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`WHAT IS REACT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React is a JavaScript library for building user interfaces 
with a component-based, declarative approach.

Key characteristics:
• Developed by Facebook (now Meta)
• Open source and widely adopted
• Focuses on the "V" in MVC
• Built on component composition
• Uses Virtual DOM for performance


MAJOR BENEFITS OF REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. VIRTUAL DOM & PERFORMANCE
   • Doesn't directly manipulate real DOM (slow)
   • Creates virtual representation of DOM
   • Compares old & new virtual DOMs (diffing)
   • Only applies necessary real DOM changes
   • Result: Faster rendering and better performance

2. REUSABLE COMPONENTS
   • Encapsulate UI logic and state
   • Props for configuration
   • Stateless (presentational) or stateful (container)
   • Compose complex UIs from simple pieces
   • Easier maintenance and testing

3. UNIDIRECTIONAL DATA FLOW
   • Data flows from parent to child
   • Child communicates via callbacks
   • Predictable state updates
   • Easier debugging
   • Prevents circular dependencies

4. DECLARATIVE PROGRAMMING
   • Describe what UI should look like
   • React handles the "how"
   • Less imperative boilerplate code
   • More readable and maintainable
   • Closer to how we think about UI

5. RICH ECOSYSTEM
   • Thousands of third-party libraries
   • State management: Redux, Context, Zustand
   • Routing: React Router, Remix
   • Full-stack frameworks: Next.js, Gatsby
   • Testing tools: Vitest, Jest, React Testing Library

6. STRONG COMMUNITY & RESOURCES
   • Massive community for support
   • Abundant tutorials and documentation
   • Easy to find solutions online
   • Regular updates and improvements
   • Lots of hiring demand

7. DEVELOPER EXPERIENCE
   • JSX: Write HTML-like code in JS
   • Hot reload for fast development
   • Excellent DevTools browser extension
   • Strong TypeScript integration
   • Clear error messages

8. SEO & PERFORMANCE
   • Can be rendered on server (Next.js)
   • Better than pure client-side rendering
   • Code splitting capabilities
   • Lazy loading support
   • Progressive enhancement possible

9. LEARN ONCE, WRITE ANYWHERE
   • React Native for mobile apps
   • React for web
   • React VR, React 360
   • Skills transfer across platforms

10. SCALABILITY
    • Handles small to massive apps
    • Supports micro-frontends
    • Works with multiple frameworks
    • Plugin architecture options`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Benefit</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Virtual DOM</td>
                <td className="py-3 align-top">Abstraction layer that optimizes real DOM updates through diffing algorithm</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Components</td>
                <td className="py-3 align-top">Reusable, encapsulated UI building blocks with own logic and state</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Unidirectional Data Flow</td>
                <td className="py-3 align-top">Props flow down, events flow up; prevents circular dependencies</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Declarative UI</td>
                <td className="py-3 align-top">Describe desired state, React updates UI automatically</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">JSX Syntax</td>
                <td className="py-3 align-top">Write HTML-like code in JavaScript for better readability</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Ecosystem & Tools</td>
                <td className="py-3 align-top">Rich library ecosystem, state management, routing, and full-stack frameworks</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
