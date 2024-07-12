const express = require('express')
const router = express.Router()
let { people }= require('../data')

router.post('/', (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(401).json({success:false,
            msg:'Please provide name value'})
    }
    res.status(200).json({success:true, name:name})
})
module.exports = router
