import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CallbacksComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Callback Functions & Asynchronous Operations
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
              <div className="text-[#43d9ad] font-semibold mb-2">What is a Callback?</div>
              <div className="text-[#607b96] text-xs space-y-2">
                <p>A function passed as an argument to another function, executed after some operation has been completed.</p>
              </div>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Synchronous Callback</div>
              <pre className="text-[#607b96] text-xs overflow-x-auto">
{`function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

greet('Alice', () => {
  console.log('Goodbye!');
});
// Output:
// Hello Alice
// Goodbye!`}
              </pre>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Asynchronous Callback</div>
              <pre className="text-[#607b96] text-xs overflow-x-auto">
{`function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
// Outputs after 1 second: { name: 'John', age: 30 }`}
              </pre>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Common Use Cases</div>
              <ul className="text-[#607b96] text-xs space-y-1 list-disc list-inside">
                <li>Network requests (fetching API data)</li>
                <li>File I/O operations</li>
                <li>Timers (setTimeout, setInterval)</li>
                <li>Event handling (click, keypress)</li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <table className="w-full text-[#607b96] text-sm">
            <thead>
              <tr className="border-b border-[#1e2d3d]">
                <th className="text-left py-2 text-[#43d9ad]">Type</th>
                <th className="text-left py-2 text-[#43d9ad]">Execution</th>
                <th className="text-left py-2 text-[#43d9ad]">Blocking</th>
                <th className="text-left py-2 text-[#43d9ad]">Use Case</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 font-medium">Synchronous</td>
                <td className="py-3 text-xs">Immediate</td>
                <td className="py-3 text-xs">Blocking</td>
                <td className="py-3 text-xs">Array methods, event handlers</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Asynchronous</td>
                <td className="py-3 text-xs">Later</td>
                <td className="py-3 text-xs">Non-blocking</td>
                <td className="py-3 text-xs">Network, timers, I/O</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded mt-4">
            <div className="text-[#43d9ad] font-semibold mb-2 text-xs">Error Handling Pattern</div>
            <pre className="text-[#607b96] text-xs overflow-x-auto">
{`// Pass error as first argument
callback((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(data);
  }
});`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
