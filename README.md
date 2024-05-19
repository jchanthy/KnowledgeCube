# Capstone Project - KnowledgeCube 

## Introduction
KnowledgeCube is an online learning platform designed to empower individuals and organizations to create
and share short courses on various subjects. The platform will be built using a modern technology stack to
ensure a seamless and engaging user experience for both course creators and learners. Key components of
the platform will include a course creation suite, a content delivery system, and a user management system.
The front-end will be designed with a responsive and intuitive user interface, ensuring a seamless
experience across various devices. The back-end will consist of a robust API that handles all data
transactions and supports role-based access control to protect sensitive information. The database will
store and manage all relevant data, including user information, course details, and learning progress.

#### IMPORTANT NOTE: This project is hosted on this account as part of the sample capstone projects in the Full-Stack Development Program provided by upGrad KnowledgeHut. Support shall only be provided through official channels and tickets through your PRISM account if you're a registered learner. For everyone else, the project is provided as is for tinkering and exploration only.

## Setup Instructions

### Prerequisites
- Git
- Node.js and npm
- MongoDB Atlas account

### Getting Started
1. **Clone the Repository**
   ```sh
   git clone https://github.com/jchanthy/KnowledgeCube.git
   cd knowledge_cube 
   ```

2. **Install Dependencies**
   Navigate to both backend and frontend directories and install the required packages.
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **MongoDB Atlas Setup**
    - Set up a MongoDB Atlas account [here](https://www.mongodb.com/cloud/atlas).
    - Create a new user within your MongoDB Atlas dashboard.
    - Ensure that network access is open (Note: This is only recommended for development purposes).
    - Copy your MongoDB connection URL.

4. **Environment Configuration**
   Create a `.env` file in the root of the backend folder and add the following keys:
   ```plaintext
   JWT_SECRET=<unique-string>
   DB_URI=<mongodb-url>
   ```

5. **Start the Application**
   Navigate to the backend folder and start the server and frontend application.
   ```sh
   cd backend
   npm start
   ```

6. **Access the Application - Frontend**
   Open your web browser and go to `http://localhost:3000`.

7. **User Registration**
   Sign up as a new user. You will need to specify an initial amount to seed your account, as part of the registration process as this is an academic project.

## Features

- **User Authentication**: This feature supports the registration, login, and role-based access control
  for different user types, such as administrators, course creators, and learners. 
- **Course Creation Suite**: This feature enables course creators to design, publish, and manage short
  courses, including setting up course structure, uploading content, and creating quizzes or
  assessments.
- **Content Management**: This feature allows for the storage, organization, and retrieval of various
  types of course content, such as text, images, videos, and documents. 
- **Course Discovery**: This feature enables users to search, filter, and browse through available
  courses based on various criteria, such as subject, difficulty level, or course creator. 
- **Enrolment and Progress Tracking**: This feature allows learners to enrol in courses, track their
  learning progress, and resume learning where they left off.
- **Interactive Learning Experience**: This feature supports interactive elements, such as quizzes,
  assessments, and gamification elements, to make the learning process more engaging and
  effective.
- **Learner Dashboard**: This feature provides learners with a personalized dashboard displaying their
  enrolled courses, progress, and achievements.
- **Course Creator Dashboard**: This feature offers course creators insights into course performance,
  learner engagement, and feedback to help improve course quality.
- **Social Features**: This feature allows users to interact with each other through comments,
  discussion boards, and direct messaging, promoting a sense of community and collaborative
  learning.
- **Certificates and Badges**: This feature enables the issuance of completion certificates and
  achievement badges to learners who successfully complete courses or reach specific milestones.
- and more...

## Future Enhancements
We plan to introduce a CLI tool for backend administrative operations to enhance the realism of this academic project.

