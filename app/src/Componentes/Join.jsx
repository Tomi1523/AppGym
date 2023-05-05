
import React, { useRef } from "react";
import "../Styles.css/Join.css";


const Join = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fn88s4q ', 'template_q8j51fx', e.target, 'KO3xH9kja2i5DHNd6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="Join" id="join-us">

      <div className="left-j">
        <hr></hr>
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter your email"></input>
          <button className="btn btn-join">Join now</button>
        </form>

      </div>
    </div>
  );
};

export default Join;
