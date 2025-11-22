import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CachingComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Caching & Performance
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
          <div className="text-[#e5e9f0] text-sm space-y-4">
            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">What is Caching?</div>
              <div className="text-[#607b96] text-xs space-y-2">
                <p>A technique to store copies of files/data in temporary storage to reduce access time and improve performance.</p>
              </div>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Browser Cache Example</div>
              <pre className="text-[#607b96] text-xs overflow-x-auto">
{`<!-- First visit: downloads from server -->
<!-- Subsequent visits: loads from cache -->
<link rel="stylesheet" href="styles.css" />
<script src="app.js"></script>`}
              </pre>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">Service Worker Caching</div>
              <pre className="text-[#607b96] text-xs overflow-x-auto">
{`self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/app.js'
      ]);
    })
  );
});

// Serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});`}
              </pre>
            </div>

            <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded">
              <div className="text-[#43d9ad] font-semibold mb-2">HTTP Caching Header</div>
              <pre className="text-[#607b96] text-xs overflow-x-auto">
{`Cache-Control: max-age=3600
<!-- Cache resources for 1 hour -->`}
              </pre>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <table className="w-full text-[#607b96] text-sm">
            <thead>
              <tr className="border-b border-[#1e2d3d]">
                <th className="text-left py-2 text-[#43d9ad]">Cache Type</th>
                <th className="text-left py-2 text-[#43d9ad]">Location</th>
                <th className="text-left py-2 text-[#43d9ad]">When Used</th>
                <th className="text-left py-2 text-[#43d9ad]">Benefit</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 font-medium">Browser Cache</td>
                <td className="py-3 text-xs">Local device</td>
                <td className="py-3 text-xs">Page revisits</td>
                <td className="py-3 text-xs">Faster load times</td>
              </tr>
              <tr className="border-b border-[#1e2d3d]">
                <td className="py-3 font-medium">Service Worker</td>
                <td className="py-3 text-xs">Background script</td>
                <td className="py-3 text-xs">Online/offline</td>
                <td className="py-3 text-xs">Offline access, PWA</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">HTTP Caching</td>
                <td className="py-3 text-xs">HTTP headers</td>
                <td className="py-3 text-xs">Per resource</td>
                <td className="py-3 text-xs">Reduced server load</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-[#011221] border border-[#1e2d3d] p-4 rounded mt-4">
            <div className="text-[#43d9ad] font-semibold mb-2 text-xs">Benefits of Caching</div>
            <ul className="text-[#607b96] text-xs space-y-1 list-disc list-inside">
              <li>Reduced latency (data closer to user)</li>
              <li>Reduced server load (fewer requests)</li>
              <li>Offline access (Service Workers)</li>
              <li>Improved UX and page performance</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
