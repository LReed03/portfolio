import React from "react";
import './Contact.css';

function Contact(){
    return(
        <div className="contact-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact">
                <div className="contact-title">
                    <h2>Get in touch</h2>
                    <hr/>
                </div>
                <input type="hidden" name="access_key" value="02368db9-7726-44bb-85ca-db9349f9ee1e"></input>
                <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required></input>
                <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required></input>
                <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;