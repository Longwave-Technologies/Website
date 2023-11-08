# Website
Checkout our website: https://longwave-technologies.github.io

Creating a complete secured business website with Docker, Golang, React, Bootstrap, PostgreSQL, and a contact form with CI/CD on GitHub.

Deploy and update on the server: `npm run deploy`

Deploy locally: `npm start`

Save locally and pulling from remote:
  You are working on some unfinished feature and you need to save this (draft):
    ``` git stash
              or 
      `git stash save "feature X"`
    ```
  Now you pull the code:
    ```git pull origin master```
  Restore the work you were doing for feature X using below command:
    ``` git stash apply```

Proper git development: https://medium.com/@anjulapaulus_84798/beginners-guide-to-proper-git-workflow-35a2d967734e
  ```
  git checkout master
  git checkout -b develop
  git checkout -b feature/feature-name
  #After the feature development is done
  git checkout develop
  git merge feature/feature-name
  git checkout master
  git merge feature/feature-name
  git branch -d feature/feature-name
  ```
Here's an outline of the architecture and steps:

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
  │   │   │   └──(Common components used across different pages)
  │   │   ├── App.js (Main application component)
  │   │   ├── index.js (Entry point of the application)
  │   │   ├── pages/
  │   │   │   ├── Page1/
  │   │   │   │   ├── Page1.js (React component)
  │   │   │   │   ├── Page1.css (Styles specific to Page1)
  │   │   │   ├── Page2/
  │   │   │   │   ├── Page2.js (React component)
  │   │   │   │   ├── Page2.css (Styles specific to Page2)
  │   │   │   └── ...
  │   │   ├── routes
  │   │   │   └── AppRouter.js (Handles routing between pages)
  │   │   ├── assets
  │   │   │   └── Images, fonts, and other assets
  │   │   ├── styles
  │   │   │   └── Global styles, variables, and mixins
  │   │   ├── utils
  │   │   │   └── Utility functions, helper classes, and constants
  │   │   ├── context
  │   │   │   └── React context providers (if using context API)
  │   │   ├── hooks
  │   │   │   └── Custom React hooks
  │   │   ├── config
  │   │   │   └── Configuration files (e.g., API endpoints, environment variables)
  │   │   └── ...
  │   └── ...
  │
  ├── docker-compose.yml
  └── ...
  ```

  Here are some best modular practices to follow for multiple React pages:

  1. **Separation of Concerns:** Each component should focus on a specific concern. For example, keep business logic, UI, and styles separate. This makes it easier to maintain and reuse components.

  2. **Page Components:** Create a separate directory for each page of your application. Each page directory contains the React component for that page along with any styles specific to that page. This helps in keeping code related to a specific page organized.

  3. **Reusable Components:** Place common and reusable components in the `/components` directory. These can be components used across different pages, such as navigation bars, buttons, or form inputs.

  4. **Routing:** Use a routing library like React Router to handle navigation between different pages. Place your routing configuration in the `/routes` directory. The `AppRouter.js` file can define your application's routes.

  5. **Assets:** Store images, fonts, and other assets in the `/assets` directory. Keep the file structure organized to make it easy to reference these assets in your code.

  6. **Styles:** Store global styles, variables, and mixins in the `/styles` directory. Each page or component can have its own CSS or CSS-in-JS file to manage specific styles.

  7. **Utilities and Helpers:** Place utility functions, helper classes, and constants in the `/utils` directory. These can be used across different parts of your application.

  8. **Context and Hooks:** If you're using React context API or custom hooks, organize them in the `/context` and `/hooks` directories, respectively.

  9. **Configuration:** Keep configuration files like API endpoints or environment variables in the `/config` directory.

  10. **Main Entry Point:** The `App.js` file serves as the main entry point of your application. It should handle routing and the overall structure of your app. The `index.js` file is the entry point for rendering your React application.

  By following these best modular practices and maintaining a clear directory structure, you'll make it easier to collaborate with team members, scale your project, and maintain code quality in your React frontend application.

**2. Frontend Development (React and Bootstrap):**

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


# References

- [How to deploy React App to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)
- [React-app deploy official doc](https://create-react-app.dev/docs/deployment/#github-pages)
- [React-app-deploy official github doc](https://github.com/gitname/react-gh-pages)
- [React dependencies error](https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/)
- [Import Babel devDependencies error](https://stackoverflow.com/questions/76435306/babel-preset-react-app-is-importing-the-babel-plugin-proposal-private-propert)
- [Properly name repo to host on Github Pages](https://kinsta.com/blog/github-pages/)
- [Animated Logo Preloader](https://ihatetomatoes.net/create-css3-spinning-preloader/)
