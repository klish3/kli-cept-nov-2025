import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EventDelegationComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Event Delegation
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
        <a href="https://www.greatfrontend.com/questions/quiz/explain-event-delegation?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Event Delegation →</a>
        <a href="https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/explain-event-delegation/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Event Delegation (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* How It Works */}
          <div className="grid grid-cols-1 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium text-[#43d9ad]">How Event Delegation Works</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">1. Parent Listener</div>
                <div>Attach single event listener to parent element (not children)</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">2. Event Bubbles</div>
                <div>Event bubbles up from child through DOM tree</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">3. Check Target</div>
                <div>Use event.target to identify which child was clicked</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">4. Execute Logic</div>
                <div>Perform action based on the matched target element</div>
              </div>
            </div>
          </div>

          {/* Benefits vs Direct Listeners */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">With Event Delegation</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad]">✓ Single listener</div>
                  <div className="text-xs">Only 1 event listener on parent</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Dynamic elements</div>
                  <div className="text-xs">Newly added children automatically handled</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Lower memory</div>
                  <div className="text-xs">Fewer listener objects in memory</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Better performance</div>
                  <div className="text-xs">Less overhead, faster DOM traversal</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Without Event Delegation</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#fea55f]">✗ Multiple listeners</div>
                  <div className="text-xs">One listener per child element</div>
                </div>
                <div>
                  <div className="text-[#fea55f]">✗ Manual management</div>
                  <div className="text-xs">Must attach listeners to new elements</div>
                </div>
                <div>
                  <div className="text-[#fea55f]">✗ Higher memory</div>
                  <div className="text-xs">Many listener objects in memory</div>
                </div>
                <div>
                  <div className="text-[#fea55f]">✗ More complex</div>
                  <div className="text-xs">Harder to maintain, scale, cleanup</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bubbling vs Capture */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Bubbling Phase (Typical)</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d]">
                <div className="text-xs mb-2">Event travels UP from target to root</div>
                <div className="text-[#43d9ad]">Child → Parent → Root</div>
                <div className="text-xs text-[#607b96] mt-2">addEventListener() default: useCapture=false</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Capture Phase (Rare)</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d]">
                <div className="text-xs mb-2">Event travels DOWN from root to target</div>
                <div className="text-[#43d9ad]">Root → Parent → Child</div>
                <div className="text-xs text-[#607b96] mt-2">addEventListener(event, handler, true)</div>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Important Limitations</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[#fea55f] mb-2">Events that don't bubble:</div>
                  <div className="text-xs space-y-1">
                    <div>• focus, blur</div>
                    <div>• scroll, resize</div>
                    <div>• mouseenter, mouseleave</div>
                    <div>• load, unload</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#fea55f] mb-2">Requires:</div>
                  <div className="text-xs space-y-1">
                    <div>• Proper target checking</div>
                    <div>• Event.target identification</div>
                    <div>• Avoid unintended matches</div>
                    <div>• Understand event bubbling</div>
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
{`EVENT DELEGATION PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Event delegation leverages event bubbling to handle events
for multiple elements with a single listener on a parent.

HOW IT WORKS:
┌─────────────────────────┐
│  Parent Element         │  ← Event listener attached here
│  ┌──────────────────┐   │
│  │ Child 1          │   │
│  └──────────────────┘   │
│  ┌──────────────────┐   │
│  │ Child 2 (clicked)├──→│ Event bubbles up
│  └──────────────────┘   │
│  ┌──────────────────┐   │
│  │ Child 3          │   │
│  └──────────────────┘   │
└─────────────────────────┘

EXAMPLE - WITHOUT delegation (BAD):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', handler);  // Multiple listeners
});

Problem: If you add new <li> dynamically, you must attach
         a listener manually. High memory usage.


EXAMPLE - WITH delegation (GOOD):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const parent = document.getElementById('list');
parent.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    // Handle click
  }
});

Benefit: Single listener. New <li> elements automatically
         work without adding more listeners. Better memory.


REACT EVENT DELEGATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
React automatically uses event delegation internally!
Even though you write onClick on each component,
React attaches all listeners to the root DOM node.`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Aspect</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Core Concept</td>
                <td className="py-3 align-top">Single listener on parent handles events for children via bubbling</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Key Method</td>
                <td className="py-3 align-top">Check event.target to determine which child was interacted with</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Main Benefit</td>
                <td className="py-3 align-top">Single listener works for current and future child elements</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Performance</td>
                <td className="py-3 align-top">Better memory usage, fewer listener objects, faster initialization</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Limitation</td>
                <td className="py-3 align-top">Only works with events that bubble (not focus, blur, scroll, etc.)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Use in React</td>
                <td className="py-3 align-top">React handles this automatically at the root DOM container</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
