# Simple Todo App

Simple To-Do App is a minimalist task management application designed for an intuitive user experience. I developed the front-end using HTML, CSS, and JavaScript, implementing form validation, modal popups, and object-oriented programming (OOP) with JS classes and modules for scalability. The app supports task creation, completion tracking, and interactive UI elements, ensuring seamless usability.

## Functionality

Main Features:

- Task Management:
- View Tasks: Users can see a list of their tasks, including descriptions, due dates, and completion status.
- Add New Tasks: A "+ Add Todo" button allows users to add new tasks to their list.
- Delete Tasks: Each task has a "Delete" button, enabling users to remove tasks they no longer need.
- Task Status:
- Mark as Completed: Users can mark tasks as completed by checking the checkbox next to each task.
- Visual Indicator: Completed tasks have a blue background and a checked checkbox.
- Progress Tracking:
- Task Summary: A subheading shows the progress by indicating how many tasks have been completed out of the total number of tasks (e.g., "Showing X out of Y completed").
  Intended Workflow:
- Adding a Task:
- Users click the "+ Add Todo" button.
- A form or modal appears where users can enter task details, including description and due date.
- Upon submission, the new task appears in the task list with an unchecked checkbox.
- Completing a Task:
- Users check the checkbox next to a task to mark it as completed.
- The task's background changes to blue, and it is moved to a "completed" section or re-ordered in the list based on the app's logic.
- Deleting a Task:
- Users click the "Delete" button next to a task.
- The task is removed from the list immediately.

## Technology

Front-end:

- HTML: Structure the web page.
- CSS: Style the web page to make it visually appealing.
- JavaScript: Add interactivity to the app.
- Frameworks/Libraries (optional):
- React: For building user interfaces.
- Angular: For creating single-page applications.
- Vue.js: For reactive and component-based UI development.
  Back-end:
- Node.js: For running JavaScript on the server-side.
- Express.js: For building web applications and APIs.
  Form Validation:
  I ensure that users input valid data through meticulous form validation. When a user submits a form, my JavaScript functions act as gatekeepers, checking for required fields, acceptable formats, and logical constraints. For example, I make sure that the task name field is not left empty and that the due date is set for the future. If there are any errors, they are flagged immediately, providing instant feedback with visual cues like red borders and error messages next to the fields. This helps create a smooth and error-free user experience.
  Modal Popups:
  The modal popup for adding tasks is a sleek feature that enhances usability. When a user clicks the "+ Add Todo" button, the modal appears as an overlay, dimming the background to focus attention on the task entry form. The modal includes a close button (often styled as an 'X'), which users can click to exit the modal. Clicking outside the modal or pressing the ESC key also closes it, ensuring multiple ways to navigate back without interruption. I designed the modal in CSS to be visually appealing and to align with the minimalist aesthetic of my app.
  Use of Classes and Modules in JavaScript:
  To maintain clean and manageable code, I leverage the power of classes and modules. By defining tasks as a class, I encapsulate related properties and methods, making my code more organized and reusable. Each task instance is an object with its own attributes, such as the task name, due date, and completion status. This object-oriented approach simplifies the process of updating tasks, marking them as completed, or deleting them.
  Modules further structure my code by separating different functionalities into distinct files. For example, one module might handle task creation and storage, while another deals with rendering tasks in the UI. This modular architecture makes my codebase scalable and easy to maintain. When changes are needed, I can update specific modules without affecting the entire application.
  My app exemplifies a well-thought-out approach to web development, focusing on user experience, code quality, and maintainability. It's a testament to the skill involved in combining various technologies and best practices.

- Database:
- MongoDB: A NoSQL database for storing tasks.
- MySQL/PostgreSQL: Relational databases for storing tasks.
  Development Tools:
- Version Control: Git for tracking changes in your code.
- Code Editor: VS Code or Sublime Text for writing code.
- Package Manager: npm or Yarn for managing dependencies.
- Task Runner: Gulp or Webpack for automating development tasks.
  Additional Tools:
- Authentication: Implementing user authentication with JWT, OAuth, or services like Firebase Auth.
- Hosting: Deploying your app on platforms like Heroku, Vercel, or Netlify.

## Deployment

This project is deployed on GitHub Pages:

- [https://cragbasi.github.io/se_project_todo-app/]
