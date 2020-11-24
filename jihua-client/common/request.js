const baseUrl = 'http://192.168.43.59:3000/api'
const request = (url = '', data = {}, type = 'GET', header = {

}) => {
  return new Promise((resolve, reject) => {

    let token = "";
    token = wx.getStorageSync('openid')

    header = type == 'GET' ? { 'Token': token, 'X-Requested-With': 'XMLHttpRequest', "Accept": "application/json", "Content-Type": "application/json; charset=UTF-8" } : { 'Token': token, 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },


      uni.request({
        method: type,
        url: baseUrl + url,
        data: data,
        header: header,
        dataType: 'json',
      }).then((response) => {
        setTimeout(function () {
          uni.hideLoading();
        }, 200);
        let [error, res] = response;
        resolve(res.data);
      }).catch(error => {
        let [err, res] = error;
        reject(err)
      })
  });
}

export default request
