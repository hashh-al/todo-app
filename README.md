
# Todo App

A simple, interactive Todo App built with Node.js and Express.js. This application allows users to manage tasks effectively with features to add and delete tasks.

## Features

- Add new tasks
- Delete tasks
- Simple, clean UI for managing todos

## Project Structure

- **views/**: Contains the EJS templates for rendering HTML.
- **public/**: Stores static assets like CSS files and images.
- **node_modules/**: Contains project dependencies.

## MySQL Database

This app uses MySQL as the database to store tasks. 

### Database Setup

1. Install MySQL on your system if you haven't already.
2. Create a database:

   ```sql
   CREATE DATABASE sample_database;
   ```

3. Create a table to store tasks:

   ```sql
   CREATE TABLE tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      task VARCHAR(255) NOT NULL
   );
   ```
4. Update the MySQL connection settings in your app to match your database configuration. Make sure to add your MySQL `username`, `password`,`database name` and `localhost` settings in `app.js`.



## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MySQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HarshalAl02/todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

Start the server using the following command:

```bash
node app.js
```

The app will run locally on `http://localhost:3000`.

### Screenshots

Will upload screenshots later.

## Built With

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
- **Express.js**: Web application framework for Node.js.
- **EJS**: Embedded JavaScript templating.
- **CSS**: For styling the application.
- **MySQL**: For data storage.

## Contact

If you have any questions, feel free to reach out to:

- **LinkedIn**: [Harshal Alaspure](https://www.linkedin.com/in/harshal-alaspure)
- **Email**: alaspureh02@gmail.com
