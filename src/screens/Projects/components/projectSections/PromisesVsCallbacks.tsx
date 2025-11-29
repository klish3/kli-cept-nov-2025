import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PromisesVsCallbacks: React.FC<Props> = ({
  showVisualExamples,
  setShowVisualExamples,
}) => {
  const [callbackOutput, setCallbackOutput] = React.useState<string>("");
  const [promiseOutput, setPromiseOutput] = React.useState<string>("");

  const handleCallbackClick = () => {
    setCallbackOutput("Fetching user data...\n");
    setTimeout(() => {
      setCallbackOutput(
        (prev) => prev + "User: John (callback hell starts here)\n"
      );
      setCallbackOutput((prev) => prev + "Fetching posts...\n");
      setTimeout(() => {
        setCallbackOutput((prev) => prev + "Posts: 5 posts found\n");
        setCallbackOutput((prev) => prev + "Fetching comments...\n");
        setTimeout(() => {
          setCallbackOutput((prev) => prev + "Comments: 12 comments\n");
          setCallbackOutput((prev) => prev + "Done!");
        }, 500);
      }, 500);
    }, 500);
  };

  const handlePromiseClick = () => {
    setPromiseOutput("Fetching user data...\n");
    setTimeout(() => {
      setPromiseOutput((prev) => prev + "User: John\n");
      setPromiseOutput((prev) => prev + "Fetching posts...\n");
      setTimeout(() => {
        setPromiseOutput((prev) => prev + "Posts: 5 posts found\n");
        setPromiseOutput((prev) => prev + "Fetching comments...\n");
        setTimeout(() => {
          setPromiseOutput((prev) => prev + "Comments: 12 comments\n");
          setPromiseOutput((prev) => prev + "Done!");
        }, 500);
      }, 500);
    }, 500);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Promises vs Callbacks
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
          {/* Callbacks Section */}
          <div className="space-y-4">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium">
              Callback Hell (Pyramid of Doom)
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Code:
              </div>
              <pre className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto">
                {`getUser(1, function(err, user) {
  if (err) console.error(err);
  else {
    getPosts(user.id, function(err, posts) {
      if (err) console.error(err);
      else {
        getComments(posts[0].id, 
          function(err, comments) {
            if (err) console.error(err);
            else console.log(comments);
          }
        );
      }
    });
  }
});`}
              </pre>
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Output:
              </div>
              <div className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap">
                {callbackOutput}
              </div>
            </div>
            <Button
              onClick={handleCallbackClick}
              className="bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs"
            >
              Run Callback Example
            </Button>
            <div className="bg-[#4d5bce]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
              <div className="font-medium text-[#e5e9f0] mb-2">Problems:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Hard to read and maintain</li>
                <li>Difficult error handling</li>
                <li>Code grows deeper (pyramid)</li>
                <li>Error propagation is manual</li>
              </ul>
            </div>
          </div>

          {/* Promises Section */}
          <div className="space-y-4">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium">
              Promise Chaining (Much Cleaner)
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Code:
              </div>
              <pre className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto">
                {`getUser(1)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));`}
              </pre>
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Output:
              </div>
              <div className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap">
                {promiseOutput}
              </div>
            </div>
            <Button
              onClick={handlePromiseClick}
              className="bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs"
            >
              Run Promise Example
            </Button>
            <div className="bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
              <div className="font-medium text-[#e5e9f0] mb-2">Benefits:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Linear, readable code flow</li>
                <li>Centralized error handling (.catch)</li>
                <li>Better code organization</li>
                <li>Easier to maintain and debug</li>
              </ul>
            </div>
          </div>

          {/* Async/Await Section */}
          <div className="space-y-4">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium">
              Async/Await (Modern Approach)
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3">
                Code:
              </div>
              <pre className="text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto">
                {`async function fetchData() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (err) {
    console.error(err);
  }
}`}
              </pre>
            </div>
            <div className="bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
              <div className="font-medium text-[#e5e9f0] mb-2">Best Practices:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Looks like synchronous code</li>
                <li>Cleaner error handling with try/catch</li>
                <li>Most modern and recommended approach</li>
                <li>Still uses Promises under the hood</li>
              </ul>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-8">
            <div className="text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium mb-4">
              Key Comparison
            </div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d] overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1e2d3d]">
                    <th className="text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]">
                      Aspect
                    </th>
                    <th className="text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]">
                      Callbacks
                    </th>
                    <th className="text-[#43d9ad] text-left pb-4 [font-family:'Fira_Code',Helvetica]">
                      Promises
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Readability
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Hard to follow (nested)
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Linear and clear
                    </td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Error Handling
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Manual in each callback
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Centralized with .catch()
                    </td>
                  </tr>
                  <tr className="border-b border-[#1e2d3d]">
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Chaining
                    </td>
                    <td className="py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Causes pyramid of doom
                    </td>
                    <td className="py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs">
                      Natural and clean
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Reference Links */}
          <div className="text-xs text-[#43d9ad] [font-family:'Fira_Code',Helvetica] space-y-1">
            <div>
              References:{" "}
              <a
                href="https://www.greatfrontend.com/questions/quiz/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#e5e9f0]"
              >
                GreatFrontEnd
              </a>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`Callbacks are function arguments that execute when an async operation completes.
Promises are objects representing eventual completion of an async operation.

CALLBACK PATTERN (Callback Hell):
function fetchUserData(id, callback) {
  setTimeout(() => {
    callback(null, { id: id, name: 'John' });
  }, 1000);
}

fetchUserData(1, function(err, user) {
  if (err) return console.error(err);
  fetchUserPosts(user.id, function(err, posts) {
    if (err) return console.error(err);
    fetchPostComments(posts[0].id, function(err, comments) {
      if (err) return console.error(err);
      console.log(comments); // Too nested!
    });
  });
});

PROMISE PATTERN:
function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, name: 'John' });
    }, 1000);
  });
}

fetchUserData(1)
  .then(user => fetchUserPosts(user.id))
  .then(posts => fetchPostComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));

KEY DIFFERENCES:
- Callbacks: Function passed as argument, hard to chain
- Promises: Object with .then(), .catch(), .finally()
- Error handling: Promises provide centralized .catch()
- Readability: Promises are much more readable
- Chaining: Promises support natural method chaining

ADVANTAGES OF PROMISES:
✓ Better error handling with .catch()
✓ Method chaining (.then() on returned promises)
✓ Better readability and maintainability
✓ Easier to compose and debug
✓ Can return values from .then()`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromisesVsCallbacks;
