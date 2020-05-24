import React from "react";

const ContactCard = () => {
    return (
      <div className="contact-card">
        <img src="https://via.placeholder.com/150" alt="profile" />
        <div className="user-details">
          <p>Name: Jenny Han</p>
          <p>Email: Jenny.han@notreal.com</p>
          <p>Age: 25</p>
        </div>
      </div>
     ); //this is whats returned by the component & contains markup, converted to html
  }

  export default ContactCard;