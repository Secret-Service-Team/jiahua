<template>
	<view>
		<view class="topBar">
			<view>样式设置</view>
		</view>
		
		<view class="lines">
			<view class="style" >
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/setcolor.png" alt="" />
					<view class="title">菜单栏背景颜色</view>
				</view>
			</view>
			<view class="style">
				<view class="style-color">
					<img  src="~/static/personcenter_icon/blue.png" alt="/">
					<view class="title_2">蓝色</view>
				</view>
				<!-- <img  src="~/static/personcenter_icon/red.png" alt="/">
				<img  src="~/static/personcenter_icon/green.png" alt="/"> -->
			</view>
			
			
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

		}
	}
</script>

<style>
	.topBar {
		margin-top: 35rpx;
		margin-left: 25rpx;
		font-size: 52rpx;
	}
	
	.lines {
		display: flex;
		flex-direction: column;
		/* height: 600rpx; */
		justify-content: space-around;
		margin-top: 40rpx;
		/*border: 1rpx solid black;*/
	}
	.style {
		display: flex;
		justify-content: space-between;
		height: 100rpx;
		line-height: 100rpx;
		/* border: 2rpx solid #e3e3e3; */
	    /* border-top: 0; */
	}
	.style-son {
		display: flex;
		justify-content: space-around;
	}
	.key-icon {
		width: 40rpx;
		height: 40rpx;
		padding-top: 28rpx;
		margin-left: 25rpx;
	}
	.title {
		margin-left: 15rpx;
		font-size: 16px;
	}	

	.body {
		display: flex;
		justify-content: space-around;
		margin-left: 50rpx;
		margin-right: 50rpx;
		font-size: 15rpx;
		border-bottom: 2rpx solid #e3e3e3;
	}
	.style-color {
		display: flex;
		justify-content: space-around;
	}
	.style-color img {
		width: 40rpx;
		height: 40rpx;
		padding-top: 28rpx;
		margin-left: 30rpx;
	}
	.title_2 {
		font-size: 10rpx;
	}
	
</style>
