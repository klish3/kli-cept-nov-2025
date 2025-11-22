import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MicrotaskQueueComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Microtask Queue & Event Loop
        </div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <>
          <div className="text-[#e5e9f0] text-sm space-y-4">
            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">What is the Microtask Queue?</div>
              <div className="text-[#607b96] text-xs space-y-2">
                <p>A queue of tasks executed after the current script, but before the macrotask queue. Microtasks have higher priority.</p>
              </div>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Execution Order Example</div>
              <pre className="text-[#607b96] text-xs overflow-x-auto">
{`console.log('Script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
  })
  .then(() => {
    console.log('Promise 2');
  });

console.log('Script end');

// Output:
// Script start
// Script end
// Promise 1
// Promise 2
// setTimeout`}
              </pre>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Event Loop Phases</div>
              <ol className="text-[#607b96] text-xs space-y-1 list-decimal list-inside">
                <li>Execute synchronous code</li>
                <li>Process ALL microtasks (Promises, MutationObserver)</li>
                <li>Execute ONE macrotask (setTimeout, setInterval)</li>
                <li>Back to step 2</li>
              </ol>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Microtask Sources</div>
              <ul className="text-[#607b96] text-xs space-y-1 list-disc list-inside">
                <li>Promise callbacks (.then, .catch, .finally)</li>
                <li>queueMicrotask()</li>
                <li>MutationObserver callbacks</li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <table className="w-full text-[#607b96] text-sm">
            <thead>
              <tr className="border-b border-[#1e2d3d]">
                <th className="text-left py-2 text-[#43d9ad]">Queue Type</th>
                <th className="text-left py-2 text-[#43d9ad]">Priority</th>
                <th className="text-left py-2 text-[#43d9ad]">Examples</th>
                <th className="text-left py-2 text-[#43d9ad]">When Processed</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 font-medium">Microtask</td>
                <td className="py-3 text-xs">High</td>
                <td className="py-3 text-xs">Promises, queueMicrotask()</td>
                <td className="py-3 text-xs">After current script, before macrotask</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Macrotask</td>
                <td className="py-3 text-xs">Low</td>
                <td className="py-3 text-xs">setTimeout, setInterval, I/O</td>
                <td className="py-3 text-xs">After all microtasks complete</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded mt-4">
            <div className="text-[#43d9ad] font-semibold mb-2 text-xs">Key Insight</div>
            <p className="text-[#607b96] text-xs">Microtasks always execute before macrotasks. This is why Promise callbacks run before setTimeout, even with delay 0.</p>
          </div>
        </div>
      )}
    </div>
  );
};
