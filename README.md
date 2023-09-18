# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Author dev@AlienBrain;

PROJECT FEATURES:

(i) User's Selection:

- Allow users to select/ choose best suitable courses.

- Can select multiple items on the basis of credit limitations.

(ii) Dynamic Dashboard:

- Provide a dynamic dashboard for users to view relevant information at a glance.

- User can view comfortably the selected courses and the total cost and credit details.

(iii) Mobile Responsiveness:

- Optimize the project for mobile devices, ensuring a seamless user experience on smartphones and tablets.

- Implement responsive design principles to adapt to different screen sizes.

MANAGEMENT PROCESS OF 'STATE' IN THIS PROJECT:

This project is a web application for course registration. It uses React's state management to keep track of selected courses and their details. Here's the state management process:

- Here "useState" is used to define state variable - "courseDetails" to load course details info as the stored API JSON data; And "totalPriceOfCourse", "totalCreditOfCourse", "remainingCreditOfCourse" variables hold information about the selected course's total price, total credit, and the remaining credit limit for the user.

- The "onClick" attribute activated when the button clicked and call a function "showDetailsOnCart()" with a parameter 'course' containing course details info.

- In cart.jsx {courseDetails}, {totalCreditOfCourse}, {remainingCreditOfCourse} and {totalPriceOfCourse} are send to the "cart" component as react "props".

- And finally in cart.jsx receive the props value as object and by destrucuring finally render dynamic data to make the website interactive.
