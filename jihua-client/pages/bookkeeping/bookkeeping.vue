<template>
	<view>
		<view class="topBar">
			<view class="top-container">
				<view class="topleft"> 收支明细 </view>
				<view class="topright">
					<view class="pre-set" @click="jumptopresell">
						<img src="../../static/icon/calender.png" alt="" />
					</view>
					<view class="table" @click="jumptotable">
						<img src="../../static/icon/table.png" alt="" />
					</view>
					<view class="calendar" @click="jumptocalender">
						<img src="../../static/icon/presell.png" alt="" />
					</view>
				</view>
			</view>

			<view class="intotal">
				<view class="pay"> 总支出 : {{ pay.toFixed(2) }} </view>
				<view class="income"> 总收入 : {{ income.toFixed(2) }} </view>
			</view>
		</view>

		<view class="details-wrapper">
			<view class="details" v-for="(flow, index) in flows" :key="index">
				<detail :flow="flow"></detail>
			</view>
		</view>

		<view class="add-detail-button-wrapper">
			<view class="add-detail-button" @click="addDetail">
				<view class="detail-row"></view>
				<view class="detail-column"></view>
			</view>
		</view>

		<view class="add-detail-wrapper" v-show="showAddDetail">
			<view class="cancel-add-detail" @click="cancelAddDetail"></view>
			<addDetail :class="addDetailClass"></addDetail>
		</view>
	</view>
</template>

<script>
	import detail from '../../compoments/detail.vue';
	import addDetail from '../../compoments/addDetail.vue';
	export default {
		components: {
			detail,
			addDetail
		},
		mounted() {

		},
		data() {
			return {
				addDetailClass: ['add-detail'],
				pay: 500.00,
				income: 300.00,
				showAddDetail: false,
				flows: [],
			};
		},
		onLoad() {
			this.huoquliushui();
			
		},
		
		onPullDownRefresh() {
		        console.log('refresh');
		        setTimeout(function () {
		            uni.stopPullDownRefresh();
		        }, 1000);
				this.flows=[];
				this.huoquliushui();
		    },
		methods: {
			clearFlows(flows) {
				// 清洗流水数据，删除没有流水的日期
				// 最后执行
			},
			getPreset(flows) {
				// 获取预设。获取完添加到数组中
				
			},
			getAvg(flows) {
				// 将流水中的均摊替换为正确内容
			},
			huoquliushui() {
				this.$request('/bookkeeping/turnover/', {'date': new Date().getTime()
				// 传参参数名：参数值,如果没有，就不需要传
				}).then(res => {
					console.log(res.data)
				// 打印调用成功回调
				// console.log(res.flows);
				this.flows = res.flows;
				})
			},
			addDetail() {
				this.showAddDetail = true;
				if (this.addDetailClass.length === 1) {
					this.addDetailClass.push('slide-top');
				} else {
					this.addDetailClass.pop();
					this.addDetailClass.push('slide-top');
				}
			},
			cancelAddDetail() {
				setTimeout(() => {
					this.showAddDetail = false;
				}, 501);
				if (this.addDetailClass.length === 1) {
					this.addDetailClass.push('slide-bottom');
				} else {
					this.addDetailClass.pop();
					this.addDetailClass.push('slide-bottom');
				}
			},
			jumptocalender() {
				uni.navigateTo({
					url: "../calendar/calendar"
				});
			},
			jumptopresell() {
				uni.navigateTo({
					url: "../presell/presell"
				});
			},
			jumptotable() {
				uni.navigateTo({
					url: "../table/table"
				});
			}
		}
	};
</script>

<style scoped>
	.topBar {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		width: 100%;
		z-inde: 10;
	}

	.top-container {
		display: flex;
		margin-top: 15rpx;
		/* flex:1 1 0; */
		justify-content: space-between;
	}

	.topleft {
		/* flex-flow: space-between; */
		margin-left: 15rpx;
		font-size: 22px;
	}

	.topright {
		display: flex;
		/* font-size: 18px; */
	}

	.topright view {
		margin-left: 8rpx;
		width: 55rpx;
		height: 55rpx;
		margin-right: 20rpx;
	}

	.topright view img {
		width: 100%;
		height: 100%;
	}

	.intotal {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		font-size: 22px;
		margin-bottom: 20rpx;
	}

	.pay {
		margin-left: 45rpx;
	}

	.income {
		margin-right: 45rpx;
	}

	.details-wrapper {
		margin-top: 220rpx;
		z-index: 9;
		margin-bottom: 160rpx;
	}

	.details {
		width: 700rpx;
		margin: 0 auto;
	}

	.add-detail-button-wrapper {
		width: 100%;
		height: 150rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 8;
	}

	.add-detail-button {
		background-color: rgb(16, 16, 16);
		border-radius: 30px;
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx auto;
		position: relative;
	}

	.add-detail-button .detail-column {
		height: 70rpx;
		width: 10rpx;
		background-color: #fff;
		position: absolute;
		left: 44rpx;
		top: 14rpx;
	}

	.add-detail-button .detail-row {
		height: 10rpx;
		width: 70rpx;
		background-color: #fff;
		position: absolute;
		top: 47rpx;
		left: 15rpx;
	}

	.add-detail-wrapper {
		position: fixed;
		bottom: 0;
		/* left: 5%; */
		z-index: 11;
		height: 100%;
		width: 100%;
		background: rgba(14, 14, 14, 0.4);
		/* box-shadow: 10rpx black; */
	}

	.cancel-add-detail {
		position: absolute;
		top: 0;
		height: 40%;
		width: 100%;
	}

	.add-detail {
		position: absolute;
		bottom: 0;
		height: 70%;
		width: 100%;
		background-color: #fff;
		border-top-left-radius: 45rpx;
		border-top-right-radius: 45rpx;
		border-top: 2rpx solid black;
	}

	/* animate------------------------------------- */
	/* ----------------------------------------------
	 * Generated by Animista on 2020-10-24 10:55:25
	 * Licensed under FreeBSD License.
	 * See http://animista.net/license for more info. 
	 * w: http://animista.net, t: @cssanimista
	 * ---------------------------------------------- */

	/**
	 * ----------------------------------------
	 * animation slide-top
	 * ----------------------------------------
	 */

	.slide-top {
		-webkit-animation: slide-top 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: slide-top 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	.slide-bottom {
		-webkit-animation: slide-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: slide-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@-webkit-keyframes slide-top {
		0% {
			bottom: -800rpx;
		}

		100% {
			bottom: 0rpx;
		}
	}

	@keyframes slide-top {
		0% {
			bottom: -800rpx;
		}

		100% {
			bottom: 0rpx;
		}
	}

	@-webkit-keyframes slide-bottom {
		0% {
			bottom: 0rpx;
		}

		100% {
			bottom: -800rpx;
		}
	}

	@keyframes slide-bottom {
		0% {
			bottom: 0rpx;
		}

		100% {
			bottom: -800rpx;
		}
	}
</style>
