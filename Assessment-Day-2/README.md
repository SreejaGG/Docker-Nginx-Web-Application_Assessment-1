
# Assessment Day 2 - Student Management System

## Objective
Develop and deploy a Student Management System using Node.js and Docker.

## Technologies Used
- Node.js
- Express.js
- HTML, CSS, JavaScript
- Docker

## Functionalities
- Add student details
- View student records
- Update student information
- Delete student records

## Implementation
1. Developed the backend using Node.js and Express.js.
2. Designed the frontend using HTML, CSS and JavaScript.
3. Installed dependencies using npm install.
4. Created a Dockerfile.
5. Built the Docker image.
6. Ran the application inside a Docker container.
7. Configured port mapping from 3000 to 3000.
8. Verified the application through a web browser.

## Docker Commands

Build:
docker build -t student-management-system .

Run:
docker run -d -p 3000:3000 --name student-app student-management-system

Verify:
docker ps

## Application URL
http://localhost:3000

## Outcome
Successfully developed and containerized a Student Management System using Node.js and Docker.
