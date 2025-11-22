import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CSRFComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">Cross-Site Request Forgery (CSRF)</div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      <div className="text-xs text-[#43d9ad]">
        <a href="https://www.greatfrontend.com/questions/quiz/explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline mr-4">greatfrontend: CSRF →</a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline">github: CSRF (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 text-[#607b96] text-sm">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="text-[#43d9ad] font-semibold mb-2">What is CSRF?</div>
            <p>An attack that forces authenticated users to perform unwanted actions on a web application where they're logged in.</p>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="text-[#43d9ad] font-semibold mb-2">Mitigation Techniques</div>
            <ul className="list-disc list-inside text-[#607b96] text-xs">
              <li>Use same-site cookies (`SameSite` flag)</li>
              <li>Use CSRF tokens (synchronizer token pattern)</li>
              <li>Double-submit cookie pattern</li>
              <li>Verify Origin/Referer headers for sensitive requests</li>
            </ul>
          </div>
        </div>
      ) : (
        <table className="w-full text-[#607b96] text-sm">
          <thead>
            <tr className="border-b border-[#1e2d3d]"><th className="text-left py-2 text-[#43d9ad]">Attack</th><th className="text-left py-2 text-[#43d9ad]">Mitigation</th></tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#1e2d3d]"><td className="py-3 font-medium">CSRF</td><td className="py-3">CSRF tokens, SameSite cookies, origin checks</td></tr>
            <tr><td className="py-3 font-medium">Replay</td><td className="py-3">Use nonces / one-time tokens</td></tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
