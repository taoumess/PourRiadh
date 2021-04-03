const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    descripton: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('post', PostSchema);