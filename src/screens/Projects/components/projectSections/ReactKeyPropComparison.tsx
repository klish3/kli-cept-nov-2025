import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReactKeyPropComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          React Key Prop
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-the-purpose-of-the-key-prop-in-react?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Key Prop →</a>
        <a href="https://github.com/greatfrontend/top-react-interview-questions/blob/main/questions/what-is-the-purpose-of-the-key-prop-in-react/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Key Prop (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* What key does */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">What Key Does</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2">
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">Identification</div>
                <div>Tells React which items have changed, been added, or removed</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">Reconciliation</div>
                <div>Helps React match old DOM nodes with new ones during re-renders</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">Preservation</div>
                <div>Maintains component state and DOM focus when lists are reordered</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">Efficiency</div>
                <div>Minimizes unnecessary DOM updates and re-renders</div>
              </div>
            </div>
          </div>

          {/* Good vs Bad Keys */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">✓ Good Keys</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad] font-bold">Stable ID from Data</div>
                  <div className="text-xs bg-[#1e2d3d] p-2 rounded mt-1">{"key={item.id}"}</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Database Primary Key</div>
                  <div className="text-xs bg-[#1e2d3d] p-2 rounded mt-1">{"key={user.userId}"}</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">UUID Generated Once</div>
                  <div className="text-xs bg-[#1e2d3d] p-2 rounded mt-1">{"key={uuid}"}</div>
                </div>
                <div className="text-xs text-[#43d9ad]">Never changes between renders</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#fea55f]">✗ Bad Keys</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#fea55f] font-bold">Array Index</div>
                  <div className="text-xs bg-[#1e2d3d] p-2 rounded mt-1">{"key={index}"}</div>
                </div>
                <div>
                  <div className="text-[#fea55f] font-bold">Random Numbers</div>
                  <div className="text-xs bg-[#1e2d3d] p-2 rounded mt-1">{"key={Math.random()}"}</div>
                </div>
                <div>
                  <div className="text-[#fea55f] font-bold">Current Time</div>
                  <div className="text-xs bg-[#1e2d3d] p-2 rounded mt-1">{"key={Date.now()}"}</div>
                </div>
                <div className="text-xs text-[#fea55f]">Changes on every render = bugs</div>
              </div>
            </div>
          </div>

          {/* Why Index Keys Fail */}
          <div className="space-y-2">
            <div className="font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm">Why Array Index Keys Fail</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="mb-3">
                <div className="text-[#fea55f] font-bold mb-2">Problem: Items get reordered</div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="border border-[#43d9ad] p-2 bg-[#4d5bce]40">
                  <div className="text-[#43d9ad] font-bold mb-1">Initial Render</div>
                  <div>key=0: "Apple"</div>
                  <div>key=1: "Banana"</div>
                  <div>key=2: "Cherry"</div>
                </div>
                <div className="border border-[#fea55f] p-2 bg-[#fea55f]20">
                  <div className="text-[#fea55f] font-bold mb-1">User deletes Apple</div>
                  <div>key=0: "Banana" ← WAS key=1!</div>
                  <div>key=1: "Cherry" ← WAS key=2!</div>
                </div>
                <div className="border border-[#fea55f] p-2 bg-[#fea55f]20">
                  <div className="text-[#fea55f] font-bold mb-1">Bug Result</div>
                  <div>React thinks Banana is still Apple</div>
                  <div>State/focus gets confused</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Requirements Table */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Key Requirements</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Must Be Unique</div>
                  <div className="text-xs">Among siblings in the same list</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Must Be Stable</div>
                  <div className="text-xs">Same across multiple renders</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Cannot Change</div>
                  <div className="text-xs">If it changes, React treats as new item</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Best Practice</div>
                  <div className="text-xs">Use data IDs, not positions</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`REACT KEY PROP PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The key prop helps React identify which items have changed,
been added, or removed. It's essential for list reconciliation.

WHY KEYS MATTER:
┌─────────────────────────────────────┐
│ Rendering a dynamic list:           │
│                                     │
│ [Apple, Banana, Cherry]  ─render→   │
│ Delete Apple:                       │
│ [Banana, Cherry]         ─re-render │
│                                     │
│ Without unique key (index):         │
│ React thinks item 0 is "Banana"     │
│ (was Apple, key=0 before)           │
│ BUG: State/focus gets confused!     │
│                                     │
│ With unique key (id):               │
│ React knows Banana.id=2 is still    │
│ Banana, just moved positions        │
│ CORRECT: Everything works!          │
└─────────────────────────────────────┘

GOOD EXAMPLE - WITH UNIQUE ID:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
];

function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

Result: React correctly tracks each item by ID


BAD EXAMPLE - WITH ARRAY INDEX:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{items.map((item, index) => (
  <li key={index}>{item.name}</li>
))}

Problem: Indices change when list is reordered
         State gets attached to wrong items
         Causes bugs and performance issues

ANOTHER BAD EXAMPLE - GENERATED ON RENDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{items.map((item) => (
  <li key={Math.random()}>{item.name}</li>
))}

Problem: Key is different on EVERY render
         React thinks all items are new
         Cannot reuse DOM nodes
         Major performance hit`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Scenario</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Using unique stable ID</td>
                <td className="py-3 align-top">React correctly matches nodes, reorders DOM efficiently, preserves component state</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Using array index</td>
                <td className="py-3 align-top">Works for static lists, breaks when items reorder, state gets mismatched to wrong items</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Using Math.random()</td>
                <td className="py-3 align-top">React treats all items as new on every render, destroys and recreates all DOM nodes, severe performance issues</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Omitting key prop</td>
                <td className="py-3 align-top">React uses array index as default key, same issues as explicit index keys, unpredictable behavior</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
