<template>
	<view class="detail-item">
		<view class="info">
			<view class="date">
				{{listItem.date}}
			</view>
			<view class="io">
				该日支出收入（待完成
			</view>
		</view>
		<view class="list"  v-for="(item2,index2) in listItem.detail" :key="index2">
			<view class="listleft">
				{{item2.type}} : {{item2.thing}}
			</view>
			<view class="listright">
				{{item2.money.toFixed(2)}}
			</view>
			
		</view>
	</view>
</template>

<script>
	export default	{
		props: ['listItem'],
		mounted() {
			console.log(this.listItem);
		},
	}
</script>

<style scoped>
	.detail-item {
		border: black 2rpx solid;
		border-radius: 15rpx;
		margin-bottom: 30rpx;
		padding-bottom: 30rpx;
	}
	.info{
		margin-top: 15rpx;
		margin-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
	}
	.info .date{
		margin-left: 20rpx;
		font-size: 40rpx;
	}
	.info .io{
		margin-right: 20rpx;
		font-size: 30rpx;
		line-height: 30rpx;
		margin-top: 10rpx;
		
	}
	
	.list{
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
	.list .listleft{
		margin-left: 60rpx;
	}
	.list .listright{
		margin-right: 60rpx;
	}
</style>
