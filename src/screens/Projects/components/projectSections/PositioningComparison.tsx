import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PositioningComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          CSS Positioning
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
        <a href="https://www.greatfrontend.com/questions/quiz/whats-the-difference-between-a-relative-fixed-absolute-and-statically-positioned-element?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Positioning →</a>
        <a href="https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/whats-the-difference-between-a-relative-fixed-absolute-and-statically-positioned-element/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Positioning (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Position Value Headers */}
          <div className="grid grid-cols-5 gap-3 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">
            <div>Position</div>
            <div>static</div>
            <div>relative</div>
            <div>absolute</div>
            <div>fixed</div>
          </div>

          {/* Default Behavior */}
          <div className="grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Default</div>
            <div className="space-y-2">
              <div className="text-xs">Normal flow</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] h-24 relative">
                <div className="bg-[#4d5bce40] p-2 absolute top-2 left-2">In flow</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Still in flow</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] h-24 relative">
                <div className="bg-[#4d5bce40] p-2 relative top-2 left-2">Offset</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Removed from flow</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] h-24 relative">
                <div className="bg-[#4d5bce40] p-2 absolute top-2 right-2">Out</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Fixed to viewport</div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] h-24 relative bg-opacity-50">
                <div className="bg-[#43d9ad40] p-2 text-xs">Fixed (sticky)</div>
              </div>
            </div>
          </div>

          {/* Offset Properties */}
          <div className="grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Offset (top, left, etc)</div>
            <div className="space-y-2">
              <div className="text-xs">Ignored</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#fea55f] text-xs">Not applicable</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Relative to normal position</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs">top/left/right/bottom</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Relative to positioned parent</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs">top/left/right/bottom</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Relative to viewport</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs">top/left/right/bottom</code>
              </div>
            </div>
          </div>

          {/* Stacking Context */}
          <div className="grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">z-index</div>
            <div className="space-y-2">
              <div className="text-xs">No effect</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#fea55f] text-xs">Ignored</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Can apply</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs">Works</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Recommended</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs">Important</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">For layering</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs">Common</code>
              </div>
            </div>
          </div>

          {/* Document Flow */}
          <div className="grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Affects Layout Flow</div>
            <div className="space-y-2">
              <div className="text-xs">✓ Yes</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs">In document flow</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">✓ Yes</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#43d9ad] text-xs">Still takes space</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">✗ No</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#fea55f] text-xs">Out of flow</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">✗ No</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <code className="text-[#fea55f] text-xs">Out of flow</code>
              </div>
            </div>
          </div>

          {/* Common Uses */}
          <div className="grid grid-cols-5 gap-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Common Uses</div>
            <div className="space-y-2">
              <div className="text-xs">Default layout</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d] text-xs">
                Most elements
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Fine-tune position</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d] text-xs">
                Minor adjustments
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Overlays, tooltips, dropdowns</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d] text-xs">
                Over content
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Headers, footers, modals</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d] text-xs">
                Sticky elements
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`The position property defines how an element is positioned in the document.

position: static (DEFAULT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Element flows normally in document
• top, left, right, bottom have NO effect
• Not positioned relative to anything
• Most HTML elements are static

position: relative
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Element positioned relative to its NORMAL position
• Still occupies space in document flow
• Other elements don't move to fill gap
• Useful for fine-tuning element placement
  Example: nudge button slightly down with top: 10px

position: absolute
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Removed from normal document flow
• Positioned relative to NEAREST POSITIONED ANCESTOR
• If no positioned ancestor, relative to <html>
• Other elements flow around it as if not there
• Common uses: overlays, tooltips, dropdowns, modals
  Example: tooltip positioned above a button

position: fixed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Removed from normal document flow
• Positioned relative to VIEWPORT (not ancestor)
• Stays in place even when scrolling
• Common uses: sticky headers, floating nav, modals
  Example: fixed header that stays at top while scrolling

KEY DIFFERENCES:
┌─────────────┬────────┬────────┬────────┬────────┐
│ Property    │ static │relative│absolute│ fixed  │
├─────────────┼────────┼────────┼────────┼────────┤
│ In flow?    │  Yes   │  Yes   │  No    │  No    │
│ Uses offset?│  No    │  Yes   │  Yes   │  Yes   │
│ Relative to?│   —    │ self   │parent  │viewport│
└─────────────┴────────┴────────┴────────┴────────┘

POSITIONING TIPS:
• Use relative to create a positioning context for child absolute elements
• absolute elements usually have overflow: hidden parent
• Don't mix display: flex with positioning
• z-index only works on positioned elements (not static)
• fixed elements can cause scrolling issues on mobile`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Position</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Behavior</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Positioned Relative To</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Common Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">static</td>
                <td className="py-3 pr-4 align-top">Default flow, offset ignored</td>
                <td className="py-3 pr-4 align-top">N/A</td>
                <td className="py-3 align-top">Default for all elements</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">relative</td>
                <td className="py-3 pr-4 align-top">In flow, offset from normal position, takes space</td>
                <td className="py-3 pr-4 align-top">Its normal position</td>
                <td className="py-3 align-top">Fine-tuning position, context for absolute children</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">absolute</td>
                <td className="py-3 pr-4 align-top">Out of flow, no space, absolutely positioned</td>
                <td className="py-3 pr-4 align-top">Nearest positioned ancestor (or html)</td>
                <td className="py-3 align-top">Overlays, tooltips, modals, dropdowns</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">fixed</td>
                <td className="py-3 pr-4 align-top">Out of flow, no space, stuck to viewport</td>
                <td className="py-3 pr-4 align-top">Browser viewport</td>
                <td className="py-3 align-top">Fixed headers, sticky navigation, floating buttons</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
