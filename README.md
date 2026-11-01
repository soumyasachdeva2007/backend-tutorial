# Backend Tutorial – Student Management System

## Project Overview

This project is a Student Management Backend developed using Node.js, Express.js and MongoDB.

It provides REST APIs to create, view, update and delete student records. MongoDB Atlas is used to store student information.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- Git and GitHub

## Project Structure

```text
backend-tutorial/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   └── server.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/soumyasachdeva2007/backend-tutorial.git
```

2. Open the project folder:

```bash
cd backend-tutorial
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add your MongoDB connection string and required environment variables.

5. Start the development server:

```bash
npm run dev
```

The server runs on port 5001.

## API Endpoints

Base URL: `http://localhost:5001`

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| GET    | `/api/students`     | Get all students |
| POST   | `/api/students`     | Create a student |
| PUT    | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

## Student Data Format

Example JSON:

```json
{
  "name": "Soumya Sachdeva",
  "email": "soumya@example.com",
  "course": "B.Tech CSE",
  "age": 19
}
```

## Testing

All four CRUD operations were tested successfully using Postman.

- Create – POST request
- Read – GET request
- Update – PUT request
- Delete – DELETE request

## Author

**Soumya Sachdeva**

B.Tech Computer Science Engineering

GitHub: https://github.com/soumyasachdeva2007
