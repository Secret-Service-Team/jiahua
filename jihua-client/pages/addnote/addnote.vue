<template>
	<view>

		<view class="top-container">

			<view class="title">
				新建待办
			</view>




		</view>
		<view class="middle">
			<view class="group2">
				<view class="title2-left">
					<view class="title2-left-1">事</view>
					<view class="title2-left-1">项</view>
					<view class="title2-left-1">标</view>
					<view class="title2-left-1">题</view>
				</view>
				<view class="title2-right">
					<input v-model="thingtitle" type="text" placeholder="请输入事项标题">
				</view>
			</view>
			<view class="group3">
				<view class="title3-left">

					<view class="title3-left-1">分</view>
					<view class="title3-left-1"> </view>
					<view class="title3-left-2">类</view>
				</view>
				<view class="title3-right">
					<view class="xiangxian1" :class="style1" @click="xiangxian1">一象限</view>
					<view class="xiangxian2" :class="style2" @click="xiangxian2">二象限</view>
					<view class="xiangxian3" :class="style3" @click="xiangxian3">三象限</view>
					<view class="xiangxian4" :class="style4" @click="xiangxian4">四象限</view>
				</view>
			</view>
			<view class="group4">
				<view class="title4-left">
					<view class="title4-left-1">标</view>
					<view class="title4-left-1"> </view>
					<view class="title4-left-2">签</view>
				</view>
				<view class="title4-right">
					<input v-model="flag" type="text" placeholder="请输入3-5个字">
				</view>
			</view>

			<view class="group6">
				<picker mode="date" :value="recordDate" @change="bindDateChange">
					<view class="picker">
						<view class="title5-left-1">日</view>
						<view class="title5-left-1"> </view>
						<view class="title5-left-2">期</view>
						<span class="span-date">{{recordDate}}</span>
					</view>
				</picker>
			</view>
			<view class="group6">
				<picker mode="time" :value="recordTime" @change="bindTimeChange">
					<view class="picker">
						<view class="title5-left-1">时</view>
						<view class="title5-left-1"> </view>
						<view class="title5-left-2">间</view>
						<span class="span-time">{{recordTime}}</span>
					</view>
				</picker>
			</view>
			<view class="group5">
				<view class="title5-left">
					<view class="title5-left-1">描</view>
					<view class="title5-left-1"> </view>
					<view class="title5-left-2">述</view>
				</view>
				<view class="title5-right">
					<input v-model="detial" type="text" placeholder="请输入具体标签">
				</view>
			</view>
		</view>
		<view class="buttom">

			<view class="kill" @click="exit">
				<img src="~@/static/beiwang/退出.png" alt="" />
			</view>
			<view class="save" @click="add">
				<img src="~@/static/beiwang/对.png" alt="" />
			</view>
		</view>
	</view>



</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	import bus from '../../common/bus.js'
	export default {
		components: {

			uniTag
		},
		data() {
			return {
				id: 0,
				flag_hide: false,
				time: 0,
				isclick: true,
				thingtitle: '',
				recordTime: '0130',
				recordDate: '20201106',
				style1: [],
				style2: [],
				style3: [],
				style4: [],
				flag: '',
				sty: 0,
				flag: '',
				detial: '',
				openid: '',
			}
		},
		onPageScroll() {
			if (this.isclick) {
				this.timer();
				this.$refs.timeline.getScroll();
			}
		},
		onLoad() {
			const date = new Date();
			var Hours = date.getHours()
			var Minutes = date.getMinutes()
			var day = date.getDate()
			var month = date.getMonth() + 1
			this.recordTime = (Hours >= 10 ? Hours : '0' + Hours) + ':' + (Minutes >= 10 ? Minutes : '0' + Minutes)
			this.recordDate = date.getFullYear() + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' +day)
			
		},
		onHide() {
			
		},
		mounted() {
			this.openid = wx.getStorageSync('openid')
			console.log(this.openid)
		},
		methods: {
			add() {
				if (this.thingtitle == "") {
					uni.showModal({
						title: '提示',
						content: '标题没写鸭~',
						success: function(res) {
							if (res.confirm) {



							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						},
					})
					return
				}
				if (this.sty == 0) {
					uni.showModal({
						title: '提示',
						content: '象限是不是忘了？',
						success: function(res) {
							if (res.confirm) {



							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						},
					})
					return
				}
				if (this.flag == 0) {
					uni.showModal({
						title: '提示',
						content: '待办是什么标签的呢？',
						success: function(res) {
							if (res.confirm) {



							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						},
					})
					return
				}

				const that = this

				uni.showModal({
					title: '提示',
					content: '是否添加待办呢~',


					// "thingtitle": '',
					// "sty": '',
					// "openid": '123',
					// "recordTime": '0130',
					// "recordDate": '20201106',
					// "flag": '',
					// "detial": '',
                     
					success: function(res) {
						if (res.confirm) {
							
							uni.request({
								url: 'https://blog.surfly.top/jihua/addtodo/', //仅为示例，并非真实接口地址。
								data: {
									openid:that.openid,
									thingtitle: that.thingtitle,
									sty: that.sty,
									recordTime: that.recordTime,
									recordDate: that.recordDate,
									flag: that.flag,
									detial: that.detial,
								},
								method: 'POST',
							})
							success: (res) => {
									bus.$emit("aMsg", res.data);
									//console.log(res.data)
								},
							uni.navigateBack({
								delta: 1
							})

						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
				})
			},
			exit() {


				uni.showModal({
					title: '提示',
					content: '信息还未保存就要离开了吗？',
					success: function(res) {
						if (res.confirm) {
							uni.navigateBack({
								delta: 1
							})

						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
				})
			},
			xiangxian1() {
				if (this.style1.length != 0) return
				this.sty = 1
				this.style1.push("change1")
				this.style2.pop("change2")
				this.style3.pop("change3")
				this.style4.pop("change4")
			},
			xiangxian2() {
				if (this.style2.length != 0) return
				this.sty = 2
				this.style2.push("change2")
				this.style1.pop("change1")
				this.style3.pop("change3")
				this.style4.pop("change4")
			},
			xiangxian3() {
				if (this.style3.length != 0) return
				this.style3.push("change3")
				this.sty = 3

				this.style2.pop("change2")
				this.style1.pop("change1")
				this.style4.pop("change4")
			},
			xiangxian4() {
				if (this.style4.length != 0) return
				this.sty = 4
				this.style4.push("change4")
				this.style2.pop("change2")
				this.style1.pop("change1")
				this.style3.pop("change3")
			},
			timer() {
				if (this.time > 0) {
					this.isclick = false;
					this.time--;
					setTimeout(this.timer, 1)
				} else {
					this.isclick = true;
					this.time = 10
				}
			},

			hide() {
				this.flag_hide = !this.flag_hide
			},
			jumptobcalender() {
				uni.navigateTo({
					url: "../bcalendar/bcalendar"
				});
			},
			jumptoadd() {
				uni.navigateTo({
					url: "../addnote/addnote"
				});
			},
			bindDateChange(e) {

				this.recordDate = e.target.value;
				console.log(e.target)
			},
			bindTimeChange(e) {
				this.recordTime = e.target.value;
				console.log(e.target)
			},


		}
	}
</script>

<style>
	.change1 {
		background-color: rgb(211, 170, 102);
		color: white;
		border: 1rpx solid white !important;
	}

	.change2 {
		background-color: rgb(206, 128, 121);
		color: white;
		border: 1rpx solid white !important;
	}

	.change3 {
		background-color: rgb(167, 214, 244);
		color: white;
		border: 1rpx solid white !important;
	}

	.change4 {
		background-color: rgb(116, 166, 145);
		color: white;
		border: 1rpx solid white !important;
	}


	.top-container {
		position: flex;
		top: 0;
		left: 0;
		background-color: #FFF;
		width: 1000rpx;
		height: 150rpx;
		display: flex;
		margin-top: 0rpx;

		/* flex:1 1 0; */
		justify-content: space-between;
		z-index: 100;
	}

	.middle {

		width: 760rpx;
		height: 760rpx;
		margin-top: 20rpx;
		margin-left: 13rpx;
		background-color: #FFF;
	}

	.group2 {

		width: 760rpx;
		height: 100rpx;
		margin-left: 30rpx;

		display: flex;
		background-color: #FFF;
	}

	.group3 {

		width: 760rpx;
		height: 100rpx;
		margin-left: 30rpx;

		display: flex;
		background-color: #FFF;
	}

	.group4 {
		width: 460rpx;
		height: 100rpx;
		margin-left: 30rpx;

		display: flex;
		background-color: #FFF;
	}

	.span-date {
		font-family: "agency fb""arial, helvetica, sans-serif";
		font-weight: 300;
		margin-left: 20rpx;
		background-color: #FFF;
		width: 700rpx;
		left: 0rpx;
		top: 0rpx;
		z-index: 5;
		border: medium none;
		color: rgb(16, 16, 16);
		font-size: 35rpx;
		text-align: left;
		font-weight: bold;
		font-style: normal;
		opacity: 1;
		text-overflow: ellipsis;
		margin-left: 95rpx;
	}

	.span-time {
		font-family: "agency fb""arial, helvetica, sans-serif";
		font-weight: 300;
		margin-left: 20rpx;
		background-color: #FFF;
		width: 700rpx;
		height: 50rpx;
		left: 0rpx;
		top: 0rpx;
		z-index: 5;
		border: medium none;
		color: rgb(16, 16, 16);
		font-size: 35rpx;
		text-align: left;
		font-weight: bold;
		font-style: normal;
		opacity: 1;
		text-overflow: ellipsis;
		margin-left: 95rpx;
	}

	.group5 {
		width: 460rpx;
		height: 100rpx;
		margin-left: 30rpx;

		display: flex;
		background-color: #FFF;
	}

	.group6 {
		width: 460rpx;
		height: 100rpx;
		margin-left: 30rpx;

		display: flex;
		background-color: #FFF;
	}

	.title {


		font-weight: 700rpx;
		font-size: 40rpx;
		line-height: 30rpx;
		text-align: center;
		font-weight: bold;

		margin-top: 63rpx;
		margin-left: 33rpx;

	}

	.title2-left {
		display: flex;


		width: 130rpx;
		height: 50rpx;

		color: rgb(153, 153, 153);
		font-style: normal;

		margin-left: 13rpx;

	}

	.title2-left-1 {
		padding: 0rpx 0.5rpx;

	}

	.title2-right {


		width: 700rpx;
		height: 50rpx;
		left: 0rpx;
		top: 0rpx;
		z-index: 5;
		border: medium none;
		color: rgb(16, 16, 16);
		font-size: 35rpx;
		text-align: left;
		font-weight: bold;
		font-style: normal;
		opacity: 1;
		text-overflow: ellipsis;
		margin-left: 75rpx;
	}

	.title3-left {
		display: flex;


		width: 130rpx;
		height: 50rpx;

		color: rgb(153, 153, 153);
		font-style: normal;

		margin-left: 13rpx;


	}

	.xiangxian1 {}

	.title3-left-1 {
		padding: 0rpx 6rpx;

	}

	.title3-left-2 {
		padding: 0rpx 6rpx;
	}

	.title3-right {

		background-color: #FFF;
		display: flex;
		width: 450rpx;
		height: 50rpx;
		left: 0rpx;
		top: 0rpx;
		z-index: 5;
		justify-content: space-between;


		font-size: 26rpx;

		font-weight: bold;
		font-style: normal;


		margin-left: 68rpx;

	}

	.title3-right view {
		border: 1rpx solid black;
		border-radius: 20rpx;
		width: 92rpx;
		text-align: center;
		height: 50rpx;
		line-height: 50rpx;
	}

	.title4-left {
		display: flex;


		width: 130rpx;
		height: 50rpx;

		color: rgb(153, 153, 153);
		font-style: normal;

		margin-left: 13rpx;

	}

	.title4-left-1 {
		padding: 0rpx 6rpx;

	}

	.title4-left-2 {
		padding: 0rpx 6rpx;
	}

	.title4-right {


		width: 700rpx;
		height: 50rpx;
		left: 0rpx;
		top: 0rpx;
		z-index: 5;
		border: medium none;
		color: rgb(16, 16, 16);
		font-size: 35rpx;
		text-align: left;
		font-weight: bold;
		font-style: normal;
		opacity: 1;
		text-overflow: ellipsis;
		margin-left: 95rpx;
	}

	.title5-left {
		display: flex;


		width: 130rpx;
		height: 50rpx;

		color: rgb(153, 153, 153);
		font-style: normal;

		margin-left: 13rpx;

	}

	.title5-left-1 {
		padding: 0rpx 6rpx;

	}

	.title5-left-2 {
		padding: 0rpx 6rpx;
	}

	.title5-right {

		background-color: #FF;
		width: 700rpx;
		height: 50rpx;
		left: 0rpx;
		top: 0rpx;
		z-index: 5;
		border: medium none;
		color: rgb(16, 16, 16);
		font-size: 35rpx;
		text-align: left;
		font-weight: bold;
		font-style: normal;
		opacity: 1;
		text-overflow: ellipsis;
		margin-left: 95rpx;
	}

	.picker {
		display: flex;

		background-color: #FFF;
		width: 630rpx;
		height: 50rpx;

		color: rgb(153, 153, 153);
		font-style: normal;

		margin-left: 13rpx;

	}

	.buttom {
		width: 630rpx;
		height: 50rpx;
		margin: 20rpx auto;
		background-color: #FFF;
		display: flex;
		justify-content: space-between;
	}

	.kill img {
		width: 70rpx;
		height: 70rpx;
		margin-top: 19rpx;
		margin-left: 33rpx;
	}

	.save img {
		width: 70rpx;
		height: 70rpx;
		margin-top: 19rpx;
		margin-left: 20rpx;
	}

	.intotal {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		font-size: 22rpx;
		margin-bottom: 20rpx;
	}
</style>
