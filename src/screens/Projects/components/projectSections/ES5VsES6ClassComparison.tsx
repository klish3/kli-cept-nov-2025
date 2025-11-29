import React from "react";
import { Button } from "../../../../components/ui/button";

interface Props {
  showVisualExamples: boolean;
  setShowVisualExamples: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ES5VsES6ClassComparison: React.FC<Props> = ({ showVisualExamples, setShowVisualExamples }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="font-normal text-[#e5e9f0] text-lg">
          ES5 Function vs ES6 Classes
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
        <a href="https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-es6-class-and-es5-function-constructors?practice=practice&tab=quiz" target="_blank" rel="noopener noreferrer" className="hover:underline block">greatfrontend: ES5 vs ES6 →</a>
        <a href="https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx" target="_blank" rel="noopener noreferrer" className="hover:underline block">GitHub: Classes Guide →</a>
      </div>

      {showVisualExamples ? (
        <>
          {/* Comparison */}
          <div className="space-y-4">
            <div className="font-medium text-[#43d9ad] text-sm">Side-by-Side Comparison</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-[#fea55f] font-medium text-sm">ES5 Constructor</div>
                <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                  <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs space-y-1">
                    <div className="text-[#43d9ad]">function Person(name) {'{'}</div>
                    <div className="pl-4">this.name = name;</div>
                    <div>{'}'}</div>
                    <div className="text-[#43d9ad] mt-2">Person.prototype.greet =</div>
                    <div className="pl-4">function() {'{'}</div>
                    <div className="pl-8">console.log(this.name);</div>
                    <div className="pl-4">{'}'}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[#43d9ad] font-medium text-sm">ES6 Class</div>
                <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                  <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-xs space-y-1">
                    <div className="text-[#43d9ad]">class Person {'{'}</div>
                    <div className="pl-4">constructor(name) {'{'}</div>
                    <div className="pl-8">this.name = name;</div>
                    <div className="pl-4">{'}'}</div>
                    <div className="text-[#43d9ad]">greet() {'{'}</div>
                    <div className="pl-8">console.log(this.name);</div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Differences */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Key Differences</div>
            <div className="space-y-2">
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">Syntax</div>
                <div className="text-[#607b96] text-xs">ES5: function + prototype | ES6: class keyword (more readable)</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">Methods</div>
                <div className="text-[#607b96] text-xs">ES5: Prototype chain | ES6: Inside class body (cleaner)</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">Static Methods</div>
                <div className="text-[#607b96] text-xs">ES5: Directly on constructor | ES6: static keyword (clear)</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">Inheritance</div>
                <div className="text-[#607b96] text-xs">ES5: Object.create() + manual chain | ES6: extends + super (much simpler)</div>
              </div>
              <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded">
                <div className="text-[#fea55f] font-medium text-sm mb-2">Strict Mode</div>
                <div className="text-[#607b96] text-xs">ES5: Optional | ES6: Always strict (safer)</div>
              </div>
            </div>
          </div>

          {/* Inheritance */}
          <div className="space-y-3">
            <div className="font-medium text-[#43d9ad] text-sm">Inheritance Comparison</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-[#fea55f] font-medium text-sm">ES5 (Complex)</div>
                <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded" style={{fontFamily: "'Fira Code', Helvetica"}}>
                  <div className="text-[#607b96] text-xs space-y-1">
                    <div>function Student(name) {'{'}</div>
                    <div className="pl-4">Person.call(this, name);</div>
                    <div>{'}'}</div>
                    <div className="text-[#43d9ad]">Student.prototype = </div>
                    <div className="pl-4">{'Object.create'}</div>
                    <div className="pl-4">(Person.prototype);</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[#43d9ad] font-medium text-sm">ES6 (Simple)</div>
                <div className="bg-[#011221] p-3 border border-[#1e2d3d] rounded" style={{fontFamily: "'Fira Code', Helvetica"}}>
                  <div className="text-[#607b96] text-xs space-y-1">
                    <div>class Student extends</div>
                    <div className="pl-4">Person {'{'}</div>
                    <div className="pl-4">constructor(name) {'{'}</div>
                    <div className="pl-8">super(name);</div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{fontFamily: "'Fira Code', Helvetica"}} className="text-[#607b96] text-sm space-y-6">
          <div className="bg-[#011221] p-4 rounded border border-[#1e2d3d]">
            <pre className="whitespace-pre-wrap text-xs">
{`ES5 FUNCTION CONSTRUCTORS vs ES6 CLASSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BASIC COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ES5 FUNCTION CONSTRUCTOR:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log('Hello, I am ' + this.name);
};

var person1 = new Person('John', 30);

ES6 CLASS:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, I am \${this.name}\`);
  }
}

const person1 = new Person('John', 30);

KEY DIFFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SYNTAX & READABILITY
   ES5: Confusing, less intuitive
   ES6: Clear, more intuitive ✓

2. CONSTRUCTOR
   ES5: Function named like constructor
   ES6: Explicit constructor() method ✓

3. METHOD DEFINITION
   ES5: Defined on .prototype
   ES6: Defined in class body ✓

4. STATIC METHODS
   ES5: Added directly to function
        Person.staticMethod = function() {}
   ES6: Use static keyword ✓
        static staticMethod() {}

5. INHERITANCE
   ES5: Manual prototype chain setup
        Student.prototype = Object.create(Person.prototype)
        Student.prototype.constructor = Student
   ES6: Use extends & super ✓
        class Student extends Person {
          constructor(name, grade) {
            super(name);
            this.grade = grade;
          }
        }

6. STRICT MODE
   ES5: Optional - must add 'use strict'
   ES6: Automatic in class body ✓

INHERITANCE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ES5 (VERBOSE):
function Person(name) {
  this.name = name;
}

function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

ES6 (CLEAN):
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}

RECOMMENDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use ES6 classes for modern JavaScript!
- More readable
- Less verbose
- Easier inheritance
- Standard now (all modern browsers support)
- Future-proof`}
</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ES5VsES6ClassComparison;
