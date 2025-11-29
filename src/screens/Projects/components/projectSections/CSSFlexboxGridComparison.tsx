import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CSSFlexboxGridComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          CSS Flexbox vs Grid
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-css-flexbox-and-css-grid?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Flexbox vs Grid →</a>
        <a href="https://github.com/greatfrontend/top-frontend-interview-questions/blob/main/questions/css-questions/what-is-the-difference-between-css-flexbox-and-css-grid/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Flexbox vs Grid (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Core Differences */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Flexbox</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad] font-bold">Dimensionality</div>
                  <div className="text-xs">1D (row OR column)</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Design</div>
                  <div className="text-xs">Content-first</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Axis Control</div>
                  <div className="text-xs">Main + cross axes</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Growth</div>
                  <div className="text-xs">Items expand/shrink</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Grid</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad] font-bold">Dimensionality</div>
                  <div className="text-xs">2D (rows AND columns)</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Design</div>
                  <div className="text-xs">Layout-first</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Axis Control</div>
                  <div className="text-xs">Full x/y control</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Structure</div>
                  <div className="text-xs">Predefined tracks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Typical Use Cases</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Flexbox</div>
                  <div className="text-xs space-y-1">
                    <div>• Navigation bars</div>
                    <div>• Toolbars</div>
                    <div>• Spacing items in a row/column</div>
                    <div>• Component layouts</div>
                    <div>• Centering content</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Grid</div>
                  <div className="text-xs space-y-1">
                    <div>• Page layouts</div>
                    <div>• Complex designs</div>
                    <div>• Dashboard layouts</div>
                    <div>• Card grids</div>
                    <div>• Magazine layouts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Feature Comparison</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Aspect</div>
                  <div className="text-xs space-y-1">
                    <div>Line breaking</div>
                    <div>Explicit sizing</div>
                    <div>Auto-sizing</div>
                    <div>Nesting</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Flexbox</div>
                  <div className="text-xs space-y-1">
                    <div>flex-wrap</div>
                    <div>Limited</div>
                    <div>flex-grow/shrink</div>
                    <div>Yes (limited)</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Grid</div>
                  <div className="text-xs space-y-1">
                    <div>Auto-flow</div>
                    <div>Full control</div>
                    <div>grid-auto-rows</div>
                    <div>Yes (full control)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Can Use Both */}
          <div className="bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="text-[#43d9ad] font-bold mb-2">💡 Can You Use Both?</div>
            <div className="text-[#607b96]">Yes! Grid for page layout + Flexbox for component layout is a common pattern. Use Grid for the big picture, Flexbox for components.</div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`CSS FLEXBOX vs GRID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two powerful CSS layout systems with different strengths.
Flexbox handles 1D layouts, Grid handles 2D layouts.

FLEXBOX - 1 DIMENSIONAL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Content-first approach: Items determine layout

.container {
  display: flex;
  justify-content: center;    /* Main axis alignment */
  align-items: center;        /* Cross axis alignment */
}

Layout types:
  Row:    Items left to right →
  Column: Items top to bottom ↓

Great for:
  • Navigation menus
  • Centering (vertical + horizontal)
  • Spacing items
  • Simple line layouts


GRID - 2 DIMENSIONAL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Layout-first approach: Define structure, place items

.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
}

Can place items explicitly:
  grid-column: 1 / 3;
  grid-row: 2;

Great for:
  • Page layouts (header/sidebar/main/footer)
  • Complex multi-row/column designs
  • Dashboard layouts
  • Magazine-style layouts


KEY DIFFERENCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dimensionality:
  Flexbox: 1D (one direction at a time)
  Grid:    2D (two directions simultaneously)

Approach:
  Flexbox: Content-driven (items determine space)
  Grid:    Layout-driven (layout defined upfront)

Sizing:
  Flexbox: Items grow/shrink with flex-grow/shrink
  Grid:    Cells have defined size (fr units, etc.)

Child control:
  Flexbox: Limited (flex: 1, etc.)
  Grid:    Full (exact placement: grid-column/row)


COMMON EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Page Layout with Grid + Navigation with Flexbox:

<body>
  <header className="header">
    <nav className="nav">
      <ul className="navItems">
        <!-- Flexbox handles horizontal spacing -->
      </ul>
    </nav>
  </header>
  
  <aside className="sidebar"></aside>
  <main className="content"></main>
  
  <footer className="footer"></footer>
</body>

.body {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  /* Grid positions header/sidebar/main/footer */
}

.nav ul {
  display: flex;
  justify-content: space-between;
  /* Flexbox spaces nav items */
}


BROWSER SUPPORT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Both: Excellent in all modern browsers (ES2015+)`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Aspect</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Flexbox</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Grid</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Dimensionality</td>
                <td className="py-3 pr-4 align-top">1-dimensional (row or column)</td>
                <td className="py-3 align-top">2-dimensional (rows and columns)</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Design Approach</td>
                <td className="py-3 pr-4 align-top">Content-first (items determine layout)</td>
                <td className="py-3 align-top">Layout-first (structure defined upfront)</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Item Sizing</td>
                <td className="py-3 pr-4 align-top">flex-grow, flex-shrink control expansion</td>
                <td className="py-3 align-top">Explicit grid-column/grid-row placement</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Best Use Case</td>
                <td className="py-3 pr-4 align-top">Toolbars, navigation, component layouts</td>
                <td className="py-3 align-top">Page layouts, complex designs, dashboards</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Can Use Together</td>
                <td colSpan={2} className="py-3 align-top">Yes! Grid for page layout, Flexbox for component layout is standard pattern</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
