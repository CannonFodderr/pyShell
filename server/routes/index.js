const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('index', {title:"pyShell Server"});
});

module.exports = router