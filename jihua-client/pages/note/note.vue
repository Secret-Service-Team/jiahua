<template>
	<view>
		<view class="topBar">
			<view class="top-container">
				<view class="topleft">
					<view class="to bcalendar" @click="jumptobcalender() ">
						<img src="../../static/beiwang/日历.png" alt="" />
					</view>
					
				</view>
				<view class="topright"> 四象限 </view>

			</view>
			<view class="middle">
				<view class="midleft">

					<checkbox class="db1" color="#000" checked="true" style="transform:scale(0.5)"/>待办事项1


				</view>

				<view class="midright">





				</view>

			</view>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				flag_hide: false,
			}
		},
		methods: {
			hide() {
				this.flag_hide = !this.flag_hide
			},
			jumptobcalender() {
				uni.navigateTo({
					url: "../bcalendar/bcalendar"
				});
			},
		}
	}
</script>

<style>
	.topBar {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		width: 100%;
		z-index: 10;
		flex-direction: column;
	}

	.top-container {
		display: flex;
		margin-top: 15rpx;
		/* flex:1 1 0; */
		justify-content: space-between;
	}

	.topright {
		/* flex-flow: space-between; */
		margin-top: 33rpx;
		margin-right: 33rpx;
		font-size: 15px;
		border: 1rpx solid black;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		width: 150rpx;
		border-radius: 30rpx;
	}

	.topleft img {
		width: 70rpx;
		height: 70rpx;
		margin-top: 19rpx;
		margin-left: 33rpx;
		
	}

	.topleft {
		/* flex-flow: space-between; */
		margin-top: 8rpx;
		margin-left: 33rpx;
		font-size: 15px;

		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		width: 150rpx;

	}

	.midleft {
		
	   margin-top: 140rpx;
		/* flex:1 1 0; */
		margin-left: 100rpx;
		
		font-size: 12px;
	}

	.db1 {
		
	}

	.intotal {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		font-size: 22px;
		margin-bottom: 20rpx;
	}
</style>
