// step one import react
import React from "react";

//step 2 declare a function, export default App
//step 3 add div and h1 tags - JSX Javascript XML

const App = () => {

  const message = "This is my first variable rendered in JSX";

  const handleClick = () => {
    alert("you clicked the message!");
  }

  return (
    <div> 
      <h1>
        This is our React World
      </h1>
      <h2 onClick = {handleClick}>
        {message} 
      </h2>
    </div>
  ); //this is whats returned by the component & contains markup, converted to html

}

export default App;

// React creates an element tree:
// React.createElement(component, props, ...children)
// component: html element being created - h1 and div
// props:
// children: array of HTML elements nested within this element
// {} means execute as JS
// index.html is the skeleton, loads when the app starts and imports App component
