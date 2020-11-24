<template>
	<view class="detail-item" v-show="showDetail">
		<view class="info">
			<view class="date">
				{{formatDate(flow.date)}}
			</view>
			<view class="io">

			</view>
		</view>
		<view v-for="cost in flow.expend" :key="cost.fid">
			<view class="list" v-if="cost.pid!=='null'" style="background-color: #3F51B5; border-radius: 10rpx;color: white;width: 80%;margin:10rpx auto;">
				<view class="listleft">
					{{reflect[cost.typeId]}}
				</view>
				<view class="listright">
					{{cost.cost.toFixed(2)}}
				</view>
			</view>
			<view class="list" v-else-if="cost.isAvg" style="background-color: #9575CD; border-radius: 10rpx;color: white;width: 80%;margin:10rpx auto;">
				<view class="listleft">
					{{reflect[cost.typeId]}}
				</view>
				<view class="listright">
					{{cost.cost.toFixed(2)}}
				</view>
			</view>
			<view class="list" v-else style="color: white;width: 80%;margin:10rpx auto;background-color: #9E9E9E; border-radius: 10rpx;">
				<view class="listleft">
					{{reflect[cost.typeId]}}
				</view>
				<view class="listright">
					{{cost.cost.toFixed(2)}}
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: ['flow'],
		mounted() {
			if (this.flow.expend.length === 0) {
				this.showDetail = false;
			}

			// 如果是均摊
		},
		data() {
			return {
				showDetail: true,
				reflect: {
					food:'食物',
					entertainment: '娱乐',
					traffic:'交通',
					shopping:'购物',
					study: '学习',
					bonus:'津贴',
					medicine:'医药',
					clothes:'衣物',
					daily:'日常',
					donate:'捐助',
					salary:'薪水',
					tour:'旅行'
				}
			};
		},
		methods: {
			formatDate(date) {
				const year = date[0] + date[1] + date[2] + date[3];
				const month = date[4] + date[5];
				const day = date[6] + date[7];
				return `${year}-${month}-${day}`;
			},
		},
	}
</script>

<style scoped>
	.detail-item {
		border: black 2rpx solid;
		border-radius: 15rpx;
		margin-bottom: 30rpx;
		padding-bottom: 30rpx;
	}

	.info {
		margin-top: 15rpx;
		margin-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
	}

	.info .date {
		margin-left: 20rpx;
		font-size: 40rpx;
	}

	.info .io {
		margin-right: 20rpx;
		font-size: 30rpx;
		line-height: 30rpx;
		margin-top: 10rpx;

	}

	.list {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
	}

	.list .listleft {
		margin-left: 60rpx;
	}

	.list .listright {
		margin-right: 60rpx;
	}
</style>
