import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CSSDisplayComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          CSS Display Property
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-is-the-css-display-property-and-can-you-give-a-few-examples-of-its-use?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Display Property →</a>
        <a href="https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/what-is-the-css-display-property-and-can-you-give-a-few-examples-of-its-use/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Display Property (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Display Value Headers */}
          <div className="grid grid-cols-5 gap-3 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">
            <div>Display</div>
            <div>Inline</div>
            <div>Block</div>
            <div>Flex</div>
            <div>Grid</div>
          </div>

          {/* Size and Flow */}
          <div className="grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Size & Flow</div>
            <div className="space-y-2">
              <div className="text-xs">Flows with text</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div>Text <span className="bg-[#4d5bce40] px-1">inline</span> text</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Takes full width</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] p-2">block</div>
                <div className="bg-[#43d9ad40] p-2">block</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Flexible layout</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="flex gap-1">
                  <div className="bg-[#4d5bce40] p-2 flex-1">item</div>
                  <div className="bg-[#43d9ad40] p-2 flex-1">item</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Grid layout</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-[#4d5bce40] p-2">cell</div>
                  <div className="bg-[#43d9ad40] p-2">cell</div>
                </div>
              </div>
            </div>
          </div>

          {/* Width/Height */}
          <div className="grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Width/Height</div>
            <div className="space-y-2">
              <div className="text-xs">Ignored</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <span className="bg-[#4d5bce40]">w-32 h-16</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Respected</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] w-20 h-12">w-20 h-12</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Respected</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="flex gap-1">
                  <div className="bg-[#4d5bce40] w-12 h-12">w-12</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Respected</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-[#4d5bce40] h-10">h-10</div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Uses */}
          <div className="grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Common Uses</div>
            <div className="space-y-2">
              <div className="text-xs">Links, buttons, spans</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="text-xs">&lt;a&gt;, &lt;span&gt;, &lt;button&gt;</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Sections, divs, paragraphs</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="text-xs">&lt;div&gt;, &lt;p&gt;, &lt;section&gt;</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Complex layouts</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="text-xs">Rows, sidebars, navigation</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Component layouts</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="text-xs">Cards, dashboards</div>
              </div>
            </div>
          </div>

          {/* Margin Collapse */}
          <div className="grid grid-cols-5 gap-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Margin Collapse</div>
            <div className="space-y-2">
              <div className="text-xs">No collapse</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d] text-xs">
                ✓ Horizontal only
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">Collapses vertically</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d] text-xs">
                ⚠ Adjacent margins merge
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">No collapse</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d] text-xs">
                ✓ Creates flex context
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">No collapse</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d] text-xs">
                ✓ Creates grid context
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`The display property defines how an element is rendered in the document flow.

MAIN VALUES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

display: inline
  • Flows with surrounding text
  • Ignores width/height
  • Only horizontal margins/padding respected
  • Examples: <a>, <span>, <button>

display: block
  • Takes full width available
  • Starts on new line
  • Respects all margins/padding
  • All four sides can be sized
  • Examples: <div>, <p>, <section>

display: inline-block
  • Flows inline like <span>
  • But respects width/height like <div>
  • Ignores vertical margins (mostly)
  • Useful for side-by-side layouts

display: flex
  • Creates flexible box layout
  • Children are flex items
  • Enables alignment & distribution
  • Great for rows/columns
  • Examples: navigation, toolbars

display: grid
  • Creates grid layout
  • Explicit rows and columns
  • Powerful for complex layouts
  • Examples: dashboards, galleries

display: none
  • Element not rendered
  • Takes no space in layout
  • Different from visibility: hidden

MODERN USAGE:
• Flexbox (display: flex) for one-dimensional layouts
• Grid (display: grid) for two-dimensional layouts
• Mostly prefer flex/grid over inline/inline-block today`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Value</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Behavior</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">inline</td>
                <td className="py-3 pr-4 align-top">Flows with text, ignores width/height, horizontal margins only</td>
                <td className="py-3 align-top">Text content, links, small elements</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">block</td>
                <td className="py-3 pr-4 align-top">Takes full width, starts new line, all margins respected</td>
                <td className="py-3 align-top">Sections, containers, structural elements</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">inline-block</td>
                <td className="py-3 pr-4 align-top">Flows inline but respects sizing properties</td>
                <td className="py-3 align-top">Legacy layouts, side-by-side elements</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">flex</td>
                <td className="py-3 pr-4 align-top">Flexible one-dimensional layout, powerful alignment</td>
                <td className="py-3 align-top">Navigation, toolbars, responsive layouts</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">grid</td>
                <td className="py-3 pr-4 align-top">Two-dimensional layout, explicit rows/columns</td>
                <td className="py-3 align-top">Dashboards, galleries, complex grids</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">none</td>
                <td className="py-3 pr-4 align-top">Element not rendered, no space in layout</td>
                <td className="py-3 align-top">Hidden elements, conditional display</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
