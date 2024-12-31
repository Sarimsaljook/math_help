##### MathHelp
MathHelp is a peer-to-peer learning platform designed for IGCSE math students to upload and analyze solved math problems. Students can share their scanned solutions and learn from each other’s approaches and mistakes. Instead of relying solely on teacher-provided solutions, MathHelp allows students to gain new perspectives on problem-solving.

### Features
Upload and Share Solutions: Students can upload their scanned math solutions to the platform for others to view.
Learn from Peers: By viewing how other students solve problems, users can gain a deeper understanding of various solving methods.
Error Recognition: Students can learn from common mistakes made by others and avoid repeating them.
Authentication: Firebase authentication to ensure secure login and registration.
Cloud Storage: Firebase Cloud Storage to securely store and access uploaded solutions.
Tech Stack
Frontend: React JS
Backend: Firebase Authentication & Firebase Cloud Storage
Setup
To run the project locally:

### Clone the repository:

bash
Copy code
git clone 

Navigate to the project folder:

bash
Copy code
cd MathHelp
Install dependencies:

bash
Copy code
npm install
Create a .env file and add your Firebase configuration:

bash
Copy code
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Start the development server:

bash
Copy code
npm start

