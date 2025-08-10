import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/index.js';
import urlRoutes from './routes/url.route.js';
import path from 'path';

dotenv.config({ path: '../.env' });

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 8000;

// CORS
app.use(cors({
    origin: 'https://shrinkrr.netlify.app',
}));

app.use(express.json());

// Serve static files from the Vite build folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API routes
app.use('/api', urlRoutes);

// Catch-all route for React Router (must come last)
app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Connect to DB and start server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection failed : ', error);
    });
