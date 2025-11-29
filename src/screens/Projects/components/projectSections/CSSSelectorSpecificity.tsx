import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CSSSelectorSpecificity: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="font-normal text-[#e5e9f0] text-lg" style={{fontFamily: "'Fira Code', Helvetica"}}>
          CSS Selector Specificity
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-css-selector-specificity-and-how-does-it-work?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: CSS Specificity →</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank" rel="noopener noreferrer" className="hover:underline block">MDN: CSS Specificity →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Specificity Hierarchy */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm" style={{fontFamily: "'Fira Code', Helvetica"}}>Specificity Levels (Low to High)</div>
            <div className="space-y-2">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div>
                  <div className="text-[#607b96] font-medium">0-0-0-0: Universal Selector</div>
                  <div className="text-[#43d9ad]">{'* { color: red; }'}</div>
                </div>
              </div>

              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div>
                  <div className="text-[#607b96] font-medium">0-0-0-1: Element Selector</div>
                  <div className="text-[#43d9ad]">{'p { color: red; }'}</div>
                </div>
              </div>

              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div>
                  <div className="text-[#607b96] font-medium">0-0-1-0: Class/Attribute Selector</div>
                  <div className="text-[#43d9ad]">{'.button { color: blue; }'}</div>
                  <div className="text-[#43d9ad]">{'[type="text"] { color: green; }'}</div>
                </div>
              </div>

              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div>
                  <div className="text-[#607b96] font-medium">0-1-0-0: ID Selector</div>
                  <div className="text-[#43d9ad]">{'#header { color: navy; }'}</div>
                </div>
              </div>

              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div>
                  <div className="text-[#607b96] font-medium">1-0-0-0: Inline Style</div>
                  <div className="text-[#43d9ad]">{'<div style="color: red;">'}</div>
                </div>
              </div>

              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div>
                  <div className="text-[#fea55f] font-medium">!important (Override All)</div>
                  <div className="text-[#fea55f]">{'p { color: red !important; }'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculation Examples */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm" style={{fontFamily: "'Fira Code', Helvetica"}}>Specificity Calculation Examples</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div className="text-[#43d9ad]">p</div>
                <div className="text-[#607b96]">Specificity: 0-0-0-1</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div className="text-[#43d9ad]">.button</div>
                <div className="text-[#607b96]">Specificity: 0-0-1-0</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div className="text-[#43d9ad]">p.button</div>
                <div className="text-[#607b96]">Specificity: 0-0-1-1</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div className="text-[#43d9ad]">#header .nav</div>
                <div className="text-[#607b96]">Specificity: 0-1-1-0</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div className="text-[#43d9ad]">{'div > p.intro'}</div>
                <div className="text-[#607b96]">Specificity: 0-0-1-2</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div className="text-[#43d9ad]">{'style="color: red"'}</div>
                <div className="text-[#607b96]">Specificity: 1-0-0-0</div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] text-sm" style={{fontFamily: "'Fira Code', Helvetica"}}>Best Practices</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] text-xs space-y-1" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div className="text-[#43d9ad] font-medium mb-2">✓ Do This</div>
                <div>✓ Use classes for styling</div>
                <div>✓ Keep specificity low</div>
                <div>✓ Avoid deep nesting</div>
                <div>✓ Use IDs for JavaScript</div>
              </div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] text-xs space-y-1" style={{fontFamily: "'Fira Code', Helvetica"}}>
                <div className="text-[#fea55f] font-medium mb-2">✗ Avoid This</div>
                <div>✗ Don't overuse !important</div>
                <div>✗ Avoid inline styles</div>
                <div>✗ Don't use IDs for styling</div>
                <div>✗ Complex selectors</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-[#607b96] text-sm space-y-6" style={{fontFamily: "'Fira Code', Helvetica"}}>
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`CSS SELECTOR SPECIFICITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Specificity determines which CSS rules apply when
multiple selectors target the same element.

SPECIFICITY HIERARCHY (Low to High):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Four-part scale: (A, B, C, D)

A = Inline styles
B = ID selectors
C = Class selectors, attribute selectors, pseudo-classes
D = Element selectors, pseudo-elements

Examples:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* { } → 0-0-0-0 (Universal)
p { } → 0-0-0-1 (Element)
.button { } → 0-0-1-0 (Class)
#header { } → 0-1-0-0 (ID)
<div style="color: red;"> → 1-0-0-0 (Inline)

Combinations:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

h1 { } → 0-0-0-1
.title { } → 0-0-1-0
h1.title { } → 0-0-1-1 (element + class)
#main h1 { } → 0-1-0-1 (ID + element)
#main .title { } → 0-1-1-0 (ID + class)

RULES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Higher specificity wins
   #header { color: navy; } ← Wins
   .title { color: blue; }

2. Inline styles beat everything except !important
   <div style="color: red;"> ← Wins over any rule

3. !important is last resort (avoid if possible)
   p { color: blue !important; } ← Always wins

4. Combinators (>, +, ~) don't add specificity
   div > p { } → 0-0-0-2 (just elements)
   #main > p { } → 0-1-0-1 (ID + element)

5. :not() pseudo-class doesn't add specificity
   :not(p) { } → 0-0-0-0
   :not(.intro) { } → 0-0-1-0

COMMON MISTAKES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Overusing IDs for styling
   IDs are 0-1-0-0, very high specificity
   Makes overriding styles difficult

❌ Overusing !important
   Creates maintenance nightmare
   Forces future rules to also use !important

❌ Deep nesting in CSS-in-JS
   .container .header .nav .link { }
   High specificity, fragile

BEST PRACTICES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Keep specificity low
✓ Use classes for styling
✓ Use IDs for JavaScript hooks
✓ Avoid !important
✓ Avoid inline styles
✓ Use CSS methodologies (BEM, SMACSS)
✓ Write selectors from right to left (browser read order)
✓ Be specific when needed, but not overly specific`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSSelectorSpecificity;
