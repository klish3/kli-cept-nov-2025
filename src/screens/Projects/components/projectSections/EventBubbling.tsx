import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EventBubbling: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Event Bubbling
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
        <a href="https://www.greatfrontend.com/questions/quiz/describe-event-bubbling?practice=practice&tab=quiz">
          greatfrontend: Event Bubbling →
        </a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/describe-event-bubbling/en-US.mdx">
          github: Event Bubbling (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* Definition */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">What is Event Bubbling?</div>
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] text-sm">
                <div>Event starts at target element and propagates up through parent elements</div>
                <div className="text-[#43d9ad] mt-2 font-bold">Default behavior for most events (click, input, change, etc.)</div>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Event Bubbling Flow</div>
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">Target Element</div>
                  <div className="text-[#43d9ad]">↑</div>
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">Parent</div>
                  <div className="text-[#43d9ad]">↑</div>
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">Grandparent</div>
                  <div className="text-[#43d9ad]">↑</div>
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">Window</div>
                </div>
                <div className="text-xs text-[#fea55f]">Each element's event listener fires in sequence</div>
              </div>
            </div>

            {/* HTML Structure Example */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">HTML Structure</div>
              <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] text-[#607b96] text-sm">
                <pre className="text-xs whitespace-pre-wrap">{`<div id="grandparent">
  <div id="parent">
    <button id="button">Click Me</button>
  </div>
</div>`}</pre>
              </div>
            </div>

            {/* Event Handler Examples */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Event Handlers</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">With Bubbling</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`button.addEventListener(
  'click',
  () => console.log('button')
);

parent.addEventListener(
  'click',
  () => console.log('parent')
);

// Click button output:
// button
// parent
// (bubbles up!)`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Stop Bubbling</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`button.addEventListener(
  'click',
  (e) => {
    console.log('button');
    e.stopPropagation();
  }
);

parent.addEventListener(
  'click',
  () => console.log('parent')
);

// Click button output:
// button
// (stops here!)`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Preventing Default */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Important Distinctions</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">stopPropagation()</div>
                  <div>Stops bubbling to parent elements</div>
                  <div className="text-xs text-[#fea55f] mt-2">But parent's default action still occurs</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">preventDefault()</div>
                  <div>Prevents default browser action</div>
                  <div className="text-xs text-[#fea55f] mt-2">Event still bubbles up!</div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2">
              <div className="text-[#43d9ad] font-bold">Event Delegation Benefit</div>
              <div className="text-sm text-[#607b96]">
                <div>• Listen on parent for events on many children</div>
                <div>• Reduces number of event listeners</div>
                <div>• Handles dynamically added elements</div>
                <div>• Improves performance</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`EVENT BUBBLING

Definition: Event propagation that starts at the target element and
bubbles up through parent elements in the DOM tree.


How It Works:
1. User interacts with element (click, input, etc.)
2. Event fires on target element
3. Event propagates up to parent element
4. Then to grandparent, and so on
5. Until reaching the window object


Event Order (for click):
  1. Capturing phase (rarely used)
  2. Target phase (event fires on element)
  3. Bubbling phase (propagates up) ← This is "event bubbling"


Example:

  HTML:
  <div id="grandparent">
    <div id="parent">
      <button id="button">Click Me</button>
    </div>
  </div>

  JavaScript:
  button.addEventListener('click', () => {
    console.log('Button clicked');
  });
  
  parent.addEventListener('click', () => {
    console.log('Parent clicked');
  });
  
  grandparent.addEventListener('click', () => {
    console.log('Grandparent clicked');
  });

  Result when clicking button:
  Button clicked
  Parent clicked
  Grandparent clicked
  
  (Event bubbles up from target → parent → grandparent)


Stopping Bubbling:

  button.addEventListener('click', (e) => {
    console.log('Button clicked');
    e.stopPropagation();  // Stop bubbling here!
  });
  
  parent.addEventListener('click', () => {
    console.log('Parent clicked');  // This won't fire
  });

  Result:
  Button clicked
  (Stops here, doesn't reach parent)


Events that Bubble:
- click, dblclick
- mousedown, mouseup, mousemove
- input, change
- keydown, keyup
- focus (doesn't bubble), focusin (bubbles)
- scroll (doesn't bubble)
- resize (doesn't bubble)


Events that DON'T Bubble:
- focus, blur
- scroll
- resize
- load, unload
- mouse events starting with "mouse"


Event Delegation Pattern:
  // Listen on parent for events on children
  parent.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      console.log('Button clicked:', e.target);
    }
  });
  
  // Why?
  // - One listener instead of many
  // - Works for dynamically added buttons
  // - Better performance


Important Methods:
- event.stopPropagation() - Stop bubbling to parent
- event.stopImmediatePropagation() - Stop propagation + other handlers
- event.preventDefault() - Prevent default action (independent of bubbling)
- event.target - Element where event occurred
- event.currentTarget - Element with the listener`}
            </pre>
          </div>

          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-[#43d9ad] text-left pb-4">Concept</th>
                  <th className="text-[#43d9ad] text-left pb-4">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">Event Bubbling</td>
                  <td className="py-2 align-top">Event starts at target and propagates up through parents to window</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Phase</td>
                  <td className="py-2 align-top">Capturing (down) → Target (on element) → Bubbling (up)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">stopPropagation()</td>
                  <td className="py-2 align-top">Stops event from bubbling to parent elements</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">preventDefault()</td>
                  <td className="py-2 align-top">Prevents default browser action; bubbling still occurs</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Event Delegation</td>
                  <td className="py-2 align-top">Listen on parent; relies on bubbling to handle child clicks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventBubbling;
