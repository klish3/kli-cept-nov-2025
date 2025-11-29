import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CSSHeadScriptBodyComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          CSS in Head, Scripts Before Body
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
        <a href="https://www.greatfrontend.com/questions/quiz/why-is-it-generally-a-good-idea-to-position-css-link-tags-in-the-head-and-script-tags-just-before-the-body-close-tag?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: CSS & Script Placement →</a>
        <a href="https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/why-is-it-generally-a-good-idea-to-position-css-link-tags-in-the-head-and-script-tags-just-before-the-body-close-tag/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Placement (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Why CSS in Head */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Why CSS in {'<head>'}</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2">
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">1. Parsing</div>
                <div>HTML and CSS load simultaneously for CSSOM creation</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">2. FOUC Prevention</div>
                <div>Styles applied before render = no unstyled flash</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">3. Performance</div>
                <div>Progressive rendering starts earlier</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">4. UX</div>
                <div>Users see styled content, not unstyled then styled</div>
              </div>
            </div>
          </div>

          {/* Why Scripts Before Body */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Why Scripts Before {'</body>'}</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2">
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">1. Non-blocking</div>
                <div>HTML parses while script downloads = faster initial render</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">2. DOM Ready</div>
                <div>All elements parsed when script executes = no "not found"</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">3. UX</div>
                <div>Page content visible immediately, scripts load after</div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#43d9ad] font-bold min-w-fit">4. Render</div>
                <div>User sees styled content faster (perceived performance)</div>
              </div>
            </div>
          </div>

          {/* Timeline Comparison */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">CSS in Head ✓</div>
              <div className="bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]">
                <div className="space-y-1">
                  <div>1. Download HTML + CSS</div>
                  <div>2. Parse HTML → DOM</div>
                  <div>3. Parse CSS → CSSOM</div>
                  <div>4. Combine → Render Tree</div>
                  <div>5. Paint (styled content)</div>
                  <div className="text-[#43d9ad] font-bold mt-2">Result: Styled content shown</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm">CSS in Body ✗ (FOUC)</div>
              <div className="bg-[#011221] p-4 border border-[#fea55f] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]">
                <div className="space-y-1">
                  <div>1. Download HTML (no CSS)</div>
                  <div>2. Parse HTML → DOM</div>
                  <div>3. Paint (unstyled content!) ⚠️</div>
                  <div>4. Download CSS</div>
                  <div>5. Parse CSS → CSSOM</div>
                  <div className="text-[#fea55f] font-bold mt-2">Result: Flash then reflow</div>
                </div>
              </div>
            </div>
          </div>

          {/* Script Timing Comparison */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Script Before Body ✓</div>
              <div className="bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]">
                <div className="space-y-1">
                  <div>1. Parse HTML</div>
                  <div>2. Render styled content</div>
                  <div>3. Download script</div>
                  <div>4. Execute (DOM ready)</div>
                  <div className="text-[#43d9ad] font-bold mt-2">Result: Content shown first</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm">Script in Head ✗</div>
              <div className="bg-[#011221] p-4 border border-[#fea55f] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]">
                <div className="space-y-1">
                  <div>1. Download script</div>
                  <div>2. Execute (blocks parsing)</div>
                  <div>3. Parse HTML</div>
                  <div>4. Render content</div>
                  <div className="text-[#fea55f] font-bold mt-2">Result: Blank page delay ⚠️</div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practice */}
          <div className="bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="text-[#43d9ad] font-bold mb-2">✓ Best Practice Structure</div>
            <div className="text-[#607b96] text-xs space-y-1">
              <div>{"<head>"}</div>
              <div>  {"<meta charset='UTF-8' />"}</div>
              <div>  {"<link rel='stylesheet' href='styles.css' />"} ← CSS here</div>
              <div>{"</head>"}</div>
              <div>{"<body>"}</div>
              <div>  {"<div id='app'>Content</div>"}</div>
              <div>  {"<script src='app.js'></script>"} ← Scripts here</div>
              <div>{"</body>"}</div>
            </div>
          </div>

          {/* Exceptions */}
          <div className="space-y-2">
            <div className="font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm">Exceptions & Alternatives</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Inline Scripts</div>
                  <div className="text-xs">Critical inline JS can go in head for immediate execution</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">defer Attribute</div>
                  <div className="text-xs">Put in head with defer if need early download start</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">async Attribute</div>
                  <div className="text-xs">Non-critical scripts can use async anywhere</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Module Scripts</div>
                  <div className="text-xs">Modern ES6 modules in head with appropriate attributes</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`CSS IN HEAD, SCRIPTS BEFORE BODY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Proper placement of CSS and script tags significantly
impacts page load time and user experience.

WHY CSS IN HEAD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. HTML and CSS load together
   - Both are high-priority resources
   - CSSOM (CSS Object Model) created in parallel with DOM
   - Rendering can start once both are ready

2. Prevents FOUC (Flash of Unstyled Content)
   - If CSS loads late, page renders unstyled first
   - Then reflows/repaints when CSS applies
   - Bad user experience (flashing/jumping)

3. Progressive rendering
   - Browser can start painting styled content sooner
   - First meaningful paint happens earlier
   - Better perceived performance

4. Rendering depends on CSS
   - Render tree = DOM + CSSOM combined
   - Can't render without CSSOM
   - CSS blocks rendering if not ready


WHY SCRIPTS BEFORE </body>:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Scripts block HTML parsing
   - Browser downloads + executes script immediately
   - HTML parsing paused during execution
   - Page appears blank/frozen

2. Placing at bottom allows HTML to render first
   - All elements parsed before script runs
   - No "element not found" errors
   - Users see content immediately

3. DOM is ready when script executes
   - All HTML elements available
   - Script can manipulate/query DOM safely
   - No need to wait for DOMContentLoaded

4. Better perceived performance
   - Page "looks" faster even if same total time
   - Users see content instead of blank page


BEST PRACTICE - PROPER STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    
    <!-- CSS in head ✓ -->
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="app">Content</div>
    
    <!-- Scripts before </body> ✓ -->
    <script src="app.js"></script>
  </body>
</html>

Timing:
1. Head loads (CSS starts)
2. Body HTML parses and renders
3. Content visible to user
4. Scripts load and execute
5. Interactivity added


WHAT NOT TO DO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<!-- ✗ CSS at bottom causes FOUC -->
<body>
  <h1>Content</h1>
  <link rel="stylesheet" href="styles.css">
</body>

<!-- ✗ Script in head blocks parsing -->
<head>
  <script src="app.js"></script>
  <link rel="stylesheet" href="styles.css">
</head>


ALTERNATIVES & EXCEPTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. defer attribute
   - Script in head but executes after parsing
   - Good for bootstrapping apps
   <script defer src="app.js"></script>

2. async attribute
   - Independent scripts that don't block
   - Good for analytics, ads
   <script async src="tracking.js"></script>

3. Inline critical CSS
   - Small critical styles in head
   - Rest deferred via link
   
4. Inline scripts
   - Tiny scripts can be inline in head
   - Often used for theme/polyfills`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Placement</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Benefits</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Drawbacks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">CSS in Head</td>
                <td className="py-3 pr-4 align-top">No FOUC, styled rendering, better UX, progressive rendering</td>
                <td className="py-3 align-top">None (always correct)</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">CSS in Body</td>
                <td className="py-3 pr-4 align-top">None</td>
                <td className="py-3 align-top">FOUC (Flash of Unstyled Content), reflow/repaint, poor UX</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Scripts Before Body</td>
                <td className="py-3 pr-4 align-top">Content visible first, DOM ready, non-blocking, better perceived performance</td>
                <td className="py-3 align-top">None (best practice)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Scripts in Head</td>
                <td className="py-3 pr-4 align-top">None</td>
                <td className="py-3 align-top">Blocks parsing, blank page delay, poor perceived performance</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
