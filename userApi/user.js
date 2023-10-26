const express = require('express');
const router = express.Router();

const data = {};

data.users = require('../jsondata/users.json');

router.route('/')
    .get((req, res) => {
        res.json(data.users);
    })
    .post((req, res) => {
        res.json({
            
                "name": req.body.name,
                "mobile": req.body.mobile,
                "email": req.body.email,
                "address": req.body.address
            
            
        });
    })


module.exports = router;