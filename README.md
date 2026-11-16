
# Docker Nginx Web Application

## Project Description
This project demonstrates how to create a simple HTML webpage
and deploy it inside a Docker container using Nginx.

## Technologies Used
- HTML
- Docker
- Nginx
- Git
- GitHub

## Project Files
- index.html - Web application
- Dockerfile - Docker image configuration
- README.md - Project documentation

## Build Docker Image

docker build -t hello-nginx .

## Run Docker Container

docker run -d -p 8080:80 --name my-nginx-container hello-nginx

## Verify Running Container

docker ps

## Access Application

http://localhost:8080

## Expected Result
The HTML webpage should be successfully displayed
in the browser through the Nginx web server running
inside a Docker container.
