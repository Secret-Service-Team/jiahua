var express = require('express');
var router = express.Router();
const axios = require('axios');

const appid = 'wxadedb7fbe04267d4';
const secret = '146d7714dcb7af44c00e8afd0aa089b1';

/* GET users listing. */
router.get('/login', function (req, res, next) {
  const js_code = req.query.code;
  axios.get('https://api.weixin.qq.com/sns/jscode2session', {
    params: {
      appid,
      secret,
      js_code,
      grant_type: 'authorization_code'
    }
  }).then((res2) => {
    console.log(res2.data);
    res.send({
      error_code: 0,
      session_key: res2.data.session_key,
      openid: res2.data.openid
    })
  }).catch((err) => {
    console.log(err);
    res.send('login error')
  })
});

module.exports = router;
