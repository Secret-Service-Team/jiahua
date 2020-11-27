<template>
	<view>
		<view class="top">
			<view class="top-left">
				<view class="title">不紧急但重要</view>
				<view class="setting">
					<view v-for="(item,index) in top_left_messages" :key="index">{{item}}</view>
				</view>
			</view>
			<view class="top-right">
				<view class="title">紧急且重要</view>
				<view class="setting">
					<view v-for="(item,index) in top_right_messages" :key="index">{{item}}</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-left">
				<view class="title">不紧急不重要</view>
				<view class="setting">
					<view v-for="(item,index) in bottom_left_messages" :key="index">{{item}}</view>
				</view>
			</view>
			<view class="bottom-right">
				<view class="title">紧急不重要</view>
				<view class="setting">
					<view v-for="(item,index) in bottom_right_messages" :key="index">{{item}}</view>
				</view>
			</view>
		</view>
		<view class="shuzhi" :class="shuzhi_style" v-show="shuzhi_flag">
			<img src="~@/static/xiangxian/up.png" alt="">
			<view class="shugang"></view>
		</view>
		<view class="shuiping" v-show="shuiping_flag">
			<img src="~@/static/xiangxian/right.png" alt="" class="right">
			<view class="henggan"></view>
			<img src="~@/static/xiangxian/circle.png" alt="" class="circle">
		</view>
		<view class="addnew" @click="jumptoadd()  ">
			<img src="~@/static/xiangxian/add.png"></img>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shuzhi_flag: false,
				shuzhi_style: [],
				shuiping_flag: false,
				top_left_messages: [],
				top_right_messages: [],
				bottom_left_messages: [],
				bottom_right_messages: [],
				recordDate:'',
				openid:''
			}
		},
		onShow() {
			setTimeout(() => {
				this.shuzhi_flag = true
				this.shuzhi_style.push('slide-top')
			}, 1000)
			setTimeout(() => {
				this.shuiping_flag = true
			}, 1500)

		},
		onLoad(){
			const date = new Date();
			var day = date.getDate()
			var month = date.getMonth() + 1
			this.recordDate = date.getFullYear() + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' +day)

		},
		mounted() {
			this.openid = wx.getStorageSync('openid')
			this.huoquxiangxianxinxi1()
			this.huoquxiangxianxinxi2()
			this.huoquxiangxianxinxi3()
			this.huoquxiangxianxinxi4()
		},
		methods: {
			huoquxiangxianxinxi1() {
				const that = this
				console.log('in 4')
				console.log(that.openid)
				uni.request({
					url: 'https://blog.surfly.top/jihua/xiangxian1/', //仅为示例，并非真实接口地址。
					data: {
						openid: that.openid,
						starttime:this.recordDate,
					},
					method: 'POST',
					success: (res) => {
						for(var i=0;i<res.data.data.length;i++)
						   this.top_right_messages[i]=(res.data.data[i].whattodo)
					}
				});
			},
			huoquxiangxianxinxi2() {
				const that = this
				uni.request({
					url: 'https://blog.surfly.top/jihua/xiangxian2/', //仅为示例，并非真实接口地址。
					data: {
						openid: that.openid,
						starttime:this.recordDate,
					},
					method: 'POST',
					success: (res) => {
					  for(var i=0;i<res.data.data.length;i++)
						 this.top_left_messages[i]=(res.data.data[i].whattodo)
					}
				});
			},
			huoquxiangxianxinxi3() {
				const that = this
				uni.request({
					url: 'https://blog.surfly.top/jihua/xiangxian3/', //仅为示例，并非真实接口地址。
					data: {
						openid: that.openid,
						starttime:this.recordDate,
					},
					method: 'POST',
					success: (res) => {
						for(var i=0;i<res.data.data.length;i++)
						   this.bottom_left_messages[i]=(res.data.data[i].whattodo)
					}
				});
			},
			huoquxiangxianxinxi4() {
				const temp = {
						openid: this.openid,
						starttime:this.recordDate,
					}
				uni.request({
					url: 'https://blog.surfly.top/jihua/xiangxian4/', //仅为示例，并非真实接口地址。
					data: temp,
					method: 'POST',
					success: (res) => {
						for(var i=0;i<res.data.data.length;i++)
						   this.bottom_right_messages[i]=(res.data.data[i].whattodo)
						 console.log(this.openid)
					}
				});
			},
			jumptoadd() {
				uni.navigateTo({
					url: "../addnote/addnote"
				});
			},
		}
	}
</script>  

<style>
	.setting {
		margin-top: 20rpx;
		margin-left: 80rpx;
		height: 60%;
		font-weight: bold;
	}

	.setting view {
		margin-top: 30rpx;
	}

	.title {
		margin-top: 45rpx;
		margin-left: 80rpx;
	}

	.top {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 600rpx;
	}

	.top-left {
		width: 50%;
		height: 100%;

		color: rgb(211, 170, 102);
	}

	.top-right {
		width: 50%;
		height: 100%;

		color: rgb(204, 126, 121);
	}

	.bottom {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 600rpx;
	}

	.bottom-left {
		width: 50%;
		height: 100%;

		color: rgb(167, 214, 244);
	}

	.bottom-right {
		width: 50%;
		height: 100%;

		color: rgb(116, 166, 144); 
	}

	.shuzhi img {
		width: 55rpx;
		height: 55rpx;
		position: fixed;
		top: 0;
		left: 350rpx;
	}

	.shugang {
		position: fixed;
		top: 40rpx;
		width: 9rpx;
		height: 86%;
		background-color: rgb(51, 51, 51);
		left: 375rpx;
	}

	.right {
		width: 55rpx;
		height: 55rpx;
		position: fixed;
		top: 47.5%;
		right: 0;
	}

	.circle {
		left: 5rpx;
		width: 35rpx;
		height: 35rpx;
		position: fixed;
		top: 48.2%;
	}

	.henggan {
		position: fixed;
		top: 49.3%;
		width: 90%;
		height: 9rpx;
		background-color: rgb(51, 51, 51);
		right: 43rpx;
	}

	.addnew {
		position: fixed;
		bottom: 2%;
		margin: 0 auto;
		width: 100rpx;
		left: 326rpx;
		z-index: 6;
	}

	.addnew img {
		width: 100rpx;
		height: 100rpx;

	}

	.slide-top {
		-webkit-animation: slide-top 10s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: slide-top 10s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@-webkit-keyframes slide-top {
		0% {
			bottom: -800rpx;
		}

		100% {
			bottom: 0rpx;
		}
	}

	@keyframes slide-top {
		0% {
			bottom: -800rpx;
		}

		100% {
			bottom: 0rpx;
		}
	}
</style>
