import { URL } from "../models/url.model.js";
import { nanoid } from "nanoid";

const shortener = async (req, res) => {

    try {
        const { originalUrl } = req.body
        if (!originalUrl) {
            return res.status(400).json({ message: "Original URL is required" })
        }

        const shortCode = nanoid(6);

        const newUrl = await URL.create({
            originalUrl,
            shortCode
        })

        res.status(201).json({
            shortUrl: `${req.protocol}://${req.get('host')}/${shortCode}`,
            message: "URL shortened Successfully"
        });
    } catch (err) {
        console.error('Error creating short URL:', err);
        res.status(500).json({ message: 'Server error' });
    }
}


const redirectUrl = async (req, res) => {
    try {
        const shortCode = req.params.shortCode;
        const urlDoc = await URL.findOne({ shortCode })
        if (!urlDoc) {
            return res.status(404).json({ message: 'Short URL not found' });
        }
        urlDoc.visits += 1
        await urlDoc.save()

        res.redirect(urlDoc.originalUrl)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

const getAllUrl = async (req, res) => {
    try {
        const urls = await URL.find().sort({ createdAt: -1 })
        res.json(urls)
    } catch (error) {
        console.error('Error fetching URLs:', err);
        res.status(500).json({ message: 'Server error' })
    }
}

export {
    shortener,
    redirectUrl,
    getAllUrl
}