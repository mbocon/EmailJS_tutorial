import React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

export default function ContactForm() {
   function sendEmail(e) {
      e.preventDefault();
      emailjs
         .sendForm(
            "service_uxf9k9t",
            "template_9najqho",
            e.target,
            "user_F2z1Oy9s2pnH2gQ7BHGid"
         )
         .then(
            result => {
               console.log(result.text);
            },
            error => {
               console.log(error.text);
            }
         );
      e.target.reset();
   }

   return (
      <form className="contact-form" onSubmit={sendEmail}>
         <label>Name</label>
         <input type="text" name="user_name" />
         <label>Email</label>
         <input type="email" name="user_email" />
         <label>Message</label>
         <textarea name="message" />
         <input type="submit" value="Send" />
      </form>
   );
}
