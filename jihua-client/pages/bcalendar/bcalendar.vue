<template>
	<view>
		<view class="calendar">
			<uni-calendar :insert="true" :lunar="true" :start-date="'2019-1-1'" :end-date="'2019-5-20'" @change="change" />
		</view>

		<view class="daylist" v-show="display">
			<view class="top">
				
			</view>
			
			
			<view class="list">
				<view class="record" v-for="(item,index) in detail" :key="index">
					<view class="rl">
						{{item.type}} : {{item.thing}}
					</view>
					<view class="rr">
						<checkbox class="db1" color="#000" checked="true" style="transform:scale(0.5)"/>待办事项
					</view>
				</view>
			</view>
			<view class="add" @click="jumptobcalender() ">
				
					<img src="../../static/beiwang/添加.png" alt="" />
				
			</view>

		</view>



	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				display: false,
				income: 0.00,
				pay: 125.00,
				today: {},
				detail: [{
						"type": "上午",
						"thing": "9:00",
						"cost": -30.00
					},
					{
						"type": "下午",
						"thing": "5:00",
						"cost": -30.00
					},
					
				]
			}
		},
		methods: {
			change(e) {
				this.display = true;
				console.log(e);
				this.today = e;
			}
		}
	}
</script>

<style>
	.calendar {
		width: 700rpx;
		margin: 0 auto;
		border: rgba(128, 128, 128, 0.8) solid 5rpx;
		border-radius: 15rpx;
		overflow: hidden;
	}
	.daylist{
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
	.add img{
		width: 70rpx;
		height: 70rpx;
		margin-left: 320rpx;
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
