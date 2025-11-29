import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import CodeSnippet from "../../components/ui/code-snippet";
import BlockComparison from "./components/projectSections/BlockComparison";
import EqualsComparison from "./components/projectSections/EqualsComparison";
import StatePropsComparison from "./components/projectSections/StatePropsComparison";
import NullUndefinedComparison from "./components/projectSections/NullUndefinedComparison";
import CallApplyComparison from "./components/projectSections/CallApplyComparison";
import MapObjectComparison from "./components/projectSections/MapObjectComparison";
import DataTypesComparison from "./components/projectSections/DataTypesComparison";
import SVGStylingComparison from "./components/projectSections/SVGStylingComparison";
import { ProxiesComparison } from "./components/projectSections/ProxiesComparison";
import { CallbacksComparison } from "./components/projectSections/CallbacksComparison";
import { MicrotaskQueueComparison } from "./components/projectSections/MicrotaskQueueComparison";
import { CachingComparison } from "./components/projectSections/CachingComparison";
import { CSPComparison } from "./components/projectSections/CSPComparison";
import { CSRFComparison } from "./components/projectSections/CSRFComparison";
import { DebounceThrottleComparison } from "./components/projectSections/DebounceThrottleComparison";
import { BoxModelComparison } from "./components/projectSections/BoxModelComparison";
import { BoxSizingComparison } from "./components/projectSections/BoxSizingComparison";
import { CSSDisplayComparison } from "./components/projectSections/CSSDisplayComparison";
import { PositioningComparison } from "./components/projectSections/PositioningComparison";
import { ReactBenefitsComparison } from "./components/projectSections/ReactBenefitsComparison";
import { LetVarConstComparison } from "./components/projectSections/LetVarConstComparison";
import { EventDelegationComparison } from "./components/projectSections/EventDelegationComparison";
import { ReactKeyPropComparison } from "./components/projectSections/ReactKeyPropComparison";
import { ClientStorageComparison } from "./components/projectSections/ClientStorageComparison";
import { ScriptAsyncDeferComparison } from "./components/projectSections/ScriptAsyncDeferComparison";
import { ReactHooksBenefitsComparison } from "./components/projectSections/ReactHooksBenefitsComparison";
import { CSSHeadScriptBodyComparison } from "./components/projectSections/CSSHeadScriptBodyComparison";
import { CSSFlexboxGridComparison } from "./components/projectSections/CSSFlexboxGridComparison";
import { ReactHooksRulesComparison } from "./components/projectSections/ReactHooksRulesComparison";
import { FunctionPrototypeBind } from "./components/projectSections/FunctionPrototypeBind";
import { ArrowMethodsSyntax } from "./components/projectSections/ArrowMethodsSyntax";
import { PrototypalInheritance } from "./components/projectSections/PrototypalInheritance";
import { FunctionDeclarationVsExpression } from "./components/projectSections/FunctionDeclarationVsExpression";
import { ClosuresComparison } from "./components/projectSections/ClosuresComparison";
import { AnonymousFunctions } from "./components/projectSections/AnonymousFunctions";
import { ObjectCreationPatterns } from "./components/projectSections/ObjectCreationPatterns";
import { HigherOrderFunctions } from "./components/projectSections/HigherOrderFunctions";
import { EventBubbling } from "./components/projectSections/EventBubbling";
import { EventCapturing } from "./components/projectSections/EventCapturing";
import { SynchronousVsAsynchronous } from "./components/projectSections/SynchronousVsAsynchronous";
import { PromisesVsCallbacks } from "./components/projectSections/PromisesVsCallbacks";
import { PromisesVsCallbacksComparison } from "./components/projectSections/PromisesVsCallbacksComparison";
import { ReactContextOptimization } from "./components/projectSections/ReactContextOptimization";
import { AsyncDataLoadingReact } from "./components/projectSections/AsyncDataLoadingReact";
import { StateVsContextVsExternalManager } from "./components/projectSections/StateVsContextVsExternalManager";
import { CSSSelectorSpecificity } from "./components/projectSections/CSSSelectorSpecificity";
import { Hoisting } from "./components/projectSections/Hoisting";
import { ClosuresFunctional } from "./components/projectSections/ClosuresFunctional";
import { EventLoopComparison } from "./components/projectSections/EventLoopComparison";
import { ThisKeywordComparison } from "./components/projectSections/ThisKeywordComparison";
import { CSSMatchingComparison } from "./components/projectSections/CSSMatchingComparison";
import { TranslateVsPositioningComparison } from "./components/projectSections/TranslateVsPositioningComparison";
import { ReactReRenderingComparison } from "./components/projectSections/ReactReRenderingComparison";
import { ES5VsES6ClassComparison } from "./components/projectSections/ES5VsES6ClassComparison";
import { VirtualDOMBasicsComparison } from "./components/projectSections/VirtualDOMBasicsComparison";
import { VirtualDOMAdvancedComparison } from "./components/projectSections/VirtualDOMAdvancedComparison";

interface FolderItem {
  id: string;
  label: string;
  icon?: string;
}

const personalInfoItems: FolderItem[] = [
  { id: "block", label: "What's the difference between `block`, `inline`, and `inline-block`?", icon: "📄" },
  { id: "equals", label: "What is the difference between `==` and `===` in JavaScript?", icon: "🎯" },
  { id: "stateProps", label: "What is the difference between state and props in React?", icon: "📄" },
  { id: "nullUndefined", label: "What's the difference between null, undefined, and undeclared?", icon: "❓" },
  { id: "callApply", label: "What's the difference between .call and .apply?", icon: "🔗" },
  { id: "mapObject", label: "What's the difference between Map and a plain Object?", icon: "🗺️" },
  { id: "dataTypes", label: "What are the various data types in JavaScript?", icon: "🔣" },
  { id: "stylingSVG", label: "Are you familiar with styling SVG?", icon: "🎨" },
  { id: "proxies", label: "What are proxies in JavaScript used for?", icon: "🔬" },
  { id: "callbacks", label: "Explain the concept of a callback function", icon: "📞" },
  { id: "microtask", label: "Explain the concept of a microtask queue", icon: "⏱️" },
  { id: "caching", label: "Explain the concept of caching", icon: "💾" },
  { id: "csp", label: "Explain Content Security Policy (CSP)", icon: "🛡️" },
  { id: "csrf", label: "Explain CSRF and mitigation techniques", icon: "🔐" },
  { id: "debounceThrottle", label: "Explain debouncing and throttling", icon: "⏳" },
  { id: "boxModel", label: "Explain the CSS box model", icon: "▢" },
  { id: "boxSizing", label: "What does box-sizing: border-box do?", icon: "📦" },
  { id: "cssDisplay", label: "What is the CSS display property?", icon: "🖼️" },
  { id: "positioning", label: "What's the difference between positioning types?", icon: "📍" },
  { id: "react", label: "What is React? Describe its benefits", icon: "⚛️" },
  { id: "letVarConst", label: "What are the differences between let, var, or const?", icon: "🔤" },
  { id: "eventDelegation", label: "Explain event delegation", icon: "🎯" },
  { id: "reactKeyProp", label: "What is the purpose of the key prop in React?", icon: "🔑" },
  { id: "clientStorage", label: "Difference between cookie, sessionStorage, localStorage?", icon: "💾" },
  { id: "scriptAsyncDefer", label: "Difference between script async and defer?", icon: "📜" },
  { id: "reactHooksBenefits", label: "What are the benefits of using hooks in React?", icon: "🪝" },
  { id: "cssHeadScriptBody", label: "Why is CSS in head and JS before body?", icon: "📋" },
  { id: "cssFlexboxGrid", label: "Have you played with CSS flexbox or grid?", icon: "🎨" },
  { id: "reactHooksRules", label: "What are the rules of React hooks?", icon: "📏" },
  { id: "functionBind", label: "Explain Function.prototype.bind", icon: "🔗" },
  { id: "arrowMethods", label: "Arrow syntax for methods in constructor", icon: "➡️" },
  { id: "prototypalInheritance", label: "Explain how prototypal inheritance works", icon: "🔗" },
  { id: "functionDeclaration", label: "Function declaration vs expression", icon: "⚙️" },
  { id: "closures", label: "What is a closure and how to use one?", icon: "📦" },
  { id: "anonymousFunctions", label: "Typical use case for anonymous functions", icon: "👤" },
  { id: "objectCreation", label: "Various ways to create objects in JavaScript", icon: "🏗️" },
  { id: "higherOrderFunctions", label: "What is a higher-order function?", icon: "🔧" },
  { id: "eventBubbling", label: "Describe event bubbling", icon: "🫧" },
  { id: "eventCapturing", label: "Describe event capturing", icon: "📥" },
  { id: "syncAsync", label: "Synchronous vs asynchronous functions", icon: "⏱️" },
  { id: "promisesCallbacks", label: "Promises vs callbacks", icon: "🤝" },
  { id: "closuresFunctional", label: "Closures: Functional patterns and use cases", icon: "🔐" },
  { id: "promisesCallbacksComp", label: "Promises vs Callbacks: Pros and Cons", icon: "⚖️" },
  { id: "reactContextPerf", label: "Optimizing React Context to Reduce Rerenders", icon: "⚡" },
  { id: "asyncDataLoading", label: "Handling Asynchronous Data Loading in React", icon: "📥" },
  { id: "stateManagement", label: "Choosing State vs Context vs External Managers", icon: "🎛️" },
  { id: "cssSpecificity", label: "CSS Selector Specificity and How It Works", icon: "🎯" },
  { id: "hoisting", label: "Explaining Hoisting in JavaScript", icon: "🚀" },
  { id: "eventLoop", label: "Event Loop, Call Stack & Task Queues", icon: "🔄" },
  { id: "thisKeyword", label: "Understanding 'this' in JavaScript", icon: "👆" },
  { id: "cssMatching", label: "CSS Selector Matching Algorithm", icon: "🎯" },
  { id: "translateVsPositioning", label: "transform: translate() vs position: absolute", icon: "📍" },
  { id: "reactReRendering", label: "React Re-rendering Explained", icon: "🔄" },
  { id: "es5VsEs6Classes", label: "ES5 Function Constructors vs ES6 Classes", icon: "🏗️" },
  { id: "virtualDomBasics", label: "What is Virtual DOM in React?", icon: "🌳" },
  { id: "virtualDomAdvanced", label: "Virtual DOM: How It Works, Benefits & Downsides", icon: "⚙️" }
];

const professionalInfoItems: FolderItem[] = [
  { id: "experience", label: "experience", icon: "💼" },
  { id: "skills", label: "skills", icon: "⚡" },
];

const hobbyItems: FolderItem[] = [
  { id: "sports", label: "sports", icon: "⚽" },
  { id: "music", label: "music", icon: "🎵" },
  { id: "reading", label: "reading", icon: "📚" },
];

export const Projects = (): JSX.Element => {
  const [openFolders, setOpenFolders] = useState<{
    whatsTheDiff: boolean;
    professionalInfo: boolean;
    hobbies: boolean;
  }>({
    whatsTheDiff: true,
    professionalInfo: false,
    hobbies: false,
  });

  const [selectedItem, setSelectedItem] = useState<string>("block");
  const [showVisualExamples, setShowVisualExamples] = useState(true);

  const memoryAidMap = {
    block: [
      { key: "block", description: "Full width → New line, fills parent, respects all margins" },
      { key: "inline-block", description: "Inline + sized → Flows with content, respects width/height" },
      { key: "inline", description: "Text-like → Flows with content, ignores width/height & vertical spacing" }
    ],
    equals: [
      { key: "==", description: "Loose equality → Performs type coercion" },
      { key: "===", description: "Strict equality → No type coercion, same type AND value" }
    ],
    stateProps: [
      { key: "State", description: "Internal → Mutable, owned by component, tied to lifecycle" },
      { key: "Props", description: "External → Immutable, from parent, read-only configuration" }
    ],
    nullUndefined: [
      { key: "null", description: "Explicit → Intentional assignment of 'no value'" },
      { key: "undefined", description: "Default → Uninitialized variables & missing properties" },
      { key: "undeclared", description: "Error → Variable not declared in scope, throws ReferenceError" }
    ],
    callApply: [
      { key: "C", description: "Call → Comma-separated arguments" },
      { key: "A", description: "Apply → Array of arguments" }
    ]
    ,
    mapObject: [
      { key: "Map", description: "Keys can be any type; has `size` and preserves insertion order." },
      { key: "Object", description: "Keys are strings/symbols; easy to JSON stringify; lightweight for small sets." }
    ],
    dataTypes: [
      { key: "Primitive", description: "number, string, boolean, null, undefined, symbol, bigint" },
      { key: "Reference", description: "object, array, function, Map, Set — stored by reference" }
    ],
    stylingSVG: [
      { key: "fill/stroke", description: "SVG attributes for colors; can be overridden by CSS" },
      { key: "currentColor", description: "Use `fill=\"currentColor\"` for icon theming" }
    ],
    proxies: [
      { key: "Proxy", description: "Intermediary object that intercepts and customizes operations on target objects" },
      { key: "Traps", description: "Handler methods like get, set, apply to intercept specific operations" },
      { key: "Use Cases", description: "Validation, logging, reactivity systems (Vue.js), mocking/testing" }
    ],
    callbacks: [
      { key: "Synchronous", description: "Executed immediately within the function (blocking)" },
      { key: "Asynchronous", description: "Executed after an operation completes (non-blocking)" },
      { key: "Use Cases", description: "Network requests, file I/O, timers, event handling" }
    ],
    microtask: [
      { key: "Microtask Queue", description: "Higher priority tasks executed before macrotask queue" },
      { key: "Microtasks", description: "Promise callbacks, queueMicrotask(), MutationObserver" },
      { key: "Macrotasks", description: "setTimeout, setInterval, I/O operations" }
    ],
    caching: [
      { key: "Browser Cache", description: "Local storage reducing repeated downloads" },
      { key: "Service Workers", description: "Enable offline access and cache resources" },
      { key: "HTTP Caching", description: "Use Cache-Control headers to control cache behavior" }
    ]
    ,
    csp: [
      { key: "CSP", description: "Restricts allowed resource origins to mitigate XSS and injection attacks" },
      { key: "Directives", description: "script-src, style-src, img-src, default-src — control resource loading" },
      { key: "Policy Delivery", description: "Via HTTP header or meta tag (Content-Security-Policy)" }
    ],
    csrf: [
      { key: "CSRF", description: "Attacker triggers actions on behalf of an authenticated user" },
      { key: "Mitigations", description: "SameSite cookies, CSRF tokens, Origin/Referer checks" },
      { key: "Patterns", description: "Synchronizer token pattern, double-submit cookie" }
    ],
    debounceThrottle: [
      { key: "Debounce", description: "Wait until events stop before invoking the handler" },
      { key: "Throttle", description: "Invoke handler at most once per interval" },
      { key: "When", description: "Debounce for input, Throttle for continuous events (scroll)" }
    ],
    boxModel: [
      { key: "Parts", description: "Content, padding, border, margin" },
      { key: "box-sizing", description: "content-box (default) vs border-box (includes padding+border)" },
      { key: "Layout", description: "Understanding box model prevents layout surprises" }
    ],
    boxSizing: [
      { key: "content-box", description: "Width excludes padding & border (default)" },
      { key: "border-box", description: "Width includes padding & border (recommended)" },
      { key: "Best Practice", description: "Apply globally with * selector" }
    ],
    cssDisplay: [
      { key: "inline", description: "Flows with text, no width/height" },
      { key: "block", description: "Takes full width, starts new line" },
      { key: "flex", description: "Flexible one-dimensional layout" },
      { key: "grid", description: "Two-dimensional grid layout" }
    ],
    positioning: [
      { key: "static", description: "Default, no offset effect" },
      { key: "relative", description: "Relative to normal position, in flow" },
      { key: "absolute", description: "Relative to positioned parent, out of flow" },
      { key: "fixed", description: "Relative to viewport, stays fixed" }
    ],
    react: [
      { key: "What", description: "JavaScript library for building UIs with components" },
      { key: "Virtual DOM", description: "Efficiently updates real DOM through diffing" },
      { key: "Benefits", description: "Reusable components, declarative, strong ecosystem" }
    ],
    letVarConst: [
      { key: "var", description: "Function-scoped, hoisted, avoid using" },
      { key: "let", description: "Block-scoped, use when reassigning" },
      { key: "const", description: "Block-scoped, immutable, prefer by default" }
    ],
    eventDelegation: [
      { key: "Pattern", description: "Handle events on parent element for child elements" },
      { key: "Benefits", description: "Fewer listeners, dynamic elements, better performance" },
      { key: "Event Flow", description: "Relies on bubbling phase" }
    ],
    reactKeyProp: [
      { key: "Purpose", description: "Identifies which items have changed, been added, or removed" },
      { key: "Use Case", description: "Lists, dynamic content, re-ordering" },
      { key: "Best Practice", description: "Use unique ID, not array index" }
    ],
    clientStorage: [
      { key: "Cookie", description: "Server-sent, persists, auto-sent with requests" },
      { key: "sessionStorage", description: "Client-side, session-only, not sent to server" },
      { key: "localStorage", description: "Client-side, persistent, survives page reload" }
    ],
    scriptAsyncDefer: [
      { key: "Normal", description: "Blocks HTML parsing, executes immediately" },
      { key: "async", description: "Downloads in parallel, executes when ready" },
      { key: "defer", description: "Downloads in parallel, executes after parsing" }
    ],
    reactHooksBenefits: [
      { key: "Reuse Logic", description: "Extract component logic into reusable functions" },
      { key: "Simplify Complex", description: "Split complex components into smaller functions" },
      { key: "No Breaking", description: "Work inside existing classes gradually" }
    ],
    cssHeadScriptBody: [
      { key: "CSS in Head", description: "Prevents FOUC (Flash of Unstyled Content)" },
      { key: "JS at End", description: "Allows HTML to render while JS downloads" },
      { key: "Load Order", description: "Improves perceived performance" }
    ],
    cssFlexboxGrid: [
      { key: "Flexbox", description: "One-dimensional layout, flexible items" },
      { key: "Grid", description: "Two-dimensional layout, rows and columns" },
      { key: "Combined", description: "Use together for complex layouts" }
    ],
    reactHooksRules: [
      { key: "Only at Top", description: "Hooks only at top level of component, not conditionally" },
      { key: "Only in React", description: "Only call from React functions or custom hooks" },
      { key: "Order Matters", description: "Same order every render for dependencies" }
    ],
    functionBind: [
      { key: "Purpose", description: "Creates new function with 'this' permanently bound" },
      { key: "No Execution", description: "Returns function, doesn't execute like call/apply" },
      { key: "Use Cases", description: "Event handlers, callbacks, partial application" }
    ],
    arrowMethods: [
      { key: "Auto Binding", description: "'this' always refers to instance, no .bind() needed" },
      { key: "Constructor", description: "Define as arrow method inside constructor" },
      { key: "Trade-off", description: "More memory (per instance) but safer for callbacks" }
    ],
    prototypalInheritance: [
      { key: "Delegation", description: "Objects delegate to other objects via prototype chain" },
      { key: "Prototype Chain", description: "Property lookup goes up chain: instance → prototype → null" },
      { key: "Patterns", description: "Delegation, Constructor, Concatenation" }
    ],
    functionDeclaration: [
      { key: "Declaration", description: "Hoisted, can call before defining" },
      { key: "Expression", description: "Not hoisted (var/let/const rules apply)" },
      { key: "Best Practice", description: "Use const for modern code" }
    ],
    closures: [
      { key: "Definition", description: "Function plus variables from outer scope" },
      { key: "Scope Chain", description: "Inner function accesses all parent scopes" },
      { key: "Use Cases", description: "Private data, factory functions, callbacks" }
    ],
    anonymousFunctions: [
      { key: "No Name", description: "Function without explicit name" },
      { key: "Common Use", description: "Callbacks, event handlers, array methods" },
      { key: "Modern", description: "Arrow functions cleaner alternative" }
    ],
    objectCreation: [
      { key: "Literal", description: "Simple: { key: value }" },
      { key: "Class", description: "Modern best practice for multiple instances" },
      { key: "Constructor", description: "Legacy prototypal pattern" }
    ],
    higherOrderFunctions: [
      { key: "Definition", description: "Function that takes/returns another function" },
      { key: "Benefits", description: "Reusable logic, flexible behavior, easier composition" },
      { key: "Examples", description: "Decorators, factories, array methods (map, filter)" }
    ],
    eventBubbling: [
      { key: "Direction", description: "Event travels from target up to ancestors" },
      { key: "stopPropagation()", description: "Prevents bubbling to parent elements" },
      { key: "preventDefault()", description: "Cancels default browser action, bubbling continues" }
    ],
    eventCapturing: [
      { key: "Direction", description: "Event travels from window down to target (opposite of bubbling)" },
      { key: "Three Phases", description: "Capturing (down) → Target (at) → Bubbling (up)" },
      { key: "Use Case", description: "Rarely needed; bubbling is more common" }
    ],
    syncAsync: [
      { key: "Synchronous", description: "Blocking - waits for completion before continuing" },
      { key: "Asynchronous", description: "Non-blocking - continues while operation completes" },
      { key: "Use Cases", description: "Use sync for quick ops, async for I/O and timers" }
    ],
    promisesCallbacks: [
      { key: "Callbacks", description: "Function argument executed later (pyramid of doom)" },
      { key: "Promises", description: "Objects with .then() for cleaner chaining" },
      { key: "Winner", description: "Promises: better error handling, readability, composition" }
    ],
    closuresFunctional: [
      { key: "Private Data", description: "Closure maintains private variables per instance" },
      { key: "Currying", description: "Partial application of functions via nested returns" },
      { key: "Memoization", description: "Cache results in closure for performance" }
    ],
    promisesCallbacksComp: [
      { key: "Callbacks", description: "Pyramid of doom, manual error handling, hard to maintain" },
      { key: "Promises", description: "Linear chaining, centralized .catch(), composable" },
      { key: "Winner", description: "Promises for modern code; Async/await even better" }
    ],
    reactContextPerf: [
      { key: "Problem", description: "All consumers rerender when context updates" },
      { key: "Solutions", description: "Split contexts, memoize providers, use custom hooks" },
      { key: "Alternative", description: "Redux/Zustand for complex apps" }
    ],
    asyncDataLoading: [
      { key: "Pattern", description: "useEffect + .then/.catch or async/await" },
      { key: "States", description: "loading, error, data - manage UI accordingly" },
      { key: "Cleanup", description: "Prevent memory leaks on unmount" }
    ],
    stateManagement: [
      { key: "useState", description: "Component-local, simplest, no sharing" },
      { key: "Context", description: "Share across tree, good for static data (theme, auth)" },
      { key: "Redux/Zustand", description: "Complex state, frequent updates, fine-grained control" }
    ],
    cssSpecificity: [
      { key: "Scale", description: "0-0-0-0 (universal) to 1-0-0-0 (inline) to !important" },
      { key: "Rules", description: "Higher specificity wins; Avoid IDs and !important" },
      { key: "Best Practice", description: "Keep specificity low, use classes" }
    ],
    hoisting: [
      { key: "Functions", description: "Fully hoisted - can call before declaration" },
      { key: "var", description: "Hoisted with 'undefined' - confusing behavior" },
      { key: "let/const", description: "Hoisted but in TDZ until declaration (ReferenceError)" }
    ],
    eventLoop: [
      { key: "Call Stack", description: "Executes synchronous code, one function at a time" },
      { key: "Microtask Queue", description: "Promises, queueMicrotask - higher priority than macrotasks" },
      { key: "Macrotask Queue", description: "setTimeout, setInterval, I/O - lower priority" }
    ],
    thisKeyword: [
      { key: "Default", description: "Global object (window/global) in loose mode, undefined in strict" },
      { key: "Method", description: "Object that method is called on" },
      { key: "Binding", description: "call/apply/bind explicitly set 'this', arrow functions inherit parent" }
    ],
    cssMatching: [
      { key: "Right-to-Left", description: "Browser matches rightmost selector first (key selector)" },
      { key: "Key Selector", description: "Rightmost selector determines candidate elements to check" },
      { key: "Optimization", description: "Reduce specificity of right selector, avoid universal selector" }
    ],
    translateVsPositioning: [
      { key: "translate()", description: "GPU-accelerated, doesn't affect document flow, smooth animation" },
      { key: "position: absolute", description: "CPU-rendered, removes from flow, complex layout recalculation" },
      { key: "Performance", description: "Use translate for animations, absolute for layout control" }
    ],
    reactReRendering: [
      { key: "Triggers", description: "State change, prop change, parent rerender, context update" },
      { key: "Process", description: "Component function re-executes, React compares vDOM, updates real DOM" },
      { key: "Optimization", description: "React.memo, useMemo, useCallback prevent unnecessary rerenders" }
    ],
    es5VsEs6Classes: [
      { key: "Constructor", description: "ES5: function MyClass(){} vs ES6: class MyClass{}" },
      { key: "Methods", description: "ES5: prototype chaining vs ES6: defined in class body" },
      { key: "Inheritance", description: "ES5: complex prototype chain vs ES6: extends keyword" }
    ],
    virtualDomBasics: [
      { key: "What", description: "JavaScript representation of DOM structure, not real DOM" },
      { key: "Benefit", description: "Batches updates, reduces direct DOM manipulation for performance" },
      { key: "How", description: "Compare old vDOM to new, calculate minimal changes, update real DOM" }
    ],
    virtualDomAdvanced: [
      { key: "Reconciliation", description: "Algorithm compares vDOM trees, identifies changed elements" },
      { key: "Benefits", description: "Performance optimization, abstraction, cross-platform compatibility" },
      { key: "Downsides", description: "Memory overhead, complexity, not always faster than direct DOM" }
    ]
  };

  const toggleFolder = (folder: keyof typeof openFolders) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "block":
        return (
          <BlockComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "equals":
        return (
          <EqualsComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
        
      case "stateProps":
        return (
          <StatePropsComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "nullUndefined":
        return (
          <NullUndefinedComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "mapObject":
        return (
          <MapObjectComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "dataTypes":
        return (
          <DataTypesComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "stylingSVG":
        return (
          <SVGStylingComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "callApply":
        return (
          <CallApplyComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "proxies":
        return (
          <ProxiesComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "callbacks":
        return (
          <CallbacksComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "microtask":
        return (
          <MicrotaskQueueComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "caching":
        return (
          <CachingComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "csp":
        return (
          <CSPComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "csrf":
        return (
          <CSRFComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "debounceThrottle":
        return (
          <DebounceThrottleComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "boxModel":
        return (
          <BoxModelComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "boxSizing":
        return (
          <BoxSizingComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "cssDisplay":
        return (
          <CSSDisplayComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "positioning":
        return (
          <PositioningComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "react":
        return (
          <ReactBenefitsComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "letVarConst":
        return (
          <LetVarConstComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "eventDelegation":
        return (
          <EventDelegationComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "reactKeyProp":
        return (
          <ReactKeyPropComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "clientStorage":
        return (
          <ClientStorageComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "scriptAsyncDefer":
        return (
          <ScriptAsyncDeferComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "reactHooksBenefits":
        return (
          <ReactHooksBenefitsComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "cssHeadScriptBody":
        return (
          <CSSHeadScriptBodyComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "cssFlexboxGrid":
        return (
          <CSSFlexboxGridComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "reactHooksRules":
        return (
          <ReactHooksRulesComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "functionBind":
        return (
          <FunctionPrototypeBind
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "arrowMethods":
        return (
          <ArrowMethodsSyntax
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "prototypalInheritance":
        return (
          <PrototypalInheritance
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "functionDeclaration":
        return (
          <FunctionDeclarationVsExpression
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "closures":
        return (
          <ClosuresComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "anonymousFunctions":
        return (
          <AnonymousFunctions
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "objectCreation":
        return (
          <ObjectCreationPatterns
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "higherOrderFunctions":
        return (
          <HigherOrderFunctions
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "eventBubbling":
        return (
          <EventBubbling
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "eventCapturing":
        return (
          <EventCapturing
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "syncAsync":
        return (
          <SynchronousVsAsynchronous
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "promisesCallbacks":
        return (
          <PromisesVsCallbacks
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "closuresFunctional":
        return (
          <ClosuresFunctional
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "promisesCallbacksComp":
        return (
          <PromisesVsCallbacksComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "reactContextPerf":
        return (
          <ReactContextOptimization
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "asyncDataLoading":
        return (
          <AsyncDataLoadingReact
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "stateManagement":
        return (
          <StateVsContextVsExternalManager
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "cssSpecificity":
        return (
          <CSSSelectorSpecificity
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "hoisting":
        return (
          <Hoisting
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "eventLoop":
        return (
          <EventLoopComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "thisKeyword":
        return (
          <ThisKeywordComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "cssMatching":
        return (
          <CSSMatchingComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "translateVsPositioning":
        return (
          <TranslateVsPositioningComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "reactReRendering":
        return (
          <ReactReRenderingComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "es5VsEs6Classes":
        return (
          <ES5VsES6ClassComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "virtualDomBasics":
        return (
          <VirtualDOMBasicsComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "virtualDomAdvanced":
        return (
          <VirtualDOMAdvancedComparison
            showVisualExamples={showVisualExamples}
            setShowVisualExamples={setShowVisualExamples}
          />
        );
      case "experience":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Professional Experience:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-4">
              <div>
                <div className="text-[#43d9ad]">Senior Front-end Developer</div>
                <div className="text-xs sm:text-sm">Company Name • 2021-Present</div>
                <div className="mt-2 text-xs sm:text-sm">Building scalable web applications with modern technologies</div>
              </div>
              <div>
                <div className="text-[#43d9ad]">Front-end Developer</div>
                <div className="text-xs sm:text-sm">Previous Company • 2019-2021</div>
                <div className="mt-2 text-xs sm:text-sm">Developed responsive user interfaces</div>
              </div>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Technical Skills:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2">
              <div className="text-[#43d9ad]">Languages:</div>
              <div className="pl-4">JavaScript, TypeScript, HTML, CSS</div>
              <div className="text-[#43d9ad] mt-3">Frameworks:</div>
              <div className="pl-4">React, Next.js, Vue.js, Tailwind CSS</div>
              <div className="text-[#43d9ad] mt-3">Tools:</div>
              <div className="pl-4">Git, Webpack, Vite, Figma</div>
            </div>
          </div>
        );
      case "sports":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Sports & Activities:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2">
              <div>• Football</div>
              <div>• Swimming</div>
              <div>• Cycling</div>
            </div>
          </div>
        );
      case "music":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Music Preferences:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2">
              <div>• Electronic Music</div>
              <div>• Rock & Alternative</div>
              <div>• Lo-fi & Ambient</div>
            </div>
          </div>
        );
      case "reading":
        return (
          <div className="space-y-4">
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg">
              Reading List:
            </div>
            <div className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2">
              <div>• Technical Books & Documentation</div>
              <div>• Science Fiction</div>
              <div>• Philosophy</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <aside className="w-full lg:w-80 border-r border-[#1e2d3d] flex flex-col overflow-auto">
        <div className="p-4 border-b border-[#1e2d3d]">
          <div className="mb-1">
            <h1 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg sm:text-xl">
              Great Front Ends
            </h1>
          </div>
          <div className="mb-3">
            <h2 className="[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base">
              Quiz
            </h2>
          </div>
          <a
            href="https://www.greatfrontend.com/questions/quiz"
            target="_blank"
            rel="noopener noreferrer"
            className="[font-family:'Fira_Code',Helvetica] font-normal text-[#43d9ad] text-xs sm:text-sm hover:text-[#fea55f] transition-colors"
          >
            greatfrontend.com/questions/quiz →
          </a>
        </div>

        <div className="p-4 border-b border-[#1e2d3d]">
          <Button
            variant="ghost"
            className="w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base"
            onClick={() => toggleFolder("whatsTheDiff")}
          >
            {openFolders.whatsTheDiff ? (
              <ChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-2" />
            )}
            📁 Whats the Diff
          </Button>
          {openFolders.whatsTheDiff && (
            <div className="ml-6 mt-2 space-y-1">
              {personalInfoItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${
                    selectedItem === item.id
                      ? "text-white bg-[#1e2d3d]"
                      : "text-[#607b96]"
                  }`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  {item.icon} {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-b border-[#1e2d3d]">
          <Button
            variant="ghost"
            className="w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base"
            onClick={() => toggleFolder("professionalInfo")}
          >
            {openFolders.professionalInfo ? (
              <ChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-2" />
            )}
            📁 professional-info
          </Button>
          {openFolders.professionalInfo && (
            <div className="ml-6 mt-2 space-y-1">
              {professionalInfoItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${
                    selectedItem === item.id
                      ? "text-white bg-[#1e2d3d]"
                      : "text-[#607b96]"
                  }`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  {item.icon} {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4">
          <Button
            variant="ghost"
            className="w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base"
            onClick={() => toggleFolder("hobbies")}
          >
            {openFolders.hobbies ? (
              <ChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-2" />
            )}
            📁 hobbies
          </Button>
          {openFolders.hobbies && (
            <div className="ml-6 mt-2 space-y-1">
              {hobbyItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${
                    selectedItem === item.id
                      ? "text-white bg-[#1e2d3d]"
                      : "text-[#607b96]"
                  }`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  {item.icon} {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </aside>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 border-r border-[#1e2d3d] overflow-auto">
          <div className="p-4 sm:p-8 lg:p-12">{renderContent()}</div>
        </div>

        <CodeSnippet
          className="hidden xl:block w-80 p-6 overflow-auto border-l border-[#1e2d3d]"
          caption="// context"
          memoryAid={
            memoryAidMap[selectedItem as keyof typeof memoryAidMap] || []
          }
        />
      </div>
    </div>
  );
};