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
      <div className="contact">
         <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input
               type="text"
               name="user_name"
               placeholder="Hello there!"
               autoFocus
               required
            />
            <label>Email</label>
            <input
               type="email"
               name="user_email"
               placeholder="What's this [ hip, hip ] ?"
               required
            />
            <label>Message</label>
            <textarea
               name="message"
               placeholder="It's a hip hip array!"
               required
            />
            <input type="submit" value="Send" />
         </form>
      </div>
   );
}
