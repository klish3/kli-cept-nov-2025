import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import CodeSnippet from "../../components/ui/code-snippet";
import BlockComparison from "./components/projectSections/BlockComparison";
import EqualsComparison from "./components/projectSections/EqualsComparison";
import StatePropsComparison from "./components/projectSections/StatePropsComparison";
import NullUndefinedComparison from "./components/projectSections/NullUndefinedComparison";
import CallApplyComparison from "./components/projectSections/CallApplyComparison";
import MapObjectComparison from "./components/projectSections/MapObjectComparison";
import DataTypesComparison from "./components/projectSections/DataTypesComparison";
import SVGStylingComparison from "./components/projectSections/SVGStylingComparison";

interface FolderItem {
  id: string;
  label: string;
  icon?: string;
}

const personalInfoItems: FolderItem[] = [
  { id: "block", label: "What's the difference between `block`, `inline`, and `inline-block`?", icon: "📄" },
  { id: "equals", label: "What is the difference between `==` and `===` in JavaScript?", icon: "🎯" },
  { id: "stateProps", label: "What is the difference between state and props in React?", icon: "📄" },
  { id: "nullUndefined", label: "What's the difference between null, undefined, and undeclared?", icon: "❓" },
  { id: "callApply", label: "What's the difference between .call and .apply?", icon: "🔗" },
  { id: "mapObject", label: "What's the difference between Map and a plain Object?", icon: "🗺️" },
  { id: "dataTypes", label: "What are the various data types in JavaScript?", icon: "🔣" },
  { id: "stylingSVG", label: "Are you familiar with styling SVG?", icon: "🎨" }
];

const professionalInfoItems: FolderItem[] = [
  { id: "experience", label: "experience", icon: "💼" },
  { id: "skills", label: "skills", icon: "⚡" },
];

const hobbyItems: FolderItem[] = [
  { id: "sports", label: "sports", icon: "⚽" },
  { id: "music", label: "music", icon: "🎵" },
  { id: "reading", label: "reading", icon: "📚" },
];

export const Projects = (): JSX.Element => {
  const [openFolders, setOpenFolders] = useState<{
    whatsTheDiff: boolean;
    professionalInfo: boolean;
    hobbies: boolean;
  }>({
    whatsTheDiff: true,
    professionalInfo: false,
    hobbies: false,
  });

  const [selectedItem, setSelectedItem] = useState<string>("block");
  const [showVisualExamples, setShowVisualExamples] = useState(true);

  const memoryAidMap = {
    block: [
      { key: "block", description: "Full width → New line, fills parent, respects all margins" },
      { key: "inline-block", description: "Inline + sized → Flows with content, respects width/height" },
      { key: "inline", description: "Text-like → Flows with content, ignores width/height & vertical spacing" }
    ],
    equals: [
      { key: "==", description: "Loose equality → Performs type coercion" },
      { key: "===", description: "Strict equality → No type coercion, same type AND value" }
    ],
    stateProps: [
      { key: "State", description: "Internal → Mutable, owned by component, tied to lifecycle" },
      { key: "Props", description: "External → Immutable, from parent, read-only configuration" }
    ],
    nullUndefined: [
      { key: "null", description: "Explicit → Intentional assignment of 'no value'" },
      { key: "undefined", description: "Default → Uninitialized variables & missing properties" },
      { key: "undeclared", description: "Error → Variable not declared in scope, throws ReferenceError" }
    ],
    callApply: [
      { key: "C", description: "Call → Comma-separated arguments" },
      { key: "A", description: "Apply → Array of arguments" }
    ]
    ,
    mapObject: [
      { key: "Map", description: "Keys can be any type; has `size` and preserves insertion order." },
      { key: "Object", description: "Keys are strings/symbols; easy to JSON stringify; lightweight for small sets." }
    ],
    dataTypes: [
      { key: "Primitive", description: "number, string, boolean, null, undefined, symbol, bigint" },
      { key: "Reference", description: "object, array, function, Map, Set — stored by reference" }
    ],
    stylingSVG: [
      { key: "fill/stroke", description: "SVG attributes for colors; can be overridden by CSS" },
      { key: "currentColor", description: "Use `fill=\"currentColor\"` for icon theming" }
    ]
  };

  const toggleFolder = (folder: keyof typeof openFolders) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "block":
        return (
          <BlockComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "equals":
        return (
          <EqualsComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
        
      case "stateProps":
        return (
          <StatePropsComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "nullUndefined":
        return (
          <NullUndefinedComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "mapObject":
        return (
          <MapObjectComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "dataTypes":
        return (
          <DataTypesComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "stylingSVG":
        return (
          <SVGStylingComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "callApply":
        return (
          <CallApplyComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "experience":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Professional Experience:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-4">
              <div>
                <div className="text-[#43d9ad]">Senior Front-end Developer</div>
                <div className="text-xs sm:text-sm">Company Name • 2021-Present</div>
                <div className="mt-2 text-xs sm:text-sm">Building scalable web applications with modern technologies</div>
              </div>
              <div>
                <div className="text-[#43d9ad]">Front-end Developer</div>
                <div className="text-xs sm:text-sm">Previous Company • 2019-2021</div>
                <div className="mt-2 text-xs sm:text-sm">Developed responsive user interfaces</div>
              </div>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Technical Skills:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2">
              <div className="text-[#43d9ad]">Languages:</div>
              <div className="pl-4">JavaScript, TypeScript, HTML, CSS</div>
              <div className="text-[#43d9ad] mt-3">Frameworks:</div>
              <div className="pl-4">React, Next.js, Vue.js, Tailwind CSS</div>
              <div className="text-[#43d9ad] mt-3">Tools:</div>
              <div className="pl-4">Git, Webpack, Vite, Figma</div>
            </div>
          </div>
        );
      case "sports":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Sports & Activities:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2">
              <div>• Football</div>
              <div>• Swimming</div>
              <div>• Cycling</div>
            </div>
          </div>
        );
      case "music":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Music Preferences:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2">
              <div>• Electronic Music</div>
              <div>• Rock & Alternative</div>
              <div>• Lo-fi & Ambient</div>
            </div>
          </div>
        );
      case "reading":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Reading List:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2">
              <div>• Technical Books & Documentation</div>
              <div>• Science Fiction</div>
              <div>• Philosophy</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <aside className="w-full lg:w-80 border-r border-[#1e2d3d] flex flex-col overflow-auto">
        <div className="p-4 border-b border-[#1e2d3d]">
          <div className="mb-1">
            <h1 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg sm:text-xl">
              Great Front Ends
            </h1>
          </div>
          <div className="mb-3">
            <h2 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base">
              Quiz
            </h2>
          </div>
          <a
            href="https://www.greatfrontend.com/questions/quiz"
            target="_blank"
            rel="noopener noreferrer"
            className="[font-family:'Fira_Code',Helvetica] font-normal text-[#43d9ad] text-xs sm:text-sm hover:text-[#fea55f] transition-colors"
          >
            greatfrontend.com/questions/quiz →
          </a>
        </div>

        <div className="p-4 border-b border-[#1e2d3d]">
          <Button
            variant="ghost"
            className="w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base"
            onClick={() => toggleFolder("whatsTheDiff")}
          >
            {openFolders.whatsTheDiff ? (
              <ChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-2" />
            )}
            📁 Whats the Diff
          </Button>
          {openFolders.whatsTheDiff && (
            <div className="ml-6 mt-2 space-y-1">
              {personalInfoItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${
                    selectedItem === item.id
                      ? "text-white bg-[#1e2d3d]"
                      : "text-[#607b96]"
                  }`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  {item.icon} {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-b border-[#1e2d3d]">
          <Button
            variant="ghost"
            className="w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base"
            onClick={() => toggleFolder("professionalInfo")}
          >
            {openFolders.professionalInfo ? (
              <ChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-2" />
            )}
            📁 professional-info
          </Button>
          {openFolders.professionalInfo && (
            <div className="ml-6 mt-2 space-y-1">
              {professionalInfoItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${
                    selectedItem === item.id
                      ? "text-white bg-[#1e2d3d]"
                      : "text-[#607b96]"
                  }`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  {item.icon} {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4">
          <Button
            variant="ghost"
            className="w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base"
            onClick={() => toggleFolder("hobbies")}
          >
            {openFolders.hobbies ? (
              <ChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-2" />
            )}
            📁 hobbies
          </Button>
          {openFolders.hobbies && (
            <div className="ml-6 mt-2 space-y-1">
              {hobbyItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${
                    selectedItem === item.id
                      ? "text-white bg-[#1e2d3d]"
                      : "text-[#607b96]"
                  }`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  {item.icon} {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </aside>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 border-r border-[#1e2d3d] overflow-auto">
          <div className="p-4 sm:p-8 lg:p-12">{renderContent()}</div>
        </div>

        <CodeSnippet
          className="hidden xl:block w-80 p-6 overflow-auto border-l border-[#1e2d3d]"
          caption="// context"
          memoryAid={
            memoryAidMap[selectedItem as keyof typeof memoryAidMap] || []
          }
        />
      </div>
    </div>
  );
};