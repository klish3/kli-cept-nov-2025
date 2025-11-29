import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThisKeywordComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="font-normal text-[#e5e9f0] text-lg">
          Understanding 'this' in JavaScript
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
        <a href="https://www.greatfrontend.com/questions/quiz/explain-how-this-works-in-javascript?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: This Keyword →</a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-how-this-works-in-javascript/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">GitHub: This Guide →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* This Rules */}
          <div className="space-y-4">
            <div className="font-medium text-[#43d9ad] text-sm">7 Rules for 'this'</div>
            <div className="space-y-2">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">1. new Keyword (Constructor)</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2">
                  <div>const obj = new Person('John');</div>
                  <div className="text-[#43d9ad] mt-1">// this = new object instance</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">2. Method Call (obj.method())</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2">
                  <div>obj.showThis(); {'// this = obj'}</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">3. call/apply/bind (Explicit Binding)</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2">
                  <div>func.call(obj); {'// this = obj'}</div>
                  <div>func.apply(obj); {'// this = obj'}</div>
                  <div>func.bind(obj)(); {'// this = obj'}</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">4. Global/Standalone Call</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2">
                  <div>showThis(); {'// window (non-strict) or undefined (strict)'}</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">5. Arrow Functions (Lexical Scope)</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2">
                  <div>{'const arrow = () => { this }; // inherits from outer scope'}</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">6. Class Constructor</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2">
                  <div>class Person {'{'}</div>
                  <div className="pl-4">constructor() {'{'} this = new instance {'}'}</div>
                  <div>{'}'}</div>
                </div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">7. Event Handlers</div>
                <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2">
                  <div>element.addEventListener('click', func); {'// this = element'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rule Priority */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Rule Priority (Highest to Lowest)</div>
            <div className="bg-[#011221] p-4 border border-[#1e2d3d] rounded" style={{fontFamily: "'Fira Code', Helvetica"}}>
              <div className="text-[#43d9ad] text-xs space-y-1">
                <div>1. new keyword (highest)</div>
                <div>2. call/apply/bind</div>
                <div>3. Method call (obj.method())</div>
                <div>4. Standalone call</div>
                <div className="text-[#fea55f] pt-2">Arrow functions skip all above rules</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`'THIS' KEYWORD RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

'this' is a dynamic reference to the context in
which a function is executed. Its value depends on
how the function is called, not where it's defined.

RULE 1: new KEYWORD (Constructor)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function Person(name) {
  this.name = name;
}

const person = new Person('John');
// this = newly created person object

RULE 2: METHOD CALL (obj.method())
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const obj = {
  name: 'Alice',
  greet: function() {
    console.log(this.name);
  }
};

obj.greet(); // this = obj

RULE 3: EXPLICIT BINDING (call/apply/bind)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function greet() {
  console.log(this.name);
}

const person = { name: 'Bob' };

greet.call(person);      // this = person
greet.apply(person);     // this = person
greet.bind(person)();    // this = person

RULE 4: GLOBAL/STANDALONE CALL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function greet() {
  console.log(this);
}

greet();
// Non-strict mode: this = window
// Strict mode: this = undefined

RULE 5: ARROW FUNCTIONS (Lexical Scope)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Arrow functions don't have their own 'this'.
They inherit from surrounding scope.

const obj = {
  name: 'Charlie',
  greet: function() {
    const arrow = () => {
      console.log(this.name); // 'this' from obj
    };
    arrow();
  }
};

obj.greet(); // Charlie

// Arrow functions CANNOT be rebound with call/apply/bind

RULE 6: CLASS CONSTRUCTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

class Person {
  constructor(name) {
    this.name = name; // this = new instance
  }
  
  greet() {
    console.log(this);
  }
}

const person = new Person('David');
person.greet(); // this = person

RULE 7: EVENT HANDLERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

element.addEventListener('click', function(e) {
  console.log(this); // this = element
});

// But NOT with arrow function:
element.addEventListener('click', () => {
  console.log(this); // this = parent scope
});

PRIORITY ORDER (Highest to Lowest):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. new keyword (highest priority)
2. call/apply/bind
3. Method call (obj.method())
4. Standalone function call

Arrow functions always use lexical 'this' and
ignore all other rules!`}
</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThisKeywordComparison;
