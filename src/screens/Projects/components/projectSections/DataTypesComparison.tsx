import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataTypesComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]">JavaScript Data Types</div>
        <Button variant="ghost" onClick={() => setShowVisualExamples(!showVisualExamples)} className="text-sm text-[#607b96] hover:text-[#43d9ad]">
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="mb-2 text-[#43d9ad]">TL;DR</div>
            <ul className="list-disc pl-5 text-[#9fb0c7]">
              <li><strong>Primitive</strong>: number, string, boolean, null, undefined, symbol, bigint — store single values.</li>
              <li><strong>Reference</strong>: object, array, function, Map, Set — can contain collections/complex entities.</li>
            </ul>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#e5e9f0]">
            <div className="mb-2 text-[#43d9ad]">Examples</div>
            <pre>{`// Primitive
let name = 'Alice';
let age = 30;
let isActive = true;

// Reference
let arr = [1, 2, 3];
let obj = { id: 1 };
let id = Symbol('id');`}</pre>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded text-sm text-[#607b96]">
            <div className="mb-2 text-[#43d9ad]">Tips & Pitfalls</div>
            <ul className="list-disc pl-5 text-[#9fb0c7]">
              <li>`typeof null` returns "object" — historical quirk.</li>
              <li>Strings and numbers are primitive — they are copied by value; objects are copied by reference.</li>
              <li>Use `typeof` to check primitives; `Array.isArray()` for arrays.</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <pre>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-[#43d9ad] pb-2">Category</th>
                  <th className="text-left text-[#43d9ad] pb-2">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 align-top">Primitive</td>
                  <td className="py-1 align-top">number, string, boolean, null, undefined, symbol, bigint</td>
                </tr>
                <tr>
                  <td className="py-1 align-top">Reference</td>
                  <td className="py-1 align-top">object, array, function, Map, Set, Date, RegExp</td>
                </tr>
              </tbody>
            </table>
          </pre>
        </div>
      )}
    </div>
  );
};

export default DataTypesComparison;
