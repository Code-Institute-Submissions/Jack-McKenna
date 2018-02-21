# Jack Mckenna Web App
 
## Overview

### What is the app for?

This is a web app to showcase Jack Mckenna's profesional qualifications and projects as well as provide users with contact information and interactivity. 

### What does it do. 

Will allow users to review projects and qualifications from Jack Mckenna, as well as review project portfolio and work that can be done.

### How does it work?

This web app is programmed using the Angular JS framework. THe app provides users the ablitiy to: 

- View the story of Jack McKenna and services he can provide.
- View Contact information on how to get in touch. 
- View specific services he can provide. 
- View current social netorks of Jack McKenna.
- Submit information that is sent to jackmckenna requiring booking availablity. 

Site is styled with bootstrap and JQuery.
 
## Features

### Existing Features

- User based
	- Query to submit
	- Contact information

- Display features
	- Home page
	- view portfolio with modals
	- view about me
	- map of area coverage
	- View how to get in touch
	

- Mobile adaptability


## Tech Used
 
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
- [jquery](https://jquery.com/)
	- We use **JQuery** to add more interactive features to the web app. 
	
## Testing Done

- HTML testing using HTML validator (https://validator.w3.org/)
- CSS testing using CSS validator (http://www.css-validator.org/)
- Javascript testing using JSHint (http://jshint.com/)
- UX testing used by trialling with external parties
- Mobile adaptibility teseted on various devices
- Performance testing by measuring load times and reducing.
- Stress testing done by using limited browser functionality. 

## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've done that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request

## Credits

Thanks given to the Code Institute for guidance and teaching to assist in making this app. 
Thanks given also to Jack McKenna for his assistance on content for his site as well as helping in the testing. 
Also thanks given to W3Schools' tutorials for assistance with Front End development