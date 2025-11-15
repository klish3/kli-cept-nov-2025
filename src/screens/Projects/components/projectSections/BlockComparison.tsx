import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BlockComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Display Property Differences
        </div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <>
          {/* Property Row Headers */}
          <div className="grid grid-cols-4 gap-4 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">
            <div>Property</div>
            <div>block</div>
            <div>inline-block</div>
            <div>inline</div>
          </div>

          {/* Size Row */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Size</div>
            <div className="space-y-2">
              <div>Fills parent width</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] p-2 w-full">block</div>
              </div>
            </div>
            <div className="space-y-2">
              <div>Depends on content</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] p-2 inline-block">inline-block</div>
              </div>
            </div>
            <div className="space-y-2">
              <div>Depends on content</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] inline">inline</div>
              </div>
            </div>
          </div>

          {/* Positioning Row */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Positioning</div>
            <div className="space-y-2">
              <div>New line, no elements beside</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] p-2 block">First</div>
                <div className="bg-[#43d9ad40] p-2 block">Second</div>
              </div>
            </div>
            <div className="space-y-2">
              <div>Flows with content</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] p-2 inline-block">First</div>
                <div className="bg-[#43d9ad40] p-2 inline-block">Second</div>
              </div>
            </div>
            <div className="space-y-2">
              <div>Flows with content</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] inline">First</div>
                <div className="bg-[#43d9ad40] inline">Second</div>
              </div>
            </div>
          </div>

          {/* Width/Height Row */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Width/Height</div>
            <div className="space-y-2">
              <div>Yes</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] w-32 h-16 block">w-32 h-16</div>
              </div>
            </div>
            <div className="space-y-2">
              <div>Yes</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] w-32 h-16 inline-block">w-32 h-16</div>
              </div>
            </div>
            <div className="space-y-2">
              <div>No (ignored)</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] w-32 h-16 inline">w-32 h-16 (ignored)</div>
              </div>
            </div>
          </div>

          {/* Margins/Padding Row */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Margins/Padding</div>
            <div className="space-y-2">
              <div>All sides</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] m-4 p-4 block">m-4 p-4</div>
              </div>
            </div>
            <div className="space-y-2">
              <div>All sides</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] m-4 p-4 inline-block">m-4 p-4</div>
              </div>
            </div>
            <div className="space-y-2">
              <div>Only horizontal</div>
              <div className="bg-[#011221] p-2 border border-[#1e2d3d]">
                <div className="bg-[#4d5bce40] mx-4 px-4 inline">mx-4 px-4</div>
              </div>
            </div>
          </div>

          {/* Use Cases Row */}
          <div className="grid grid-cols-4 gap-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="font-medium">Use Cases</div>
            <div>
              <div>Layout elements:</div>
              <div className="text-[#43d9ad]">&lt;div&gt;, &lt;p&gt;, &lt;section&gt;</div>
            </div>
            <div>
              <div>UI elements:</div>
              <div className="text-[#43d9ad]">&lt;button&gt;, &lt;input&gt;, &lt;img&gt;</div>
            </div>
            <div>
              <div>Text elements:</div>
              <div className="text-[#43d9ad]">&lt;span&gt;, &lt;a&gt;, &lt;b&gt;, &lt;i&gt;</div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-[#43d9ad] text-left pb-4">Property</th>
                    <th className="text-[#43d9ad] text-left pb-4">block</th>
                    <th className="text-[#43d9ad] text-left pb-4">inline-block</th>
                    <th className="text-[#43d9ad] text-left pb-4">inline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 align-top">Size</td>
                    <td className="py-2 pr-4 align-top">Fills up the width of its parent container.</td>
                    <td className="py-2 pr-4 align-top">Depends on content.</td>
                    <td className="py-2 align-top">Depends on content.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">Positioning</td>
                    <td className="py-2 pr-4 align-top">Start on a new line and tolerates no HTML elements next to it (except when you add float)</td>
                    <td className="py-2 pr-4 align-top">Flows along with other content and allows other elements beside it.</td>
                    <td className="py-2 align-top">Flows along with other content and allows other elements beside it.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">Can specify width and height</td>
                    <td className="py-2 pr-4 align-top">Yes</td>
                    <td className="py-2 pr-4 align-top">Yes</td>
                    <td className="py-2 align-top">No. Will ignore if being set.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">Can be aligned with vertical-align</td>
                    <td className="py-2 pr-4 align-top">No</td>
                    <td className="py-2 pr-4 align-top">Yes</td>
                    <td className="py-2 align-top">Yes</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">Margins and paddings</td>
                    <td className="py-2 pr-4 align-top">All sides respected.</td>
                    <td className="py-2 pr-4 align-top">All sides respected.</td>
                    <td className="py-2 align-top">Only horizontal sides respected. Vertical sides, if specified, do not affect layout.</td>
                  </tr>
                </tbody>
              </table>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockComparison;
