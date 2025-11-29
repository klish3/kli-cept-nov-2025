import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TranslateVsPositioningComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="font-normal text-[#e5e9f0] text-lg">
          translate() vs absolute positioning
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
        <a href="https://www.greatfrontend.com/questions/quiz/is-there-any-reason-youd-want-to-use-translate-instead-of-absolute-positioning-or-vice-versa-and-why?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: translate() vs position →</a>
        <a href="https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/is-there-any-reason-youd-want-to-use-translate-instead-of-absolute-positioning-or-vice-versa-and-why/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">GitHub: Position Guide →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Comparison Table */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">translate() vs position: absolute</div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="text-[#43d9ad]">
                    <th className="border border-[#1e2d3d] bg-[#011221] p-2 text-left">Property</th>
                    <th className="border border-[#1e2d3d] bg-[#011221] p-2 text-left">translate()</th>
                    <th className="border border-[#1e2d3d] bg-[#011221] p-2 text-left">position: absolute</th>
                  </tr>
                </thead>
                <tbody className="text-[#607b96]">
                  <tr>
                    <td className="border border-[#1e2d3d] bg-[#011221] p-2">Document Flow</td>
                    <td className="border border-[#1e2d3d] p-2">Stays in flow</td>
                    <td className="border border-[#1e2d3d] p-2">Removed from flow</td>
                  </tr>
                  <tr>
                    <td className="border border-[#1e2d3d] bg-[#011221] p-2">Space Occupied</td>
                    <td className="border border-[#1e2d3d] p-2">Original space kept</td>
                    <td className="border border-[#1e2d3d] p-2">No space reserved</td>
                  </tr>
                  <tr>
                    <td className="border border-[#1e2d3d] bg-[#011221] p-2">Reflow/Repaint</td>
                    <td className="border border-[#1e2d3d] p-2">No reflow ✓</td>
                    <td className="border border-[#1e2d3d] p-2">Triggers reflow ✗</td>
                  </tr>
                  <tr>
                    <td className="border border-[#1e2d3d] bg-[#011221] p-2">GPU Layer</td>
                    <td className="border border-[#1e2d3d] p-2">Creates GPU layer ✓</td>
                    <td className="border border-[#1e2d3d] p-2">Uses CPU ✗</td>
                  </tr>
                  <tr>
                    <td className="border border-[#1e2d3d] bg-[#011221] p-2">Paint Time</td>
                    <td className="border border-[#1e2d3d] p-2">Faster ✓</td>
                    <td className="border border-[#1e2d3d] p-2">Slower ✗</td>
                  </tr>
                  <tr>
                    <td className="border border-[#1e2d3d] bg-[#011221] p-2">Animations</td>
                    <td className="border border-[#1e2d3d] p-2">Smoother ✓</td>
                    <td className="border border-[#1e2d3d] p-2">Jankier ✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">When to Use Each</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-sm mb-3">Use translate()</div>
                <div className="text-[#607b96] text-xs space-y-2">
                  <div>• Animations & transitions</div>
                  <div>• Moving elements smoothly</div>
                  <div>• Hover effects</div>
                  <div>• Should stay in document flow</div>
                  <div>• Performance-critical</div>
                </div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-3">Use position: absolute</div>
                <div className="text-[#607b96] text-xs space-y-2">
                  <div>• Overlays & modals</div>
                  <div>• Tooltips & popovers</div>
                  <div>• Fixed positioning relative to parent</div>
                  <div>• Static placement (no animation)</div>
                  <div>• Removing from layout</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Browser Rendering Impact</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2">
              <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#43d9ad] text-xs mb-3">transform: translate()</div>
              <div className="text-[#607b96] text-xs ml-4">→ No reflow</div>
              <div className="text-[#607b96] text-xs ml-4">→ No repaint</div>
              <div className="text-[#607b96] text-xs ml-4">→ Only composition (GPU)</div>
              <div className="text-[#607b96] text-xs ml-4">→ Smoother 60fps animations</div>
            </div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2">
              <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#fea55f] text-xs mb-3">position: absolute</div>
              <div className="text-[#607b96] text-xs ml-4">→ Triggers reflow</div>
              <div className="text-[#607b96] text-xs ml-4">→ Triggers repaint</div>
              <div className="text-[#607b96] text-xs ml-4">→ Uses CPU rendering</div>
              <div className="text-[#607b96] text-xs ml-4">→ Can cause jank</div>
            </div>
          </div>
        </>
      ) : (
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`translate() vs position: absolute
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOCUMENT FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

translate():
  - Element stays in document flow
  - Like position: relative
  - Original space is reserved
  - Siblings are not affected

position: absolute:
  - Element removed from flow
  - Other elements shift up
  - Space no longer reserved
  - Layout recalculation needed

RENDERING PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Browser rendering pipeline:
  Reflow → Repaint → Composite

translate():
  - Does NOT trigger reflow
  - Does NOT trigger repaint
  - ONLY triggers composite (GPU)
  - Faster! ✓

position: absolute:
  - TRIGGERS reflow ✗
  - TRIGGERS repaint ✗
  - Uses CPU rendering ✗
  - Slower, jankier ✗

GPU ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

transform: translate() creates a new GPU layer.
This allows hardware acceleration of animations.

position: absolute does NOT create a GPU layer.
All rendering happens on CPU.

For animations: translate() is 3-5x faster!

ANIMATIONS COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ AVOID (Janky):
animation: {
  from { left: 0; }
  to { left: 100px; }
}

✓ PREFER (Smooth):
animation: {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

WHEN TO USE EACH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use translate():
  • Moving elements smoothly
  • Animations & transitions
  • Hover effects
  • Performance-critical
  • Need smooth 60fps

Use position: absolute:
  • Tooltips & popups
  • Modals & overlays
  • Static positioning
  • Need to remove from layout
  • One-time placement

MEMORY & PERFORMANCE TIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• transform properties use GPU acceleration
• opacity also uses GPU (like transform)
• Avoid animating: left, right, top, bottom, width, height
• These properties trigger layout recalculation
• Use transform and opacity for animations
• Monitor DevTools: Performance > Rendering`}
</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslateVsPositioningComparison;
