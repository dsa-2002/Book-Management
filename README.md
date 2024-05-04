# clone the repository

git clone <repository-url>

# install dependencies
cd BooK MANAGEMENT
npm install

# configure environment variable
PORT=3000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>


# Run the server

npm start


# Endpoints 
POST /auth/register: Register a new user.
POST /auth/login: Login with username and password to obtain a JWT token.
POST /books: Create a new book .
GET /books: Get all books .
GET /books/author/:author: Get books by author 
GET /books/publicationYear/:publicationYear: Get books by publication year 
PUT /books/:id: Update a book .
DELETE /books/:id: Delete a book .