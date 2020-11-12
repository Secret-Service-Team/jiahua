<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		mounted() {
			wx.login({
			  success (res) {
			    if (res.code) {
			      wx.request({
			        url: 'http://localhost:3000/api/users/login',
			        data: {
			          code: res.code
			        },
					success(res2) {
						console.log(res2);
						wx.setStorage({
						  key: "openid",
						  data: res2.data.openid
						})
						wx.setStorage({
						  key: "session_key",
						  data: res2.data.session_key
						})
					}
			      })
			    } else {
			      console.log('登录失败！' + res.errMsg)
			    }
			  }
			})
		},
	};
</script>

<style>
	/*每个页面公共css */
</style>
