import React from "react";
import '.././styles/main.scss';

function ContactForm(){
    return(
        <div className="form-container">
        <form>
            <div className="inputs">
            <input type="text" name="name" id="name" placeholder="Your Name"/>
            <input type="email" name="email" id="email" placeholder="Your e-mail"/>
            </div>
            <textarea name="message" id="message" /* cols="40" rows="10" */ placeholder="Your message..."></textarea>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default ContactForm;