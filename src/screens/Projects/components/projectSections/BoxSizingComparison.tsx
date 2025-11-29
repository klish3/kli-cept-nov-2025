import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BoxSizingComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          box-sizing Property
        </div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      <div className="text-xs text-[#43d9ad] space-y-1">
        <a href="https://www.greatfrontend.com/questions/quiz/what-does-box-sizing-border-box-do-what-are-its-advantages?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: box-sizing →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Property Row Headers */}
          <div className="grid grid-cols-3 gap-4 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">
            <div>Property</div>
            <div>content-box (default)</div>
            <div>border-box</div>
          </div>

          {/* Box Sizing Calculation Row */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Calculation</div>
            <div className="space-y-2">
              <div className="text-xs">width excludes padding & border</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <div className="text-[#43d9ad] text-xs mb-1">width: 200px</div>
                <div className="bg-[#4d5bce40] p-2 border border-[#4d5bce]">
                  <div className="bg-[#38a169] text-white text-center p-2 text-xs">Content</div>
                </div>
                <div className="text-[#fea55f] text-xs mt-1">Total: 200px + padding + border</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">width includes padding & border</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d]">
                <div className="text-[#43d9ad] text-xs mb-1">width: 200px</div>
                <div className="bg-[#4d5bce40] p-2 border border-[#4d5bce]">
                  <div className="bg-[#38a169] text-white text-center p-2 text-xs">Content</div>
                </div>
                <div className="text-[#43d9ad] text-xs mt-1">Total: exactly 200px</div>
              </div>
            </div>
          </div>

          {/* Practical Example Row */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Example (w-32 p-4 border-2)</div>
            <div className="space-y-2">
              <div className="text-xs">Gets wider with padding/border</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d]">
                <div style={{ width: '128px', padding: '16px', border: '2px solid #4d5bce' }} className="bg-[#4d5bce40]">
                  <div className="bg-[#38a169] text-white text-center text-xs">128px + 32px + 4px</div>
                </div>
                <div className="text-[#fea55f] text-xs mt-2">Actual width: 164px</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Stays exactly 128px</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d]">
                <div style={{ boxSizing: 'border-box', width: '128px', padding: '16px', border: '2px solid #4d5bce' }} className="bg-[#4d5bce40]">
                  <div className="bg-[#38a169] text-white text-center text-xs">Exactly 128px</div>
                </div>
                <div className="text-[#43d9ad] text-xs mt-2">Actual width: 128px</div>
              </div>
            </div>
          </div>

          {/* Advantages Row */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">content-box Challenges</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#fea55f]">❌ Width surprises</div>
                  <div className="text-xs">Adding padding/border changes total width</div>
                </div>
                <div>
                  <div className="text-[#fea55f]">❌ Layout shifts</div>
                  <div className="text-xs">Elements can unexpectedly grow in size</div>
                </div>
                <div>
                  <div className="text-[#fea55f]">❌ Math overhead</div>
                  <div className="text-xs">Must manually calculate total dimensions</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">border-box Advantages</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad]">✓ Predictable sizing</div>
                  <div className="text-xs">Width always equals what you set</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Layout stability</div>
                  <div className="text-xs">Padding/border doesn't affect total size</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">✓ Easier layouts</div>
                  <div className="text-xs">Simpler percentage-based calculations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practice Row */}
          <div className="grid grid-cols-1 gap-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium text-[#43d9ad]">Recommended Practice</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
              <div className="text-[#43d9ad] font-medium">Apply border-box globally:</div>
              <pre className="bg-[#1e2d3d] p-3 rounded text-xs overflow-x-auto">
{`/* Universal selector - apply to all elements */
* {
  box-sizing: border-box;
}

/* Or more explicitly */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}`}
              </pre>
              <div className="text-xs text-[#43d9ad] mt-2">✓ Standard practice across modern web development</div>
              <div className="text-xs text-[#43d9ad]">✓ Makes sizing predictable by default</div>
              <div className="text-xs text-[#43d9ad]">✓ Simplifies responsive design</div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`box-sizing determines what the width and height properties include.

DEFAULT BEHAVIOR (content-box):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.box {
  width: 200px;           /* Only content area */
  padding: 20px;          /* Added to total */
  border: 5px solid;      /* Added to total */
}

Total width = 200px + 40px (padding) + 10px (border) = 250px

RECOMMENDED (border-box):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.box {
  box-sizing: border-box;
  width: 200px;           /* Includes padding + border */
  padding: 20px;
  border: 5px solid;
}

Total width = exactly 200px (no surprises!)

WHY border-box IS BETTER:
• Predictable sizing - width equals what you set
• Simpler layouts - no unexpected element growth
• Easier calculations - especially for responsive design
• Better with percentages - 50% actually means 50%
• Modern standard - used in frameworks and best practices`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Aspect</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">content-box</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">border-box</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Width Includes</td>
                <td className="py-3 pr-4 align-top">Content only</td>
                <td className="py-3 align-top">Content + padding + border</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Predictability</td>
                <td className="py-3 pr-4 align-top">Low - size changes with padding/border</td>
                <td className="py-3 align-top">High - size stays consistent</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Use Case</td>
                <td className="py-3 pr-4 align-top">Legacy code; rarely preferred</td>
                <td className="py-3 align-top">Modern layouts; recommended default</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Best Practice</td>
                <td className="py-3 pr-4 align-top">Not recommended</td>
                <td className="py-3 align-top">Apply globally with * selector</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
