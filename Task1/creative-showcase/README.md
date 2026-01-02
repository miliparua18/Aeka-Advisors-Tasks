# Creative Showcase – React Application

# Project Overview

*Creative Showcase* is a React-based web application where users can create an account, upload images, and manage their personal gallery.  
The application also provides a public profile page that allows anyone to view a user’s uploaded images.

This project is built using *Create React App* and focuses on frontend fundamentals such as routing, state management, and client-side data handling.

---

# Live Demo

 *Hosted Application (Netlify):*  
PASTE YOUR NETLIFY LINK HERE  

 *GitHub Repository:*  
https://github.com/miliparua18/Aeka-Advisors-Tasks  

---

# Features

# Landing Page
- Displays a random selection of images uploaded by users
- Masonry-style image layout
- Login and Sign Up buttons

# Authentication
- User Sign Up and Login functionality
- Credentials stored using browser Local Storage
- Protected routes for authenticated users

# Dashboard
- Upload images via file input (no URL uploads)
- View all previously uploaded images
- Delete individual images
- Logout functionality

# Public Profile Page
- Accessible via /profile/:username
- Displays a specific user’s uploaded images
- Read-only view for public access

---

# Technology Stack

- *Frontend:* React (Create React App)
- *Routing:* React Router DOM
- *State Management:* React Hooks (useState, useEffect)
- *Storage:* Browser Local Storage
- *Styling:* Plain CSS (separate CSS files per page)

---

# Project Structure

src/
 ├── pages/
 │    ├── Landing.js
 │    ├── Login.js
 │    ├── Signup.js
 │    ├── Dashboard.js
 │    ├── PublicProfile.js
 │    ├── Landing.css
 │    ├── Login.css
 │    ├── Signup.css
 │    ├── Dashboard.css
 │    └── PublicProfile.css
 ├── App.js
 ├── index.js
 └── index.css

---

# How to Run the Project Locally

# Clone the repository

git clone https://github.com/miliparua18/Aeka-Advisors-Tasks.git

# Navigate to the project directory
cd creative-showcase

# Install dependencies
npm install

# Start the development server
npm start

# Open in browser
http://localhost:3000

# Data Storage Explanation

*User credentials stored at:*

localStorage["users"]


*Uploaded images stored per user as Base64 strings:*

localStorage["username"] = [image1, image2, ...]


*Current logged-in user stored at:*

localStorage["currentUser"]

# Notes

This project uses client-side storage only

No backend or database is implemented

Intended for educational and technical assessment purposes

# Author

Mili Parua

## 📄 License

This project is created for learning and assessment use only.