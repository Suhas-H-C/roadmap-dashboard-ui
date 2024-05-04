import componentsImg from "../assets/components.png";
import propsImg from "../assets/config.png";
import jsxUiImg from "../assets/jsx-ui.png";
import stateImg from "../assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxUiImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

export const contentData = [
  "A React component is the fundamental building block of React applications, encapsulating a piece of the user interface and its behavior into a reusable and modular unit. Components can range from simple UI elements like buttons or input fields to complex structures like navigation bars or entire application screens. Each component manages its own state, allowing for a clear separation of concerns and facilitating a more predictable flow of data throughout the application. With React's declarative approach, components are designed to be composable, meaning they can be easily combined to create more complex UIs. This modular architecture not only promotes code reusability and maintainability but also enhances collaboration among developers working on different parts of the application.",
  "JSX, or JavaScript XML, is a syntax extension for JavaScript that allows developers to write HTML-like code directly within their React components. JSX makes it easier to describe the structure of user interfaces in a more intuitive and concise manner, blending the power of JavaScript with the familiarity of HTML. With JSX, developers can seamlessly integrate dynamic JavaScript expressions, such as variables and functions, directly into their markup, enhancing the flexibility and interactivity of React components. Under the hood, JSX is transformed into regular JavaScript function calls by tools like Babel before being rendered in the browser. This approach not only simplifies the process of building React applications but also promotes a more declarative and readable coding style, ultimately leading to more efficient development workflows and maintainable codebases.",
  "React props, short for properties, are a fundamental concept in React that allow data to be passed from a parent component to a child component. Props are immutable and serve as a way to customize and configure components, enabling dynamic behavior and reusability. By passing props down the component tree, developers can create modular and composable components that can be easily reused in different parts of their application. Props can be any type of data, including strings, numbers, arrays, objects, or even functions, providing a flexible mechanism for sharing data and behavior between components. Additionally, props play a crucial role in component communication, allowing parent components to communicate with their children by passing data or callback functions as props. This one-way data flow ensures a clear and predictable data flow throughout the application, making it easier to reason about and debug React applications.",
  "React state management involves the handling and manipulation of component-specific data within React applications. State represents the dynamic information that a component needs to maintain and display, such as user input, UI state, or data fetched from an external API. React components can hold and update their own state using the useState hook for functional components or the setState method for class components. However, when multiple components need to share and synchronize state, centralized state management solutions like Redux, Context API, or third-party libraries such as MobX come into play. These tools provide mechanisms for managing global application state, making it easier to maintain consistency across different parts of the application and manage complex data flows. Effective state management ensures that React applications remain scalable, maintainable, and performant, enabling developers to build robust and responsive user interfaces.",
];

export const EXAMPLES = {
  Components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  JSX: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  Props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  State: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
