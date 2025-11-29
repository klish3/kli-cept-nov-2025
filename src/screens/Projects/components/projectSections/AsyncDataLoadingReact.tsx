import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AsyncDataLoadingReact: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Handling Asynchronous Data Loading in React
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
        <a href="https://www.greatfrontend.com/questions/quiz/how-do-you-handle-asynchronous-data-loading-in-react-applications?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: Async Data Loading →</a>
        <a href="https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">github: Async Data Loading (mdx) →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Common Patterns */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Core Patterns for Async Data</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
                <div>
                  <div className="text-[#43d9ad] font-medium mb-2">useEffect Hook</div>
                  <div className="text-[#607b96] text-xs">Most common pattern for data loading</div>
                </div>
                <div className="bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs">
                  <pre>{`useEffect(() => {
  fetchData()
    .then(data => setData(data))
    .catch(err => setError(err));
}, []);`}</pre>
                </div>
              </div>

              <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
                <div>
                  <div className="text-[#43d9ad] font-medium mb-2">Async/Await</div>
                  <div className="text-[#607b96] text-xs">Cleaner syntax for async operations</div>
                </div>
                <div className="bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs">
                  <pre>{`useEffect(() => {
  (async () => {
    const data = await fetch(url);
    setData(data);
  })();
}, []);`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* State Management */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Managing Async States</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]">
              <div className="flex gap-2">
                <div className="text-[#43d9ad] min-w-fit">const [loading, setLoading]</div>
                <div>= useState(true) - Show spinner</div>
              </div>
              <div className="flex gap-2">
                <div className="text-[#43d9ad] min-w-fit">const [data, setData]</div>
                <div>= useState(null) - Store fetched data</div>
              </div>
              <div className="flex gap-2">
                <div className="text-[#43d9ad] min-w-fit">const [error, setError]</div>
                <div>= useState(null) - Handle errors</div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
              <div>
                <div className="text-[#43d9ad] font-medium mb-2">✓ Cleanup on Unmount</div>
                <div className="text-[#607b96] text-xs">Prevent memory leaks with cleanup function</div>
              </div>
              <div className="bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs">
                <pre>{`useEffect(() => {
  let mounted = true;
  fetch(url).then(data => {
    if (mounted) setData(data);
  });
  return () => {
    mounted = false;
  };
}, []);`}</pre>
              </div>
            </div>

            <div className="bg-[#011221] p-4 border border-[#1e2d3d] space-y-3">
              <div>
                <div className="text-[#43d9ad] font-medium mb-2">✓ Dependency Array</div>
                <div className="text-[#607b96] text-xs">Control when effect runs with dependencies</div>
              </div>
              <div className="bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs">
                <pre>{`useEffect(() => {
  // Run once on mount
  fetchData();
}, []); // empty array

// Run when userId changes
// }, [userId]);`}</pre>
              </div>
            </div>
          </div>

          {/* UI Patterns */}
          <div className="space-y-2">
            <div className="font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm">Common UI Patterns</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs space-y-1">
              <div>✓ Loading state → Show spinner</div>
              <div>✓ Error state → Show error message</div>
              <div>✓ Data loaded → Display content</div>
              <div>✓ Retry mechanism → Allow user to retry failed requests</div>
              <div>✓ Caching → Don't refetch same data</div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`HANDLING ASYNCHRONOUS DATA LOADING IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most React applications need to fetch data from APIs.
Proper async handling prevents bugs and improves UX.

BASIC PATTERN WITH USEEFFECT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function UserProfile({ userId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [userId]); // Refetch when userId changes

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  return <div>{data.name}</div>;
}

ASYNC/AWAIT PATTERN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, []);

PREVENTING MEMORY LEAKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

useEffect(() => {
  let mounted = true;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (mounted) setData(data); // Only set if still mounted
    });
  
  return () => {
    mounted = false; // Cleanup on unmount
  };
}, []);

BEST PRACTICES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Always handle loading, error, and success states
2. Cleanup requests on component unmount
3. Use dependency array to control when to fetch
4. Refetch when dependencies change
5. Show loading spinner while fetching
6. Handle errors gracefully
7. Implement retry logic for failed requests
8. Cache data when appropriate
9. Use AbortController to cancel requests

ALTERNATIVES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- React Query: Powerful data fetching library
- SWR: Data fetching with caching
- Apollo Client: For GraphQL
- RTK Query: Redux Toolkit's data fetching solution
- TanStack Query: Advanced async state management`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsyncDataLoadingReact;
