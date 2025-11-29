import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProxiesComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          JavaScript Proxies
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
              <div className="text-[#43d9ad] font-semibold mb-2">What is a Proxy?</div>
              <div className="text-[#607b96] text-xs space-y-2">
                <p>An object that acts as an intermediary between code and a target object, allowing you to intercept and customize operations.</p>
              </div>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Basic Example</div>
              <pre className="text-[#607b96] text-xs overflow-x-auto">
{`const handler = {
  get: function (target, prop) {
    console.log(\`Getting: \${prop}\`);
    return target[prop];
  }
};

const proxy = new Proxy(obj, handler);
proxy.name; // Logs: Getting: name`}
              </pre>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Common Use Cases</div>
              <ul className="text-[#607b96] text-xs space-y-1 list-disc list-inside">
                <li>Property access interception (logging, validation)</li>
                <li>Creating reactive systems (Vue.js reactivity)</li>
                <li>Function invocation interception (caching, memoization)</li>
                <li>Dynamic property creation (default values)</li>
                <li>Mocking/stubbing for testing</li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <table className="w-full text-[#607b96] text-sm">
            <thead>
              <tr className="border-b border-[#1e2d3d]">
                <th className="text-left py-2 text-[#43d9ad]">Use Case</th>
                <th className="text-left py-2 text-[#43d9ad]">Example</th>
                <th className="text-left py-2 text-[#43d9ad]">Benefit</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 font-medium">Property Access</td>
                <td className="py-3 text-xs">
                  <code className="bg-[#011221] px-2 py-1 rounded">get trap</code>
                </td>
                <td className="py-3">Log/validate property reads</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 font-medium">Property Assignment</td>
                <td className="py-3 text-xs">
                  <code className="bg-[#011221] px-2 py-1 rounded">set trap</code>
                </td>
                <td className="py-3">Validate before assignment</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 font-medium">Function Calls</td>
                <td className="py-3 text-xs">
                  <code className="bg-[#011221] px-2 py-1 rounded">apply trap</code>
                </td>
                <td className="py-3">Cache results, memoization</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Reactive Systems</td>
                <td className="py-3 text-xs">
                  <code className="bg-[#011221] px-2 py-1 rounded">set trap</code>
                </td>
                <td className="py-3">Trigger UI updates on changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
