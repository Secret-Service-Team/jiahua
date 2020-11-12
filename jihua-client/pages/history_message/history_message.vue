<template>
	<view class="history_message">
		<h1 style="font-weight: bold; margin-left: 42rpx; font-size: 50rpx;">历史统计</h1>
		<view class="choice_d_w_m">
			<view>日</view>
			<view>周</view>
			<view>月</view>
		</view>
		<view class="total_record">
			<view class="record_son">
				<view>完成次数</view>
				<view>{{times_of_finished}}</view>
			</view>
			<view class="record_son">
				<view>
					时长
				</view>
				<view>{{times_of_total>=3600?
				' '+(Math.floor(times_of_total/3600)+' h '+(Math.floor(times_of_total/60-Math.floor(times_of_total/3600)*60))+' min')
				:
				('  '+Math.floor(times_of_total/60)+' min')}}
				</view>
			</view>
			<view class="record_son">
				<view>暂停次数</view>
				<view>
					{{times_of_pause}}
				</view>
			</view>
		</view>

	</view>
</template>
	<script>
		export default {
			data() {
				return {
					times_of_finished: 3, //完成次数
					times_of_total: 26060, //完成总时长
					times_of_pause: 0, //暂停次数
				};
			},
			methods: {}
		};
	</script>

	<style>
		.choice_d_w_m {
			display: flex;
			width: 180rpx;
			margin-left: 50rpx;
			margin-top: 40rpx;
			justify-content: space-around;
		}

		.choice_d_w_m view {
			border: 1rpx solid black;
			width: 60rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			font-weight: bold;
		}

		.choice_d_w_m view:first-child {
			border-top-left-radius: 30rpx;
			border-bottom-left-radius: 30rpx;
			padding-left: 10rpx;
			border-right: 0rpx;
		}

		.choice_d_w_m view:nth-child(3) {
			border-top-right-radius: 30rpx;
			border-bottom-right-radius: 30rpx;
			padding-right: 10rpx;
			border-left: 0rpx;
		}

		.total_record {
			display: flex;
			width: 500rpx;
			margin: 40rpx auto;
			justify-content: space-around;
		}

		.total_record .record_son {
			border: 1rpx solid black;
			width: 150rpx;
			height: 100rpx;
			line-height: 50rpx;
			text-align: center;
			font-weight: bold;
		}

		.total_record .record_son:nth-child(2) {
			width: 200rpx;
		}

		.total_record .record_son:first-child {
			border-top-left-radius: 30rpx;
			border-bottom-left-radius: 30rpx;
			border-right: 0rpx;
		}

		.total_record .record_son:nth-child(3) {
			border-top-right-radius: 30rpx;
			border-bottom-right-radius: 30rpx;
			border-left: 0rpx;
		}
	</style>
