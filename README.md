# 🔗 UltraShorter — MERN Stack URL Shortener

A modern, responsive, and full-featured **URL Shortener** application built with the **MERN Stack** (MongoDB, Express, React, Node.js) and styled using **Tailwind CSS**.  
It allows users to create short links, track click counts, and view analytics (admin panel).

---

## 🚀 Features

- **Shorten Links Instantly** — Paste a long URL and get a unique short link.
- **Track Clicks** — Visit counter for each link.
- **Responsive UI** — Optimized for mobile, tablet, and desktop.
- **Admin Panel** — View all shortened links with statistics.
- **Copy to Clipboard** — One-click copy feature for short links.
- **Tech Stack** — MERN + Tailwind for fast, modern UI.

---

## 🛠 Tech Stack

**Frontend:**
- React.js + Vite
- Tailwind CSS
- Axios  
- React Router

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- nanoid for generating unique short codes

**Deployment:**
- Frontend: Netlify
- Backend: Render  
- Database: MongoDB Atlas

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
git clone https://github.com/yourusername/url-shortener-mern.git
cd url-shortener-mern


### 2️⃣ Backend Setup
cd backend
npm install

Create a `.env` file inside backend:
PORT=8000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:8000

Start backend: npm start

### 3️⃣ Frontend Setup

cd ../frontend
npm install

VITE_API_URL=http://localhost:8000

Start frontend: npm run dev


---

## 🔗 API Routes

| Method | Route            | Description                          |
|--------|------------------|--------------------------------------|
| POST   | `/api/shorten`   | Create a short URL                   |
| GET    | `/:shortCode`    | Redirect to original URL             |
| GET    | `/api/admin/urls`| Get all URLs with analytics (admin)  |

---

## 💡 Usage

1. Open the frontend in your browser.
2. Paste your long URL in the field.
3. Click **"Shorten It!"**.
4. Copy your new short link and share it.
5. Visit **Admin Page** to see all your URLs and stats.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📜 License

This project is licensed under the MIT License.

---

**👨‍💻 Built by:** Ayush Kumar Chauhan (https://github.com/simplest-ayush)

