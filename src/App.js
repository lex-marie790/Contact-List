// step one import react
import React from "react";
//step 3 import css
import "./styles.css";

import ContactCard from "./Components/ContactCard";
import contact from "./Components/contacts"
import contacts from "./Components/contacts";

//step 2 declare a function, export default App
//step 3 add div and h1 tags - JSX Javascript XML

const App = () => {

  return (
    <>
    {contacts.map(contact=> (
      <ContactCard
        avatar = "https://via.placeholder.com/150"
        name={contact.name}
        email={contact.email}
        age={contact.age}
      />
    ))}
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


// To display a list of components, we: (imported from contacts.js)

// 1. Loop over the array using .map()
// 2. For each item in the array, create a new ContactCard component
// 3. Pass the data from each object in the array to the ContactCard component as props