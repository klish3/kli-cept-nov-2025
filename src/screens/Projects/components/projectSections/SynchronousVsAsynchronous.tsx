import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SynchronousVsAsynchronous: React.FC<Props> = ({
  showVisualExamples,
  setShowVisualExamples,
}) => {
  const [asyncOutput, setAsyncOutput] = React.useState<string>("");

  const handleSyncClick = () => {
    // Synchronous execution blocks
  };

  const handleAsyncClick = () => {
    setAsyncOutput("");
    setAsyncOutput("Start\n");
    setTimeout(() => {
      setAsyncOutput((prev) => prev + "Task 1 (non-blocking)\n");
    }, 500);
    setTimeout(() => {
      setAsyncOutput((prev) => prev + "Task 2 (non-blocking)\n");
    }, 1000);
    setAsyncOutput((prev) => prev + "End\n");
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Synchronous vs Asynchronous Execution
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
          {/* Synchronous Execution */}
          <div className="space-y-4">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium">
              Synchronous (Blocking)
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
                <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                  Code:
                </div>
                <pre className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto">
                  {`console.log('Start');
for(let i = 0; i < 1000000000; i++) {}
console.log('Task 1');
for(let i = 0; i < 1000000000; i++) {}
console.log('Task 2');
console.log('End');`}
                </pre>
              </div>
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
                <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                  Output:
                </div>
                <div className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap">
                  {`Start
Task 1 (blocked)
Task 2 (blocked)
End`}
                </div>
              </div>
            </div>
            <Button
              onClick={handleSyncClick}
              className="bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs"
            >
              Run Synchronous Example
            </Button>
          </div>

          {/* Asynchronous Execution */}
          <div className="space-y-4">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium">
              Asynchronous (Non-Blocking)
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
                <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                  Code:
                </div>
                <pre className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto">
                  {`console.log('Start');
setTimeout(() => {
  console.log('Task 1');
}, 500);
setTimeout(() => {
  console.log('Task 2');
}, 1000);
console.log('End');`}
                </pre>
              </div>
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
                <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                  Output:
                </div>
                <div className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap">
                  {asyncOutput}
                </div>
              </div>
            </div>
            <Button
              onClick={handleAsyncClick}
              className="bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs"
            >
              Run Asynchronous Example
            </Button>
          </div>

          {/* Comparison Table */}
          <div className="mt-8">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium mb-4">
              Key Differences
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d] overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1e2d3d]">
                    <th className="text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]">
                      Aspect
                    </th>
                    <th className="text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]">
                      Synchronous
                    </th>
                    <th className="text-[#43d9ad] text-left pb-4 [font-family:'Fira_Code',Helvetica]">
                      Asynchronous
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Execution
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Blocking - code waits for task to complete
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Non-blocking - code continues while task runs
                    </td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Performance
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Slower for I/O operations
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Faster and more efficient
                    </td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Use Cases
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Simple operations, calculations
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      I/O, network requests, timers
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Reference Links */}
          <div className="text-xs text-[#43d9ad] [font-family:'Fira_Code',Helvetica] space-y-1">
            <div>
              References:{" "}
              <a
                href="https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-synchronous-and-asynchronous-functions"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#e5e9f0]"
              >
                GreatFrontEnd
              </a>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`Synchronous functions execute sequentially, blocking further execution until completion.
Asynchronous functions allow other code to run while waiting for an operation to complete.

SYNCHRONOUS EXAMPLE:
function task1() {
  console.log('Task 1 - blocking');
}
function task2() {
  console.log('Task 2 - blocking');
}
task1();
task2();
// Output: Task 1, Task 2 (sequential)

ASYNCHRONOUS EXAMPLE (Callback):
function task1(callback) {
  setTimeout(() => {
    console.log('Task 1 - non-blocking');
    callback();
  }, 1000);
}
task1(() => {
  console.log('Task 2');
});
// Output: Task 2, Task 1 (non-blocking)

ASYNC/AWAIT EXAMPLE:
async function runTasks() {
  await task1(); // Waits for task1
  await task2(); // Then runs task2
}

KEY DIFFERENCES:
- Synchronous: Code execution is paused until operation completes
- Asynchronous: Code execution continues; results handled via callbacks, promises, or async/await
- Use synchronous for simple, fast operations
- Use asynchronous for I/O, network requests, file operations`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SynchronousVsAsynchronous;
