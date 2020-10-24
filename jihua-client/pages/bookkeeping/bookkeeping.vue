<template>
	<view>
		<view class="topBar">
			<view class="top-container">
				<view class="topleft">
					收支明细
				</view>
				<view class="topright">
					<view class="pre-set">
						<img src="../../static/icon/calender.png" alt="">
					</view>
					<view class="table">
						<img src="../../static/icon/table.png" alt="">
					</view>
					<view class="calendar">
						<img src="../../static/icon/presell.png" alt="">
					</view>
				</view>
			</view>
			
			<view class="intotal">
				<view class="pay">
					总支出 : {{pay.toFixed(2)}}
				</view>
				<view class="income">
					总收入 : {{income.toFixed(2)}}
				</view>
			</view>
		</view>
		
		<view class="details-wrapper">
			<view class="details" v-for="(item1,index1) in list" :key="index1">
					<detail :listItem="item1"></detail>
			</view>
		</view>
		
		<view class="add-detail-wrapper">
			<view class="add-detail">
				<view class="detail-row"></view>
				<view class="detail-column"></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import detail from '../../compoments/detail.vue'
	export default {
		components: {
			detail
		},
		data() {
			return {
				pay:500.00,
				income:300.00,
				list:[{
					date:"10月11日",
					detail:[{type:"吃饭",thing:'沙茶面',money:-30},
					{type:"购物",thing:'生活用品',money:-60}]
				},
				{
					date:"10月10日",
					detail:[{type:"吃饭",thing:'沙茶面',money:-30},
					{type:"购物",thing:'生活用品',money:-60}]
				},				{
					date:"10月10日",
					detail:[{type:"吃饭",thing:'沙茶面',money:-30},
					{type:"购物",thing:'生活用品',money:-60}]
				},				{
					date:"10月10日",
					detail:[{type:"吃饭",thing:'沙茶面',money:-30},
					{type:"购物",thing:'生活用品',money:-60}]
				},				{
					date:"10月10日",
					detail:[{type:"吃饭",thing:'沙茶面',money:-30},
					{type:"购物",thing:'生活用品',money:-60}]
				},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.topBar {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		width: 100%;
		z-inde: 10;
	}
	.top-container{
		display: flex;
		margin-top: 15rpx;
		/* flex:1 1 0; */
		justify-content: space-between;
	}
	.topleft{
		/* flex-flow: space-between; */
		margin-left: 15rpx;
		font-size: 22px;
	}
	.topright{
		display: flex;
		/* font-size: 18px; */
		
	}
	.topright view{
		margin-left: 8rpx;
		width: 55rpx;
		height: 55rpx;
		margin-right: 20rpx;
	}
	
	.topright view img {
		width: 100%;
		height: 100%;
	}
	
	.intotal{
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		font-size: 22px;
		margin-bottom: 20rpx;
	}
	.pay{
		margin-left: 45rpx;
	}
	.income{
		margin-right: 45rpx;
	}
	
	.details-wrapper {
		margin-top: 220rpx;
		z-index: 9;
		margin-bottom: 160rpx;
	}
	
	.details{
		width: 700rpx;
		margin: 0 auto;
	}
	
	.add-detail-wrapper {
		width: 100%;
		height: 150rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 8;
	}
	
	.add-detail {
		background-color: rgb(16,16,16);
		border-radius: 30px;
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx auto;
		position: relative;
	}
	
	.add-detail .detail-column {
		height: 70rpx;
		width: 10rpx;
		background-color: #fff;
		position: absolute;
		left: 44rpx;
		top: 14rpx;
	}
	
	.add-detail .detail-row {
		height: 10rpx;
		width: 70rpx;
		background-color: #fff;
		position: absolute;
		top: 47rpx;
		left: 15rpx;
	}
</style>
