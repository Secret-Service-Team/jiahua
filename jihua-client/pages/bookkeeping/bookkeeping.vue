<template>
	<view>
		<view class="top-container">
			<view class="topleft">
				收支明细
			</view>
			<view class="topright">
				<view class="pre-set">
					暂无图
				</view>
				<view class="table">
					暂无图
				</view>
				<view class="calendar">
					暂无图
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
		
		<view class="detail" v-for="(item1,index1) in list" :key="index1">
			<view class="info">
				<view class="date">
					{{item1.date}}
				</view>
				<view class="io">
					该日支出收入（待完成
				</view>
			</view>
			
			<view class="list"  v-for="(item2,index2) in item1.detail" :key="index2">
				<view class="listleft">
					{{item2.type}} : {{item2.thing}}
				</view>
				<view class="listright">
					{{item2.money.toFixed(2)}}
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
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
				},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
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
	.detail{
		width: 700rpx;
		margin: 0 auto;
		border: black 2rpx solid;
		border-radius: 15rpx;
		margin-bottom: 30rpx;
		font-size: 22px;
		padding-bottom: 30rpx;
	}
	.info{
		margin-top: 15rpx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 30rpx;
	}
	.info .date{
		margin-left: 20rpx;
	}
	.info .io{
		margin-right: 20rpx;
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
