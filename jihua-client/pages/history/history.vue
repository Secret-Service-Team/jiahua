<template>
	<view class="history_message">
		<h1 style="font-weight: bold; margin-left: 42rpx; font-size: 50rpx;margin-top: 50rpx;">昨日统计</h1>
		<view class="total_record">
			<view class="record_son">
				<view>完成次数</view>
				<view>{{times_of_finished_day}}</view>
			</view>
			<view class="record_son">
				<view>
					时长
				</view>
				<view>{{times_of_total_day>=3600?
				' '+(Math.floor(times_of_total_day/3600)+' h '+(Math.floor(times_of_total_day/60-Math.floor(times_of_total_day/3600)*60))+' min')
				:
				('  '+Math.floor(times_of_total_day/60)+' min')}}
				</view>
			</view>
			<view class="record_son">
				<view>暂停次数</view>
				<view>
					{{times_of_pause_day}}
				</view>
			</view>
		</view>
        
		<view class="qiun-columns">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
				<view class="qiun-title-dot-light">饼状图</view>
			</view>
			<view class="qiun-charts">
				<canvas canvas-id="canvasPie" id="canvasPie" class="charts" ></canvas>
			</view>
		</view>
	</view>
</template>
<script>
	var _self;
	var canvaPie = null;
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js';
	export default {
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
			this.times_of_finished_day=3
			this.times_of_pause_day=2
			this.times_of_total_day=26600
		},
		data() {
			return {
				times_of_finished_day: 0, //完成次数
				times_of_total_day: 0, //完成总时长
				times_of_pause_day: 0, //暂停次数
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
			};
		},
		methods: {
			toJSON(){},
			getServerData() {
				uni.request({
					url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
					data: {},
					success: function(res) {
						console.log(res.data.data)
						let Pie = {
							series: []
						};
						
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						//Pie.series = res.data.data.Pie.series;
						Pie.series = [{
							"name": "计划1",
							"data": 50,
							"color":"red"
						}, {
							"name": "计划2",
							"data": 30,
							"color":"pink"
						}, {
							"name": "计划3",
							"data": 20,
							"color":"green"
						}, {
							"name": "计划4",
							"data": 18,
							"color":"yellow"
						}];
						_self.showPie("canvasPie", Pie);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				});
			},
			showPie(canvasId, chartData) {
				canvaPie = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					legend: true,
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
		goto_day(){
			this.show_of_month=this.show_of_week=false
			this.show_of_day=true
		}
		}
	};
</script>

<style>
	.total_record {
		
		display: flex;
		width: 500rpx;
		margin: 80rpx auto;
		justify-content: space-around;
	}

	.total_record .record_son {
		border: 1rpx solid black;
		width: 150rpx;
		height: 100rpx;
		line-height: 50rpx;
		text-align: center;
		font-weight: bold;
	}

	.total_record .record_son:nth-child(2) {
		width: 200rpx;
	}

	.total_record .record_son:first-child {
		border-top-left-radius: 30rpx;
		border-bottom-left-radius: 30rpx;
		border-right: 0rpx;
	}

	.total_record .record_son:nth-child(3) {
		border-top-right-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		border-left: 0rpx;
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
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
