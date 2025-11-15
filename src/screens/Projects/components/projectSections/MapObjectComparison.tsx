import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

const MapObjectComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]">Map vs Plain Object</div>
        <Button variant="ghost" onClick={() => setShowVisualExamples(!showVisualExamples)} className="text-sm text-[#607b96] hover:text-[#43d9ad]">
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="mb-2 text-[#43d9ad]">TL;DR</div>
            <ul className="list-disc pl-5 text-[#9fb0c7]">
              <li><strong>Map</strong>: Allows keys of any type, preserves insertion order, has a size property and useful iteration methods.</li>
              <li><strong>Plain Object</strong>: Keys are strings (or symbols), simple to use and serializable to JSON; often fast for small datasets.</li>
            </ul>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#e5e9f0]">
            <div className="mb-2 text-[#43d9ad]">Examples</div>
            <pre>{`// Map
const map = new Map();
map.set({}, 'objKey');
map.set('a', 1);
console.log(map.size); // 2

// Plain object
const obj = { a: 1 };
obj['a'] = 2;
console.log(Object.keys(obj)); // ['a']`}</pre>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded text-sm text-[#607b96]">
            <div className="mb-2 text-[#43d9ad]">When to use</div>
            <ul className="list-disc pl-5 text-[#9fb0c7]">
              <li>Use <strong>Map</strong> when keys are not strings, you need predictable insertion order, or frequent additions/removals for large datasets.</li>
              <li>Use a <strong>Plain Object</strong> when you need lightweight data structures or JSON-serializable structures.</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <pre>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-[#43d9ad] pb-2">Feature</th>
                  <th className="text-left text-[#43d9ad] pb-2">Map</th>
                  <th className="text-left text-[#43d9ad] pb-2">Plain Object</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 align-top">Key type</td>
                  <td className="py-1 align-top">Any value</td>
                  <td className="py-1 align-top">Strings (or Symbol)</td>
                </tr>
                <tr>
                  <td className="py-1 align-top">Ordering</td>
                  <td className="py-1 align-top">Insertion order preserved</td>
                  <td className="py-1 align-top">Not guaranteed across engines</td>
                </tr>
                <tr>
                  <td className="py-1 align-top">Size</td>
                  <td className="py-1 align-top">Has `size`</td>
                  <td className="py-1 align-top">No `size` property</td>
                </tr>
                <tr>
                  <td className="py-1 align-top">Iteration</td>
                  <td className="py-1 align-top">`map.keys()`, `map.entries()`</td>
                  <td className="py-1 align-top">`Object.keys()`, `for...in`</td>
                </tr>
                <tr>
                  <td className="py-1 align-top">Serializable</td>
                  <td className="py-1 align-top">No</td>
                  <td className="py-1 align-top">Yes (JSON)</td>
                </tr>
              </tbody>
            </table>
          </pre>
        </div>
      )}
    </div>
  );
};

export default MapObjectComparison;
