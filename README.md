<h1 align="center">
  <br>
  <img  src="Task_Manager.png" />
  <br>
</h1>

<h6 align="center">A simple task manager API that is built with _NodeJS_, _ExpressJS_ and _MongoDB_</h6>

<p align="center">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
</p>

---

## Installation

1. Clone the repository to your localmachine
   > `git clone https://github.com/Amr-Magdy95/task_manager_api`
2. Change the directory to that of the project
   > `cd task_manager_api`
3. Create .env file and insert MONGO_URI inside of it
4. Install all packages
   > `npm i`
5. Run the development server and expect the server to run on port 5000
   > `npm run dev`

---

## Routes and How to Use

> In order to use **POST**, **PATCH** you should _insert_ name and completed properties

| HTTP Verb | Route             | Usage                  |
| :-------: | ----------------- | ---------------------- |
|    GET    | /api/v1/tasks     | Getting All Tasks      |
|   POST    | /api/v1/tasks     | Adding a new task      |
|    GET    | /api/v1/tasks/:id | Getting a single task  |
|  DELETE   | /api/v1/tasks/:id | Deleting a single task |
|   PATCH   | /api/v1/tasks/:id | Updating a single task |
