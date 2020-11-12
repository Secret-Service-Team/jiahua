<template>

	<view class="history">
		<h1 style="font-weight: bold; margin-left: 42rpx; font-size: 50rpx;">备忘中心</h1>
		<view class="go_to_history" @click="go_to_history_message">
			<view class="tel">
				<img src="~@/static/icon/history.png">
				<view>历史统计</view>
			</view>
			<view><img src="~@/static/icon/right.png" class="right"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			go_to_history_message() {
				uni.navigateTo({
					url: "../history_message/history_message"
				})
			}
		}
	};
</script>

<style>
	.history {
		height: 100%;
		background-color: white;
	}

	.tel {
		display: flex;
		justify-content: space-between;
	}

	.tel view {
		height: 60rpx;
		line-height: 40rpx;
	}

	.go_to_history {
		margin: 35rpx auto;
		height: 60rpx;
		width: 93%;
		line-height: 60rpx;
		padding-top: 15rpx;
		display: flex;
		justify-content: space-between;
	}

	.go_to_history img {
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
		margin-left: 20rpx;
	}
</style>
