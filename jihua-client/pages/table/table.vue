<template>
	<view>
		<view class="top">
			<view class="left">
				<view>
					本周支出 : {{week.toFixed(2)}}
				</view>
				<view>
					本月支出 : {{month.toFixed(2)}}
				</view>
			</view>
			<view class="right">
				<view>
					本周平均每天支出 : {{weekavg.toFixed(2)}}
				</view>
				<view>
					本月平均每天支出 : {{monthavg.toFixed(2)}}
				</view>
			</view>
		</view>

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
			<view class="no" v-for="(item,index) in rankno" :key='index' :style="{'width':(item.percent)*7+200+'rpx'}">
				<view class="no-index">{{index+1}}</view>

				<view class="rankinit">
					{{item.type}} {{item.num}}笔
				</view>

				<view class="per" :style="{'left':(item.percent)*7+250+'rpx'}">
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
				zhuzhuangtu: 'block',
				bingtu: 'none',
				selecValue: '柱状图',
				month: 500.00,
				week: 150.00,
				monthavg: 55.55,
				weekavg: 66.66,
				rankno: [{
						"type": "餐饮",
						"num": 18,
						"percent": 42.2
					},
					{
						"type": "生活用品",
						"num": 6,
						"percent": 22.99
					},
					{
						"type": "网购",
						"num": 3,
						"percent": 18.11
					},

				],
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
			}

		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(700);
			this.cHeight = uni.upx2px(425);
			this.getServerData1();
			this.getServerData2();
		},
		methods: {
			selectOne(options) {
				this.selecValue = options.label
				// console.log(this.selecValue)
				if (this.selecValue == '柱状图') {
					// console.log(this.selecValue)
					this.zhuzhuangtu = 'block'
					this.bingtu = 'none'
					// console.log(this.zhuzhuangtu)
				} else if (this.selecValue == '饼图') {
					// console.log(this.selecValue)
					this.zhuzhuangtu = 'none'
					this.bingtu = 'block'
					// console.log(this.zhuzhuangtu)
				}
			},
			useOutClickSide() {
				this.$refs.easySelect.hideOptions && this.$refs.easySelect.hideOptions()
			},
			getServerData2() {
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data: {},
					success: function(res) {
						console.log(res.data.data)
						let Pie = {
							series: []
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Pie.series = [{
							"name": "餐饮",
							"data": 50,
							"color":"rgba(0,0,0,0.8)"
						}, {
							"name": "娱乐",
							"data": 30,
							"color":"rgba(0,0,0,0.6)"
						}, {
							"name": "交通",
							"data": 20,
							"color":"rgba(0,0,0,0.3)"
						}, {
							"name": "购物",
							"data": 18,
							"color":"rgba(0,0,0,0.1)"
						}];
						_self.showPie("canvasPie", Pie);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				});
			},
			getServerData1() {
				uni.request({
					// 不使用这个请求
					url: 'https://www.ucharts.cn/data.json',
					data: {},
					success: function(res) {
						console.log(res.data.data)
						let Column = {
							categories: [],
							series: []
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Column.categories = ["11.1", "11.2", "11.3", "11.4", "11.5", "11.6"];
						Column.series = [{
							"name": "支出",
							'color': 'black',
							"data": [15, 20, 45, 37, 43, 34]
						}, {
							"name": "收入",
							color: 'grey',
							"data": [30, 40, 25, 14, 34, 18]
						}];

						_self.showColumn("canvasColumn", Column);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
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
	}
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
		margin-top: 30rpx;
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
