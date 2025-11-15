import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

const SVGStylingComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]">Styling SVG</div>
        <Button variant="ghost" onClick={() => setShowVisualExamples(!showVisualExamples)} className="text-sm text-[#607b96] hover:text-[#43d9ad]">
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="mb-2 text-[#43d9ad]">TL;DR</div>
            <ul className="list-disc pl-5 text-[#9fb0c7]">
              <li>Styling SVG can be done via attributes (`fill`, `stroke`), inline styles, embedded or external CSS.</li>
              <li>Presentational attributes (e.g., `fill`) can be overridden by CSS rules; prefer CSS for dynamic theming.</li>
              <li>Use `currentColor` to inherit color from text; `fill="currentColor"` is handy for matching icon color to surrounding text.</li>
            </ul>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#e5e9f0]">
            <div className="mb-2 text-[#43d9ad]">Examples</div>
            <pre>{`<svg width="40" height="40">
  <rect x="5" y="5" width="30" height="30" fill="purple" stroke="blue"/>
</svg>

// CSS override
svg { fill: blue; }`}</pre>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded text-sm text-[#607b96]">
            <div className="mb-2 text-[#43d9ad]">Tips</div>
            <ul className="list-disc pl-5 text-[#9fb0c7]">
              <li>Prefer `fill` and `stroke` for simplicity; use CSS for theming & hover effects.</li>
              <li>Use `mask`/`clipPath` & `currentColor` for scalable theming.</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <pre>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-[#43d9ad] pb-2">Method</th>
                  <th className="text-left text-[#43d9ad] pb-2">Pros</th>
                  <th className="text-left text-[#43d9ad] pb-2">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 align-top">Presentational Attributes (fill/stroke)</td>
                  <td className="py-1 align-top">Simple, inline, immediate</td>
                  <td className="py-1 align-top">Hard to theme at scale</td>
                </tr>
                <tr>
                  <td className="py-1 align-top">Inline style/CSS</td>
                  <td className="py-1 align-top">Easily overridden and dynamic</td>
                  <td className="py-1 align-top">Requires selectors, may be verbose</td>
                </tr>
                <tr>
                  <td className="py-1 align-top">External stylesheet</td>
                  <td className="py-1 align-top">Great for global theming</td>
                  <td className="py-1 align-top">Less portable without proper scoping</td>
                </tr>
              </tbody>
            </table>
          </pre>
        </div>
      )}
    </div>
  );
};

export default SVGStylingComparison;
