import React, { useState } from "react";

const ContactCard = props => {
    console.log(props.name);
    const [showAge, setShowAge] = useState(false);
    const handleClick = () => {
        setShowAge(!showAge);
    }

    return (
      <div className="contact-card">
        <img src={props.avatar} alt="profile" />
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          {/*if the showAge varua==ial is true, render the age, if not, render nothing  */}
          {/* {showAge === true ?<p>Age: 25</p> : null} */}
          <button onClick={handleClick}>Toggle Age</button>
          {showAge && <p>{props.age}</p> }
        </div>
      </div>
     ); //this is whats returned by the component & contains markup, converted to html
  }

  export default ContactCard;