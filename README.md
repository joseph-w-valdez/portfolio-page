# Personal Portfolio

This is a modern full-stack web application built using various technologies and frameworks to showcase my biography, work, skills, and experience.

 [Live link to my website here](http://jwv-portfolio.herokuapp.com/).
 
  ### Features and Technologies
* Built the frontend of the portfolio page using React, React Router, and React Hook Form, and styled it with CSS and React-Spring for animations and transitions.
* Utilized the Sendinblue API with React Hook Form to handle and manage a form to send emails to a hidden email address.
* Uses a honeypot spam protection technique to prevent bots from spamming the form 
* Built the backend of the portfolio page using Node.js, Express, and deployed it to Heroku.
* Implemented responsive design using CSS to ensure the website looks good on all screen sizes.
* Utilized dotenv to store sensitive information such as API keys and personal information.

![published_profile2](https://user-images.githubusercontent.com/117682160/232580708-3c90b3c5-d072-436b-8cfa-dda0581e814c.gif)

### If you'd like to run the Portfolio Page project on your local machine

* System Requirements:
  * Node.js: You will need to have Node.js installed on your computer. The minimum version of Node.js that your application requires is v14.17.0. You can download the latest version of Node.js from the official website: https://nodejs.org/en/download/
  * Git: You will need to have Git installed on your computer to clone the repository and manage your codebase. You can download Git from the official website: https://git-scm.com/downloads

1. Installing Dependencies
    * Make sure you have Node.js installed on your machine.
    * Clone the repository from GitHub: git clone `https://github.com/joseph-w-valdez/portfolio-page.git`.
    * Navigate to the cloned repository and run `npm install` to install all dependencies.
2. Creating Configuration Files
    * Create a new file called `.env` at the root level of the project.
    * Copy the contents of the `.env.example` file into the new .env file.
3. External Services or Accounts
    * You will need to sign up for a developer account with Sendinblue and obtain your own API key. Follow their instructions to create an account and generate your API key.
4. Updating Environment Variables
    * In the `.env` file, update the `REACT_APP_SENDINBLUE_API_KEY` and `REACT_APP_EMAIL_ADDRESS` variables with your own Marvel API keys.
5. Running Build Scripts
    * Run `npm run build` to build the project for production.
    * Alternatively, you can run `npm run dev` to start the project in development mode.
6. No database creation or file import is necessary for this project.
