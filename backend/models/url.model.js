import mongoose, { Schema } from 'mongoose'

const urlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true,
        trim: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    },
    visits: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export const URL = mongoose.model("URL", urlSchema)