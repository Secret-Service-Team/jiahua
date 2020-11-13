<template>
	<view>
	
			<view class="top-container">
				<view class="topleft">
					<view class="to bcalendar" @click="jumptobcalender() ">
						<img src="../../static/beiwang/日历.png" alt="" />
					</view>
					
				</view>
				<view class="topright"> 四象限 </view>
				
			</view>
			<view class="middle">
							
				<time-line ref="timeline" location="center" ></time-line>
			
			
			
			
							
			
			</view>
		</view>

	

</template>

<script>
	import timeLine from '../../components/xuan-timeLine/xuan-timeLine.vue'
	export default {
		components:{
					timeLine
				},
		data() {
			return {
				flag_hide: false,
				time:0,
				isclick:true,
			}
		},
		onPageScroll() {
					if(this.isclick){
						this.timer();
						this.$refs.timeline.getScroll();
					}
				},
		methods: {
			timer(){
							if(this.time>0){
								this.isclick=false;
								this.time--;
								setTimeout(this.timer,1)
							}
							else{
								this.isclick=true;
								this.time=10
							}
						},
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

	

	

	.intotal {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		font-size: 22px;
		margin-bottom: 20rpx;
	}
</style>
