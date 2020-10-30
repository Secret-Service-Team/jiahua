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
			<view class="describe">
				本月消费支出排行榜
			</view>
			<view class="no" v-for="(item,index) in rankno" :key='index' :style="{'width':(item.percent)*7+200+'rpx'}">
				<view class="no-index">{{index+1}}</view>
				
				<view class="rankinit">
				{{item.type}} {{item.num}}笔
				</view>
				
				<view class="per" :style="{'left':(item.percent)*7+250+'rpx'}">
				{{item.percent}}%
				</view>
			</view>
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
				rankno:[
					{"type":"餐饮","num":18,"percent":42.2},
					{"type":"生活用品","num":6,"percent":22.99},
					{"type":"网购","num":3,"percent":18.11}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
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
	.rank{
		margin-top: 30rpx;
	}
	.no{
		display: flex;
		justify-content: flex-start;
		width:700rpx ;
		margin-left: 25rpx;
		margin-bottom: 30rpx;
		background-color: rgba(128,128,128,0.6);
		height: 50rpx;
		line-height: 50rpx;
		/* box-sizing: border-box; */
	}
	.per{
		position: absolute;	
	}
	
	.no-index{
		height: 35rpx;
		width: 35rpx;
		font-size: 30rpx;
		background-color: white;
		position: relative;
		left: 10rpx;
		top: 8rpx;
		text-align: center;
		line-height: 35rpx;
	}
	.rankinit{
		margin-left: 25rpx;
	}
	.describe{
		width: 700rpx;
		margin: 0 auto;
		font-size: 50rpx;
		margin-bottom: 35rpx;
	}
</style>
