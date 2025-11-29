import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ArrowMethodsSyntax: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Arrow Syntax for Constructor Methods
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
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx">
          github: Arrow Methods in Constructor (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* Advantages */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Key Advantages</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ Auto Binding</div>
                  <div><span className="text-[#fea55f]">this</span> always refers to instance, no .bind() needed</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ Callback Friendly</div>
                  <div>Safe to pass as callback without losing context</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ Event Handlers</div>
                  <div>Perfect for addEventListener without extra binding</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">✓ Instance Methods</div>
                  <div>Creates method per instance (like OOP languages)</div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Regular Function vs Arrow</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Regular Function (Problem)</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`class Button {
  constructor() {
    this.count = 0;
  }
  
  click() {
    this.count++;
  }
}

btn.addEventListener(
  'click',
  btn.click  // ✗ loses 'this'
);`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#43d9ad] font-bold">Arrow Function (Solution)</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`class Button {
  constructor() {
    this.count = 0;
    // ✓ 'this' bound in constructor
    this.click = () => {
      this.count++;
    };
  }
}

btn.addEventListener(
  'click',
  btn.click  // ✓ works!
);`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Common Patterns</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f]">Event Handlers</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`this.handleClick = () => {
  // 'this' always works
};

element.addEventListener(
  'click',
  this.handleClick
);`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f]">Async Callbacks</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`this.fetchData = async () => {
  const data = await api.get();
  this.data = data; // safe
};

button.onClick = 
  this.fetchData;`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f]">Array Methods</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`this.filterItems = (arr) => {
  return arr.filter(
    item => this.isValid(item)
  );
};`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f]">Debounced Handlers</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`this.search = debounce(() => {
  // 'this' is preserved
  this.query = this.input.value;
}, 300);`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Trade-offs */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2">
              <div className="text-[#43d9ad] font-bold">⚠️ Trade-offs</div>
              <div className="grid grid-cols-2 gap-3 text-sm text-[#607b96]">
                <div className="text-[#38a169]">✓ Auto-binding eliminates .bind() calls</div>
                <div className="text-[#fea55f]">✗ Method per instance (more memory)</div>
                <div className="text-[#38a169]">✓ Works naturally with callbacks</div>
                <div className="text-[#fea55f]">✗ Cannot easily override in subclasses</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`ARROW METHODS IN CONSTRUCTOR SYNTAX

Advantage: Arrow functions in constructors have 'this' permanently bound

When to Use:
  1. Event handlers where 'this' needs to be the instance
  2. Callbacks passed to async/await operations
  3. Array methods that reference instance properties
  4. Any time method will be passed as callback


Problem with Regular Methods:
  class Component {
    count = 0;
    
    increment() {
      this.count++;
    }
  }
  
  const comp = new Component();
  
  // Without arrow, 'this' is lost when passed as callback:
  setTimeout(comp.increment, 1000);  // ERROR: 'this' is undefined
  
  // Must manually bind:
  setTimeout(comp.increment.bind(comp), 1000);  // Works


Solution with Arrow Methods:
  class Component {
    count = 0;
    
    // Arrow function - 'this' is bound to instance
    increment = () => {
      this.count++;
    };
  }
  
  const comp = new Component();
  
  // No binding needed:
  setTimeout(comp.increment, 1000);  // Works!
  
  // Perfect for event listeners:
  element.addEventListener('click', comp.increment);


React Class Component Example:
  class Counter extends React.Component {
    state = { count: 0 };
    
    // Without arrow - requires .bind(this) in constructor
    handleClick(e) {
      this.setState({ count: this.state.count + 1 });
    }
    
    // With arrow - auto-bound
    handleClickArrow = () => {
      this.setState({ count: this.state.count + 1 });
    };
    
    render() {
      return (
        <div>
          {/* Works without extra binding */}
          <button onClick={this.handleClickArrow}>+</button>
        </div>
      );
    }
  }`}
            </pre>
          </div>

          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-[#43d9ad] text-left pb-4">Aspect</th>
                  <th className="text-[#43d9ad] text-left pb-4">Regular Method</th>
                  <th className="text-[#43d9ad] text-left pb-4">Arrow Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">this Binding</td>
                  <td className="py-2 pr-4 align-top">Dynamic (caller's context)</td>
                  <td className="py-2 align-top">Static (instance)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Requires .bind()</td>
                  <td className="py-2 pr-4 align-top">Yes (for callbacks)</td>
                  <td className="py-2 align-top">No</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Memory Usage</td>
                  <td className="py-2 pr-4 align-top">Shared across instances</td>
                  <td className="py-2 align-top">One per instance</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Safe for Callbacks</td>
                  <td className="py-2 pr-4 align-top">No (without extra work)</td>
                  <td className="py-2 align-top">Yes</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Use Case</td>
                  <td className="py-2 pr-4 align-top">Direct calls, flexibility needed</td>
                  <td className="py-2 align-top">Callbacks, event handlers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArrowMethodsSyntax;
