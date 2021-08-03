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

- Open the terminal and run the command **"npm i emailjs"**.

- Now lets start our server, run **"npm  start"** or **"npm run start"**.

- Open up our App.js file and delete everything within the main div.

- Let's add a header, main and footer section to App.js (*if using a new React project*)

- Next let's add a **Components** folder in src and add a **ContactForm** folder with **ContactForm.css** and **ContactForm.js** inside.

- Inside of **ContactForm.j**s let's import EmailJS and our CSS.

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

```


- Next let's go to App.js and import our ContactForm and render it in our main section.


- Let's send a test email. And Voila! You successfully incorporated EmailJs into your React app! 