import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PrototypalInheritance: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg">
          Prototypal Inheritance
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
        <a href="https://www.greatfrontend.com/questions/quiz/explain-how-prototypal-inheritance-works?practice=practice&tab=quiz">
          greatfrontend: Prototypal Inheritance →
        </a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-how-prototypal-inheritance-works/en-US.mdx">
          github: Prototypal Inheritance (mdx) →
        </a>
      </div>

      {showVisualExamples ? (
        <>
          <div className="space-y-6">
            {/* Concept */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">What is Prototypal Inheritance?</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">Object Delegation</div>
                  <div>Objects delegate to other objects via prototype chain</div>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2">
                  <div className="text-[#43d9ad]">Not Class-Based</div>
                  <div>No strict class/instance distinction like Java or C++</div>
                </div>
              </div>
            </div>

            {/* Prototype Chain */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Prototype Chain Visual</div>
              <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] text-sm space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">obj instance</div>
                  <div className="text-[#43d9ad]">→</div>
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">obj.[[Prototype]]</div>
                  <div className="text-[#43d9ad]">→</div>
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">Object.prototype</div>
                  <div className="text-[#43d9ad]">→</div>
                  <div className="bg-[#4d5bce40] px-3 py-2 rounded">null</div>
                </div>
                <div className="text-xs text-[#fea55f]">Property lookup goes up the chain until found or null reached</div>
              </div>
            </div>

            {/* Three Patterns */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Three Common Patterns</div>
              <div className="grid grid-cols-3 gap-4 text-[#607b96] text-sm">
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Delegation</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`const parent = {
  greet() {
    return 'hi';
  }
};

const child = Object.create(
  parent
);

child.greet();
// → 'hi'`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Constructor</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`function Animal(name) {
  this.name = name;
}

Animal.prototype
  .speak = function() {
    return this.name;
  };

const dog = new Animal(
  'Max'
);`}</pre>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#fea55f] font-bold">Concatenative</div>
                  <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                    <pre className="text-xs whitespace-pre-wrap">{`const canEat = {
  eat() { /* ... */ }
};

const canWalk = {
  walk() { /* ... */ }
};

const person = Object.assign(
  {},
  canEat,
  canWalk
);`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Constructor Pattern Details */}
            <div className="space-y-3">
              <div className="text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]">Constructor Pattern Example</div>
              <div className="grid grid-cols-2 gap-4 text-[#607b96] text-sm">
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">Parent</div>
                  <pre className="text-xs whitespace-pre-wrap">{`function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = 
  function() {
    console.log(
      this.name + ' makes sound'
    );
  };`}</pre>
                </div>
                <div className="bg-[#011221] p-3 rounded border border-[#1e2d3d]">
                  <div className="text-[#43d9ad] font-bold mb-2">Child</div>
                  <pre className="text-xs whitespace-pre-wrap">{`function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(
  Animal.prototype
);

Dog.prototype.bark = 
  function() { 
    return 'woof'; 
  };`}</pre>
                </div>
              </div>
            </div>

            {/* Key Concepts */}
            <div className="bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2">
              <div className="text-[#43d9ad] font-bold">Key Concepts</div>
              <div className="grid grid-cols-2 gap-3 text-sm text-[#607b96]">
                <div>• [[Prototype]] - internal reference to parent object</div>
                <div>• __proto__ - access to [[Prototype]] (non-standard)</div>
                <div>• .prototype - property for constructor inheritance</div>
                <div>• Object.create() - creates object with specified prototype</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`PROTOTYPAL INHERITANCE

Unlike classical inheritance (class-based), prototypal inheritance uses objects
to delegate to other objects. All JavaScript objects have an internal [[Prototype]]
reference.


How It Works:
1. Object has internal [[Prototype]] reference
2. When property accessed, JS looks in object
3. If not found, looks in [[Prototype]]
4. If still not found, looks in [[Prototype]].[[Prototype]]
5. Continues until null is reached (end of chain)


Three Main Patterns:

PATTERN 1: Delegation (Simplest)
  const parent = {
    greet: function() { return 'Hello'; }
  };
  
  const child = Object.create(parent);
  child.name = 'Alice';
  
  child.greet(); // 'Hello' - delegated to parent


PATTERN 2: Concatenation (Mixins)
  const canEat = {
    eat: function() { /* ... */ }
  };
  
  const canWalk = {
    walk: function() { /* ... */ }
  };
  
  const person = Object.assign({}, canEat, canWalk);
  // person has methods from both


PATTERN 3: Constructor Functions (Traditional)
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    return this.name + ' speaks';
  };
  
  function Dog(name) {
    Animal.call(this, name);
  }
  
  // Set up prototype chain
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    return 'Woof!';
  };
  
  const dog = new Dog('Rex');
  dog.bark(); // 'Woof!'
  dog.speak(); // 'Rex speaks' - inherited


Key Differences from Classical OOP:
- No classes required (though ES6 classes are syntactic sugar)
- Inheritance happens at runtime via objects
- More flexible - can change prototypes dynamically
- Instances share methods via prototype


Prototype Chain Example:
  const obj = { a: 1 };
  
  // obj.[[Prototype]] → Object.prototype → null
  
  obj.toString(); // Works!
  // toString found in Object.prototype`}
            </pre>
          </div>

          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-[#43d9ad] text-left pb-4">Pattern</th>
                  <th className="text-[#43d9ad] text-left pb-4">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 align-top">Delegation</td>
                  <td className="py-2 align-top">Object delegates to another via [[Prototype]]; simplest form of inheritance</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Concatenation</td>
                  <td className="py-2 align-top">Combine multiple objects' properties using Object.assign(); mixin pattern</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">Constructor</td>
                  <td className="py-2 align-top">Constructor function with shared methods on .prototype; classical pattern</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 align-top">[[Prototype]]</td>
                  <td className="py-2 align-top">Internal reference; looked up during property access; accessible via __proto__ or getPrototypeOf()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrototypalInheritance;
