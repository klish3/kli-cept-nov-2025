import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CSPComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">Content Security Policy (CSP)</div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      <div className="text-xs text-[#43d9ad]">
        <a href="https://www.greatfrontend.com/questions/quiz/explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline mr-4">greatfrontend: CSP →</a>
        <a href="https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline">github: CSP (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 text-[#607b96] text-sm">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="text-[#43d9ad] font-semibold mb-2">What CSP does</div>
            <p>Restricts sources for scripts, styles, images and other resources to mitigate XSS and data injection attacks.</p>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="text-[#43d9ad] font-semibold mb-2">Example header</div>
            <pre className="text-[#607b96] text-xs overflow-x-auto">
{`Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; object-src 'none';`}
            </pre>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="text-[#43d9ad] font-semibold mb-2">Benefits</div>
            <ul className="list-disc list-inside text-[#607b96] text-xs">
              <li>Blocks inline scripts (unless allowed)</li>
              <li>Prevents malicious third-party scripts</li>
              <li>Mitigates many XSS vectors</li>
            </ul>
          </div>
        </div>
      ) : (
        <table className="w-full text-[#607b96] text-sm">
          <thead>
            <tr className="border-b border-[#1e2d3d]"><th className="text-left py-2 text-[#43d9ad]">Directive</th><th className="text-left py-2 text-[#43d9ad]">Purpose</th></tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#1e2d3d]"><td className="py-3 font-medium">default-src</td><td className="py-3">Fallback policy for fetched resources</td></tr>
            <tr className="border-b border-[#1e2d3d]"><td className="py-3 font-medium">script-src</td><td className="py-3">Allowed script sources (CDNs, self)</td></tr>
            <tr><td className="py-3 font-medium">object-src</td><td className="py-3">Controls plugin/object sources (often set to 'none')</td></tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
