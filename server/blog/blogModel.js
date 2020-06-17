let mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    text: String,
    date: {
        type: Date,
        default: Date.now
    }
});

let Blog = module.exports = mongoose.model('blog', blogSchema);

module.exports.get = (callback, limit) => {
    Blog.find(callback).limit(limit);
}
