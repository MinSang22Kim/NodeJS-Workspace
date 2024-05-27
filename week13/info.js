const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('/info 요청');
});

module.exports = router;