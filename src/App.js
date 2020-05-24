// step one import react
import React from "react";
//step 3 import css
import "./styles.css";

import ContactCard from "./Components/ContactCard";

//step 2 declare a function, export default App
//step 3 add div and h1 tags - JSX Javascript XML

const App = () => {

  return (
    <>
    <ContactCard />
    <ContactCard />
    <ContactCard />
    </>
  );
}


export default App;

// React creates an element tree:
// React.createElement(component, props, ...children)
// component: html element being created - h1 and div
// props:
// children: array of HTML elements nested within this element
// {} means execute as JS
// index.html is the skeleton, loads when the app starts and imports App component
// state: basically an object that represents a part of an app that can change, which the UI “reacts” to. State can be anything; objects, booleans, arrays, strings or integers
