import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BoxModelComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">CSS Box Model</div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      <div className="text-xs text-[#43d9ad]">
        <a href="https://www.greatfrontend.com/questions/quiz/explain-your-understanding-of-the-box-model-and-how-you-would-tell-the-browser-in-css-to-render-your-layout-in-different-box-models?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline mr-4">greatfrontend: Box Model →</a>
        <a href="https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/explain-your-understanding-of-the-box-model-and-how-you-would-tell-the-browser-in-css-to-render-your-layout-in-different-box-models/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline">github: Box Model (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 text-[#607b96] text-sm">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="text-[#43d9ad] font-semibold mb-2">Box model parts</div>
            <ul className="list-disc list-inside">
              <li>Content → width/height</li>
              <li>Padding → inside space</li>
              <li>Border → border thickness</li>
              <li>Margin → outside spacing</li>
            </ul>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="text-[#43d9ad] font-semibold mb-2">box-sizing</div>
            <pre className="text-[#607b96] text-xs overflow-x-auto">
{`/* content-box (default): width excludes padding and border */
.box { box-sizing: content-box; }

/* border-box: width includes padding and border */
.box { box-sizing: border-box; }`}
            </pre>
          </div>
        </div>
      ) : (
        <table className="w-full text-[#607b96] text-sm">
          <thead>
            <tr className="border-b border-[#1e2d3d]"><th className="text-left py-2 text-[#43d9ad]">Part</th><th className="text-left py-2 text-[#43d9ad]">Effect</th></tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#1e2d3d]"><td className="py-3 font-medium">Content</td><td className="py-3">Holds element content</td></tr>
            <tr className="border-b border-[#1e2d3d]"><td className="py-3 font-medium">Padding</td><td className="py-3">Adds inner spacing</td></tr>
            <tr className="border-b border-[#1e2d3d]"><td className="py-3 font-medium">Border</td><td className="py-3">Visible edge</td></tr>
            <tr><td className="py-3 font-medium">Margin</td><td className="py-3">Outer spacing between elements</td></tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
