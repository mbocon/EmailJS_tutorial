## EmailJS Tutorial


**PREREQUISITE:** 
- You should have a React project ready to use. If not, create one in the terminal by running the command 

```
npx create-react-app "YourProjectName"
```

**WHY EMAILJS?** 

- EmailJS allows you to incorporate an email form on the front-end with no need for a backend or any server side code. This can be a great feature for front-end only portfolio sites. 

- Looks much better than using the default anchor tag with a mailto: in the href.

- Very easy to use and comes with a lot of built-in functionality. No need to worry about managing state or multiple variables. EmailJS takes care of everything for us.



## Step 1) Create an Account



- Go to [EmailJS](https://www.emailjs.com/) and create a free account. You get up to 200 emails per month with the free account plan which should be more than enough.



## Step 2) Configuring EmailJS



- Once you've created your EmailJS account, you will need to configure an email service as well as an email template to organize the content that will come from your React form.

-Click on **"Add New Service"** and select your preferred email provider. *This should be the same provider you created your account with*. I will be using Gmail.

- Select all 3 options. Click **"Continue"** then click **"Create Service"**



## Step 3) Build Your Email Template



- Click on the  **"Email Templates"** tab and then **"Create New Template"**

- Let's modify this so we can easily identify emails coming from EmailJs

```
Hello,

You got a new message.

User Info:

    Name: {{user_name}}

    Email: {{user_email}}

Message:

    {{message}}

Best wishes,
EmailJS team
```

Click **"Save"**



## Step 4) 



**Installing our dependancies and building out our components.**

- Open the terminal and run the command:

```
 npm i emailjs-com @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core
```

- Now lets start our server, run **"npm  start"** or **"npm run start"**.

- Open up our App.js file and delete everything within the main div.

- Let's add a header, main and footer section to our App.js (*if using a new React project*)

   - **NOTE** Ideally, you would want to place your header and footer into their own folders within the Components folder, but for the sake of time and since that's not the main focus of this lesson we will go with the following code:

```
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="/link1">Link 1</a></li>
            <li><a href="/link2">Link 2</a></li>
            <li><a href="/link3">Link 3</a></li>
            <li><a href="/link4">Link 4</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <ContactForm />
      </main>
      <footer>
        <p>All Rights Reverved &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;


```

- Let's add the following CSS to our App.css file

```
* {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
}

.App {
   text-align: center;
}

header {
   width: 100vw;
   height: 10vh;
   border-bottom: 1px solid #000;
}

nav {
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #f5f5f5;
   height: 100%;
   width: 100%;
}

nav > ul {
   display: flex;
   width: 100%;
   justify-content: space-evenly;
   list-style: none;
}

nav > ul > li > a {
   text-decoration: none;
   color: #000;
}

nav > ul > li > a:hover {
   -webkit-text-decoration: default;
   text-decoration: default;
   color: #3f3f3f;
   border-bottom: 1px solid;
}

main {
   background-color: #fff;
   height: 80vh;
   padding: 2rem;
   color: #fff;
}

footer {
   background-color: #f5f5f5;
   height: 10vh;
   display: flex;
   justify-content: center;
   align-items: center;
   border-top: 1px solid;
}

```


- Next let's add a **Components** folder in src and add a **ContactForm** folder with **ContactForm.css** and **ContactForm.js** inside.

- Before coding our **ContactForm Component** let's add the following CSS to our **ContactForm.css** file


```
.contact {
   background-color: #1d2e32;
   height: 100%;
   width: 50%;
   margin: 0 auto;
   padding: 1rem;
   box-shadow: 1px 1px 10px 1px #000000;
}

.contact-form {
   height: 100%;
   display: flex;
   flex-direction: column;
}

.contact-form > label {
   display: flex;
   justify-content: center;
   align-items: center;
}

.contact-form > input {
   height: 2rem;
   width: 50%;
   margin: 0.5rem auto;
   padding: 5px;
}

.contact-form > textarea {
   height: 50%;
   width: 75%;
   margin: 0.5rem auto;
   padding: 10px;
}

.contact-form > input[type="submit"] {
   width: 250px;
   text-transform: uppercase;
}

.contact-form > input[type="submit"]:hover {
   background-color: #00df6c;
   cursor: pointer;
}

.alert {
   text-align: center;
   padding: 10px;
   font-size: 1.2rem;
   font-weight: 600;
   background: #00df6c;
   border-radius: 0 3rem 0 3rem;
   color: #000;
}

.required {
   color: #ff0000;
   font-size: 6px;
   margin-left: 0.3rem;
}

.filled {
   color: #1aff00;
   font-size: 6px;
   margin-left: 0.3rem;
}

.animated {
   -webkit-animation-duration: 1s;
   animation-duration: 1s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
}

.fadeInUp {
   -webkit-animation-name: fadeInUp;
   animation-name: fadeInUp;
}

@keyframes fadeInUp {
   from {
      opacity: 0;
      visibility: hidden;
      -webkit-transform: translate3d(0, 40px, 0);
      transform: translate3d(0, 40px, 0);
   }

   to {
      visibility: visible;
      opacity: 1;
      -webkit-transform: none;
      transform: none;
   }
}



```


- Inside of **ContactForm.js** let's import useState, EmailJS and our CSS along with some FontAwesome icons.

```
 import { useState } from "react"; 
 import emailjs from "emailjs-com";
 import "./ContactForm.css";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faCircle } from "@fortawesome/free-solid-svg-icons";
 
```

- Next lets setup our ContactForm component.


```
export default function ContactForm() {
    return(

    )
}
```

- Then we will add our state variables.

```
export default function ContactForm() {
   const [messageSent, setMessageSent] = useState(false);
   const [isFilled, setisFilled] = useState({
      name: false,
      email: false,
      message: false,
   });

    return(

    )
}
```

- Then let's add our form inside the return.


```
export default function ContactForm() {
   const [messageSent, setMessageSent] = useState(false);
   const [isFilled, setisFilled] = useState({
      name: false,
      email: false,
      message: false,
   });
   
    return(
     <div className="contact">
         {messageSent ? (
            <div className="alert animated fadeInUp">
               Your message has been sent
            </div>
         ) : (
            ""
         )}
         <form className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="name">
               Name
               <span className={isFilled.name === true ? "filled" : "required"}>
                  <FontAwesomeIcon icon={faCircle} />
               </span>
            </label>
            <input
               type="text"
               name="user_name"
               placeholder="Hello there!"
               id="name"
               autoFocus
               onChange={filled}
               required
            />

            <label htmlFor="email">
               Email
               <span
                  className={isFilled.email === true ? "filled" : "required"}
               >
                  <FontAwesomeIcon icon={faCircle} />
               </span>
            </label>
            <input
               type="email"
               name="user_email"
               placeholder="What's this [ hip, hip ] ?"
               id="email"
               onChange={filled}
               required
            />

            <label htmlFor="message">
               Message
               <span
                  className={isFilled.message === true ? "filled" : "required"}
               >
                  <FontAwesomeIcon icon={faCircle} />
               </span>
            </label>
            <textarea
               name="message"
               placeholder="It's a hip hip array!"
               id="message"
               onChange={filled}
               required
            />

            <input type="submit" value="Send" />
         </form>
      </div>
   );
}
```

**NOTE:** the name fields for the inputs must be exactly as demonstrated above. This is how EmailJS expects to recieve this information from your form.

- Now we will write our onChange filled function.

```

function filled(e) {
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const messageField = document.getElementById("message");

      if (nameField.value.length !== 0) {
         setisFilled({
            name: true,
            email: false,
            message: false,
         });
      }

      if (emailField.value.length !== 0) {
         setisFilled({
            name: false,
            email: true,
            message: false,
         });
      }

      if (messageField.value.length !== 0) {
         setisFilled({
            name: false,
            email: false,
            message: true,
         });
      }

      if (nameField.value.length !== 0 && emailField.value.length !== 0) {
         setisFilled({
            name: true,
            email: true,
            message: false,
         });
      }

      if (nameField.value.length !== 0 && messageField.value.length !== 0) {
         setisFilled({
            name: true,
            email: false,
            message: true,
         });
      }

      if (emailField.value.length !== 0 && messageField.value.length !== 0) {
         setisFilled({
            name: false,
            email: true,
            message: true,
         });
      }

      if (
         nameField.value.length !== 0 &&
         emailField.value.length !== 0 &&
         messageField.value.length !== 0
      ) {
         setisFilled({
            name: true,
            email: true,
            message: true,
         });
      }

      if (
         nameField.value.length === 0 &&
         emailField.value.length === 0 &&
         messageField.value.length === 0
      ) {
         setisFilled({
            name: false,
            email: false,
            message: false,
         });
      }
   }

```


- Lastly, let's add our **sendEmail** function above the filled function.

```
  function sendEmail(e) {
      e.preventDefault();
      emailjs
         .sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            e.target,
            "YOUR_USER_ID"
         )
         .then(
            result => {
               console.log(result.text);
               setMessageSent(true);
               setTimeout(() => {
                  setMessageSent(false);
                  setisFilled({
                     name: false,
                     email: false,
                     message: false,
                  });
               }, 3000);
            },
            error => {
               console.log(error.text);
            }
         );
      e.target.reset();
   }

```

- According to the EmailJS documentation the **emailjs.sendForm** function accepts four (4) arguments in the following order.


    - "YOUR_SERVICE_ID",
    - "YOUR_TEMPLATE_ID",
    - e.target,
    - "YOUR_USER_ID"


- Let's navigate to our EmailJS dashboard and retrieve the three pieces of information we need.


    - Your Service ID can be found under the "Email Services" tab.

    - Your Template ID can be found under the "Email Templates" tab.

    - Your User ID can be found under the "Integration" tab


- Our completed ContactForm component will look like this:


```
import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
   const [messageSent, setMessageSent] = useState(false);
   const [isFilled, setisFilled] = useState({
      name: false,
      email: false,
      message: false,
   });

   function sendEmail(e) {
      e.preventDefault();
      emailjs
         .sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            e.target,
            "YOUR_USER_ID"
         )
         .then(
            result => {
               console.log(result.text);
               setMessageSent(true);
               setTimeout(() => {
                  setMessageSent(false);
                  setisFilled({
                     name: false,
                     email: false,
                     message: false,
                  });
               }, 3000);
            },
            error => {
               console.log(error.text);
            }
         );
      e.target.reset();
   }

   function filled(e) {
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const messageField = document.getElementById("message");

      if (nameField.value.length !== 0) {
         setisFilled({
            name: true,
            email: false,
            message: false,
         });
      }

      if (emailField.value.length !== 0) {
         setisFilled({
            name: false,
            email: true,
            message: false,
         });
      }

      if (messageField.value.length !== 0) {
         setisFilled({
            name: false,
            email: false,
            message: true,
         });
      }

      if (nameField.value.length !== 0 && emailField.value.length !== 0) {
         setisFilled({
            name: true,
            email: true,
            message: false,
         });
      }

      if (nameField.value.length !== 0 && messageField.value.length !== 0) {
         setisFilled({
            name: true,
            email: false,
            message: true,
         });
      }

      if (emailField.value.length !== 0 && messageField.value.length !== 0) {
         setisFilled({
            name: false,
            email: true,
            message: true,
         });
      }

      if (
         nameField.value.length !== 0 &&
         emailField.value.length !== 0 &&
         messageField.value.length !== 0
      ) {
         setisFilled({
            name: true,
            email: true,
            message: true,
         });
      }

      if (
         nameField.value.length === 0 &&
         emailField.value.length === 0 &&
         messageField.value.length === 0
      ) {
         setisFilled({
            name: false,
            email: false,
            message: false,
         });
      }
   }

   return (
      <div className="contact">
         {messageSent ? (
            <div className="alert animated fadeInUp">
               Your Message has been sent
            </div>
         ) : (
            ""
         )}
         <form className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="name">
               Name{" "}
               <span className={isFilled.name === true ? "filled" : "required"}>
                  <FontAwesomeIcon icon={faCircle} />
               </span>
            </label>
            <input
               type="text"
               name="user_name"
               placeholder="Hello there!"
               id="name"
               autoFocus
               onChange={filled}
               required
            />

            <label htmlFor="email">
               Email{" "}
               <span
                  className={isFilled.email === true ? "filled" : "required"}
               >
                  <FontAwesomeIcon icon={faCircle} />
               </span>
            </label>
            <input
               type="email"
               name="user_email"
               placeholder="What's this [ hip, hip ] ?"
               id="email"
               onChange={filled}
               required
            />

            <label htmlFor="message">
               Message{" "}
               <span
                  className={isFilled.message === true ? "filled" : "required"}
               >
                  <FontAwesomeIcon icon={faCircle} />
               </span>
            </label>
            <textarea
               name="message"
               placeholder="It's a hip hip array!"
               id="message"
               onChange={filled}
               required
            />

            <input type="submit" value="Send" />
         </form>
      </div>
   );
}


```


- Next let's go to App.js and import our ContactForm and render it in our main section.

- Let's send a test email. And Voila! You successfully incorporated EmailJs into your React app! 

## Bonus Challenge

- Refactor the logic in the filled function. Can you think of a way to create this functionality with a lot less code?

## Super bonus

- Wait to dynamically change the className from required to filled in our email span, only if the user enters a valid email.
  - **HINT** Look into email validation using RegEx.