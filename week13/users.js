const express = require('express');
const router = express.Router();
const infoRouter = require('./info'); // 다중 라우터로 추가됨

router.get('/', (req, res) => {
    res.send('/users 요청');
});
// router.get('/info', (req, res) => {
//     res.send('/users/info 요청');
// });
router.use('/info', infoRouter);

module.exports = router;