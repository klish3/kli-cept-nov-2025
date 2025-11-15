import React from "react";
import { Button } from "../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

const SystemDesign: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">Design Patterns — Front-End System Concepts</div>
        <Button
          variant="ghost"
          onClick={() => setShowVisualExamples(!showVisualExamples)}
          className="text-[#607b96] hover:text-[#43d9ad] text-sm"
        >
          {showVisualExamples ? "Show Original" : "Show Visual Examples"}
        </Button>
      </div>

      {showVisualExamples ? (
        <div className="space-y-6 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">I. Rendering and Architecture</div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="mb-2 text-[#9fb0c7]">Web Rendering Strategies</div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#43d9ad] text-left">
                    <th className="pb-2">Strategy</th>
                    <th className="pb-2">Description</th>
                    <th className="pb-2">Benefit</th>
                  </tr>
                </thead>
                <tbody className="text-[#e5e9f0]">
                  <tr>
                    <td>Static Site Generation (SSG)</td>
                    <td>Page is pre-built at compile time.</td>
                    <td>Fastest load performance.</td>
                  </tr>
                  <tr>
                    <td>Incremental Static Regeneration (ISR)</td>
                    <td>Updates static pages on demand without a full rebuild.</td>
                    <td>Combines speed with fresh content.</td>
                  </tr>
                  <tr>
                    <td>Server Side Rendering (SSR)</td>
                    <td>Page is generated on each request.</td>
                    <td>Best for dynamic content.</td>
                  </tr>
                  <tr>
                    <td>Client Side Rendering (CSR)</td>
                    <td>Loads blank HTML, then fetches data and compiles JS on the client.</td>
                    <td>Common for single-page applications.</td>
                  </tr>
                  <tr>
                    <td>Partial Pre-rendering</td>
                    <td>Mixes pre-rendered (static) and dynamic content on the same page.</td>
                    <td>Performance optimization for hybrid pages.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">2. Micro Frontends</div>
            <div className="text-[#e5e9f0]">Splits a large application into smaller, independent, and deployable pieces.</div>
            <div className="text-[#9fb0c7] mt-2">Purpose: To improve scalability, reduce deployment risk, and allow different teams to work independently.</div>
            <div className="text-[#9fb0c7]">Tooling: Often implemented using Module Federation (Webpack 5) to dynamically load different micro-applications.</div>
          </div>

          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">II. Performance Optimization</div>
            <div className="text-[#e5e9f0]">
              <div className="mb-2 font-medium">3. Measuring Rendering Performance</div>
              <div className="text-[#9fb0c7]">Before optimizing, you must identify bottlenecks:</div>
              <ul className="list-disc pl-5 text-[#9fb0c7] mt-2">
                <li>Chrome Dev Tools: Track metrics like First Contentful Paint and Time to Interactive.</li>
                <li>React Dev Tools Profiler: Identify components that re-render excessively.</li>
                <li>Lighthouse/WebPageTest: Provide comprehensive performance breakdowns across devices and networks.</li>
              </ul>

              <div className="mt-3 mb-2 font-medium">4. Preventing Unnecessary Re-renders</div>
              <div className="text-[#9fb0c7]">A major performance killer, often addressed in React using memorization hooks:</div>
              <ul className="list-disc pl-5 text-[#9fb0c7] mt-2">
                <li>React.memo: Memorizes a component to only re-render if its props change.</li>
                <li>useCallback: Memorizes functions to prevent unnecessary recreation on re-renders.</li>
                <li>useMemo: Caches expensive calculations to avoid re-computing them.</li>
              </ul>

              <div className="mt-3 mb-2 font-medium">5. Lazy Loading</div>
              <div className="text-[#9fb0c7]">Defers loading of components or resources until they are actually needed by the user. Benefit: Reduces the initial JavaScript bundle size, speeding up the initial page load time.</div>

              <div className="mt-3 mb-2 font-medium">6. Extra Performance Improvements</div>
              <div className="text-[#9fb0c7]">Reduce bundle size using Tree Shaking (to remove unused code) and Bundle Splitting. Use Skeleton Screens or Spinners to improve perceived responsiveness. Ensure full optimization for mobile devices and accessibility standards.</div>
            </div>
          </div>

          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">III. API Optimization and Caching</div>
            <ul className="list-disc pl-5 text-[#9fb0c7] space-y-2">
              <li>
                <strong>7. Client-Side Caching with State Management</strong>
                <div className="text-[#9fb0c7]">Reduces repetitive GET requests to the back-end by storing data in the client-side cache (State Management or local storage). When a mutation (like DELETE or UPDATE) occurs, the local cache is modified immediately, avoiding an immediate follow-up GET request.</div>
              </li>
              <li>
                <strong>8. Data Expiration and Query Invalidation</strong>
                <div className="text-[#9fb0c7]">Addresses the issue of stale data in the cache. Libraries like React Query allow you to set a staleTime or expiration time, which automatically triggers a data refresh from the API when the cache expires or is considered stale.</div>
              </li>
              <li>
                <strong>9. GraphQL</strong>
                <div className="text-[#9fb0c7]">A query language that helps reduce over-fetching. Clients can specify the exact data fields they need (e.g., only name and price), minimizing the payload size returned by the server. GraphQL clients (like Apollo) also often include in-memory caching capabilities.</div>
              </li>
              <li>
                <strong>10. Rate Limiting (Debounce/Throttle)</strong>
                <div className="text-[#9fb0c7]">Limits the number of API calls made by the client. Debounce: Waits until the user finishes triggering an event (e.g., stops typing in a search bar) for a set period before executing the API call, dramatically reducing requests.</div>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">IV. Data Retrieval Efficiency</div>
            <div className="text-[#e5e9f0]">
              <div className="mb-2 font-medium">11. Filtering and Pagination</div>
              <div className="text-[#9fb0c7]">Essential for reducing the overall volume of data transferred between the server and the client.</div>

              <div className="mt-3 mb-2 font-medium">12. Offset Pagination</div>
              <div className="text-[#9fb0c7]">The most common approach, using the current page number and page size, typically implemented with SQL's OFFSET and LIMIT.</div>
              <div className="text-[#9fb0c7] mt-1"><strong>Pros:</strong> Allows users to jump to any specific page.</div>
              <div className="text-[#9fb0c7]"><strong>Cons:</strong> Unstable. If a record is added or deleted on a previous page, the content of subsequent pages will shift, leading to duplicated or missed items.</div>

              <div className="mt-3 mb-2 font-medium">13. Cursor Pagination</div>
              <div className="text-[#9fb0c7]">Uses a sequential, unique identifier (the "cursor," e.g., an ID or timestamp) of the last item viewed to fetch the next set of results.</div>
              <div className="text-[#9fb0c7] mt-1"><strong>Pros:</strong> Highly stable, as additions/deletions don't affect the pagination window. It's more efficient for the database as it jumps directly to the record.</div>
              <div className="text-[#9fb0c7]"><strong>Cons:</strong> Does not allow users to jump to arbitrary page numbers.</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap">
I. Rendering and Architecture

1. Web Rendering Strategies

The choice of rendering strategy dictates application performance.

| Strategy | Description | Benefit |
| Static Site Generation (SSG) | Page is pre-built at compile time. | Fastest load performance. |
| Incremental Static Regeneration (ISR) | Updates static pages on demand without a full rebuild. | Combines speed with fresh content. |
| Server Side Rendering (SSR) | Page is generated on each request. | Best for dynamic content. |
| Client Side Rendering (CSR) | Loads blank HTML, then fetches data and compiles JS on the client. | Common for single-page applications. |
| Partial Pre-rendering | Mixes pre-rendered (static) and dynamic content on the same page. | Performance optimization for hybrid pages. |

2. Micro Frontends

Splits a large application into smaller, independent, and deployable pieces.

Purpose: To improve scalability, reduce deployment risk, and allow different teams to work independently.

Tooling: Often implemented using Module Federation (Webpack 5) to dynamically load different micro-applications.

II. Performance Optimization

3. Measuring Rendering Performance

Before optimizing, you must identify bottlenecks:

Chrome Dev Tools: Track metrics like First Contentful Paint and Time to Interactive.

React Dev Tools Profiler: Identify components that re-render excessively.

Lighthouse/WebPageTest: Provide comprehensive performance breakdowns across devices and networks.

4. Preventing Unnecessary Re-renders

A major performance killer, often addressed in React using memorization hooks:

React.memo: Memorizes a component to only re-render if its props change.

useCallback: Memorizes functions to prevent unnecessary recreation on re-renders.

useMemo: Caches expensive calculations to avoid re-computing them.

5. Lazy Loading

Defers loading of components or resources until they are actually needed by the user.

Benefit: Reduces the initial JavaScript bundle size, speeding up the initial page load time.

6. Extra Performance Improvements

Reduce bundle size using Tree Shaking (to remove unused code) and Bundle Splitting.

Use Skeleton Screens or Spinners to improve perceived responsiveness.

Ensure full optimization for mobile devices and accessibility standards.

III. API Optimization and Caching

7. Client-Side Caching with State Management

Reduces repetitive GET requests to the back-end by storing data in the client-side cache (State Management or local storage).

When a mutation (like DELETE or UPDATE) occurs, the local cache is modified immediately, avoiding an immediate follow-up GET request.

8. Data Expiration and Query Invalidation

Addresses the issue of stale data in the cache.

Libraries like React Query allow you to set a staleTime or expiration time, which automatically triggers a data refresh from the API when the cache expires or is considered stale.

9. GraphQL

A query language that helps reduce over-fetching.

Clients can specify the exact data fields they need (e.g., only name and price), minimizing the payload size returned by the server.

GraphQL clients (like Apollo) also often include in-memory caching capabilities.

10. Rate Limiting (Debounce/Throttle)

Limits the number of API calls made by the client.

Debounce: Waits until the user finishes triggering an event (e.g., stops typing in a search bar) for a set period before executing the API call, dramatically reducing requests.

IV. Data Retrieval Efficiency

11. Filtering and Pagination

Essential for reducing the overall volume of data transferred between the server and the client.

12. Offset Pagination

The most common approach, using the current page number and page size, typically implemented with SQL's OFFSET and LIMIT.

Pros: Allows users to jump to any specific page.

Cons: Unstable. If a record is added or deleted on a previous page, the content of subsequent pages will shift, leading to duplicated or missed items.

13. Cursor Pagination

Uses a sequential, unique identifier (the "cursor," e.g., an ID or timestamp) of the last item viewed to fetch the next set of results.

Pros: Highly stable, as additions/deletions don't affect the pagination window. It's more efficient for the database as it jumps directly to the record.

Cons: Does not allow users to jump to arbitrary page numbers.

            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemDesign;
