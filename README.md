# Abin Cleetus
- **MERN Stack Developer**

## Blog Application
### *Screenshots*



![Uploading Screenshot 2025-02-17 211940.png…]()
## Live Demo

https://incomparable-panda-e6d6cc.netlify.app/

### *Features*

- **Backend (API)**:
  - RESTful API for blog posts management
  - Supports CRUD operations (Create, Read, Update, Delete)
  - Middleware for handling CORS and JSON body parsing
  - Environment variable configuration using dotenv
  - Pagination for listing blog posts
  - Error handling and response standardization

- **Frontend (React)**:
  - User-friendly interface for blog browsing and management
  - Login and registration pages for authentication
  - Dashboard for admin users to create, update, and delete blog posts
  - Display blog posts with pagination and filtering options
  - Responsive design optimized for both desktop and mobile views

### *Technologies Used*

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, React Router DOM, CSS
- **Authentication**: JWT (JSON Web Tokens)
- **Environment Management**: dotenv
- **Middleware**: CORS, body-parser

### *Installation*

Follow these steps to set up both the backend and frontend of the Blog Application on your local machine:

#### Prerequisites

- Node.js and npm installed
- MongoDB installed locally or use MongoDB Atlas
- React development environment (React, npm)

#### Steps

1. **Clone both repositories (Backend and Frontend)**

    ```bash
    git clone https://github.com/Abincleetus007/blog-application-backend.git
    git clone https://github.com/Abincleetus007/blog-application-frontend.git
    ```

2. **Navigate to the backend directory**:

    ```bash
    cd blog-application-backend
    ```

3. **Install the backend dependencies**:

    ```bash
    npm install
    ```

4. **Configure environment variables in the `.env` file** (e.g., MongoDB URI, JWT secret).

5. **Start the backend server**:

    ```bash
    npm start
    ```

6. **Navigate to the frontend directory**:

    ```bash
    cd ../blog-application-frontend
    ```

7. **Install the frontend dependencies**:

    ```bash
    npm install
    ```

8. **Start the frontend development server**:

    ```bash
    npm start
    ```

9. **Access the application**:
   - The API (backend) will be accessible at `http://localhost:5000`.
   - The frontend will be accessible at `http://localhost:3000`.

### *API Endpoints*

- **GET** `/api/posts` - Retrieve all blog posts
- **POST** `/api/posts` - Create a new blog post (admin only)
- **GET** `/api/posts/:id` - Retrieve a single blog post
- **PUT** `/api/posts/:id` - Update a blog post (admin only)
- **DELETE** `/api/posts/:id` - Delete a blog post (admin only)

### *Usage*

- **Backend**:
  - Users can register and log in to access blog posts.
  - Admin users can create, update, and delete blog posts.
  - Pagination and search functionality are supported for managing large amounts of data.

- **Frontend**:
  - Users can browse blog posts.
  - Admin users can manage the blog posts via a dashboard (create, edit, delete).
  - Responsive UI for a seamless user experience across devices.


