import React from "react";

interface MemoryAidItem {
  key: string;
  description: string;
}

interface CodeSnippetProps {
  code?: string;
  caption?: string;
  className?: string;
  memoryAid?: MemoryAidItem[];
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, caption, className, memoryAid }) => {
  return (
    <div className={className}>
      {caption && (
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-xs mb-4">
          {caption}
        </div>
      )}

      {code && (
        <div className="bg-[#011221] rounded-lg p-4 border border-[#1e2d3d] mb-4">
          <pre className="[font-family:'Fira_Code',Helvetica] font-normal text-xs text-[#607b96]">
            <code>{code}</code>
          </pre>
        </div>
      )}

      {memoryAid && memoryAid.length > 0 && (
        <div className="bg-[#011221] rounded-lg p-4 border border-[#1e2d3d]">
          <div className="text-[#43d9ad] text-xs font-medium mb-3"># Memory Aid</div>
          <ul className="list-disc pl-5 space-y-2">
            {memoryAid.map((item, index) => (
              <li key={index} className="text-[#9fb0c7] text-xs">
                <span className="text-[#43d9ad]">{item.key}</span> → {item.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;
