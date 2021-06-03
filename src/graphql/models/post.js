import mongoose from 'mongoose'
import User from './User'

const Schema = new mongoose.Schema({
    tile:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
})

export default mongoose.model('post', Schema)