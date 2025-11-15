import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

const StatePropsComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]">State vs Props</div>
        <Button variant="ghost" onClick={() => setShowVisualExamples(!showVisualExamples)} className="text-sm text-[#607b96] hover:text-[#43d9ad]">
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <div className="grid grid-cols-3 gap-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div className="font-medium">Aspect</div>
          <div className="font-medium">State</div>
          <div className="font-medium">Props</div>

          <div>Mutability</div>
          <div>Mutable within the component (use setState / useState)</div>
          <div>Immutable; read-only data passed from parent</div>

          <div>Ownership</div>
          <div>Owned by the component that defines it</div>
          <div>Owned by the parent component</div>

          <div>Lifespan</div>
          <div>Tied to component lifecycle</div>
          <div>Controlled by parent lifecycle</div>

          <div>When to use</div>
          <div>For UI data that changes locally (form inputs, toggles)</div>
          <div>For configuration or static data from the parent</div>
        </div>
      ) : (
        <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <pre>{'// State (inside component)\nconst [count, setCount] = useState(0);\n\n// Props (coming from parent)\n<Counter initialCount={5} />'}</pre>
        </div>
      )}
    </div>
  );
};

export default StatePropsComparison;
