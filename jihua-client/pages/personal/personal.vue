<template>
	<view>
		<view class="topBar">
			<view>个人中心</view>
		</view>
		
		<view class="lines">
			<view class="style" @click="jumptoSetStyle">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/setstyle.png" alt="" />
					<view class="title">样式设置</view>
				</view>
				<img class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>
			
			<view class="style" @click="jumptoAboutUs">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/aboutus.png" alt="" />
					<view class="title">关于我们</view>
				</view>
				<img class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>
		
			<view class="style" @click="jumptoreCommendUs">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/recommendus.png" alt="" />
					<view class="title">推荐我们</view>
				</view>
				<img class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>
			
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
				
			<view class="style">
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
			}
			
		}
	}
</script>

<style>
	.topBar view {	
		margin-top: 20rpx;
		margin-left: 20rpx;
		font-size: 22px;
	}

	.lines {
		display: flex;
		flex-direction: column;
		height: 600rpx;
		justify-content: space-around;
		margin-top: 40rpx;
		/*border: 1rpx solid black;*/
	}
	.style {
		display: flex;
		justify-content: space-between;
		height: 100rpx;
		line-height: 100rpx;
		border: 2rpx solid #e3e3e3;
	    border-top: 0;
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
	.right-icon{
		width: 55rpx;
		height: 55rpx;
		margin-right: 33rpx;
		padding-top: 28rpx;
	}


</style>
