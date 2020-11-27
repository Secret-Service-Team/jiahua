<template>
	<scroll-view class="time-line-wrap">
		<view class="time-line">

			<!-- 时间轴 -->
			<view class="time-line-container" :class="addTypeClass">
				<!-- 时间轴内容块列表 -->
				<view class="time-line-list">

					<!-- 时间轴内容块 -->
					<view class="time-line-info" :class="[layoutClass(index)]" :id="'timeline'+index" v-for="(item,index) of time_line_list"
					 :key="index">


						<!-- 内容块内容 -->
						<view class="line-info-content">

							<!-- 时间轴圆点 -->
							<view class="line-on-round" :style="{ opacity: current[index]&&current[index].is=='ok'?1:1,top:'50px'}" :class="current[index]&&current[index].is=='ok'?comeani:''"></view>

							<view class="info-content-wrap" :style="{ opacity: current[index]&&current[index].is=='ok'?1:1}" :class="current[index]&&current[index].is=='ok'?comeani:''">
								<!-- 标题 -->
								<view class="info-title">
									<checkbox class="db1" color="#000"  style="transform:scale(0.8)" />{{item.title}}<span>{{item.title_span}}</span>
								</view>

								<!-- 内容 -->
								<view class="info-content" @click="to_changenote(index)">
									<!-- 内容 -->
									<view class="info-txt">{{item.content}}</view>
								</view>
							</view>

						</view>
					</view>
				</view>
			</view>
		</view>
		</view>
	</scroll-view>
</template>


<script>
	import bus from '../../common/bus'
	export default {
		data() {
			return {
				// 数据
				time_line_list: [{
					xiangxian: 1,
					title: '',
					title_span: '',
					content: '',
					id: 1,
					detial: ''
				}, {
					xiangxian: 1,
					title: '',
					title_span: '',
					content: '',
					id: 1121,
					detial: ''
				}, {
					xiangxian: 1,
					title: '',
					title_span: '',
					content: '',
					id: 111,
					detial: ''
				}, {
					xiangxian: 1,
					title: '',
					title_span: '',
					content: '',
					id: 1111,
					detial: ''
				}, {
					xiangxian: 1,
					title: '',
					title_span: '',
					content: '',
					id: 11,
					detial: ''
				}, ],
				HEIGHT: 0, //屏幕高度
				result: [], //监听的结果
				current: [], //当前在屏幕内的
				sum: 0, //加载完成个数
				comeani: 'come-ani', //入场动画
				isScroll: true, //是否加载动画
				recordDate: ''
			}
		},
		props: {
			location: {
				type: String,
				default: 'center',
			},

		},
		mounted() {
			this.init();
			this.aaaa()
		},
		onLoad() {
			const date = new Date();
			var day = date.getDate()
			var month = date.getMonth() + 1
			this.recordDate = date.getFullYear() + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' +
				day)
		},
		onShow() {},
		onHide() {},
		methods: {
			aaaa() {
				const that = this
				bus.$on('aMsg', (res) => {
					console.log(res.data)
					console.log(1)
					that.time_line_list = []
					for (var i = 0; i < res.data.length; i++) {
						let temp = {}
						temp.content = res.data[i].whattodo
						temp.title = res.data[i].jihuatime
						temp.title_span = res.data[i].tag
						temp.xiangxian = res.data[i].form
						temp.detial = res.data[i].jieshi
						temp.id = res.data[i].id
						// that.time_line_list.push(temp)

						const new_array = [...this.time_line_list]
						// console.log(new_array)
						new_array.push(temp)
						this.time_line_list = new_array
						this.$forceUpdate();

					}
					// that.$forceUpdate();
				});
			},
			init() {
				try {
					// 获取屏幕高度
					const res = uni.getSystemInfoSync();
					this.HEIGHT = res.screenHeight;
					// 添加标志位
					for (let i = 0; i < this.time_line_list.length; i++) {
						this.current.push({
							tag: 'timeline' + i,
							is: 'no'
						});
					}
					// 开始获取位置信息
					this.getScroll();
				} catch (e) {
					// error
				}

			},
			loadani() {
				for (let i = 0; i < this.result.length; i++) {
					for (let j = 0; j < this.result[i].info.length; j++) {
						// 是否没加载动画
						if (this.current[j].is != 'ok') {
							// 是否进入视野
							if (this.current[j].tag == this.result[i].info[j].tag &&
								this.result[i].info[j].domTop + 90 < this.HEIGHT) {
								// 加载动画
								this.current[j].is = 'ok';
								this.sum = j + 1;
							}
						}
					}
					// 移除当前
					this.result.splice(i, 1);
				}
				// 是否全部加载完成
				if (this.sum == this.time_line_list.length) {
					this.isScroll = false;
				}
			},
			async getScroll() {
				if (!this.isScroll) {
					return;
				}
				let info = [];
				// 返回位置信息加入数组
				for (let i = 0; i < this.time_line_list.length; i++) {
					await this.getNodeList('timeline' + i, i).then(res => {
						info.push(res);
					});
				}
				this.result.push({
					info: info
				});
				// 加载动画
				this.loadani();
			},
			getNodeList(id, i) {
				// 获取位置信息并返回
				return new Promise(resolve => {
					const query = uni.createSelectorQuery().in(this);
					query.select('#' + id).boundingClientRect(data => {
						// console.log("得到布局位置信息" + JSON.stringify(data));
						// console.log("节点离页面顶部的距离为" + data.top);
						resolve({
							domInfo: data.height,
							domTop: data.top,
							tag: id
						})
					}).exec();
				});
			},
			// 添加动画
			layoutClass(index) {
				let _class = "";
				if (this.location == 'center' && index % 2 != 0) {
					_class = 'right-info';
				}
				return _class;
			},
			to_changenote(index, e) {
				console.log(this.time_line_list[index].content)
				var xiangxian = this.time_line_list[index].xiangxian
				var title_span = this.time_line_list[index].title_span
				var title = this.time_line_list[index].title
				var content = this.time_line_list[index].content
				var detial = this.time_line_list[index].detial
				var id = this.time_line_list[index].id
				uni.navigateTo({
					url: "../../pages/changenote/changenote",
					success: function(res) {

						//通过eventChannel向B页面发送数据。

						res.eventChannel.emit('acceptDataFromA', {
							demo: {
								xiangxian: xiangxian,
								title: title,
								title_span: title_span,
								content: content,
								detial: detial,
								id: id
							}
						})

					}
				});
			}
		},
	}
</script>

<style lang="scss">
	.time-line-wrap {
		width: 100%;
		overflow-x: hidden;
	}

	.time-line-wrap {
		font-family: sans-serif;

		.time-line {
			padding: 4% 1%;

			.time-line-title {
				font-size: 25px;
				font-weight: 800;
				text-align: center;
				margin-bottom: 15px;
			}

			// 中间的轴
			.time-line-container {
				padding: 3% 1%;
				position: relative;

				&::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					margin: 0 auto;
					height: 100%;
					width: 4px;
					background: #000;
				}

				.time-line-list {
					width: 100%;

					.time-line-info {
						position: relative;

						.line-info-content {
							will-change: auto;
							width: 43%;
							display: flex;
							flex-direction: column;

							.line-on-round {
								height: 20px;
								width: 20px;
								border: 4px solid #000;
								border-radius: 50%;
								background: #fff;
								position: absolute;
								left: 0;
								right: 0;
								margin: 0 auto;
								top: 50px;
								box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, .1);
								z-index: 10;

								&.come-ani {
									animation: come-round .8s ease-in-out;
								}
							}

							.info-content-wrap {
								position: relative;

								.info-title {
									min-height: 30px;
									word-break: break-word;
									text-align: right;
									margin: 5px 0;
									font-size: 34rpx;
									font-weight: 500;

									span {
										color: #000;
										font-size: 38rpx;
										font-weight: 600;
										padding-left: 3px;
									}

								}

								.info-content {
									box-shadow: 1px 1px 1px 1px #d7e4ed;
									border-radius: 8px;
									padding: 5px;
									min-height: 40px;
									position: relative;

									.info-txt {}

									&::before {
										content: '';
										border: 7px solid;
										border-color: transparent transparent transparent #aaa;
										position: absolute;
										left: 100%;
										top: 18px;
									}
								}

								&.come-ani {
									animation: come-in-left .6s ease-in-out;
								}
							}
						}
					}

					.right-info {
						transform: rotateY(180deg);

						.line-info-content {
							.info-content-wrap {
								.info-title {
									transform: rotateY(180deg);
									text-align: left;
								}

								.info-content {
									.info-txt {
										transform: rotateY(180deg)
									}
								}
							}
						}
					}
				}
			}

			// 轴在左边
			.left-time-line {
				&::before {
					margin: 0;
					left: 15px;
				}

				.time-line-list {
					.time-line-info {
						.line-info-content {
							width: auto;

							.line-on-round {
								left: 0;
								margin: 0;
							}

							.info-content-wrap {
								margin-left: 45px;
								margin-bottom: 15px;

								.info-title {
									text-align: left;
								}

								.info-content {
									&::before {
										border-color: transparent #aaa transparent transparent;
										left: -15px;
									}
								}

								&.come-ani {
									animation: come-in-right .6s ease-in-out;
								}
							}
						}
					}
				}
			}

			// 轴在右边
			.right-time-line {
				&::before {
					margin: 0;
					left: 92.8%;
				}

				.time-line-list {
					.time-line-info {
						.line-info-content {
							width: auto;

							.line-on-round {
								left: 90%;
								margin: 0;
							}

							.info-content-wrap {
								margin-right: 55px;
								margin-bottom: 15px;

								.info-content {
									&::before {
										border-color: transparent transparent transparent #aaa;
									}
								}

							}
						}
					}
				}
			}
		}
	}

	@keyframes come-in-left {
		0% {
			transform: translateX(-120%);
		}

		70% {
			transform: translateX(8%);
		}

		100% {
			transform: translateX(0);
		}
	}

	@keyframes come-in-right {
		0% {
			transform: translateX(120%);
		}

		70% {
			transform: translateX(-8%);
		}

		100% {
			transform: translateX(0);
		}
	}

	@keyframes come-round {
		0% {
			transform: scale(0);
			opacity: 0;
		}

		40% {
			opacity: 0.4;
		}

		60% {
			transform: scale(1.2);
			opacity: 0.6;
		}

		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
