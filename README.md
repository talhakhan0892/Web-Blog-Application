# **Blog Application**
A **very** basic website for managing blog entries. Built with Express, Node.js, and EJS for practicing web development fundamentals.

## **Features**
Create: Add new blog entries with titles and content.
Edit: Modify existing blog entries.
Delete: Remove blog entries.
## **Technologies Used**
Node.js: JavaScript runtime for building the server.
Express: Web framework for handling HTTP requests.
EJS: Templating engine for rendering HTML pages.
Git: Version control system.
## **Installation
Prerequisites**
Make sure you have Node.js and npm installed. You can download them from nodejs.org.

## **Clone the Repository**
First, clone the repository to your local machine:
git clone https://github.com/yourusername/your-repository.git
cd your-repository
## **Install Dependencies**
Navigate to the project directory and install the required npm packages:
npm install

## **Usage
Start the Server**
Run the following command to start the server:
npm start
The server will be available at http://localhost:3000.

## **Access the Application**
Home Page: Displays all blog entries with options to edit or delete.
Compose Page: Create a new blog entry.
Edit Page: Edit an existing blog entry (via the compose page).

## **API Endpoints**
GET /: Render the home page with a list of all blog entries.
GET /compose: Render the page to create a new blog entry.
POST /submit: Submit a new blog entry.
POST /delete: Delete a blog entry.
POST /edit: Edit an existing blog entry.

## **Contributing**
If you'd like to contribute to this project, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a pull request on GitHub.
