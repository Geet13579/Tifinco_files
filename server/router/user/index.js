const express = require('express');
const router = express.Router();
const app = express();
var auth = require('../../controller/user/User_auth');
// var dsh = require('../../controller/admin/Dashboard');
router.post('/signin', auth.signin);
// router.get('/auth', auth.showdata);
// router.get('/dashboard', dsh.insert);


router.get('/',(req,res) => {


  res.send('i am user');
});


module.exports = router;