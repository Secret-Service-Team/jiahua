<template>
	<view>
		<view class="log-father">
			<img class="logo" src="~@/static/personcenter_icon/logo.png" alt="" />
		</view>

		<view class="lines">
			<view class="style" @click="change_1">
				<view class="style-son">
					<img class="key-icon" src="~@/static/personcenter_icon/question.png" alt="" />
					<view class="title">如何选择计时模式</view>
				</view>
				<img :class="style1" class="right-icon" src="~@/static/personcenter_icon/right.png" alt="" />
			</view>
			<view class="body" v-show="show_1">
				<p style="margin-top: 20rpx; margin-bottom: 7rpx;">①正计时模式：</p>
				<p><span style="color: white; width: 30rpx;">空格</span>	点击开始图标弹出专注目标设置界面，可选择已在备忘录中记载的待办事项或输入新的专注目标。可随时暂停或停止，若时间少于1分钟则不计。</p>
				<p style="margin-top: 20rpx; margin-bottom: 7rpx;">②倒计时模式：</p>
				<p><span style="color: white; width: 30rpx;">空格</span>通过滑动时间轴选择倒计时目标时间。同正计时一样用户可自行输入专注目标或选择已添加的待办事项。</p>
				<p><span style="color: white; width: 30rpx;">空格</span></p>
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
					③四象限图是根据待办事项的紧急程度分成<span style="color:rgb(204,126,121);">紧急且重要</span>、<span style="color:rgb(211,170,102);">不紧急但重要</span>、<span style="color:rgb(167,214,244);">不紧急不重要</span>和<span style="color:rgb(116,166,144);">紧急不重要</span>四类。</br>
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
			},
			change_2() {
				this.show_2 = !this.show_2
				if (this.show_2) {
					this.style2.pop()
					this.style2.push("shuzhi")
				} else {
					this.style2.pop()
					this.style2.push("shuiping")
				}
			},
			change_3() {
				this.show_3 = !this.show_3
				if (this.show_3) {
					this.style3.pop()
					this.style3.push("shuzhi")
				} else {
					this.style3.pop()
					this.style3.push("shuiping")
				}
			}
		},
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

	.log-father {
		display: flex;
		justify-content: space-between;
		margin-top: 100rpx;
		height: 50%;
	}

	.logo {
		width: 300rpx;
		height: 300rpx;
		margin-left: auto;
		margin-right: auto;
	}

	.lines {
		flex-direction: column;
		height: 300rpx;
		margin-top: 90rpx;
	}

	.style {
		display: flex;
		justify-content: space-between;
		height: 100rpx;
		line-height: 100rpx;
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
		font-size: 38rpx;
	}

	.right-icon {
		width: 55rpx;
		height: 55rpx;
		margin-right: 33rpx;
		padding-top: 28rpx;
	}

	.body {
		margin-left: 30rpx;
		margin-right: 30rpx;
		font-size: 34rpx;
		border-bottom: 2rpx solid #e3e3e3;
	}
</style>
