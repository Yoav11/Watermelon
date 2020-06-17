const router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'working',
        message: 'I love watermelons'
    });
});

const blogController = require('./blog/blogController');

router.route('/blogs')
    .get(blogController.index)
    .post(blogController.new);

router.route('/blogs/:blog_id')
    .get(blogController.view)
    .patch(blogController.update)
    .put(blogController.update)
    .delete(blogController.delete);

module.exports = router;
