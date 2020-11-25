<template>
	<view>

		<view class="top-container">

			<view class="title">
				编辑代办
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


			<view class="save" @click="add">
				<img src="../../static/beiwang/对.png" alt="" />
			</view>
			<view class="kill" @click="kill">
				<img src="../../static/beiwang/叉号.png" alt="" />
			</view>
		</view>
	</view>



</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	export default {
		components: {

			uniTag
		},
		data() {
			return {
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
				sty: '',

				flag: '',
				detial: '',
				demo: {
					"thingtitle": '',
					"sty": '',

					"recordTime": '0130',
					"recordDate": '20201106',
					"flag": '',
					"detial": '',
				}
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
			this.recordTime = `${date.getHours()}-${date.getMinutes() + 1}`;
			this.recordDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

		},
		methods: {
			add() {
				
				this.demo.thingtitle = this.thingtitle
				this.demo.sty1 = this.sty1

				this.demo.recordTime = this.recordTime,
					this.demo.recordDate = this.recordDate,

					this.demo.sty = this.sty,

					this.demo.flag = this.flag,
					this.demo.detial = this.detial,
					console.log(this.demo)
				uni.showModal({
					title: '提示',
					content: '是否修改代办呢~',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
				})
			},
			xiangxian1() {
				if (this.style1.length != 0) return
				this.sty = 1
				this.style1.push("change")
				this.style2.pop("change")
				this.style3.pop("change")
				this.style4.pop("change")
			},
			xiangxian2() {
				if (this.style2.length != 0) return
				this.sty = 2
				this.style2.push("change")
				this.style1.pop("change")
				this.style3.pop("change")
				this.style4.pop("change")
			},
			xiangxian3() {
				if (this.style3.length != 0) return
				this.style3.push("change")
				this.sty = 3

				this.style2.pop("change")
				this.style1.pop("change")
				this.style4.pop("change")
			},
			xiangxian4() {
				if (this.style4.length != 0) return
				this.sty = 4
				this.style4.push("change")
				this.style2.pop("change")
				this.style1.pop("change")
				this.style3.pop("change")
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
	.change {
		background-color: #000000;
		color: white;
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

		width: 700rpx;
		height: 650rpx;
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
