import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

const EqualsComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]">== vs ===</div>
        <Button variant="ghost" onClick={() => setShowVisualExamples(!showVisualExamples)} className="text-sm text-[#607b96] hover:text-[#43d9ad]">
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="mb-3 text-[#43d9ad]">Type coercion examples</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[#9fb0c7] mb-2">Loose equality (==)</div>
                <pre className="bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]">{'0 == "0" // true\n0 == false // true\n"\n" == 0 // true\nnull == undefined // true\n'}</pre>
              </div>
              <div>
                <div className="text-[#9fb0c7] mb-2">Strict equality (===)</div>
                <pre className="bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]">{'0 === "0" // false\n0 === false // false\nnull === undefined // false\n'}</pre>
              </div>
            </div>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="mb-2 text-[#43d9ad]">Guidelines</div>
            <ul className="list-disc pl-5 text-[#9fb0c7]">
              <li>Use === unless you intentionally want type coercion.</li>
              <li>Use Object.is for some NaN/-0 edge cases.</li>
              <li>Be explicit about conversions instead of relying on coercion (Number(), String(), Boolean()).</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <pre>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-[#43d9ad] pb-2">Operator</th>
                  <th className="text-left text-[#43d9ad] pb-2">Behavior</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 align-top">==</td>
                  <td className="py-1 align-top">Performs type coercion if operands are of different types and then compares.</td>
                </tr>
                <tr>
                  <td className="py-1 align-top">===</td>
                  <td className="py-1 align-top">Strict comparison: same type and same value.</td>
                </tr>
              </tbody>
            </table>
          </pre>
        </div>
      )}
    </div>
  );
};

export default EqualsComparison;
