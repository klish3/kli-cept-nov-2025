import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScriptAsyncDeferComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Script Loading: async vs defer
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-async-and-defer-script-loading?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Script async vs defer →</a>
        <a href="https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/what-is-the-difference-between-async-and-defer-script-loading/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Script Loading (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Loading Timeline */}
          <div className="space-y-4">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Loading Timeline Comparison</div>
            
            <div className="space-y-3 [font-family:'Fira_Code',Helvetica] text-xs">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d]">
                <div className="text-[#43d9ad] font-bold mb-2">1. Default &lt;script&gt; - BLOCKS PARSING</div>
                <div className="text-[#607b96]">HTML Parse → [SCRIPT DOWNLOAD] → [SCRIPT EXEC] → HTML Parse → Render</div>
                <div className="text-[#fea55f] text-xs mt-2">⚠️ Page rendering delayed until script finishes</div>
              </div>

              <div className="bg-[#011221] p-4 border border-[#1e2d3d]">
                <div className="text-[#43d9ad] font-bold mb-2">2. &lt;script async&gt; - EXECUTE IMMEDIATELY</div>
                <div className="text-[#607b96]">HTML Parse [parallel with SCRIPT DOWNLOAD] → [SCRIPT EXEC] ↓ → Render</div>
                <div className="text-[#fea55f] text-xs mt-2">⚠️ Script execution can interrupt HTML parsing</div>
              </div>

              <div className="bg-[#011221] p-4 border border-[#1e2d3d]">
                <div className="text-[#43d9ad] font-bold mb-2">3. &lt;script defer&gt; - EXECUTE AFTER PARSING</div>
                <div className="text-[#607b96]">HTML Parse [parallel with SCRIPT DOWNLOAD] → HTML Render → [SCRIPT EXEC]</div>
                <div className="text-[#43d9ad] text-xs mt-2">✓ Best for most cases: non-blocking + full DOM</div>
              </div>
            </div>
          </div>

          {/* Three Column Comparison */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Default Script</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad] font-bold">Parsing</div>
                  <div className="text-xs text-[#fea55f]">Blocks ✗</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Download</div>
                  <div className="text-xs">Sequential</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Execution</div>
                  <div className="text-xs">Immediate</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Order</div>
                  <div className="text-xs">Guaranteed</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">DOM</div>
                  <div className="text-xs">Maybe not ready</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">With async</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad] font-bold">Parsing</div>
                  <div className="text-xs text-[#43d9ad]">Parallel ✓</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Download</div>
                  <div className="text-xs">Parallel</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Execution</div>
                  <div className="text-xs">ASAP</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Order</div>
                  <div className="text-xs text-[#fea55f]">NOT guaranteed</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">DOM</div>
                  <div className="text-xs">Maybe not ready</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">With defer</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad] font-bold">Parsing</div>
                  <div className="text-xs text-[#43d9ad]">Parallel ✓</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Download</div>
                  <div className="text-xs">Parallel</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Execution</div>
                  <div className="text-xs">After parse</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Order</div>
                  <div className="text-xs text-[#43d9ad]">Guaranteed ✓</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">DOM</div>
                  <div className="text-xs text-[#43d9ad]">Ready ✓</div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">When to Use Each</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="text-[#fea55f] font-bold mb-2">Default</div>
                  <div className="text-xs space-y-1">
                    <div>• Critical above-fold</div>
                    <div>• First-paint scripts</div>
                    <div>• Rare to needed</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">async</div>
                  <div className="text-xs space-y-1">
                    <div>• Analytics</div>
                    <div>• Ads/tracking</div>
                    <div>• Independent scripts</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">defer</div>
                  <div className="text-xs space-y-1">
                    <div>• App initialization</div>
                    <div>• DOM manipulation</div>
                    <div>• Most app scripts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm text-[#43d9ad]">
            <div className="font-bold mb-2">💡 General Best Practice</div>
            <div className="text-[#607b96]">Use {"<script defer>"} for most scripts. Use {"<script async>"} only for independent third-party scripts that don't depend on execution order.</div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`SCRIPT LOADING: async vs defer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Different ways to load script tags affect HTML parsing,
script execution timing, and page performance.

DEFAULT BEHAVIOR:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<script src="script.js"></script>

Timeline: HTML Parse → DOWNLOAD & EXECUTE SCRIPT → HTML Parse → Render
Issue:    Parsing BLOCKS while script downloads and executes
Result:   Slower page load, render delays


ASYNC ATTRIBUTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<script async src="analytics.js"></script>

Timeline: HTML Parse [PARALLEL DOWNLOAD] → EXECUTE ASAP → Render
Benefit:  Doesn't block HTML parsing
Issue:    No guaranteed execution order; DOM may not be ready
Use for:  Independent scripts (analytics, ads, third-party)

Real-world: Google Analytics, ad networks, tracking pixels
            These scripts don't need DOM or other scripts


DEFER ATTRIBUTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<script defer src="app.js"></script>

Timeline: HTML Parse [PARALLEL DOWNLOAD] → Parse Complete → EXECUTE → Render
Benefit:  Doesn't block parsing; executes with DOM ready; preserves order
Use for:  App scripts, DOM manipulation, dependent scripts

Real-world: React apps, jQuery plugins, any script needing DOM
            Multiple deferred scripts execute in order


COMMON EXAMPLE - HTML HEAD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<head>
  <!-- Critical CSS -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- Third-party tracking (independent) -->
  <script async src="ga.js"></script>
</head>

<body>
  <!-- App content -->
  <div id="app"></div>
  
  <!-- Main app (needs full DOM) -->
  <script defer src="app.js"></script>
</body>

Result: Page renders faster (CSS blocking is ok, JS doesn't)
        App scripts execute after DOM is ready
        Analytics loads independently`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Aspect</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Default</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">async</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">defer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">HTML Parsing</td>
                <td className="py-3 pr-4 align-top">Blocks (waits for script)</td>
                <td className="py-3 pr-4 align-top">Parallel (doesn't block)</td>
                <td className="py-3 align-top">Parallel (doesn't block)</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Execution Timing</td>
                <td className="py-3 pr-4 align-top">Immediately when found</td>
                <td className="py-3 pr-4 align-top">As soon as downloaded</td>
                <td className="py-3 align-top">After HTML parsing completes</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Execution Order</td>
                <td className="py-3 pr-4 align-top">In appearance order</td>
                <td className="py-3 pr-4 align-top">Not guaranteed</td>
                <td className="py-3 align-top">In appearance order</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">DOM Available</td>
                <td className="py-3 pr-4 align-top">Maybe not ready</td>
                <td className="py-3 pr-4 align-top">Maybe not ready</td>
                <td className="py-3 align-top">Fully parsed and ready</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Best Use Case</td>
                <td className="py-3 pr-4 align-top">Critical rendering scripts</td>
                <td className="py-3 pr-4 align-top">Independent third-party scripts</td>
                <td className="py-3 align-top">App code, DOM manipulation</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
