<template>
	<view>
		<view class="top">
			<view class="left">
				<view>
					本周支出 : {{week.toFixed(2)}}
				</view>
				<view>
					本月支出 : {{month.toFixed(2)}}
				</view>
			</view>
			<view class="right">
				<view>
					本周平均每天支出 : {{weekavg.toFixed(2)}}
				</view>
				<view>
					本月平均每天支出 : {{monthavg.toFixed(2)}}
				</view>
			</view>
		</view>
		
		<view class="table">
			图表
		</view>
		
		<view class="rank">
			消费支出排行榜
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				month:500.00,
				week:150.00,
				monthavg:55.55,
				weekavg:66.66,
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.top{
		display: flex;
		justify-content: space-around;
		height: 150rpx;
		/* padding-top: 30rpx; */
	}
	.top .left{
		border: solid rgba(128,128,128,0.6) 5rpx;
		border-radius: 15rpx;
		margin-left: 20rpx;
		width: 275rpx;
		box-sizing: border-box;
		padding-left: 5rpx;
		padding-top: 28rpx;
		/* padding: 0 auto; */
		
		/* flex:column; */
	}

	.top .right{
		border: solid rgba(128,128,128,0.6) 5rpx;
		border-radius: 15rpx;
		margin-right: 20rpx;
		width: 415rpx;
		box-sizing: border-box;
		padding-left: 20rpx;
		padding-top: 28rpx;
	
	}
	
	.table{
		width: 700rpx;
		height: 400rpx;
		border: solid rgba(128,128,128,0.8) 5rpx;
		border-radius: 15rpx;
		margin: 0 auto;
		margin-top: 30rpx;
		
	}
	
</style>
