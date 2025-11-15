import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

const NullUndefinedComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]">null vs undefined vs undeclared</div>
        <Button variant="ghost" onClick={() => setShowVisualExamples(!showVisualExamples)} className="text-sm text-[#607b96] hover:text-[#43d9ad]">
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="mb-2 text-[#43d9ad]">TL;DR</div>
            <ul className="list-disc pl-5 text-[#9fb0c7]">
              <li><strong>null</strong>: an explicit assignment meaning "no value".</li>
              <li><strong>undefined</strong>: the default value for uninitialized variables and missing object properties.</li>
              <li><strong>undeclared</strong>: variable not declared at all in the current scope; accessing it throws ReferenceError.</li>
            </ul>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#e5e9f0]">
            <div className="mb-2 text-[#43d9ad]">Examples</div>
            <pre>{'let a = null;\nlet b; // undefined\ntry { console.log(c); } catch(e) { console.log("c is undeclared"); }'}</pre>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded text-sm text-[#607b96]">
            <div className="mb-2 text-[#43d9ad]">Safe checks</div>
            <ul className="list-disc pl-5 text-[#9fb0c7]">
              <li>Use strict equality: <span className="text-[#e5e9f0]">value === null</span> or <span className="text-[#e5e9f0]">typeof value === 'undefined'</span>.</li>
              <li>To detect undeclared variables use try/catch or typeof in global contexts.</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <pre>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-[#43d9ad] pb-2">Term</th>
                  <th className="text-left text-[#43d9ad] pb-2">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 align-top">null</td>
                  <td className="py-1 align-top">Explicitly assigned no-value.
                  </td>
                </tr>
                <tr>
                  <td className="py-1 align-top">undefined</td>
                  <td className="py-1 align-top">Variable declared but not assigned; missing properties return undefined.</td>
                </tr>
                <tr>
                  <td className="py-1 align-top">undeclared</td>
                  <td className="py-1 align-top">No variable declaration in current scope; accessing throws ReferenceError.</td>
                </tr>
              </tbody>
            </table>
          </pre>
        </div>
      )}
    </div>
  );
};

export default NullUndefinedComparison;
