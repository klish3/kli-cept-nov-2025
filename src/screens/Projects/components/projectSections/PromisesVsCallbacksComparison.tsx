import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PromisesVsCallbacksComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Promises vs Callbacks: Pros and Cons
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Promises vs Callbacks →</a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Promises vs Callbacks (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Comparison Overview */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm">
            <div className="space-y-3">
              <div className="font-medium text-[#fea55f]">❌ Callback Problems</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div className="flex gap-2">
                  <div className="text-[#fea55f] min-w-fit">✗ Pyramid of Doom</div>
                  <div className="text-xs">Deep nesting hard to read</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#fea55f] min-w-fit">✗ Error Handling</div>
                  <div className="text-xs">Manual in each callback</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#fea55f] min-w-fit">✗ Maintenance</div>
                  <div className="text-xs">Hard to modify and extend</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="font-medium text-[#43d9ad]">✓ Promise Benefits</div>
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2">
                <div className="flex gap-2">
                  <div className="text-[#43d9ad] min-w-fit">✓ Linear Flow</div>
                  <div className="text-xs">Readable chaining with .then()</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#43d9ad] min-w-fit">✓ Error Handling</div>
                  <div className="text-xs">Centralized .catch() method</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#43d9ad] min-w-fit">✓ Composable</div>
                  <div className="text-xs">Easy to combine and transform</div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Comparison */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Callback Approach (Nested)</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96] overflow-x-auto">
              <pre>{`fetchUser(id, (err, user) => {
  if (err) console.error(err);
  else {
    fetchPosts(user.id, (err, posts) => {
      if (err) console.error(err);
      else {
        fetchComments(posts[0].id, (err, comments) => {
          if (err) console.error(err);
          else console.log(comments);
        });
      }
    });
  }
});`}</pre>
            </div>
          </div>

          {/* Promise Approach */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Promise Approach (Chained)</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96] overflow-x-auto">
              <pre>{`fetchUser(id)
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));`}</pre>
            </div>
          </div>

          {/* Key Differences Table */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Key Differences</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] overflow-x-auto">
              <table className="w-full [font-family:'Fira_Code',Helvetica] text-xs">
                <thead>
                  <tr className="border-b border-[#1e2d3d]">
                    <th className="text-[#43d9ad] text-left pb-3 pr-4">Aspect</th>
                    <th className="text-[#43d9ad] text-left pb-3 pr-4">Callbacks</th>
                    <th className="text-[#43d9ad] text-left pb-3">Promises</th>
                  </tr>
                </thead>
                <tbody className="text-[#607b96]">
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-2 pr-4">Readability</td>
                    <td className="py-2 pr-4">Hard (deeply nested)</td>
                    <td className="py-2">Easy (linear)</td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-2 pr-4">Error Handling</td>
                    <td className="py-2 pr-4">Manual in each callback</td>
                    <td className="py-2">Centralized .catch()</td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-2 pr-4">Chaining</td>
                    <td className="py-2 pr-4">Causes nesting</td>
                    <td className="py-2">Natural with .then()</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Async/Await</td>
                    <td className="py-2 pr-4">N/A</td>
                    <td className="py-2">Compatible, more readable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`PROMISES VS CALLBACKS: PROS & CONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Callbacks were the original async pattern in JavaScript.
Promises provide a cleaner, more manageable approach.

CALLBACK CONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PYRAMID OF DOOM (Callback Hell)
   function processUser(id) {
     getUser(id, function(err, user) {
       if (err) handle(err);
       else {
         getOrders(user.id, function(err, orders) {
           if (err) handle(err);
           else {
             getTotal(orders, function(err, total) {
               // Too many levels of nesting!
             });
           }
         });
       }
     });
   }

2. ERROR HANDLING NIGHTMARE
   - Must check for errors in every callback
   - Easy to miss error cases
   - Inconsistent error patterns
   - No centralized error handling

3. HARD TO MAINTAIN
   - Difficult to add/remove steps
   - Hard to parallelize operations
   - Code becomes unreadable
   - Testing is complex

PROMISE PROS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CLEANER, LINEAR CODE
   getUser(id)
     .then(user => getOrders(user.id))
     .then(orders => getTotal(orders))
     .then(total => console.log(total))
     .catch(err => handle(err));

2. CENTRALIZED ERROR HANDLING
   - Single .catch() for entire chain
   - Consistent error handling pattern
   - Errors propagate down the chain

3. BETTER COMPOSABILITY
   - Promise.all() for parallel ops
   - Promise.race() for first completion
   - Easy to chain transformations
   - Can return values from .then()

4. ASYNC/AWAIT SUPPORT
   - Promises enable async/await syntax
   - Looks like synchronous code
   - Easier to understand flow

SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Callbacks: Simple for single async operations
Promises: Much better for complex async flows
Async/Await: Modern standard, easiest to read`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromisesVsCallbacksComparison;
