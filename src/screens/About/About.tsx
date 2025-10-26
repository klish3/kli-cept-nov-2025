import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { ChevronDown, ChevronRight } from "lucide-react";

interface FolderItem {
  id: string;
  label: string;
  icon?: string;
}

const personalInfoItems: FolderItem[] = [
  { id: "bio", label: "bio", icon: "📄" },
  { id: "interests", label: "interests", icon: "🎯" },
  { id: "education", label: "education", icon: "🎓" },
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

export const About = (): JSX.Element => {
  const [openFolders, setOpenFolders] = useState<{
    personalInfo: boolean;
    professionalInfo: boolean;
    hobbies: boolean;
  }>({
    personalInfo: true,
    professionalInfo: false,
    hobbies: false,
  });

  const [selectedItem, setSelectedItem] = useState<string>("bio");

  const toggleFolder = (folder: keyof typeof openFolders) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "bio":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base">
              <span className="text-[#4d5bce]">/**</span>
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base pl-2">
              <span className="text-[#4d5bce]">*</span> About me
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base pl-2">
              <span className="text-[#4d5bce]">*</span> I have 5 years of experience in web development.
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base">
              <span className="text-[#4d5bce]">*/</span>
            </div>
          </div>
        );
      case "interests":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              My Interests:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2">
              <div>• Web Development & UI/UX Design</div>
              <div>• Open Source Contributions</div>
              <div>• Technology Innovation</div>
              <div>• Creative Problem Solving</div>
            </div>
          </div>
        );
      case "education":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Education Background:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-3">
              <div>
                <div className="text-[#43d9ad]">Bachelor of Computer Science</div>
                <div className="text-xs sm:text-sm">University Name • 2015-2019</div>
              </div>
            </div>
          </div>
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
          <Button
            variant="ghost"
            className="w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base"
            onClick={() => toggleFolder("personalInfo")}
          >
            {openFolders.personalInfo ? (
              <ChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-2" />
            )}
            📁 personal-info
          </Button>
          {openFolders.personalInfo && (
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

        <div className="hidden xl:block w-80 p-6 overflow-auto">
          <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-xs mb-4">
            // Code snippet
          </div>
          <div className="bg-[#011221] rounded-lg p-4 border border-[#1e2d3d]">
            <pre className="[font-family:'Fira_Code',Helvetica] font-normal text-xs text-[#607b96]">
              <code>
                {`const aboutMe = {
  name: "Faez Taghavi",
  role: "Front-end Developer",
  location: "Iran",
  skills: [
    "React",
    "TypeScript",
    "Next.js"
  ]
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
