import React, { useState } from "react";

const ContactCard = () => {
    const [showAge, setShowAge] = useState(true);
    const handleClick = () => {
        setShowAge(!showAge);
    }

    return (
      <div className="contact-card">
        <img src="https://via.placeholder.com/150" alt="profile" />
        <div className="user-details">
          <p>Name: Jenny Han</p>
          <p>Email: Jenny.han@notreal.com</p>
          {/*if the showAge varua==ial is true, render the age, if not, render nothing  */}
          {/* {showAge === true ?<p>Age: 25</p> : null} */}
          <button onClick={handleClick}>Toggle Age</button>
          {showAge && <p>Age: 25</p> }
        </div>
      </div>
     ); //this is whats returned by the component & contains markup, converted to html
  }

  export default ContactCard;