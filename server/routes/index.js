const   router = require('express').Router(),
        pyShell = require('python-shell').PythonShell,
        pyConfig = require('../python/pyConfig');

router.get('/', (req, res)=>{
    res.render('index', {title:"pyShell Server", pyData: []})
});

router.post('/', (req, res)=>{
    console.log(req.body, req.params)
    pyShell.run('test.py', pyConfig, (err, response)=>{
        if(err) throw err;
        res.render('index', {title:"pyShell Server", pyData: response});
    });    
});

module.exports = router