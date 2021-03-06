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

- Open the terminal and run the command **"npm i emailjs-com"**.

- Now lets start our server, run **"npm  start"** or **"npm run start"**.

- Open up our App.js file and delete everything within the main div.

- Let's add a header, main and footer section to our App.js (*if using a new React project*)

   - **NOTE** Ideally, you would want to place your header and footer into their own folders within the Components folder, but for the sake of time and since that's not the main focus of this lesson we will go with the following code:

```
import './App.css';

function App() {
  let year = new Date();
  year = year.getFullYear();

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
         {/* ContactForm goes here */}
      </main>
      <footer>
        <p>All Rights Reverved &copy; {year}</p>
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
   background-color: #f1f1f1;
   height: 80vh;
   padding: 2rem;
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
   background-color: #95deff;
   height: 100%;
   padding: 1rem;
   box-shadow: 1px 1px 10px 1px #000;
}

.contact-form {
   height: 100%;
   display: flex;
   flex-direction: column;
}

.contact-form > input {
   height: 2rem;
   width: 50%;
   margin: 0.5rem auto;
}

.contact-form > input:focus,
.contact-form > textarea:focus {
   outline-color: #ffe3b0 !important;
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
   color: #f5f5f5;
   background-color: #00000040;
   cursor: pointer;
}

```


- Inside of **ContactForm.js** let's import EmailJS and our CSS.

```
 import emailjs from "emailjs-com";
 import "./ContactForm.css";
```

- Next lets setup our ContactForm component.


```
export default function ContactForm() {
    return(

    )
}
```


- Then let's add our form inside the return.


```
export default function ContactForm() {
   return (
     <div className="contact">
         <form className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input
               type="text"
               name="user_name"
               placeholder="Hello there!"
               id="name"
               autoFocus
               required
            />
            <label htmlFor="email">Email</label>
            <input
               type="email"
               name="user_email"
               placeholder="What's this [ hip, hip ] ?"
               id="email"
               required
            />
            <label htmlFor="message">Message</label>
            <textarea
               name="message"
               placeholder="It's a hip hip array!"
               id="message"
               required
            />
            <input type="submit" value="Send" />
         </form>
      </div>
   );
}
```

**NOTE:** the name fields for the inputs must be exactly as demonstrated above. This is how EmailJS expects to recieve this information from your form.


- Lastly, let's add our **sendEmail** function above the return.

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
import emailjs from "emailjs-com";
import "./ContactForm.css";

export default function ContactForm() {
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
            <label htmlFor="name">Name</label>
            <input
               type="text"
               name="user_name"
               placeholder="Hello there!"
               id="name"
               autoFocus
               required
            />
            <label htmlFor="email">Email</label>
            <input
               type="email"
               name="user_email"
               placeholder="What's this [ hip, hip ] ?"
               id="email"
               required
            />
            <label htmlFor="message">Message</label>
            <textarea
               name="message"
               placeholder="It's a hip hip array!"
               id="message"
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