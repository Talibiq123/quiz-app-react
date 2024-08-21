// data.js

const data = [
    {
        question: "Which React Hook is used to add state to functional components?",
        option1: "useReducer",
        option2: "useEffect",
        option3: "useState",
        option4: "useContext",
        answer: "option3"
    },
    {
        question: "Which React Hook is used to perform side effects in functional components?",
        option1: "useState",
        option2: "useReducer",
        option3: "useEffect",
        option4: "useCallback",
        answer: "option3"
    },
    {
        question: "What is the purpose of the useMemo hook in React?",
        option1: "To memorize the results of a function and avoid re-computation",
        option2: "To manage side effects in components",
        option3: "To provide a mutable object that persists across renders",
        option4: "To execute a function when the component mounts",
        answer: "option1"
    },
    {
        question: "How does the useCallback hook optimize performance in React?",
        option1: "By memoizing a function so it does not get recreated on every render",
        option2: "By memoizing component results",
        option3: "By managing side effects",
        option4: "By storing data in local storage",
        answer: "option1"
    },
    {
        question: "What does the useContext hook do in React?",
        option1: "Manages local component state",
        option2: "Handles complex state logic",
        option3: "Provides a way to share state between components without prop drilling",
        option4: "Caches expensive computations",
        answer: "option3"
    },
    {
        question: "In which scenario would you use the useReducer hook instead of useState?",
        option1: "For managing simple state with just a few variables",
        option2: "For managing local component state with complex logic",
        option3: "For performing side effects",
        option4: "For memoizing values",
        answer: "option2"
    },
    {
        question: "What is the primary difference between useEffect and useLayoutEffect?",
        option1: "useEffect runs synchronously after the DOM updates, while useLayoutEffect runs asynchronously",
        option2: "useEffect runs asynchronously after the DOM updates, while useLayoutEffect runs synchronously",
        option3: "useEffect is used for local state management, while useLayoutEffect is used for global state",
        option4: "useEffect manages component lifecycle, while useLayoutEffect does not",
        answer: "option2"
    },
    {
        question: "What is React.memo used for?",
        option1: "To memoize the results of a component's render function",
        option2: "To cache a component's state",
        option3: "To prevent re-rendering of a component if its props have not changed",
        option4: "To manage component lifecycle methods",
        answer: "option3"
    },
    {
        question: "How do you prevent a function from being recreated on every render with useCallback?",
        option1: "By providing an empty dependency array to useCallback",
        option2: "By using useMemo to cache the function",
        option3: "By using useEffect to manage function calls",
        option4: "By ensuring the function is defined outside of the component",
        answer: "option1"
    },
    {
        question: "What does the useImperativeHandle hook do?",
        option1: "Customizes the instance value that is exposed when using ref",
        option2: "Handles complex component state",
        option3: "Performs cleanup operations when a component unmounts",
        option4: "Provides access to the component's lifecycle methods",
        answer: "option1"
    },
    {
        question: "What is the purpose of the useRef hook in React?",
        option1: "To manage side effects in functional components",
        option2: "To persist values across renders without causing re-renders",
        option3: "To perform asynchronous operations",
        option4: "To optimize the rendering of functional components",
        answer: "option2"
    }
];

export default data;
