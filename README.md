## EmailJS Tutorial


PREREQUISITE: You should have a React project ready to use. If not create one in the terminal by running the command npx create-react-app YourAppName

WHY EMAILJS? 

- EmailJS allows you to incorporate an email form on the front end with no need for a backend or any server side code. This can be a great feature for front-end only portfolio sites. This prevents you from having to use the default anchor tag with a mailto: in the href.



## Step 1) Create an EmailJS Account



- Go to https://www.emailjs.com/ and create an account. To use with a portfolio the free acount plan is more than enough, you get up to 200 emails per month.



## Step 2) Configuring EmailJS



- Once you've created your emailJS account, you will need to configure an email service as well as an email template to organize the content that will come from your React form.

-Click on "Add New Service" and select your preferred email provider. I will be using Gmail.

- Select all 3 options. Click continue then click "Create Service"



## Step 3) Build Your Email Template



- Click on "Email Templates" and then "Create New Template"

- Let's modify this so we can easily identify emails coming from EmailJs
```
Hello,

You got a new message.

User Info:

    Name: {{user_name}}

    Email: {{user_email}}

Message Info:

    {{message}}

Best wishes,
EmailJS team
```
Click "Save"



## Step 4) 



- Installing our dependancies and building out our components.

- Open the terminal and run the command "npm i emailjs".

- Now lets start our server, run "npm  start" or "npm run start".

- Open up our App.js file and delete everything within the main div.

- Let's add a header, main and footer section to App.js (if using a new React project)

- Next let's add a Components folder in src and add a ContactForm folder with ContactForm.css and ContactForm.js inside.

- Inside of ContactForm.js let's import React, EmailJS and our CSS.

 - import React from "react";
 - import emailjs from "emailjs-com";
 - import "./ContactForm.css";

- Next lets create our ContactForm function.

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
```

- Lastly, let's add our sendEmail function above our return.

- According to the EmailJS documentation the emailjs.sendForm() function accepts four (4) argument in the following order.
    - "YOUR_SERVICE_ID",
    - "YOUR_TEMPLATE_ID",
    - e.target,
    - "YOUR_USER_ID"

- Let's navigate to our EmailJS dashboard and retrieve the three pieces of information we need.
    - Your Service ID can be found by clicking on the "Email Services" tab.
    - Your Template ID can be found by clicking on the "Email Templates" tab.
    - Your User ID can be found by clicking on the "Integration" tab

- Our completed ContactForm component will look like this:


```
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
      <form className="contact-form" onSubmit={sendEmail}>
         <input type="hidden" name="contact_number" />
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
```

- Next let's go to App.js and import our ContactForm and render it in our main section.

- Let's send a test email. And Voila! You successfully incorporated EmailJs into your React app! 