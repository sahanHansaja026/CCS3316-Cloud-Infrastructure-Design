Here's the updated README.md with the directory structure included as per your request:

```markdown
# CCS3316 Cloud Infrastructure Design – Group Project

## Overview
This group project provides students with practical experience in designing and implementing a cloud infrastructure using AWS services. The goal is to design a scalable, secure, and cost-effective cloud architecture that meets the business needs and integrates real-time data analytics while ensuring compliance with GDPR and other data security standards.

## Objectives
- Develop a cloud-based infrastructure tailored to a specific business scenario using AWS services.
- Ensure adherence to the five pillars of the AWS Well-Architected Framework.
- Demonstrate teamwork and coordination to achieve project goals.
- Incorporate GDPR and other relevant data security regulations into the design.

## Project Scenario
A mid-sized company has hired your team to design and implement a cloud-based infrastructure to replace their existing on-premises servers. The company's current infrastructure is unable to handle high traffic during seasonal sales and lacks the scalability needed for growth. The management has decided to transition entirely to a cloud-based solution. Your task is to design a cloud infrastructure that is scalable, secure, cost-effective, and integrates real-time data analytics.

## Deliverables
### 1. Design Document (30 Marks)
- **Business Case:** Outline the company’s requirements and goals.
- **Architectural Diagrams:** Provide clear and detailed diagrams of your proposed infrastructure.
- **AWS Service Justification:** Explain why each selected AWS service is suitable for the scenario.
- **AWS Well-Architected Framework Alignment:** Describe how your solution aligns with the five pillars:
  - Operational Excellence
  - Security
  - Reliability
  - Performance Efficiency
  - Cost Optimization
- **Cost Analysis:** Provide an estimated cost breakdown of AWS services and propose strategies to optimize costs.

### 2. Implementation (40 Marks)
- Provision the designed infrastructure using Infrastructure as Code (IaC) tools such as Terraform, AWS CloudFormation, or AWS CDK.
- Implement a CI/CD pipeline to automate the application deployment process.
  - Include screenshots and evidence demonstrating the CI/CD implementation.

### 3. Presentation (25 Marks)
- Deliver a 10 to 15-minute group presentation summarizing your design and implementation.
  - At least three group members must contribute.
  - Include a recorded video presentation.
  - Provide a Q&A slide featuring five critical questions with detailed explanations.

### 4. Individual Contribution (5 Marks)
- At the end of the report, include a page detailing each group member’s individual contributions to the project.

## Tech Stack

### Frontend
- **React:** A JavaScript library for building user interfaces.
- **Components:**
  - `home.js`
  - `createpost.js`
  - `editpost.js`
  - `postdetails.js`
  - `navbar.js`

### Backend
- **Express:** A Node.js framework for building APIs.
- **MongoDB & Mongoose:** For database management.
- **Dependencies:**
  - `body-parser`: Middleware to parse request bodies.
  - `concurrently`: To run multiple commands in parallel.
  - `cors`: For enabling cross-origin requests.
  - `express`: Framework for routing and handling HTTP requests.
  - `mongoose`: MongoDB object modeling.
  - `nodemon`: Tool to automatically restart the server during development.
  
  **Dev Dependencies:**
  - `@babel/core`, `@babel/preset-env`, `@babel/preset-react`: Babel setup for transpiling modern JavaScript.
  - `jest`, `babel-jest`, `jest-environment-jsdom`: For testing React components.

## Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
```

### 2. Install Dependencies
```bash
cd <project-directory>
npm install
```

### 3. Running the Application
- **Backend:** The backend is built with Express and listens on port `7500`. Make sure to configure your MongoDB connection string.
  - To start the server, run:
    ```bash
    npm run dev
    ```
    This will use `nodemon` for hot-reloading.

- **Frontend:** Ensure the React frontend is set up in the `client` folder. You can run the React app using:
    ```bash
    cd client
    npm install
    npm start
    ```

### 4. Database Connection
Ensure you replace the `database` connection string in the `server.js` file with your own MongoDB URI.

```javascript
const database =
  "mongodb+srv://<username>:<password>@cluster0.t0p0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
```

### 5. Running the Server

After setting up both the frontend and backend, you can access the server by visiting `http://localhost:7500`.

## Folder Structure

```
server.js
routes/
├── user.js
├── subtitle.js
├── search.js
models/
├── user.js
├── subtitle.js
├── search.js
client/
├── src/
│   ├── components/
│   │   ├── home.js
│   │   ├── createpost.js
│   │   ├── editpost.js
│   │   ├── postdetails.js
│   │   ├── navbar.js
```

- **server.js:** Main server file that configures the Express app and routes.
- **routes/user.js:** Routes for handling user-related operations.
- **routes/subtitle.js:** Routes for managing subtitles.
- **routes/search.js:** Routes for performing search operations.
- **models/user.js:** Mongoose schema for the user.
- **models/subtitle.js:** Mongoose schema for subtitles.
- **models/search.js:** Mongoose schema for search operations.

## Contribution Guidelines

Feel free to fork the repository and submit pull requests for any improvements or fixes. Please make sure to follow the project's coding standards and guidelines. Ensure all features are well-tested before submitting.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- AWS Documentation
- React Documentation
- MongoDB Documentation
- Express Documentation
```

This version includes the folder structure as you requested, listing the server, routes, and models, along with the frontend components.
