<template>
	<view>
		<view class="calendar">
			<uni-calendar :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="change" />
		</view>

		<view class="daylist" v-show="display">
			<view class="top">
				<view class="left">
					{{today}}
				</view>
				<view class="right">
					<view>
						支出:{{pay.toFixed(2)}}
					</view>

					<view>
						收入:{{income.toFixed(2)}}
					</view>
				</view>
			</view>
			
			
			<view class="list">
				<view class="record" v-for="(item,index) in detail" :key="item.fid">
					<view class="rl">
						{{ reflect[item.typeId] }}
					</view>
					<view class="rr">
						{{item.cost.toFixed(2)}}
					</view>
				</view>
			</view>


		</view>



	</view>
</template>

<script>
	import uniCalendar from '@/compoments/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniCalendar
		},
		mounted() {
			this.today = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
			this.getFlow(this.today)
		},
		data() {
			return {
				display: true,
				income: 0.00,
				pay: 125.00,
				today: {},
				detail: [
					{
						fid: "5fbe216897b05a3a70a43026",
						typeId: "entertainment",
						cost: 23
					}
				],
				reflect: {
					food:'食物',
					entertainment: '娱乐',
					traffic:'交通',
					shopping:'购物',
					study: '学习',
					bonus:'津贴',
					medicine:'医药',
					clothes:'衣物',
					daily:'日常',
					donate:'捐助',
					salary:'薪水',
					tour:'旅行'
				}
			}
		},
		methods: {
			change(e) {
				this.today = e.fulldate
				this.getFlow(e.fulldate)
			},
			getFlow(date) {
				this.$request('/bookkeeping/turnover/date', {
					date,
				}).then(res => {
					console.log(res)
					this.detail = res.flows
					this.pay = res.output
					this.income = res.income
				})
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
