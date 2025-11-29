import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EventCapturing: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Event Capturing
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
        <a href="https://www.greatfrontend.com/questions/quiz/describe-event-capturing?practice=practice&tab=quiz">
          greatfrontend: Event Capturing →
        </a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/describe-event-capturing/en-US.mdx">
          github: Event Capturing (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* Definition */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">What is Event Capturing?</div>
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] text-sm">
                <div>Event starts at window level and flows down through parent elements to target</div>
                <div className="text-[#43d9ad] mt-2 font-bold">Opposite of event bubbling; rarely used</div>
              </div>
            </div>

            {/* Three Phases */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Three Event Phases</div>
              <div className="space-y-2 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">1. Capturing Phase (Down)</div>
                  <div>Window → Document → HTML → Body → Parent → Target</div>
                  <div className="text-xs text-[#fea55f] mt-1">Enabled with addEventListener(event, handler, true)</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">2. Target Phase (At)</div>
                  <div>Event fires on the element itself</div>
                  <div className="text-xs text-[#fea55f] mt-1">Order depends on listener registration</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">3. Bubbling Phase (Up)</div>
                  <div>Target → Parent → Body → HTML → Document → Window</div>
                  <div className="text-xs text-[#fea55f] mt-1">Default behavior; most listeners use this</div>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Using Capturing Phase</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Default (Bubbling)</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`parent.addEventListener(
  'click',
  () => console.log('parent')
);

button.addEventListener(
  'click',
  () => console.log('button')
);

// Output:
// button (target)
// parent (bubbles)`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Capturing (true)</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`parent.addEventListener(
  'click',
  () => console.log('parent'),
  true  // Capturing
);

button.addEventListener(
  'click',
  () => console.log('button')
);

// Output:
// parent (captures)
// button (target)`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2">
              <div className="text-[#43d9ad] font-bold">When to Use Capturing</div>
              <div className="grid grid-cols-2 gap-3 text-sm text-[#607b96]">
                <div>• Rarely used in practice</div>
                <div>• Performance optimization</div>
                <div>• Intercept events early</div>
                <div>• Event filtering before bubbling</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`EVENT CAPTURING

Definition: Event propagation that starts at the window level and
flows DOWN through parent elements to the target element.


Event Propagation has THREE Phases:

1. CAPTURING PHASE (down)
   window → document → html → body → parent → target
   
2. TARGET PHASE (at target)
   Event handlers on target element are invoked
   
3. BUBBLING PHASE (up)
   target → parent → body → html → document → window


Default is BUBBLING (third parameter false):

  element.addEventListener('click', handler);
  element.addEventListener('click', handler, false);


To Use CAPTURING (third parameter true):

  element.addEventListener('click', handler, true);
  
  Or with options:
  element.addEventListener('click', handler, { capture: true });


Example: Capturing vs Bubbling

  HTML:
  <div id="parent">
    <button id="button">Click</button>
  </div>

  With Bubbling (default):
  parent.addEventListener('click', () => {
    console.log('Parent');
  });
  
  button.addEventListener('click', () => {
    console.log('Button');
  });

  Output:
  Button (target first)
  Parent (bubbles up)


  With Capturing:
  parent.addEventListener('click', () => {
    console.log('Parent');
  }, true);  // ← true for capturing
  
  button.addEventListener('click', () => {
    console.log('Button');
  });

  Output:
  Parent (capturing down)
  Button (target)


Mixed Example:

  parent.addEventListener('click', () => {
    console.log('Parent Capturing');
  }, true);  // Capturing
  
  parent.addEventListener('click', () => {
    console.log('Parent Bubbling');
  }, false);  // Bubbling
  
  button.addEventListener('click', () => {
    console.log('Button');
  });

  Output:
  Parent Capturing (capturing phase)
  Button (target)
  Parent Bubbling (bubbling phase)


stopPropagation() Stops Both Phases:

  parent.addEventListener('click', (e) => {
    console.log('Parent');
    e.stopPropagation();  // Stops!
  }, true);  // Capturing
  
  button.addEventListener('click', () => {
    console.log('Button');  // Won't fire
  });


When to Use Capturing:
- Rarely used in typical web development
- Performance: intercept and handle early
- Event validation before target sees it
- Prevent event propagation for security`}
            </pre>
          </div>

          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-[#43d9ad] text-left pb-4">Phase</th>
                  <th className="text-[#43d9ad] text-left pb-4">Direction</th>
                  <th className="text-[#43d9ad] text-left pb-4">Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">Capturing</td>
                  <td className="py-2 pr-4 align-top">Down (Window → Target)</td>
                  <td className="py-2 align-top">addEventListener(e, h, true); rarely used</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Target</td>
                  <td className="py-2 pr-4 align-top">At element</td>
                  <td className="py-2 align-top">Event fires on target element</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Bubbling</td>
                  <td className="py-2 pr-4 align-top">Up (Target → Window)</td>
                  <td className="py-2 align-top">Default; addEventListener(e, h) or (e, h, false)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">stopPropagation()</td>
                  <td className="py-2 pr-4 align-top">Both</td>
                  <td className="py-2 align-top">Stops propagation in either direction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCapturing;
