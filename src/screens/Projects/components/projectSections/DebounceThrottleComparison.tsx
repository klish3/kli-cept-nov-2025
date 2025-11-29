import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DebounceThrottleComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">Debouncing & Throttling</div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      <div className="text-xs text-[#43d9ad]">
        <a href="https://www.greatfrontend.com/questions/quiz/explain-the-concept-of-debouncing-and-throttling?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline mr-4">greatfrontend: Debounce/Throttle →</a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-the-concept-of-debouncing-and-throttling/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline">github: Debounce/Throttle (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <div className="space-y-4 text-[#607b96] text-sm">
          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="text-[#43d9ad] font-semibold mb-2">Debounce</div>
            <p>Delays a function until a pause in events (useful for input/search boxes).</p>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <div className="text-[#43d9ad] font-semibold mb-2">Throttle</div>
            <p>Limits function execution to at most once per interval (useful for scroll/resize).</p>
          </div>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
            <pre className="text-[#607b96] text-xs overflow-x-auto">
{`// Debounce example
function debounce(fn, wait) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Throttle example
function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}`}
            </pre>
          </div>
        </div>
      ) : (
        <table className="w-full text-[#607b96] text-sm">
          <thead>
            <tr className="border-b border-[#1e2d3d]"><th className="text-left py-2 text-[#43d9ad]">Technique</th><th className="text-left py-2 text-[#43d9ad]">When to use</th></tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#1e2d3d]"><td className="py-3 font-medium">Debounce</td><td className="py-3">After rapid input stops (search boxes)</td></tr>
            <tr><td className="py-3 font-medium">Throttle</td><td className="py-3">Rate-limit events (scroll, resize)</td></tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
