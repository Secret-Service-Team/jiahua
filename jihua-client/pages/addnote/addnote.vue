<template>
	<view>

		<view class="top-container">

			<view class="title">
				新建 / 编辑代办
			</view>




		</view>
		<view class="middle">
			<view class="group2">
				<view class="title2-left">
					<view class="title2-left-1">事</view>
						<view class="title2-left-1">项</view>
					<view class="title2-left-1">标</view>
					<view class="title2-left-1">题</view>
				</view>
				<view class="title2-right">
					<input type="text" placeholder="请输入事项标题">
				</view>
			</view>
			<view class="group3">
				<view class="title3-left">
		
					<view class="title3-left-1">分</view>
						<view class="title3-left-1"> </view>
					<view class="title3-left-2">类</view>
				</view>
				<view class="title3-right">
					<uni-tag text="一象限"  @click="bindClick"size="small"type="default" :circle="true"></uni-tag>
					<uni-tag text="二象限"  @click="bindClick"size="small"type="default" :circle="true"></uni-tag>
					<uni-tag text="三象限"  @click="bindClick"size="small"type="default" :circle="true"></uni-tag>
					<uni-tag text="四象限"  @click="bindClick"size="small"type="default" :circle="true"></uni-tag>
				</view>
			</view>
			<view class="group4">
				<view class="title4-left">
					<view class="title4-left-1">标</view>
					<view class="title4-left-1"> </view>
					<view class="title4-left-2">签</view>
				</view>
				<view class="title4-right">
					<input type="text" placeholder="请输入3-5个字">
				</view>
			</view>
			<view class="group5">
				<view class="title5-left">
					<view class="title5-left-1">分</view>
						<view class="title5-left-1"> </view>
					<view class="title5-left-2">类</view>
				</view>
				<view class="title5-right">
					<input type="text" placeholder="请输入具体标签">
				</view>
			</view>
		</view>

	</view>



</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	export default {
		components: {

			uniTag
		},
		data() {
			return {
				flag_hide: false,
				time: 0,
				isclick: true,
			}
		},
		onPageScroll() {
			if (this.isclick) {
				this.timer();
				this.$refs.timeline.getScroll();
			}
		},
		methods: {
			timer() {
				if (this.time > 0) {
					this.isclick = false;
					this.time--;
					setTimeout(this.timer, 1)
				} else {
					this.isclick = true;
					this.time = 10
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
			jumptoadd() {
				uni.navigateTo({
					url: "../addnote/addnote"
				});
			},
		}
	}
</script>

<style>
	.top-container {
		position: flex;
		top: 0;
		left: 0;
		background-color: #FFF;
		width: 100%;
		height: 10%;
		display: flex;
		margin-top: 0rpx;

		/* flex:1 1 0; */
		justify-content: space-between;
		z-index: 100;
	}

	.middle {
		
		width: 760px;
		height: 370px;
		margin-top: 80rpx;
		margin-left: 13rpx;
		background-color: #FFF;
	}

	.group2 {

		width: 460px;
		height: 50px;
		margin-left: 30rpx;
	
		display: flex;
		background-color: #FFF;
	}

	.group3 {

		width: 460px;
		height: 50px;
		margin-left: 30rpx;
			
		display: flex;
		background-color: #FFF;
	}

	.group4 {
width: 460px;
		height: 50px;
		margin-left: 30rpx;
	
		display: flex;
		background-color: #FFF;
	}

	.group5 {
width: 460px;
		height: 50px;
		margin-left: 30rpx;
	
		display: flex;
		background-color: #FFF;
	}

	.title {


		font-weight: 700;
		font-size: 25px;
		line-height: 30px;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: 33rpx;
		margin-left: 33rpx;

	}

	.title2-left {
		display: flex;
			
				
				width: 130px;
				height: 50px;
				
				color: rgb(153, 153, 153);
				font-style: normal;
				
		margin-left: 13rpx;

	}
.title2-left-1{
	padding: 0px 0.5px;
		
	}
	.title2-right {

		
		width: 700px;
		height: 50px;
		left: 0px;
		top: 0px;
		z-index: 5;
		border: medium none;
		color: rgb(16, 16, 16);
		font-size: 14px;
		text-align: left;
		font-weight: bold;
		font-style: normal;
		opacity: 1;
		text-overflow: ellipsis;
margin-left: 95rpx;
	}

	.title3-left {
		display: flex;
			
				
				width: 130px;
				height: 50px;
				
				color: rgb(153, 153, 153);
				font-style: normal;
				
		margin-left: 13rpx;
		

	}
.title3-left-1{
	padding: 0px 6px;
		
	}
	.title3-left-2{
		padding: 0px 6px;
		}
	.title3-right {
		padding: 0px,5px;
		background-color: #F;
		display: flex;
		width: 700px;
		height: 50px;
		left: 0px;
		top: 0px;
		z-index: 5;
		border: medium none;
		color: rgb(16, 16, 16);
		font-size: 14px;
		text-align: left;
		font-weight: bold;
		font-style: normal;
		opacity: 1;
		text-overflow: ellipsis;
margin-left: 95rpx;

	}

	.title4-left {
		display: flex;
	
		
		width: 130px;
		height: 50px;
		
		color: rgb(153, 153, 153);
		font-style: normal;
		
margin-left: 13rpx;

	}
.title4-left-1{
	padding: 0px 6px;
		
	}
	.title4-left-2{
		padding: 0px 6px;
		}
	.title4-right {


		width: 700px;
		height: 50px;
		left: 0px;
		top: 0px;
		z-index: 5;
		border: medium none;
		color: rgb(16, 16, 16);
		font-size: 14px;
		text-align: left;
		font-weight: bold;
		font-style: normal;
		opacity: 1;
		text-overflow: ellipsis;
margin-left: 95rpx;
	}

	.title5-left {
		display: flex;
			
				
				width: 130px;
				height: 50px;
				
				color: rgb(153, 153, 153);
				font-style: normal;
				
		margin-left: 13rpx;
		
	}
	.title5-left-1{
		padding: 0px 6px;
			
		}
		.title5-left-2{
			padding: 0px 6px;
			}

	.title5-right {

background-color: #FF;
		width: 700px;
		height: 50px;
		left: 0px;
		top: 0px;
		z-index: 5;
		border: medium none;
		color: rgb(16, 16, 16);
		font-size: 14px;
		text-align: left;
		font-weight: bold;
		font-style: normal;
		opacity: 1;
		text-overflow: ellipsis;
margin-left: 95rpx;
	}

	.intotal {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		font-size: 22px;
		margin-bottom: 20rpx;
	}
</style>
