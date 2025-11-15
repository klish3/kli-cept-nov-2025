import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import CodeSnippet from "../../components/ui/code-snippet";
import { ChevronDown, ChevronRight } from "lucide-react";
import BlockComparison from "../Projects/components/projectSections/BlockComparison";
import EqualsComparison from "../Projects/components/projectSections/EqualsComparison";
import StatePropsComparison from "../Projects/components/projectSections/StatePropsComparison";
import NullUndefinedComparison from "../Projects/components/projectSections/NullUndefinedComparison";
import SystemDesign from "./components/DesignPatterns";
import JavaScriptPatterns from "./components/JavaScriptPatterns";

interface FolderItem {
  id: string;
  label: string;
  icon?: string;
}

const theoryItems: FolderItem[] = [
  { id: "fe-patterns", label: "Language basics", icon: "📘" },
  { id: "design-patterns", label: "Design Patterns", icon: "🧩" },
  { id: "js-patterns", label: "JavaScript Patterns", icon: "⚙️" },
  { id: "react", label: "React patterns", icon: "⚛️" },
  { id: "performance", label: "Performance", icon: "🚀" },
];

export const Theory = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true);
  const [selected, setSelected] = useState<string>("fe-patterns");
  const [sectionVisuals, setSectionVisuals] = useState<{ [key: string]: boolean }>({
    "fe-patterns": true,
    "design-patterns": true,
    "js-patterns": true,
    "react": true,
    "performance": true,
  });

  // Persist section toggle state to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theory-visuals");
    if (saved) {
      try {
        setSectionVisuals(JSON.parse(saved));
      } catch (e) {
        // Fallback to default on parse error
      }
    }
  }, []);

  const setVisualForSection = (sectionId: string): React.Dispatch<React.SetStateAction<boolean>> => {
    return (val) => {
      const newVal = typeof val === "function" ? val(sectionVisuals[sectionId]) : val;
      const updated = { ...sectionVisuals, [sectionId]: newVal };
      setSectionVisuals(updated);
      localStorage.setItem("theory-visuals", JSON.stringify(updated));
    };
  };

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <aside className="w-full lg:w-80 border-r border-[#1e2d3d] flex flex-col overflow-auto">
        <div className="p-4 border-b border-[#1e2d3d]">
          <Button
            variant="ghost"
            className="w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base"
            onClick={() => setOpen(!open)}
          >
            {open ? <ChevronDown className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 mr-2" />}
            📁 theory-topics
          </Button>
          {open && (
            <div className="ml-6 mt-2 space-y-1">
              {theoryItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${
                    selected === item.id ? "text-white bg-[#1e2d3d]" : "text-[#607b96]"
                  }`}
                  onClick={() => setSelected(item.id)}
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
          <div className="p-4 sm:p-8 lg:p-12">
            {selected === "fe-patterns" && (
              <div className="space-y-6">
                <div>
                  <h2 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2">Language fe-patterns</h2>
                  <p className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base">Short explanations and examples for core JavaScript concepts.</p>
                </div>
                <BlockComparison showVisualExamples={sectionVisuals["fe-patterns"]} setShowVisualExamples={setVisualForSection("fe-patterns")} />
              </div>
            )}

            {selected === "design-patterns" && (
              <div className="space-y-6">
                <div>
                  <h2 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2">Design Patterns</h2>
                  <p className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base">Key front-end system design concepts and strategies.</p>
                </div>
                <SystemDesign showVisualExamples={sectionVisuals["design-patterns"]} setShowVisualExamples={setVisualForSection("design-patterns")} />
              </div>
            )}

            {selected === "js-patterns" && (
              <div className="space-y-6">
                <div>
                  <h2 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2">JavaScript Patterns</h2>
                  <p className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base">Common design patterns and idioms in JavaScript.</p>
                </div>
                <JavaScriptPatterns showVisualExamples={sectionVisuals["js-patterns"]} setShowVisualExamples={setVisualForSection("js-patterns")} />
              </div>
            )}

            {selected === "react" && (
              <div className="space-y-6">
                <div>
                  <h2 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2">React patterns</h2>
                  <p className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base">Component patterns, state management and best practices.</p>
                </div>
                <StatePropsComparison showVisualExamples={sectionVisuals["react"]} setShowVisualExamples={setVisualForSection("react")} />
              </div>
            )}

            {selected === "performance" && (
              <div className="space-y-6">
                <div>
                  <h2 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2">Performance</h2>
                  <p className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base">Guidelines for profiling, optimizing rendering and network usage.</p>
                </div>
                <EqualsComparison showVisualExamples={sectionVisuals["performance"]} setShowVisualExamples={setVisualForSection("performance")} />
                <NullUndefinedComparison showVisualExamples={sectionVisuals["performance"]} setShowVisualExamples={setVisualForSection("performance")} />
              </div>
            )}
          </div>
        </div>

        <CodeSnippet
          className="hidden xl:block w-80 p-6 overflow-auto"
          caption="// Example"
          code={`// small snippet\nconst greeting = (name) => ` + "`Hello ${name}`" + `;`}
        />
      </div>
    </div>
  );
};

export default Theory;
