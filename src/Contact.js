import React from "react";
import './Contact.css';

function Contact(){
    return(
        <div className="contact-container">
            <form action="" className="contact">
                <div className="contact-title">
                    <h2>Get in touch</h2>
                    <hr/>
                </div>
                <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required></input>
                <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required></input>
                <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;