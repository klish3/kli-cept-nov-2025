import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CSSMatchingComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="font-normal text-[#e5e9f0] text-lg">
          CSS Selector Matching
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
        <a href="https://www.greatfrontend.com/questions/quiz/explain-how-a-browser-determines-what-elements-match-a-css-selector?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: CSS Matching →</a>
        <a href="https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/explain-how-a-browser-determines-what-elements-match-a-css-selector/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">GitHub: CSS Matching Guide →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Matching Direction */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Matching Algorithm</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-3">Browsers Match Right-to-Left</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded">
                  <div>Selector: p span</div>
                  <div className="text-[#43d9ad] mt-2">Step 1: Find all &lt;span&gt;</div>
                  <div className="text-[#43d9ad]">Step 2: Traverse up to &lt;p&gt;</div>
                  <div className="text-[#43d9ad]">Step 3: Match found</div>
                </div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-sm mb-3">Key Selector</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs space-y-1">
                  <div>• Rightmost selector</div>
                  <div>• Most specific filter</div>
                  <div>• Reduces search scope</div>
                  <div>• Improves performance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Selector Matching Examples</div>
            <div className="space-y-2">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#43d9ad] text-xs mb-2">p span</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs">Find all span → check if parent is p ✓</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#43d9ad] text-xs mb-2">.class div p span</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs">Find span → p → div → .class ✓</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#43d9ad] text-xs mb-2">.active span</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs">Find span → check .active ancestor ✓</div>
              </div>
            </div>
          </div>

          {/* Performance Tips */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Performance Optimization Tips</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#43d9ad] font-medium text-xs mb-2">✓ Do This</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Shorter selectors</div>
                  <div>• Specific key selector</div>
                  <div>• Use classes</div>
                  <div>• Avoid deep nesting</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-xs mb-2">✗ Avoid This</div>
                <div className="text-[#607b96] text-xs space-y-1">
                  <div>• Long selector chains</div>
                  <div>• Universal selectors (*)</div>
                  <div>• Attribute selectors</div>
                  <div>• Complex hierarchies</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`CSS SELECTOR MATCHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HOW BROWSERS MATCH SELECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Browsers DON'T match left-to-right.
Instead, they match RIGHT-TO-LEFT.

This is more efficient!

EXAMPLE:
Selector: p span

RIGHT-TO-LEFT MATCHING:
1. Browser finds ALL <span> elements in DOM
2. For each <span>, traverses UP to parent
3. Checks if any ancestor is <p>
4. If found, the <span> matches the selector

TERMINOLOGY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Key Selector = Rightmost selector in the chain

Example: .container .content p span
                                  ^^^^
                            KEY SELECTOR

This is the most specific filter that narrows
down the search scope the most.

KEY SELECTOR IMPORTANCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Good key selector:  p span       (finds few spans)
Bad key selector:   * span       (finds all spans)

Shorter selector chain = faster matching
More specific key selector = faster matching

MATCHING PROCESS FOR "p > span.active":
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Find all span.active (KEY SELECTOR)
Step 2: Check if parent is p
Step 3: Match or no match

OPTIMIZATION PRINCIPLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ DO THIS:
  - Use class selectors (most specific)
  - Keep selectors short
  - Avoid universal selector (*)
  - Use descendent combinator carefully

✗ AVOID THIS:
  - Deep nesting chains
  - Attribute selectors [type="..."]
  - Universal selectors in chains: * p span
  - Overly complex selectors

INEFFICIENT vs EFFICIENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inefficient: html body .container div p span
            (long chain, many elements to check)

Efficient:  .active-span
           (direct class selector, fast lookup)`}
</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSMatchingComparison;
