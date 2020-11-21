<template>
	<view>

		<view class="top-container">

			<view class="title">
				新建 / 编辑代办
			</view>




		</view>
		<view class="middle">
			<view class="group">
				<view class="title-right">
					<input type="text" placeholder="请输入事项标题">
					
				</view>
				<view data-cid="ikfwcgafyiu9xxn" data-link_cid="" class="widget line animated flash" style="width: 1px; height: 14px; left: 0px; top: 18px; z-index: 6; font-weight: normal; font-style: normal; animation-iteration-count: infinite; animation-duration: 1s; opacity: 1;"><svg
					 xmlns="http://www.w3.org/2000/svg" style="overflow: visible; filter: none;">
						<path d="M 0.5 0 L 0.5 14" stroke="rgba(16,16,16,1)" stroke-width="1px" stroke-dasharray=""></path>
						<path d="M 0.5 0 L 0.5 14" stroke="transparent" stroke-width="10" style="pointer-events: auto;"></path>
					</svg></view>
				<view class="region gesture " style="display: none;"></view>
			</view>
			<view data-cid="ikfwcgafygre4vk" data-link_cid="" class="widget rich_text hleft vtop auto" style="width: 57px; height: 20px; left: 20px; top: 180px; z-index: 61; font-size: 14px; text-align: left; font-weight: normal; font-style: normal; opacity: 1;">
				<view class="rich-text">
					<p style="line-height:0; margin-bottom:5px;">
						<span class="--mb--rich-text" data-boldtype="0" style="font-family:PingFangSC; font-weight:400; font-size:14px; color:rgb(153, 153, 153); font-style:normal; letter-spacing:0px; line-height:20px; text-decoration:none;">事项标题</span></p>
				</view>
				<view class="region gesture " style="display: none;"></view>
			</view>

		</view>

	</view>



</template>

<script>
	import timeLine from '../../components/xuan-timeLine/xuan-timeLine.vue'
	export default {
		components: {
			timeLine
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

	.group {
		left: 95px;
		top: 95px;
		width: 260px;
		height: 50px;
		position: absolute;
		z-index: 60;
		opacity: 1;
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

	.title2-right {


		width: 260px;
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

	}

	.title3 {



		margin-top: 66rpx;
		margin-left: 33rpx;

	}

	.title4 {



		margin-top: 66rpx;
		margin-left: 33rpx;

	}

	.intotal {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		font-size: 22px;
		margin-bottom: 20rpx;
	}
</style>
