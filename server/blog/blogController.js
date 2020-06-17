Blog = require('./blogModel')

exports.index = (req, res) => {
    Blog.get((err, blogs) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Blogs retrieved successfully",
            data: blogs
        });
    });
};

exports.new = (req, res) => {
    let blog = new Blog();
    blog.author = req.body.author;
    blog.title = req.body.title;
    blog.description = req.body.description;
    blog.text = req.body.text;
    blog.date = req.body.date;

    blog.save((err) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            message: 'New blogs created!',
            data: blog
        });
    });
};

exports.view = function (req, res) {
    Blog.findById({
        _id: req.params.blog_id
    }, (err, blog) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: 'success',
            message: 'Blog details loading..',
            data: blog
        });
    });
};

exports.update = (req, res) => {
    Blog.findById({
        _id: req.params.blog_id
    }, (err, blog) => {
        if (err)
            res.send(err);
        blog.author = req.body.author;
        blog.title = req.body.title;
        blog.description = req.body.description;
        blog.text = req.body.text;
        blog.date = req.body.date;

        blog.save((err) => {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            }
            res.json({
                message: 'blog Info updated',
                data: blog
            });
        });
    });
};

exports.delete = function (req, res) {
    Blog.remove({
        _id: req.params.blog_id
    }, (err, blog) => {
        if (err)
            res.send(err);
        res.json({
                status: "success",
                message: 'blog deleted'
            });
        });
};
