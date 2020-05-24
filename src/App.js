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
    <ContactCard
      avatar = "https://via.placeholder.com/150"
      name="Jenny Han"
      email="jenny.han@notreal.com"
      age={25}
    />
    <ContactCard 
      avatar = "https://via.placeholder.com/150"
      name="Jason Long"
      email="jason.long@notreal.com"
      age={45}
    />
    <ContactCard
      avatar = "https://via.placeholder.com/150"
      name="Peter Pan"
      email="peter.pan@notreal.com"
      age={100}
    />
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
// Props: defined using quoted text (e.g. name=“Jenny Han”) or within braces (e.g. age={25}. If we leave out the braces for anything other than strings things start to break — age=25 );
