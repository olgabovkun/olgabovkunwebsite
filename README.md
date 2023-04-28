# Personal website

Welcome to my personal website GitHub repository! Here, you will find the code for my website, which I designed as a platform to showcase my skills, work experience, and connect with like-minded individuals. 

You can use it as a template to create your own environment.

## Technologies Used
**Backend**: NodeJS, Express, EJS;  
**Frontend**: HTML, CSS, Bootstrap, JavaScript. 

## Getting Started
1. Clone repo 
2. Install NPM packages
```
npm install
```
3. Create file with CV: public/files/your_CV_name.pdf
4. Create .env file that contains:
```
EMAIL_FROM=[add_here_email_from]
EMAIL_TO=[add_here_email_to]
EMAIL_PASS=[add_here_password]
EMAIL_HOST='smtp.gmail.com'
EMAIL_PORT=587
CV_FILE_NAME=[add_here_cv_filename]
PORT=3000
```

5. start app
```
node app.js
```
