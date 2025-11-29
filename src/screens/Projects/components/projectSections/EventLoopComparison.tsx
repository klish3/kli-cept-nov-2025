import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EventLoopComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="font-normal text-[#e5e9f0] text-lg">
          Event Loop, Call Stack & Task Queues
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Event Loop →</a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">GitHub: Event Loop Guide →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Event Loop Components */}
          <div className="space-y-4">
            <div className="font-medium text-[#43d9ad] text-sm">Components of the Event Loop</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2">
                <div className="text-[#fea55f] font-medium">Call Stack</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Tracks synchronous function execution</div>
                  <div>• LIFO data structure</div>
                  <div>• Single-threaded</div>
                  <div>• Blocks async operations</div>
                </div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2">
                <div className="text-[#43d9ad] font-medium">Web/Node APIs</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Handle async operations</div>
                  <div>• setTimeout, fetch, etc.</div>
                  <div>• Run in background</div>
                  <div>• Don't block execution</div>
                </div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2">
                <div className="text-[#43d9ad] font-medium">Macrotask Queue</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• setTimeout callbacks</div>
                  <div>• setInterval, I/O events</div>
                  <div>• User interactions</div>
                  <div>• Lower priority than microtasks</div>
                </div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2">
                <div className="text-[#43d9ad] font-medium">Microtask Queue</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Promise callbacks (.then, .catch)</div>
                  <div>• queueMicrotask()</div>
                  <div>• Higher priority</div>
                  <div>• Executed before macrotasks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Execution Order */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Event Loop Order</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded" style={{fontFamily: "'Fira Code', Helvetica"}}>
              <div className="text-[#607b96] text-xs space-y-2">
                <div className="text-[#43d9ad]">1. Execute synchronous code (call stack)</div>
                <div className="text-[#607b96]">   ↓</div>
                <div className="text-[#43d9ad]">2. Process all microtasks (promises, queueMicrotask)</div>
                <div className="text-[#607b96]">   ↓</div>
                <div className="text-[#43d9ad]">3. Execute one macrotask from queue</div>
                <div className="text-[#607b96]">   ↓</div>
                <div className="text-[#43d9ad]">4. Check microtasks again (if any added)</div>
                <div className="text-[#607b96]">   ↓</div>
                <div className="text-[#43d9ad]">5. Repeat steps 3-4</div>
              </div>
            </div>
          </div>

          {/* Example Output */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Example Execution Order</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2">
              <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#43d9ad] text-xs mb-3">Code:</div>
              <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-3 rounded mb-3">
                <div>console.log('Start');</div>
                <div>{'setTimeout(() => { console.log(\'Timeout\'); }, 0);'}</div>
                <div>{'Promise.resolve().then(() => { console.log(\'Promise\'); });'}</div>
                <div>console.log('End');</div>
              </div>
              <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#43d9ad] text-xs mb-2">Output:</div>
              <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#38a169] text-xs">
                <div>Start     {'// Sync: call stack'}</div>
                <div>End       {'// Sync: call stack'}</div>
                <div>Promise   {'// Microtask'}</div>
                <div>Timeout   {'// Macrotask'}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`EVENT LOOP EXPLAINED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The event loop is how JavaScript handles async operations.

KEY COMPONENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CALL STACK
   - Executes synchronous code
   - LIFO structure
   - Blocks further execution

2. WEB/NODE APIs
   - Handle asynchronous operations
   - setTimeout, fetch, file I/O
   - Run in background threads
   - Return callbacks to queues

3. MACROTASK QUEUE (Task Queue)
   - setTimeout, setInterval
   - HTTP requests, I/O events
   - User interactions (clicks, scrolls)
   - Lower priority than microtasks

4. MICROTASK QUEUE
   - Promise callbacks (.then, .catch, .finally)
   - await expressions
   - queueMicrotask()
   - MutationObserver callbacks
   - Higher priority than macrotasks

EVENT LOOP ORDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Execute all synchronous code (call stack)
2. Call stack empties
3. Process ALL microtasks
4. Execute ONE macrotask
5. Process microtasks again
6. Execute next macrotask
7. Repeat...

EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
console.log('End');

OUTPUT:
Start    // Synchronous
End      // Synchronous
Promise  // Microtask (higher priority)
Timeout  // Macrotask (lower priority)

CRITICAL INSIGHT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Even though setTimeout has 0ms delay, it still goes
into macrotask queue. Promises execute immediately
in the microtask queue because they have higher
priority in the event loop order.`}
</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventLoopComparison;
