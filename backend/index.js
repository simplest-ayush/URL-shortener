import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db/index.js'
import urlRoutes from './routes/url.route.js';

const app = express()

dotenv.config({
    path: '../.env'
})

app.use(cors(
    // origin: 'https://shrinkrr.netlify.app'
))
app.use(express.json())

const PORT = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.on('error', (error) => {
            console.log("ERRR ", error);
        })
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running on port ${PORT}`);

        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed : ", error)
    })

app.use('/', urlRoutes);