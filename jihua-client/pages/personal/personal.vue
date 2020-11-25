<template>
	<view>
		<view class="topBar">
			<view class="topleft">
				 <open-data type="userAvatarUrl"></open-data>  
				<!-- <img src="~@/static/personcenter_icon/photo.png" alt="" /> -->
			</view>
			<view class="topright">
				<view class="name"><open-data type="userNickName" lang="zh_CN"></open-data></view>
				<!-- <view class="motto">人寿几何？</view> -->
			</view>
		</view>
		
		<view class="lines">
			<!-- <view class="style" @click="jumptoSetStyle">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/setstyle.png" alt="" />
					<view class="title">样式设置</view>
				</view>
				<img class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view> -->
			
			<view class="style" @click="jumptoAboutUs">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/aboutus.png" alt="" />
					<view class="title">关于我们</view>
				</view>
				<img class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>
		
<!-- 			<view class="style" @click="jumptoreCommendUs">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/recommendus.png" alt="" />
					<view class="title">推荐我们</view>
				</view>
				<img class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view> -->
			
			<view class="style" @click="jumptoHelp">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/help.png" alt="" />
					<view class="title">使用帮助</view>
				</view>
				<img class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>
			
			<view class="style" @click="jumptoPrivacyPolicy">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/privacypolicy.png" alt="" />
					<view class="title">隐私政策</view>
				</view>
				<img class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>		
				
			<view class="style" @click="clear">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/clearcache.png" alt="" />
					<view class="title">清除缓存</view>
				</view>
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
			jumptoSetStyle(){
				uni.navigateTo({
					url:"../setstyle/setstyle"
				});
			},
			jumptoAboutUs(){
				uni.navigateTo({
					url:"../aboutus/aboutus"
				});
			},
			/*jumptoreCommendUs(){
				uni.navigateTo({
					url:"../"
				})；
			}，*/
			jumptoHelp(){
				uni.navigateTo({
					url:"../help/help"
				});
			},
			jumptoPrivacyPolicy(){
				uni.navigateTo({
					url:"../privacypolicy/privacypolicy"
				});
			},
			clear(){
				uni.showModal({
					title: '提示',
					content: '缓存已清除',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} 
						else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
				})
			},
			test(){
				uni.showModal({
					title: '提示',
					content: '缓存已清除',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} 
						else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
				})
			}
			
		},
		onShow() {
			uni.setNavigationBarColor({
				backgroundColor: this.style.backgroundColor,
				frontColor:this.style.textStyle,
				fail: (e) => {
					console.log(e)
				},
				success: (e) => {
					console.log(e)
				}
			})
		},
	}
</script>

<style>
	.topBar {	
		display: flex;
		margin-top: 30rpx;
		justify-content: space-between;
		width: 100%;
		height: 20%;
		background-color: #f6f4f5;
	}
	.topleft {
		margin-top: 50rpx;
		margin-left: 65rpx;
		width: 200rpx;
		height: 180rpx;
		padding-bottom: 50rpx;
		/* background-color: #4CD964; */
	} 
	.topleft img {
		width: 100%;
		height: 100%;
	}
	.topright {
		width: 57%;
		/* background-color: #FF0000; */
		display: flex;
		flex-direction: column;
	}
	.name {
		line-height: 200rpx;
		/* text-align: center; */
		font-size: 43rpx;
		font-weight: bold;
	}
	/* .motto {
		height: 60%;
		font-size: 15px;
	} */

	.lines {
		background-color: #f6f4f5;
		display: flex;
		flex-direction: column;
		height: 600rpx;
		justify-content: space-around;
		margin-top: 50rpx;
		/*border: 1rpx solid black;*/
	}
	.style {
		display: flex;
		justify-content: space-between;
		height: 100rpx;
		line-height: 100rpx;
	/* 	border: 2rpx solid #e3e3e3;
	    border-top: 0; */
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
		font-size: 35rpx;
	}	
	.right-icon{
		width: 55rpx;
		height: 55rpx;
		margin-right: 33rpx;
		padding-top: 28rpx;
	}


</style>
