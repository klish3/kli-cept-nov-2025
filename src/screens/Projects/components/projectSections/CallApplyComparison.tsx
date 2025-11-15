import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

const CallApplyComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]">.call vs .apply</div>
        <Button variant="ghost" onClick={() => setShowVisualExamples(!showVisualExamples)} className="text-sm text-[#607b96] hover:text-[#43d9ad]">
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="mb-3 text-[#43d9ad]">Basic difference</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[#9fb0c7] mb-2">.call()</div>
                <pre className="bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]">{'function add(a, b) {\n  return a + b;\n}\n\nadd.call(\n  null, \n  1, \n  2\n); // 3'}</pre>
              </div>
              <div>
                <div className="text-[#9fb0c7] mb-2">.apply()</div>
                <pre className="bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]">{'function add(a, b) {\n  return a + b;\n}\n\nadd.apply(\n  null, \n  [1, 2]\n); // 3'}</pre>
              </div>
            </div>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="mb-3 text-[#43d9ad]">Context management example</div>
            <pre className="bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]">
{`const person = {
  name: 'John',
  greet() {
    console.log(\`Hello, \${this.name}\`);
  }
};

const other = { name: 'Alice' };

person.greet.call(other);   // Hello, Alice
person.greet.apply(other);  // Hello, Alice`}
            </pre>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="mb-3 text-[#43d9ad]">Array method borrowing</div>
            <pre className="bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]">
{`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using apply to borrow push method
Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [1, 2, 3, 4, 5, 6]`}
            </pre>
          </div>
        </div>
      ) : (
        <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <pre>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-[#43d9ad] pb-2">Method</th>
                  <th className="text-left text-[#43d9ad] pb-2">Arguments</th>
                  <th className="text-left text-[#43d9ad] pb-2">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 align-top">.call()</td>
                  <td className="py-2 align-top">Comma-separated</td>
                  <td className="py-2 align-top">Invoke function with specific `this` context and individual arguments</td>
                </tr>
                <tr>
                  <td className="py-2 align-top">.apply()</td>
                  <td className="py-2 align-top">Array</td>
                  <td className="py-2 align-top">Invoke function with specific `this` context and array of arguments</td>
                </tr>
              </tbody>
            </table>
          </pre>
        </div>
      )}
    </div>
  );
};

export default CallApplyComparison;
