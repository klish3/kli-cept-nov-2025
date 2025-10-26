import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const navigationItems = [
  { label: "_hello", path: "/" },
  { label: "_about-me", path: "/about" },
  { label: "_projects", path: "/projects" },
];

const socialLinks = [
  { icon: "/outline-brands-instagram.svg", alt: "Instagram", url: "#" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const location = useLocation();

  return (
    <div className="bg-[#010c15] w-full min-h-screen flex flex-col p-4 sm:p-8 md:p-12 lg:p-[69px]">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 bg-black rounded-lg border border-solid border-[#1e2d3d] flex flex-col">
          <header className="h-14 bg-transparent flex items-center border-b border-[#1e2d3d] overflow-x-auto">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base px-3 sm:px-6 whitespace-nowrap">
              faez-taghavi
            </div>

            <Separator orientation="vertical" className="h-full bg-[#1e2d3d]" />

            <nav className="flex items-center flex-1 overflow-x-auto">
              {navigationItems.map((item) => (
                <React.Fragment key={item.label}>
                  <Button
                    variant="ghost"
                    className={`h-full rounded-none px-4 sm:px-8 [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base whitespace-nowrap ${
                      location.pathname === item.path
                        ? "text-white border-b-2 border-[#fea55f]"
                        : "text-[#607b96]"
                    } hover:text-white`}
                    asChild
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </Button>
                  <Separator
                    orientation="vertical"
                    className="h-full bg-[#1e2d3d] hidden sm:block"
                  />
                </React.Fragment>
              ))}
            </nav>

            <Separator orientation="vertical" className="h-full bg-[#1e2d3d]" />

            <Link
              to="/contact"
              className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base px-3 sm:px-6 hover:text-white whitespace-nowrap"
            >
              _contact-me
            </Link>
          </header>

          <main className="flex-1 relative overflow-hidden">{children}</main>

          <footer className="h-[50px] bg-transparent border-t border-[#1e2d3d] flex items-center overflow-x-auto">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-xs sm:text-base px-3 sm:px-6 whitespace-nowrap">
              find me in:
            </div>

            <Separator orientation="vertical" className="h-full bg-[#1e2d3d]" />

            {socialLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Button
                  variant="ghost"
                  className="h-full rounded-none px-2 sm:px-3.5 hover:bg-transparent opacity-40 hover:opacity-100"
                  asChild
                >
                  <a href={link.url}>
                    <img className="w-5 h-5 sm:w-6 sm:h-6" alt={link.alt} src={link.icon} />
                  </a>
                </Button>
                <Separator
                  orientation="vertical"
                  className="h-full bg-[#1e2d3d]"
                />
              </React.Fragment>
            ))}

            <Button
              variant="ghost"
              className="h-full rounded-none px-2 sm:px-3.5 hover:bg-transparent opacity-40 hover:opacity-100"
              asChild
            >
              <a href="#">
                <img className="w-5 h-5 sm:w-6 sm:h-6" alt="Mail" src="/mail.svg" />
              </a>
            </Button>

            <Separator orientation="vertical" className="h-full bg-[#1e2d3d]" />

            <div className="flex-1" />

            <Separator orientation="vertical" className="h-full bg-[#1e2d3d] hidden sm:block" />

            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-xs sm:text-base px-3 sm:px-6 flex items-center gap-2 whitespace-nowrap">
              @faeztgh
              <img className="w-5 h-5 sm:w-6 sm:h-6" alt="GitHub" src="/frame.svg" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
