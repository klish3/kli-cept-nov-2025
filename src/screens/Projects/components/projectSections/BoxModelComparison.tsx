import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BoxModelComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          CSS Box Model
        </div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      <div className="text-xs text-[#43d9ad]">
        <a href="https://www.greatfrontend.com/questions/quiz/explain-your-understanding-of-the-box-model-and-how-you-would-tell-the-browser-in-css-to-render-your-layout-in-different-box-models?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline mr-4">greatfrontend: Box Model →</a>
        <a href="https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/explain-your-understanding-of-the-box-model-and-how-you-would-tell-the-browser-in-css-to-render-your-layout-in-different-box-models/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline">github: Box Model (mdx) →</a>
      </div>


      {showVisualExamples ? (
        <>
          {/* Box Model Parts Overview */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Box Model Parts</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#fea55f] border border-[#fea55f]"></div>
                  <div>Margin (outer spacing)</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#43d9ad] border border-[#43d9ad]"></div>
                  <div>Border (visible edge)</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#4d5bce] border border-[#4d5bce]"></div>
                  <div>Padding (inner space)</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#38a169] border border-[#38a169]"></div>
                  <div>Content (text/elements)</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Visual Example</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] flex items-center justify-center">
                <div className="bg-[#fea55f40] p-4 border-4 border-[#fea55f]">
                  <div className="bg-[#43d9ad40] p-2 border-4 border-[#43d9ad]">
                    <div className="bg-[#4d5bce40] p-3 border-4 border-[#4d5bce]">
                      <div className="bg-[#38a169] text-white text-center p-2 border border-[#38a169]">Content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Row */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium text-[#43d9ad]">Content</div>
            <div className="space-y-2">
              <div className="text-xs">Width & Height defined here</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#38a169] text-white text-center p-4">w-32 h-16</div>
              </div>
            </div>
            <div className="text-[#607b96] text-xs leading-relaxed">
              The actual content area where text and elements are rendered. The width and height of this area are what CSS width/height properties control (in content-box mode).
            </div>
          </div>

          {/* Padding Row */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium text-[#43d9ad]">Padding</div>
            <div className="space-y-2">
              <div className="text-xs">Inside the border</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] p-4 border-2 border-[#4d5bce]">
                  <div className="bg-[#38a169] text-white text-center p-2">Content</div>
                </div>
              </div>
            </div>
            <div className="text-[#607b96] text-xs leading-relaxed">
              Space between content and border. Padding respects the background color. All four sides (top, right, bottom, left) can be set independently.
            </div>
          </div>

          {/* Border Row */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium text-[#43d9ad]">Border</div>
            <div className="space-y-2">
              <div className="text-xs">Around padding</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#43d9ad] p-4 border-4 border-[#43d9ad]">
                  <div className="bg-[#38a169] text-white text-center p-2">Content</div>
                </div>
              </div>
            </div>
            <div className="text-[#607b96] text-xs leading-relaxed">
              Visual boundary around the padding. Can have thickness (width), style (solid, dashed, etc.), and color. Respects element background only up to the border edge.
            </div>
          </div>

          {/* Margin Row */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium text-[#43d9ad]">Margin</div>
            <div className="space-y-2">
              <div className="text-xs">Outside the border</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#fea55f40] p-4 border-2 border-dashed border-[#fea55f]">
                  <div className="bg-[#43d9ad] p-2 border-2 border-[#43d9ad]">
                    <div className="bg-[#38a169] text-white text-center p-2">Content</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#607b96] text-xs leading-relaxed">
              Space outside the border separating this element from others. Margins collapse (adjacent margins merge). Doesn't have a background color; it's transparent.
            </div>
          </div>

          {/* box-sizing Row */}
          <div className="grid grid-cols-1 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium text-[#43d9ad]">box-sizing Property</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-[#43d9ad]">content-box (default)</div>
                <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                  <div className="text-xs">width = content width only</div>
                  <div className="bg-[#4d5bce40] p-2 border-2 border-[#4d5bce]">
                    <div className="bg-[#38a169] text-white text-center p-1 text-xs">w-32</div>
                  </div>
                  <div className="text-xs">Actual width: 128px + padding + border</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-[#43d9ad]">border-box</div>
                <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                  <div className="text-xs">width = content + padding + border</div>
                  <div className="bg-[#4d5bce40] p-2 border-2 border-[#4d5bce]">
                    <div className="bg-[#38a169] text-white text-center p-1 text-xs">w-32</div>
                  </div>
                  <div className="text-xs">Actual width: exactly 128px</div>
                </div>
              </div>
            </div>
          </div>

          {/* Layout Impact Row */}
          <div className="grid grid-cols-2 gap-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Layout Implications</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad]">Margin Collapse</div>
                  <div className="text-xs">Adjacent vertical margins merge to the larger value</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">Padding Affects Size</div>
                  <div className="text-xs">In content-box, padding increases total size</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">Border Affects Size</div>
                  <div className="text-xs">In content-box, border increases total size</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Best Practices</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad]">Use border-box</div>
                  <div className="text-xs">Apply globally: * {'{'}box-sizing: border-box;{'}'}</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">Understand Collapse</div>
                  <div className="text-xs">Horizontal margins don't collapse; only vertical</div>
                </div>
                <div>
                  <div className="text-[#43d9ad]">Margin vs Padding</div>
                  <div className="text-xs">Padding for internal space, margin for external</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`The CSS Box Model is the foundation of web layout. Every element consists of:

┌─────────────────────────────────┐  ← Outer edge (margin outer)
│         MARGIN (m-4)            │
│  ┌─────────────────────────────┐ │  ← Border outer edge
│  │   BORDER (border-2)         │ │
│  │  ┌─────────────────────────┐│ │  ← Padding outer edge (background starts)
│  │  │  PADDING (p-4)          ││ │
│  │  │ ┌───────────────────────┐││ │
│  │  │ │  CONTENT (w-32 h-16)  │││ │
│  │  │ └───────────────────────┘││ │
│  │  └─────────────────────────┘│ │
│  └─────────────────────────────┘ │
└─────────────────────────────────┘

KEY PROPERTIES:
• margin: creates space outside the border
• border: creates a visible edge around the element
• padding: creates space inside the border (around content)
• content: where the actual element content is rendered

box-sizing:
• content-box (default): width/height apply only to content
  Total width = width + padding-left + padding-right + border-left + border-right
  
• border-box: width/height include padding and border
  Total width = width (including padding and border)`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Part</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Purpose</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">Key Characteristics</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Content</td>
                <td className="py-3 pr-4 align-top">Holds the actual element content (text, images, etc.)</td>
                <td className="py-3 align-top">Defined by width/height; size depends on content</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Padding</td>
                <td className="py-3 pr-4 align-top">Adds internal space inside the border</td>
                <td className="py-3 align-top">Respects background color; all four sides can differ</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Border</td>
                <td className="py-3 pr-4 align-top">Creates a visible boundary around the element</td>
                <td className="py-3 align-top">Has width, style (solid/dashed), and color; adds to total size</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Margin</td>
                <td className="py-3 pr-4 align-top">Creates external space outside the border</td>
                <td className="py-3 align-top">Transparent; vertical margins collapse; doesn't affect background</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">box-sizing</td>
                <td className="py-3 pr-4 align-top">Controls how width/height are calculated</td>
                <td className="py-3 align-top">content-box (default) vs border-box; border-box recommended</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};