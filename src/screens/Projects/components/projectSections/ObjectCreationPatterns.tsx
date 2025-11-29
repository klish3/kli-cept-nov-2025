import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ObjectCreationPatterns: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Various Ways to Create Objects
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-are-the-various-ways-to-create-objects-in-javascript?practice=practice&tab=quiz">
          greatfrontend: Object Creation Patterns →
        </a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx">
          github: Object Creation Patterns (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* Overview */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">6 Common Patterns</div>
              <div className="text-[#607b96] text-sm space-y-2">
                <div>JavaScript provides multiple ways to create objects, each with different use cases and benefits.</div>
              </div>
            </div>

            {/* Pattern 1-2 */}
            <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
              <div className="space-y-2">
                <div className="text-[#fea55f] font-bold">1. Object Literal</div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <pre className="text-xs whitespace-pre-wrap">{`const obj = {
  name: 'Alice',
  age: 30,
  greet() {
    return 'Hi';
  }
};

// Quick, simple objects`}</pre>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[#fea55f] font-bold">2. Constructor Function</div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <pre className="text-xs whitespace-pre-wrap">{`function Person(name) {
  this.name = name;
}

Person.prototype.greet = 
  function() { return 'Hi'; };

const obj = new Person('Alice');`}</pre>
                </div>
              </div>
            </div>

            {/* Pattern 3-4 */}
            <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
              <div className="space-y-2">
                <div className="text-[#fea55f] font-bold">3. Object.create()</div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <pre className="text-xs whitespace-pre-wrap">{`const proto = {
  greet() { return 'Hi'; }
};

const obj = Object.create(proto);
obj.name = 'Alice';

// Explicit prototype chain`}</pre>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[#fea55f] font-bold">4. ES6 Classes</div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <pre className="text-xs whitespace-pre-wrap">{`class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return 'Hi';
  }
}

const obj = new Person('Alice');`}</pre>
                </div>
              </div>
            </div>

            {/* Pattern 5-6 */}
            <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
              <div className="space-y-2">
                <div className="text-[#fea55f] font-bold">5. Object.assign() (Mixin)</div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <pre className="text-xs whitespace-pre-wrap">{`const obj = Object.assign(
  {},
  { name: 'Alice' },
  { age: 30 }
);

// Merge multiple objects`}</pre>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[#fea55f] font-bold">6. Singleton Pattern</div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <pre className="text-xs whitespace-pre-wrap">{`const singleton = (function() {
  let instance;
  
  return {
    getInstance() {
      if (!instance)
        instance = {};
      return instance;
    }
  };
})();`}</pre>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Quick Comparison</div>
              <div className="grid grid-cols-3 gap-2 text-[#607b96] text-xs">
                <div className="bg-[#011221] p-2 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-1">Pattern</div>
                  <div>Literal</div>
                  <div>Constructor</div>
                  <div>create()</div>
                  <div>Class</div>
                </div>
                <div className="bg-[#011221] p-2 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-1">Use Case</div>
                  <div>Simple objects</div>
                  <div>Reusable blueprints</div>
                  <div>Delegation</div>
                  <div>Modern, clean</div>
                </div>
                <div className="bg-[#011221] p-2 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-1">Hoisting</div>
                  <div>No</div>
                  <div>Yes (if decl.)</div>
                  <div>No</div>
                  <div>No (TDZ)</div>
                </div>
              </div>
            </div>

            {/* When to Use */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-3">
              <div className="text-[#43d9ad] font-bold">When to Use Each</div>
              <div className="text-sm text-[#607b96] space-y-2">
                <div><span className="text-[#43d9ad] font-bold">Literal:</span> One-off objects, configuration</div>
                <div><span className="text-[#43d9ad] font-bold">Class:</span> Multiple instances, modern code (best)</div>
                <div><span className="text-[#43d9ad] font-bold">Object.create():</span> Complex inheritance, prototypal patterns</div>
                <div><span className="text-[#43d9ad] font-bold">Constructor:</span> Legacy code, understanding prototypes</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`VARIOUS WAYS TO CREATE OBJECTS IN JAVASCRIPT

Six main patterns, each with different purposes:


1. OBJECT LITERAL (Simplest)
  const obj = {
    name: 'Alice',
    age: 30,
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  
  // Use for: Single simple objects, configuration objects
  // Pros: Simple, readable
  // Cons: Not reusable for multiple instances


2. CONSTRUCTOR FUNCTION (Classical Pattern)
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    return 'Hello, ' + this.name;
  };
  
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Use for: Creating multiple instances from blueprint
  // Pros: Reusable, sets up prototype chain
  // Cons: Requires 'new', function as object constructor feels weird


3. OBJECT.CREATE() (Prototypal Pattern)
  const personProto = {
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  
  const person = Object.create(personProto);
  person.name = 'Alice';
  person.age = 30;
  
  // Use for: Explicit prototype delegation, composition
  // Pros: Explicit prototype control, clean delegation
  // Cons: More verbose, less common


4. ES6 CLASSES (Modern Standard)
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      return 'Hello, ' + this.name;
    }
  }
  
  const person = new Person('Alice', 30);
  
  // Use for: Modern code, most common pattern now
  // Pros: Clean syntax, familiar to other languages
  // Cons: Syntactic sugar over prototypes (still need 'new')


5. OBJECT.ASSIGN() - MIXINS (Composition)
  const canEat = { eat: function() { } };
  const canWalk = { walk: function() { } };
  
  const person = Object.assign({}, canEat, canWalk);
  person.name = 'Alice';
  
  // Use for: Combining multiple objects, mixins
  // Pros: Flexible composition, multiple inheritance-like behavior
  // Cons: Copies properties (not delegation)


6. SINGLETON PATTERN (Ensures Single Instance)
  const db = (function() {
    let instance;
    
    return {
      getInstance: function() {
        if (!instance) {
          instance = { connection: 'database' };
        }
        return instance;
      }
    };
  })();
  
  const db1 = db.getInstance();
  const db2 = db.getInstance();
  console.log(db1 === db2); // true
  
  // Use for: Shared resources, configuration, single instance
  // Pros: Ensures only one instance exists
  // Cons: Global state, testing challenges


COMPARISON:
  - Literal: Quick objects, no reuse
  - Constructor: Prototypal inheritance (legacy)
  - Object.create(): Explicit prototype chain
  - Classes: Modern, familiar syntax (use this)
  - Mixins: Composition, multiple features
  - Singleton: Single shared instance


MODERN BEST PRACTICE:
Use ES6 classes for most purposes. They're:
  - Clean and readable
  - Familiar to developers from other languages
  - Standard in modern JavaScript
  - Support inheritance, static methods, getters/setters`}
            </pre>
          </div>

          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-[#43d9ad] text-left pb-4">Pattern</th>
                  <th className="text-[#43d9ad] text-left pb-4">Syntax</th>
                  <th className="text-[#43d9ad] text-left pb-4">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">Literal</td>
                  <td className="py-2 pr-4 align-top">{`{ key: value }`}</td>
                  <td className="py-2 align-top">Single simple objects</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Constructor</td>
                  <td className="py-2 pr-4 align-top">function Foo() {} + new</td>
                  <td className="py-2 align-top">Multiple instances (legacy)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Object.create()</td>
                  <td className="py-2 pr-4 align-top">Object.create(proto)</td>
                  <td className="py-2 align-top">Explicit prototypal inheritance</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">ES6 Class</td>
                  <td className="py-2 pr-4 align-top">class Foo {} + new</td>
                  <td className="py-2 align-top">Multiple instances (modern, recommended)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Object.assign()</td>
                  <td className="py-2 pr-4 align-top">Object.assign(target, ...sources)</td>
                  <td className="py-2 align-top">Combining/mixing objects</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Singleton</td>
                  <td className="py-2 pr-4 align-top">IIFE + getInstance()</td>
                  <td className="py-2 align-top">Single shared instance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ObjectCreationPatterns;
