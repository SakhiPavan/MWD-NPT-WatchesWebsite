# 🛠️ Full-Stack Project Setup Guide  
**Project:** MWD-NPT-WatchesWebsite  
**Technologies:** Node.js, npm, Vite (Frontend), Express (Backend)

---

## ✅ Prerequisites

Before starting, ensure the following are installed on your **macOS** system:

- **Terminal** or **iTerm**
- **Homebrew**  
  Install Homebrew if not already installed:
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
Node.js + npm via Homebrew:

bash
Copy
Edit
brew install node
Confirm installation:

bash
Copy
Edit
node -v
npm -v
🚀 Project Setup Instructions
🔹 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/SakhiPavan/MWD-NPT-WatchesWebsite.git
cd MWD-NPT-WatchesWebsite
🔹 2. Set Up the Frontend
bash
Copy
Edit
cd frontend
npm install         # Install Vite and frontend dependencies
npm run dev         # Start the frontend development server
Frontend will be available at: http://localhost:5173

🔹 3. Set Up the Backend
Open a new terminal tab or window, then run:

bash
Copy
Edit
cd MWD-NPT-WatchesWebsite/backend
npm install         # Install backend dependencies
npm run dev         # Start the backend server
Backend will be running at: http://localhost:3000

🧪 4. Testing the Application
Open your browser and go to: http://localhost:5173

The frontend should load and connect to the backend successfully

Use browser DevTools > Network tab to verify API requests and responses

📌 Notes
If you see an error like vite: command not found, make sure:

You are in the frontend directory

You have run npm install to install dependencies

Ensure that any necessary .env files are present if your backend or frontend needs environment-specific variables.

