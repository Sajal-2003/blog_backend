# Blog App Backend

This repository contains the backend code for the Blog App. The backend is responsible for handling API requests, database operations, authentication, and other server-side logic.


## Features

- User authentication and authorization
- CRUD operations for blog posts
- Pagination and filtering
- Secure password storage
- JWT-based authentication

## Tech Stack

- **Language:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** Mongoose, Bcrypt

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Sajal-2003/blog_backend
    cd blog-backend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```env
    PORT=8000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

## Configuration

Make sure to replace the placeholder values in the `.env` file with your actual MongoDB connection string and JWT secret key.

## Usage

1. **Start the development server:**

    ```sh
    npm run dev
    ```

    The server will start on the port specified in the `.env` file (default is 8000).

2. **Access the API:**

    The API will be available at `http://localhost:8000`.


## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- **Frontend Repository:** [Blog App Frontend](https://github.com/Sajal-2003/blog-frontend)

---

Feel free to contribute and provide feedback!


