<template>
	<view>
		<view class="topBar">
			<view>隐&nbsp;私&nbsp;政&nbsp;策</br></view>
		</view>
		
		<view class="log-father">
			<img class="loge" src="~@/static/personcenter_icon/loge.png" alt="" />
		</view>
		<view class="body">
			{{content}}
		</view>
	</view>
</template>

<script>
	import text from '../../static/personcenter_icon/policy.js';
	export default {
		mounted() {
			this.content = text.text.content;
		},
		data() {
			return {
				content: '',
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.topBar view {
		margin-top: 40rpx;
		font-size: 30px;
		text-align: center;
	}
	.body {
		margin-left: 30rpx;
		margin-right: 30rpx;
		
	}
	.log-father{
		display: flex;
		justify-content: space-between;
	}
	.loge {
		width: 220rpx;
		height: 220rpx;
		margin-left: auto;
		margin-right: auto;
	}
</style>
