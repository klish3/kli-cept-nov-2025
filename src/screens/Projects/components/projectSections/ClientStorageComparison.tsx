import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClientStorageComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Client Storage: Cookies vs localStorage vs sessionStorage
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
        <a href="https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-cookies-local-storage-and-session-storage?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Client Storage →</a>
        <a href="https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/explain-the-difference-between-cookies-local-storage-and-session-storage/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Client Storage (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Storage Overview */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">Cookies</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad] font-bold">Size</div>
                  <div className="text-xs">~4KB per cookie</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Scope</div>
                  <div className="text-xs">All tabs/windows</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Lifespan</div>
                  <div className="text-xs">Configurable expiry</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">HTTP</div>
                  <div className="text-xs">Auto sent with requests</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">localStorage</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad] font-bold">Size</div>
                  <div className="text-xs">~5-10MB</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Scope</div>
                  <div className="text-xs">All tabs/windows</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Lifespan</div>
                  <div className="text-xs">Until manual delete</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">HTTP</div>
                  <div className="text-xs">Manual only</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-[#43d9ad]">sessionStorage</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div>
                  <div className="text-[#43d9ad] font-bold">Size</div>
                  <div className="text-xs">~5-10MB</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Scope</div>
                  <div className="text-xs">Same tab only</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">Lifespan</div>
                  <div className="text-xs">Tab close clears</div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold">HTTP</div>
                  <div className="text-xs">Manual only</div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">When to Use Each</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Cookies</div>
                  <div className="text-xs space-y-1">
                    <div>• Auth tokens/JWT</div>
                    <div>• Session IDs</div>
                    <div>• GDPR consent</div>
                    <div>• Analytics IDs</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">localStorage</div>
                  <div className="text-xs space-y-1">
                    <div>• Theme preferences</div>
                    <div>• User settings</div>
                    <div>• App state</div>
                    <div>• Persistent config</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">sessionStorage</div>
                  <div className="text-xs space-y-1">
                    <div>• Form draft data</div>
                    <div>• Temporary UI state</div>
                    <div>• Page reload state</div>
                    <div>• Wizard progress</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flow */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">HTTP Request Flow</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Cookies</div>
                  <div className="text-xs bg-[#1e2d3d] p-2 rounded">
                    <div className="text-[#43d9ad] mb-1">→ Automatic</div>
                    <div>Sent in Cookie header with every request</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">localStorage</div>
                  <div className="text-xs bg-[#1e2d3d] p-2 rounded">
                    <div className="text-[#fea55f] mb-1">✗ Manual</div>
                    <div>Must be included in fetch/AJAX</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">sessionStorage</div>
                  <div className="text-xs bg-[#1e2d3d] p-2 rounded">
                    <div className="text-[#fea55f] mb-1">✗ Manual</div>
                    <div>Must be included in fetch/AJAX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Considerations */}
          <div className="space-y-2">
            <div className="font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm">Security Considerations</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="text-[#43d9ad] font-bold mb-2">Cookies</div>
                  <div className="text-xs space-y-1">
                    <div>• HttpOnly flag prevents XSS</div>
                    <div>• Secure flag = HTTPS only</div>
                    <div>• SameSite prevents CSRF</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#fea55f] font-bold mb-2">localStorage</div>
                  <div className="text-xs space-y-1">
                    <div>• Vulnerable to XSS</div>
                    <div>• Shared across tabs</div>
                    <div>• Never store secrets</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#fea55f] font-bold mb-2">sessionStorage</div>
                  <div className="text-xs space-y-1">
                    <div>• Vulnerable to XSS</div>
                    <div>• Tab-specific (safer)</div>
                    <div>• Never store secrets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`CLIENT STORAGE COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Three mechanisms for storing data on the client side,
each with different purposes and constraints.

STORAGE CAPACITY:
  Cookies:        ~4KB per cookie
  localStorage:   ~5-10MB
  sessionStorage: ~5-10MB

SCOPE & LIFETIME:
  Cookies:        All tabs/windows, configurable expiry
  localStorage:   All tabs/windows, persists until deleted
  sessionStorage: Same tab only, cleared on tab close

HTTP BEHAVIOR:
  Cookies:        AUTOMATIC - sent with every request
  localStorage:   MANUAL - must include in fetch/AJAX
  sessionStorage: MANUAL - must include in fetch/AJAX

EXAMPLE - COOKIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Set cookie with expiry
document.cookie = 'token=abc123; expires=2025-12-31; path=/';

// Read cookies
const cookies = document.cookie;

// Delete cookie
document.cookie = 'token=; expires=1970-01-01';

Use for: Auth tokens, GDPR consent, tracking IDs


EXAMPLE - localStorage:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Store (persists)
localStorage.setItem('theme', 'dark');

// Retrieve
const theme = localStorage.getItem('theme');

// Delete
localStorage.removeItem('theme');

Use for: User preferences, settings, app state


EXAMPLE - sessionStorage:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Store (cleared on tab close)
sessionStorage.setItem('formDraft', JSON.stringify(data));

// Retrieve
const draft = JSON.parse(sessionStorage.getItem('formDraft'));

// Delete
sessionStorage.removeItem('formDraft');

Use for: Form data, temporary UI state`}
            </pre>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Aspect</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">Cookies</th>
                <th className="text-[#43d9ad] text-left pb-4 pr-4 align-top">localStorage</th>
                <th className="text-[#43d9ad] text-left pb-4 align-top">sessionStorage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Capacity</td>
                <td className="py-3 pr-4 align-top">~4KB each</td>
                <td className="py-3 pr-4 align-top">~5-10MB</td>
                <td className="py-3 align-top">~5-10MB</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Scope</td>
                <td className="py-3 pr-4 align-top">All tabs/windows</td>
                <td className="py-3 pr-4 align-top">All tabs/windows</td>
                <td className="py-3 align-top">Same tab only</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Lifespan</td>
                <td className="py-3 pr-4 align-top">Until expiry/browser close</td>
                <td className="py-3 pr-4 align-top">Until manual deletion</td>
                <td className="py-3 align-top">Until tab closes</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Sent with HTTP</td>
                <td className="py-3 pr-4 align-top">Yes, automatically</td>
                <td className="py-3 pr-4 align-top">No, manual only</td>
                <td className="py-3 align-top">No, manual only</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 pr-4 font-medium align-top">Best for</td>
                <td className="py-3 pr-4 align-top">Auth tokens, session IDs</td>
                <td className="py-3 pr-4 align-top">User preferences, settings</td>
                <td className="py-3 align-top">Form data, temporary state</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium align-top">Security notes</td>
                <td className="py-3 pr-4 align-top">HttpOnly/Secure flags protect</td>
                <td className="py-3 pr-4 align-top">Vulnerable to XSS attacks</td>
                <td className="py-3 align-top">Vulnerable to XSS attacks</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
