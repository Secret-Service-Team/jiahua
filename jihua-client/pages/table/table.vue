<template>
	<view>

		<view class="table">
			<view class="choose">
				<view class="slecet">
					<view class="content" @click="useOutClickSide">
						<easy-select ref="easySelect" size="mini" :value="selecValue" @selectOne="selectOne"></easy-select>
					</view>
				</view>

				<view class="version-type">

				</view>
			</view>
			<view class="charts-wrapper">
				<view class="qiun-columns" :style="{display:bingtu}">
					<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
						<view class="qiun-title-dot-light">周饼图</view>
					</view>
					<view class="qiun-charts">
						<canvas canvas-id="canvasPie" id="canvasPie" class="charts"></canvas>
					</view>
				</view>

				<view class="qiun-columns" :style="{display:zhuzhuangtu}">
					<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
						<view class="qiun-title-dot-light">周柱状图</view>
					</view>
					<view class="qiun-charts">
						<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"></canvas>
					</view>
				</view>
			</view>
		</view>

		<view class="rank">
			<view class="describe">
				本月消费支出排行榜
			</view>
			<view class="no" v-for="(item,index) in rankno" :key='index' :style="{'width':(item.percent)*5+200+'rpx'}">
				<view class="no-index">{{index+1}}</view>

				<view class="rankinit">
					{{item.type}} {{item.num}}笔
				</view>

				<view class="per" :style="{'left':(item.percent)*5+250+'rpx'}">
					{{item.percent}}%
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from 'js_sdk/u-charts/u-charts/u-charts.js';
	var _self;
	var canvaColumn = null;
	var canvaPie = null;
	export default {
		data() {
			return {
				// i:0,
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
				},
				// temp:[],
				zhuzhuangtu: 'block',
				bingtu: 'none',
				selecValue: '柱状图',
				month: 500.00,
				week: 150.00,
				monthavg: 55.55,
				weekavg: 66.66,
				rankno: [
				],
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
			};
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(700);
			this.cHeight = uni.upx2px(425);
			this.getServerData1();
			this.getServerData2();
		},
		mounted() {
			this.getPercent();
		},
		methods: {
			
			selectOne(options) {
				this.selecValue = options.label;
				// console.log(this.selecValue)
				if (this.selecValue == '柱状图') {
					// console.log(this.selecValue)
					this.zhuzhuangtu = 'block';
					this.bingtu = 'none';
					// console.log(this.zhuzhuangtu)
				} else if (this.selecValue == '饼图') {
					// console.log(this.selecValue)
					this.zhuzhuangtu = 'none';
					this.bingtu = 'block';
					// console.log(this.zhuzhuangtu)
				}
			},
			useOutClickSide() {
				this.$refs.easySelect.hideOptions && this.$refs.easySelect.hideOptions();
			},
			getPercent() {
				const that = this;
				this.$request('/bookkeeping/table/month/types', {'date': new Date().getTime()
				}).then(res => {
				 console.log(res.data);
				 
				// 将它处理成下方的百分比图
				let total = 0;
				for (let i = 0; i < res.data.length; i += 1) {
					total += res.data[i].cost;
					res.data[i].type = this.reflect[res.data[i].type];
				}
				for (let i = 0; i < res.data.length; i += 1) {
					res.data[i].percent = `${(res.data[i].cost / total * 100).toFixed(2)}`;
				}
				this.rankno = res.data;
				});
			},
			getServerData2() {
				// 饼图
				const that = this;
				this.$request('/bookkeeping/table/week/types', {'date': new Date().getTime()
				}).then(res => {
				 console.log(res.data);
				 let Pie = {
				  series: []
				 };
				for(let i=0;i<res.data.length;i++){
					res.data[i].name = that.reflect[res.data[i].name];
				}
				
				// 将它处理成下方的百分比图
				
				
				Pie.series.push(...res.data);
				 
				 _self.showPie("canvasPie", Pie);
				});
				

			},
			getServerData1() {

				this.$request('/bookkeeping/table/week/total',{'date':new Date().getTime()}).then(res => {
					// console.log(res.data)
					let Column = {
								categories: [],
								series: []
							};
							Column.categories = res.data[0].date;
							Column.series = [];
							Column.series.push(res.data[1]);
							Column.series.push(res.data[2]);
							_self.showColumn("canvasColumn", Column);
				});
			}, 
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: {
						show: true
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'group',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					}
				});
			},
			showPie(canvasId, chartData) {
				canvaPie = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					legend: {
						show: true
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
		}
	};
</script>

<style scoped>
	.top {
		display: flex;
		justify-content: space-around;
		height: 150rpx;
		/* padding-top: 30rpx; */
	}
	.top .left {
		border: solid rgba(128, 128, 128, 0.6) 5rpx;
		border-radius: 15rpx;
		margin-left: 20rpx;
		width: 275rpx;
		box-sizing: border-box;
		padding-left: 5rpx;
		padding-top: 28rpx;
		/* padding: 0 auto; */
		/* flex:column; */
	}
	.top .right {
		border: solid rgba(128, 128, 128, 0.6) 5rpx;
		border-radius: 15rpx;
		margin-right: 20rpx;
		width: 415rpx;
		box-sizing: border-box;
		padding-left: 20rpx;
		padding-top: 28rpx;
	}
	.table {
		width: 700rpx;
		height: 600rpx;
		border: solid rgba(128, 128, 128, 0.8) 5rpx;
		border-radius: 15rpx;
		margin: 0 auto;
		margin-top: 30rpx;
	}
	.choose {
		padding-top: 20rpx;
		padding-bottom: 10rpx;
	}
	.slecet {
		padding-left: 5rpx;
	}
	.rank {
		margin: 0 auto;
		margin-top: 30rpx;
		width: 80%;
	}
	.no {
		display: flex;
		justify-content: flex-start;
		width: 700rpx;
		margin-left: 25rpx;
		margin-bottom: 30rpx;
		background-color: rgba(128, 128, 128, 0.6);
		height: 50rpx;
		line-height: 50rpx;
		/* box-sizing: border-box; */
	}
	.per {
		position: absolute;
	}
	.no-index {
		height: 35rpx;
		width: 35rpx;
		font-size: 30rpx;
		background-color: white;
		position: relative;
		left: 10rpx;
		top: 8rpx;
		text-align: center;
		line-height: 35rpx;
	}
	.rankinit {
		margin-left: 25rpx;
	}
	.describe {
		width: 700rpx;
		margin: 0 auto;
		font-size: 50rpx;
		margin-bottom: 35rpx;
	}
	page {
		background: #F2F2F2;
		width: 750upx;
		overflow-x: hidden;
	}
	.qiun-padding {
		padding: 2%;
		width: 96%;
	}
	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}
	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}
	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}
	.qiun-common-mt {
		margin-top: 10upx;
	}
	.qiun-bg-white {
		background: #FFFFFF;
	}
	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}
	.qiun-title-dot-light {
		border-left: 10upx solid grey;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}
	.qiun-charts {
		width: 700upx;
		height: 425upx;
		background-color: #FFFFFF;
	}
	.charts {
		width: 700upx;
		height: 425upx;
		background-color: #FFFFFF;
	}
</style>