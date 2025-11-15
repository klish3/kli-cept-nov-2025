import React from "react";
import { Button } from "../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

const JavaScriptPatterns: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          JavaScript Design Patterns & Idioms
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
        <div className="space-y-6 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">I. Singleton Pattern</div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="mb-3 text-[#9fb0c7]">Single instance of an object throughout the application</div>
              <pre className="text-[#e5e9f0] text-xs">
{`class Singleton {
  static instance = null;
  
  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
console.log(obj1 === obj2); // true`}
              </pre>
            </div>
          </div>

          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">II. Factory Pattern</div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="mb-3 text-[#9fb0c7]">Create objects without specifying exact classes</div>
              <pre className="text-[#e5e9f0] text-xs">
{`function createUser(type) {
  if (type === 'admin') {
    return { role: 'admin', permissions: ['all'] };
  } else if (type === 'user') {
    return { role: 'user', permissions: ['read'] };
  }
}

const admin = createUser('admin');
const user = createUser('user');`}
              </pre>
            </div>
          </div>

          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">III. Observer Pattern</div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="mb-3 text-[#9fb0c7]">Notify multiple objects about state changes</div>
              <pre className="text-[#e5e9f0] text-xs">
{`class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }
  
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb(data));
    }
  }
}

const emitter = new EventEmitter();
emitter.on('click', () => console.log('Clicked!'));
emitter.emit('click'); // 'Clicked!'`}
              </pre>
            </div>
          </div>

          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">IV. Module Pattern</div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="mb-3 text-[#9fb0c7]">Encapsulation with private & public methods</div>
              <pre className="text-[#e5e9f0] text-xs">
{`const calculator = (() => {
  // Private
  const add = (a, b) => a + b;
  
  // Public
  return {
    subtract: (a, b) => a - b,
    sum: (...nums) => nums.reduce(add, 0)
  };
})();

console.log(calculator.sum(1, 2, 3)); // 6
console.log(calculator.add(1, 2)); // Error: not accessible`}
              </pre>
            </div>
          </div>

          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">V. Debounce & Throttle</div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="mb-3 text-[#9fb0c7]">Control function execution frequency</div>
              <pre className="text-[#e5e9f0] text-xs">
{`// Debounce: Execute after delay
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

// Throttle: Execute at most once per interval
const throttle = (fn, interval) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= interval) {
      fn(...args);
      lastCall = now;
    }
  };
};`}
              </pre>
            </div>
          </div>

          <div>
            <div className="text-[#43d9ad] mb-2 font-medium">VI. Memoization Pattern</div>
            <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
              <div className="mb-3 text-[#9fb0c7]">Cache expensive function results</div>
              <pre className="text-[#e5e9f0] text-xs">
{`const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const fibonacci = memoize((n) => 
  n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
);

console.log(fibonacci(10)); // Much faster on repeat calls`}
              </pre>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full">
              <thead>
                <tr className="text-[#43d9ad]">
                  <th className="text-left pb-3">Pattern</th>
                  <th className="text-left pb-3">Purpose</th>
                  <th className="text-left pb-3">Use Case</th>
                </tr>
              </thead>
              <tbody className="text-[#e5e9f0]">
                <tr className="border-t border-[#1e2d3d]">
                  <td className="py-2 pr-2">Singleton</td>
                  <td className="py-2 pr-2">Single instance</td>
                  <td className="py-2">Logger, database connection</td>
                </tr>
                <tr className="border-t border-[#1e2d3d]">
                  <td className="py-2 pr-2">Factory</td>
                  <td className="py-2 pr-2">Object creation</td>
                  <td className="py-2">User roles, component types</td>
                </tr>
                <tr className="border-t border-[#1e2d3d]">
                  <td className="py-2 pr-2">Observer</td>
                  <td className="py-2 pr-2">Publish-subscribe</td>
                  <td className="py-2">Event systems, state changes</td>
                </tr>
                <tr className="border-t border-[#1e2d3d]">
                  <td className="py-2 pr-2">Module</td>
                  <td className="py-2 pr-2">Encapsulation</td>
                  <td className="py-2">Private/public methods</td>
                </tr>
                <tr className="border-t border-[#1e2d3d]">
                  <td className="py-2 pr-2">Debounce</td>
                  <td className="py-2 pr-2">Delay execution</td>
                  <td className="py-2">Search input, resize handlers</td>
                </tr>
                <tr className="border-t border-[#1e2d3d]">
                  <td className="py-2 pr-2">Throttle</td>
                  <td className="py-2 pr-2">Limit frequency</td>
                  <td className="py-2">Scroll events, API calls</td>
                </tr>
                <tr className="border-t border-[#1e2d3d]">
                  <td className="py-2 pr-2">Memoization</td>
                  <td className="py-2 pr-2">Cache results</td>
                  <td className="py-2">Expensive computations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default JavaScriptPatterns;
