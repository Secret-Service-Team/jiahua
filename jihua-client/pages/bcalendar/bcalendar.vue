<template>
	<view>
		<view class="calendar">
			<uni-calendar :insert="true" :lunar="true" :start-date="'2020-11-26'" :end-date="'2022-5-20'" @change="change" />
		</view>

		<view class="daylist" v-show="display">
			<view class="top">

			</view>

			<scroll-view >
			<view class="to bcalendar" >
				<view class="list">
					<view class="record" v-for="(item,index) in detail" :key="index">
						<view class="rl">
							{{item.thing}}
						</view>
						<view class="rr">
							<!-- <checkbox class="db1" color="#000" checked="true" style="transform:scale(0.5)"/> -->
							{{item.whattodo}}
						</view>
					</view>
				</view>
			</view>
			</scroll-view>
		</view>
		<!-- <view class="add">
			<img src="../../static/xiangxian/add.png" alt="">
		</view> -->
<img class="add" @click="jumptoadd()" src="~@/static/beiwang/添加.png" alt="" />

	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import timeLine from '../../components/xuan-timeLine/xuan-timeLine.vue'
	export default {
		components: {
			uniCalendar,
			timeLine
		},
		data() {
			return {
				display: false,
				income: 0.00,
				pay: 125.00,
				today: {},
				detail: [],
				recordDate: '',
				openid:''
			}
		},
		onLoad() {
			const date = new Date();
			var day = date.getDate()
			var month = date.getMonth() + 1
			this.recordDate = date.getFullYear() + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' +
				day)

		},
		mounted() {
			this.openid = wx.getStorageSync('openid')
		},
		onShow() {
			this.gettodaymessage()
		},
		methods: {
			gettodaymessage() {

				uni.request({
					url: 'https://blog.surfly.top/jihua/findtodo/', //仅为示例，并非真实接口地址。
					data: {
						openid: this.openid,
						starttime: this.recordDate
					},
					method: 'POST',
					success: (res) => {
						const that = this
						// console.log(res.data.data)
						//                   console.log(that.detail[0].thing)
						// console.log(res.data.data.length)
						// console.log(res.data.data[0].jihuatime)
						that.detail = []
						for (let i = 0; i < res.data.data.length; i++) {
							let temp = {};
							temp.thing = res.data.data[i].jihuatime;
							temp.whattodo = res.data.data[i].whattodo;
							that.detail.push(temp);
						}
					}
				});
			},
			jumptoadd() {
				uni.navigateTo({
					url: "../addnote/addnote"
				})
			},
			change(e) {
				this.display = true;
				console.log(e);
				this.today = e;
				var day = e.date
				var month = e.month
				this.recordDate = e.year + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day)
				uni.request({
					url: 'https://blog.surfly.top/jihua/findtodo/', //仅为示例，并非真实接口地址。
					data: {
						openid: this.openid,
						starttime: this.recordDate
					},
					method: 'POST',
					success: (res) => {
						// this.detail=[]
						console.log(res.data)
						const that = this
						// console.log(res.data.data)
						//                   console.log(that.detail[0].thing)
						// console.log(res.data.data.length)
						// console.log(res.data.data[0].jihuatime)
						that.detail = []
						for (let i = 0; i < res.data.data.length; i++) {
							let temp = {};
							temp.thing = res.data.data[i].jihuatime;
							temp.whattodo = res.data.data[i].whattodo;
							that.detail.push(temp);
						}
					}
				});
			},
			jumptoadd() {
				uni.navigateTo({
					url: "../addnote/addnote"
				})
			}
		}
	}
</script>

<style>


.add {
		position: fixed;
		bottom: 0;
		width: 70rpx;
		height: 70rpx;
		bottom: 50rpx;
		margin-left: 340rpx;
		margin-bottom: 0rpx;
	}

	/* .add img{
		width: 55rpx;
		height: 55rpx;
	} */
	.calendar {
		width: 700rpx;
		margin: 0 auto;
		border: rgba(128, 128, 128, 0.8) solid 5rpx;
		border-radius: 15rpx;
		overflow: hidden;
	}

	.daylist {
		border: rgba(128, 128, 128, 0.8) solid 5rpx;
		width: 700rpx;
		margin: 0 auto;
		border-radius: 15rpx;
		margin-top: 20rpx;
		/* margin-bottom: 20rpx; */
		padding-bottom: 20rpx;
	}

	.calendar uni-calendar {
		height: 100%;
		width: 100%;
	}

	.top {
		display: flex;
		/* margin-top: 20rpx; */
		width: 700rpx;
		margin: 0 auto;
		margin-top: 10rpx;
		/* border: rgba(128, 128, 128, 0.8) solid 5rpx; */
		/* border-radius: 15rpx; */
		justify-content: space-between;
		font-size: 35rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		/* height: 80rpx; */
		margin-bottom: 10rpx;
	}

	.top .left {
		margin-top: 20rpx;
	}

	.record {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding-left: 100rpx;
		padding-right: 100rpx;
		font-size: 40rpx;
		margin-bottom: 5rpx;
	}

	/* .record */
</style>
