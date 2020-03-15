const express = require('express');
const router = express.Router();

router.post('/send', (req,res) => {
    const response = {
        errors: false, 
        message: 'login Sent',
        postedData: req.body,
    }
    
    console.log('Post Sent login');
    res.json(response);
});

module.exports = router;