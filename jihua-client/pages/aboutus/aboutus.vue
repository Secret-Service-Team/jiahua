<template>
	<view>
		<!-- <view class="topBar">
			<view>关于我们</view>
		</view> -->
		
		
		<view class="picture">
			<view class="picture-son">
				<img class="key-icon" src="~@/static/personcenter_icon/th.png" alt="" />
				<view class="name">童浩</view>
			</view>
			<view class="picture-son">
				<img class="key-icon" src="~@/static/personcenter_icon/lkq.png" alt="" />
				<view class="name">林凯祺</view>
			</view>
			<view class="picture-son">
				<img class="key-icon" src="~@/static/personcenter_icon/xyj.png" alt="" />
				<view class="name">薛宇建</view>
			</view>
		</view>
		
		<view class="body">
			<view class="topBar">
				<view>关于我们</view>
			</view>
			
			<p><span style="color: white; width: 30rpx;">空格</span>我们是一个尚处于成长中的团队。在一次机缘巧合的时间结点下，我们相遇了。故事要从一个小小的活动室开始说起，一张不长也不宽的大桌子，桌面上摆满了电脑和密密麻麻的数据线，还有几杯永远也喝不完的咖啡。我们有激情，有活力，有理想，有野心<span style="text-decoration: line-through">（还有黑眼圈）</span></p></br>
			
			<view class="picture">
				<view class="picture-son">
					<img class="key-icon" src="~@/static/personcenter_icon/zhy.png" alt="" />
					<view class="name">张鸿艺</view>
				</view>
				<view class="picture-son">
					<img class="key-icon" src="~@/static/personcenter_icon/zbl.png" alt="" />
					<view class="name">张博林</view>
				</view>
				<view class="picture-son">
					<img class="key-icon" src="~@/static/personcenter_icon/wsh.png" alt="" />
					<view class="name">乌思汉</view>
				</view>
				
			</view>
			
			<p><span style="color: white; width: 30rpx;">空格</span>在这里，我们优势互补，我们的想法总是不会受到个人能力的局限<span style="text-decoration: line-through">（但是会受到ddl的局限）</span>，因为我们还有伙伴。在这里，我们每一个人都在为着一个共同的目标而努力，每一次的开发，都将成为我们的宝贵回忆。</p>
		</view>
		
		
		<view class="picture">	
			<view class="picture-son">
				<img class="key-icon" src="~@/static/personcenter_icon/sjj.png" alt="" />
				<view class="name">施季军</view>
			</view>
			<view class="picture-son">
				<img class="key-icon" src="~@/static/personcenter_icon/cyh.png" alt="" />
				<view class="name">蔡煜晖</view>
			</view>		
			<view class="picture-son">
				<img class="key-icon" src="~@/static/personcenter_icon/cn.png" alt="" />
				<view class="name">陈诺</view>
			</view>
			<view class="picture-son">
				<img class="key-icon" src="~@/static/personcenter_icon/xjl.png" alt="" />
				<view class="name">许佳琳</view>
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
			
		},
		onReady() {
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
		}
	}
</script>

<style>
	.name{
		text-align: center;
	}
	.topBar view {
		margin-top: 40rpx;
		margin-bottom: 30rpx;
		margin-left: 30rpx;
		text-align: center;
		font-weight: bold;
		font-size: 45rpx;
	}
	
	.body {
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 30rpx;
		padding-left: 15rpx;
		padding-right: 15rpx;
		padding-top: 10rpx;
		padding-bottom: 40rpx;
		/* font-weight: bold; */
		font-size: 40rpx;
		border:  5rpx #000000  solid;
	}

	.picture {
		margin-top: 30rpx;
		margin-bottom: 25rpx;
		display: flex;
		justify-content: space-around;
	}
	.picture-son {
		display: flex;
		flex-direction: column;
	}
	.picture-son img {
		width: 120rpx;
		height: 120rpx;
	}
</style>
