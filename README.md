# Website

Creating a complete secured business website with Docker, Golang, React, Bootstrap, PostgreSQL, and a contact form with CI/CD on GitHub.Here's an outline of the architecture and steps:

**1. Set Up the Development Environment:**

- Install Docker, Golang, and Node.js on your development machine.
  - Currently using Docker version 20.10.14, Go version go1.21.1 darwin/amd64, Node v16.5.0
- Create a new directory for your project.

  **Project Structure:**

  ```css
  my-business-website/
  │
  ├── backend/
  │   ├── Dockerfile
  │   ├── main.go
  │   └── ...
  │
  ├── frontend/
  │   ├── Dockerfile
  │   ├── src/
  │   │   ├── components/
  │   │   ├── App.js
  │   │   └── ...
  │   └── ...
  │
  ├── docker-compose.yml
  └── ...
  ```

**2. Frontend Development (React and Bootstrap):**

- Create a React frontend for your website. You can use create-react-app to bootstrap your project.
- Design and implement the website using Bootstrap for responsive design.
- Include a contact form component in your React application. You can use a form library like Formik or react-hook-form for handling the contact form.

```jsx
// src/components/ContactForm.js
import React from "react";
import { useFormik } from "formik";

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      // Send form data to the backend API
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response, show success or error messages to the user
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ContactForm;
```

**2.1. Dockerize React Frontend:**
Create a Dockerfile for your React frontend.

Dockerfile (for React):

```Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all local files to the container
COPY . .

# Build the React application
RUN npm run build

# Expose the port on which your React application will run (e.g., 3000)
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
```

**3. Backend Development (Golang):**

- Create a Go backend server to handle API requests and interact with the database.
- Implement secure user authentication and authorization mechanisms.
- Set up routes and handlers to serve data to the frontend and handle form submissions.
- Use Go's database/sql package to interact with PostgreSQL securely.
- Here's a simple Golang backend with an API endpoint for handling contact form submissions:

  ```go
  // main.go

  package main

  import (
     "net/http"
  )

  func contactHandler(w http.ResponseWriter, r *http.Request) {
     // Handle contact form submission here
     // You can process the form data and send emails, save to a database, etc.
     // Return appropriate responses, such as success or error messages.
  }

  func main() {
     http.HandleFunc("/api/contact", contactHandler)
     http.ListenAndServe(":8080", nil)
  }
  ```

**3.1. Dockerize Golang Backend:**
Create a Dockerfile for your Go backend, specifying the required dependencies and build steps. You'll also need a Docker Compose file to set up your PostgreSQL database.

Dockerfile (for Go):

```Dockerfile
# Use an official Go runtime as a parent image
FROM golang:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the local package files to the container's workspace
COPY . .

# Build the Go application
RUN go build -o main .

# Expose the port on which your Go application will run
EXPOSE 8080

# Run the Go application
CMD ["./main"]
```

**4. Database (PostgreSQL):**

- Set up a PostgreSQL database to store your website's data securely.
- Define the database schema and create tables to store information such as user data, contact form submissions, etc.

**4.1 Docker Compose file (for PostgreSQL):**

- Use Docker Compose to manage both containers and link them together. Create a docker-compose.yml file:

```docker-compose.yml
version: "3"
services:
  backend:
    build:
      context: ./backend
    ports:
      - "8080:8080"
  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:3000"
```

or

```yaml
version: "3.1"

services:
  postgres:
    image: postgres
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: myuser
      POSTGRES_PASSWORD: mypassword
    ports:
      - "5432:5432"
```

**4.2. Implement Backend API:**
Create API endpoints using Golang to handle contact form submissions, authentication, and any other necessary functionalities. Use a Golang web framework like Gin or Echo to simplify development.

**5. Connect Frontend and Backend:**
Configure your React frontend to make API requests to the Golang backend using Axios or another HTTP client.

**5.1 Dockerization:**

- Ensure you created Dockerfiles for both the frontend (React) and backend (Golang) applications as shown above.

- Use Docker Compose to define your multi-container application, including PostgreSQL as a container.

**5.2 Docker Compose:**
Create a `docker-compose.yml` file that defines how your services (frontend, backend, and database) interact with each other.

**6. Configure GitHub Secrets:**

In your GitHub repository, go to "Settings" > "Secrets" and configure any secrets or environment variables needed for your CI/CD process (e.g., API keys, access tokens).

**6.1 Create GitHub Actions Workflow:**

Create a GitHub Actions workflow YAML file (e.g., .github/workflows/main.yml) to automate the CI/CD process. Here's an example workflow that builds and deploys both the Golang backend and React frontend:

```.github/workflows/main.yml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Code
      uses: actions/checkout@v2

    - name: Build and Deploy Backend
      run: |
        docker build -t your-golang-backend ./backend
        docker run -d -p 8080:8080 --name backend-container your-golang-backend
        # Deploy to your hosting platform (e.g., AWS, GCP, or a VPS)

    - name: Build and Deploy Frontend
      run: |
        docker build -t your-react-frontend ./frontend
        docker run -d -p 80:80 --name frontend-container your-react-frontend
        # Deploy to a web server or hosting platform

    - name: Cleanup
      run: |
        docker stop backend-container
        docker rm backend-container
        docker stop frontend-container
        docker rm frontend-container
```

**7. Continuous Integration/Continuous Deployment (CI/CD):**

- Set up a CI/CD pipeline using GitHub Actions or another CI/CD tool of your choice.
- Configure the pipeline to automatically build, test, and deploy your Docker containers whenever you push changes to your GitHub repository.
- Set up environment variables for secrets like database credentials.
- With this workflow in place, every time you push changes to your GitHub repository's main branch, GitHub Actions will automatically build and deploy your Golang backend and React frontend containers.
  Ensure you have proper access control and security measures in place for your hosting platforms.

**8. Security and Secrets Management:**

- Use environment variables or a secrets management tool to store sensitive information such as database credentials securely.
- Implement security best practices, including input validation, encryption (SSL/TLS), and protecting against common web vulnerabilities (e.g., SQL injection, XSS).
- Ensure proper user authentication and authorization to protect sensitive data and functionality.
- Implement security measures such as:

  - Authentication and authorization for user access.
  - Use HTTPS for secure communication.
  - Validate and sanitize user inputs to prevent SQL injection and XSS attacks.
  - Set up a firewall and access control lists (ACLs) for Docker containers.
  - Securing Docker: To secure Docker containers, you should follow best practices for container security. This includes regularly updating base images, minimizing the attack surface, using appropriate permissions, and more. Security practices might vary based on your deployment environment, so consult security guidelines for Docker in your specific context.

Remember to secure your application further by handling user data responsibly, using HTTPS for communication, and implementing user authentication as needed.

**9. Domain and SSL Certificate:**

- Purchase a domain for your business website and configure DNS settings.
- Obtain and install an SSL certificate for secure communication.

10. **Deployment and Hosting:**

- Deploy your Docker containers/application to a production environment like hosting provider of your choice (e.g., AWS, Azure, Google Cloud).
- Configure your hosting environment, including load balancers, firewalls, and scaling options.
- Ensure proper security configurations for the production environment.

11. **Monitoring, Maintenance, and Logging:**

- Implement monitoring and logging solutions to track the health and performance of your website and detect security incidents. Regularly update your application and its dependencies to patch security vulnerabilities.

12. **Documentation:**

- Provide comprehensive documentation for your project, including setup instructions and explanations of how to use and maintain the website.

Please note that creating such a project is a significant undertaking and would require substantial time and expertise in each technology stack. You can find code examples, tutorials, and open-source projects on GitHub that cover various aspects of this project, which can serve as valuable resources as you work on your own implementation.

# References

- [How to deploy React App to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)
- [React-app deploy official doc](https://create-react-app.dev/docs/deployment/#github-pages)
- [React-app-deploy official github doc](https://github.com/gitname/react-gh-pages)
- [React dependencies error](https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/)
- [Import Babel devDependencies error](https://stackoverflow.com/questions/76435306/babel-preset-react-app-is-importing-the-babel-plugin-proposal-private-propert)
- [Properly name repo to host on Github Pages](https://kinsta.com/blog/github-pages/)
