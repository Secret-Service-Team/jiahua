<template>
	<view>
		<view class="topBar">
			<view>样式设置</view>
		</view>
		
		<view class="lines">
			<view class="style" @click="change_1">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/setcolor.png" alt="" />
					<view class="title">菜单栏背景颜色</view>
				</view>
				<img :class="style1" class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>
			<view class="body" v-show="show_1">
				<view>
					<img class="color" src="~/static/personcenter_icon/blue.png" alt="/">
				</view>
				<view>
					<img class="color" src="~/static/personcenter_icon/red.png" alt="/">
				</view>
				<view>
					<img class="color" src="~/static/personcenter_icon/green.png" alt="/">
				</view>
			</view>
			
			<view class="style" @click="change_2">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/question.png" alt="" />
					<view class="title">备忘录中的三种视图</view>
				</view>
				<img :class="style2" class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>
			<view class="body" v-show="show_2">
				<p style="margin-top: 20rpx; margin-bottom: 7rpx;">在备忘录中可以切换日历、时间轴和四象限三种视图：</p>
				<p>①线型图主要显示一段比较短的时间内的待办（比如一天）。</br>
					②日历图主要是一段较长时间的视图。</br>
					③四象限图是根据待办事项的紧急程度分成紧急且重要、不紧急但重要、不紧急不重要和紧急不重要四类。</br>
					当您点击备忘录界面时，默认为线性视图。</p>
				<p><span style="color: white; width: 30rpx;">空格</span></p>
			</view>
			
			<view class="style" @click="change_3">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/question.png" alt="" />
					<view class="title">记账中的开支均摊与预设功能</view>
				</view>
				<img :class="style3" class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>
			<view class="body" v-show="show_3">
				<p style="margin-top: 20rpx; margin-bottom: 7rpx;">①开支均摊：</p>
				<p><span style="color: white; width: 30rpx;">空格</span>
					开支均摊：打开按钮，点击设置均摊开始时间至结束时间，例如充一个月话费，则本次开支均摊至一个月中。不开启此功能时，本次消费仅计入今日的账单。
				</p>
				<p style="margin-top: 20rpx; margin-bottom: 7rpx;">②预设功能：</p>
				<p><span style="color: white; width: 30rpx;">空格</span>
					右上方第一个小图标管理预设功能，点击图标跳转至预设功能页面。预设可以将每天或者每周等周期性的账单添加至预设，这样每周/每天自动添加该流水记录，用户使用时仅需在首页直接点击编辑，填入金额。</p>
				<p><span style="color: white; width: 30rpx;">空格</span></p>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show_1: false,
				show_2: false,
				show_3: false,
				style1: [],
				style2: [],
				style3: [],
			}
		},
		methods: {
			change_1() {
				this.show_1 = !this.show_1
				if (this.show_1) {
					this.style1.pop()
					this.style1.push("shuzhi")
				} else {
					this.style1.pop()
					this.style1.push("shuiping")
				}
			}
		}
	}
</script>

<style>
	.shuiping {
		-webkit-animation: shuiping 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: shuiping 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		-webkit-transform-origin:  center 50rpx ;
		transform-origin:  center 50rpx ;
	}
	
	.shuzhi {
		-webkit-animation: shuzhi 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: shuzhi 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		-webkit-transform-origin: center 50rpx;
		transform-origin:  center 50rpx;
	}
	
	@-webkit-keyframes shuiping {
		0% {
			transform: rotate(90deg);
			
		}
	
		100% {
			transform: rotate(0deg);
		}
	}
	
	@keyframes shuiping {
		0% {
			transform: rotate(90deg);
		}
	
		100% {
			transform: rotate(0deg);
		}
	}
	
	@-webkit-keyframes shuzhi {
		0% {
			transform: rotate(0deg);
		}
	
		100% {
			transform: rotate(90deg);
		}
	}
	
	@keyframes shuzhi {
		0% {
			transform: rotate(0deg);
		}
	
		100% {
			transform: rotate(90deg);
		}
	}
	
	.topBar {
		margin-top: 35rpx;
		margin-left: 25rpx;
		font-size: 20px;
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
	.right-icon{
		width: 55rpx;
		height: 55rpx;
		margin-right: 33rpx;
		padding-top: 28rpx;
	}
	.body {
		display: flex;
		justify-content: space-around;
		margin-left: 50rpx;
		margin-right: 50rpx;
		font-size: 15px;
		border-bottom: 2rpx solid #e3e3e3;
	}
	.color {
		width: 50rpx;
		height: 50rpx;
		padding-top: 30rpx;
		margin-right: 3rpx;
	}
</style>
