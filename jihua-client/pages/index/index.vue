<template>
	<view class="total" :style="{height:total_height}">
		<view class="time-top">
			<!--头部分 -->
			<view class="liebiao">
				<!--左上角的那个图标-->
				<img src="~@/static/icon/lie.png" @click="change_to_history">
			</view>

			<view class="method-of-timer" v-show="show_or_not_show">
				<!--正计时/倒计时-->
				<view class="zheng" @click="setting_zheng_time">
					正计时
				</view>
				<view class="dao" @click="setting_dao_time">
					倒计时
				</view>
			</view>
			<view style="width: 300rpx;hight: 55rpx;" v-show="!show_or_not_show"></view>
		</view>
		<!--======================================================= -->
		<view class="time-middle">
			<!--中间部分 -->
			<view class="jitang">{{jitang_current}}</view>
			<view class="total-time" v-show="show_or_not_show">今日已专注时长:{{total_time>=3600?
				' '+(Math.floor(total_time/3600)+' h '+(Math.floor(total_time/60-Math.floor(total_time/3600)*60))+' min')
				:
				('  '+Math.floor(total_time/60)+' min')}}
			</view>
			<view  v-show="!show_or_not_show" class="current_target">
				{{current_target}}
			</view>
		</view>

		<!--======================================================= -->
		<view class="time-bottom">
			<!--尾部分 -->
			<view style="position: relative;"><canvas id="myCanvas" canvas-id="myCanvas"></canvas></view>
			<view class="min-second">
				<!--MIN和SEC-->
				<view class="min">MIN</view>
				<view class="second">SEC</view>
			</view>
			<view class="timer" @click="change_time_in_dao">
				<view v-show="!zheng_or_dao_showing">
					<picker mode="time" :value="recordTime" @change="bindTimeChange" start="00:01" end="16:00">
						<view class="picker">
							<span>{{min>=10?min:'0'+min}}:{{sec>=10?sec:'0'+sec}}</span>
						</view>
					</picker>
				</view>
				<view v-show="zheng_or_dao_showing">{{min>=10?min:'0'+min}}:{{sec>=10?sec:'0'+sec}}</view>
			</view>
			<!--时钟界面,用于正/倒计时 -->

			<view class="botton-begin-timer" v-show="timer_flag"><img @click="begin_of_timer" src="~@/static/icon/begin.png"></view>
			<!--开启按钮-->

			<view class="box-of-stop" v-show="!timer_flag">
				<!--暂停和关闭按钮 -->
				<view> <img src="~@/static/icon/stop.png" @click="stop_timer"></view>
				<view><img src="~@/static/icon/juxing.png" @click="end_timer"></view>
			</view>

		</view>

		<view class="set-goal" v-show="show_of_setting_things">
			<view class="grey" @click="close_things"></view>
			<view class="content" :class="content_style">
				<view class="henggan"></view>
				<view class="title">请输入你的专注目标</view>
				<view class="things">
					<view class="write-things">
						<input type="text" id="writeThing" v-model="target" :class="style" @focus="input_in" @blur="input_out" ref="input_in">
					</view>
					<view class="choice-things">
						<picker @change="bindPickerChange" :range="need_to_do_list">
							<label class="">{{need_to_do_list[index]}}</label>
						</picker>
					</view>
				</view>
				<view class="begin-to-time" @click="gogogo">开始计时</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onReady: function(e) {
			var context = uni.createCanvasContext('myCanvas')
			context.setStrokeStyle("rgb(170,169,167)")
			context.setLineWidth(3 * this.a)
			context.moveTo(220 * this.a, 0)
			context.arc(120 * this.a, 0, 100 * this.a, 0, Math.PI, false)
			context.stroke()
			context.draw()
		},

		data() {
			return {
				a: 0, //canvas比例因子
				recordTime: '01:30',
				total_time: 0,
				total_height: 0,
				min: 0,
				sec: 0,
				timer_flag: true,
				_timer: null,
				zheng_or_dao_flag: true, //判断是正计时还是倒计时,true正,false倒
				show_timer: true, //是否显示时钟,true为显示
				show_or_not_show: true, //是否显示 正计时/倒计时 和 今日已专注时长  这两个标签, true为显示
				time_of_index: 0,
				need_to_do_list: ["--点击选择待办事项--"],
				show_of_setting_things: false, //是否显示选择待办事项界面,true进入
				target: "请输入专注目标",
				style: ["write", "white"],
				content_style: [],
				dao_total_time: 0, //倒计时总时间
				i: 1, //记次数用的
				context: uni.createCanvasContext('myCanvas'), //画布名字
				begin_min: 0, //开始时候的min
				begin_sec: 0, //开始时候的sec
				index: 0, //索引值
				zheng_or_dao_showing: true, //正/倒计时显示标志位
				current_target:'',//当前目标
				jitang_current:"这里是没有毒的鸡汤-v-",
				jitang_messages:[
					"温故而知新,可以为师矣。",
					"学而不思则罔,思而不学则殆。",
					"见贤思齐焉,见不贤而内自省也。",
					"学而时习之,不亦说乎?",
					"岁寒,然后知松柏之后凋也。",
					"腹有诗书气自华,读书万卷始通神。",
					"言必信,行必果。",
					"世上无难事,只要肯登攀。",
					"天生我材必有用。",
					"读书破万卷,下笔如有神。",
					"人而无信,不知其可也。",
					"全欺芳蕙晚,似妒寒梅疾。",
					"不傲才以骄人,不以宠而作威。",
					"静以修身,俭以养德。",
					"君子一诺,五岳皆轻。",
					"鞠躬尽瘁,死而后已。",
					"天下兴亡,匹夫有责。",
					"为中华之崛起而读书",
					"宝剑锋从磨砺出,梅花香自苦寒来。",
					"敏而好学,不耻下问。",
					"火以炼金,逆境磨练人。",
					"逃避不能解决战争,只会解决你自己。",
					"这里是没有毒的鸡汤~",
					
				]
			}
		},
		onLoad() {
			this.total_height = this.getData() + 'rpx'
			this.a = this.get_a() / 750
		},
		methods: {
			bindPickerChange(e) {
				this.index = e.target.value //将数组改变索引赋给定义的index变量
				this.jg = this.need_to_do_list[this.index]
				//将array【改变索引】的值赋给定义的jg变量
				
			},
			bindTimeChange(e) {
				this.recordTime = e.target.value;
				this.min = 60 * (parseInt(this.recordTime[0]) * 10 + parseInt(this.recordTime[1])) + parseInt(this.recordTime[3]) *
					10 + parseInt(this.recordTime[4])
				this.context.setStrokeStyle("white")
				this.context.setLineWidth(3 * this.a)
				this.context.moveTo(220 * this.a, 0)
				this.context.arc(120 * this.a, 0, 100 * this.a, 0, Math.PI, false)
				this.context.stroke()
				this.context.draw()
				this.sec = 0
			},
			getData() {
				var result = 0
				uni.getSystemInfo({
					success: function(res) {
						result = res.screenHeight * 2 - res.statusBarHeight * 2
						console.log(result)
					}
				})
				return result
			},
			get_a() {
				var result = 0
				uni.getSystemInfo({
					success: function(res) {
						result = res.windowWidth * 2
					}
				})
				return result
			},
			begin_of_timer() { //开始计时
				clearInterval(this._timer)
				this.show_timer = true
				this.show_or_not_show = false
				if (!this.time_of_index) {
					if (!this.zheng_or_dao_flag) {
						this.begin_sec = this.sec
						this.begin_min = this.min
						this.dao_total_time = this.min * 60 + this.sec
						this.zheng_or_dao_showing = true
					}
					this.show_of_setting_things = true
					this.time_of_index++
					if (this.content_style.length == 0) {
						this.content_style.push('slide-top');
					} else {
						this.content_style.pop();
						this.content_style.push('slide-top');
					}


				} else if (this.time_of_index == 1) {
					this.timer_flag = !this.timer_flag
					if (!this.zheng_or_dao_flag) { //倒计时

						this._timer = setInterval(() => {
							if (this.min || this.sec) { //正常计时
								if (!this.sec && this.min) {
									this.min--
									this.sec = 60
								}
								this.sec--
								this.context.setStrokeStyle("rgb(170,169,167)")
								this.context.setLineWidth(3 * this.a)
								this.context.moveTo(220 * this.a, 0)
								this.context.arc(120 * this.a, 0, 100 * this.a, 0, (1.0 / this.dao_total_time) * this.i * Math.PI, false) //正计时一小时的时候,弧将充满
								this.context.stroke()
								this.context.draw(true)
								this.i++
							} else { //计时结束
								console.log("计时结束")

								clearInterval(this._timer)
							}
						}, 1000)
					} else { //正计时
						this._timer = setInterval(() => {
							this.sec++
							if (this.sec == 60) {
								this.sec = 0
								this.min++
							}
							this.context.setStrokeStyle("white")
							this.context.setLineWidth(3 * this.a)
							this.context.moveTo(220 * this.a, 0)
							this.context.arc(120 * this.a, 0, 100 * this.a, 0, (1.0 / 3600) * this.i * Math.PI, false)
							this.context.stroke()
							this.context.draw(true)
							this.i++
							if (this.i == 3601) {
								console.log("您已经学习了一个小时了")
								this.context.setStrokeStyle("rgb(170,169,167)")
								this.context.setLineWidth(3 * this.a)
								this.context.moveTo(220 * this.a, 0)
								this.context.arc(120 * this.a, 0, 100 * this.a, 0, Math.PI, false)
								this.context.stroke()
								this.context.draw()
								this.i = 1
							}
						}, 1000)
					}
				}

			},
			stop_timer() { //停止计时
				this.timer_flag = !this.timer_flag
				clearInterval(this._timer)
			},
			end_timer() {
				this.timer_flag = !this.timer_flag
				this.show_or_not_show = true
				clearInterval(this._timer)
				this.time_of_index = 0
				if (this.zheng_or_dao_flag)
					this.total_time += this.min * 60 + this.sec
				else {
					this.total_time += this.begin_min * 60 + this.begin_sec - this.min * 60 - this.sec
					this.zheng_or_dao_showing = false
				}
				if(this.zheng_or_dao_flag){
					uni.showModal({
						title: '提示',
						content: '您总共学习了'+this.min+'分钟'+this.sec+'秒',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						},
					})
				}
				this.current_target=''
			},
			setting_zheng_time() {
				this.zheng_or_dao_showing = true
				this.time_of_index = 0
				this.show_timer = true
				this.zheng_or_dao_flag = true
				this.sec = 0
				this.min = 0
				this.context.setStrokeStyle("rgb(170,169,167)")
				this.context.setLineWidth(3 * this.a)
				this.context.moveTo(220 * this.a, 0)
				this.context.arc(120 * this.a, 0, 100 * this.a, 0, Math.PI, false)
				this.context.stroke()
				this.context.draw()
				clearInterval(this._timer)

			},
			setting_dao_time() {
				this.zheng_or_dao_showing = false
				this.time_of_index = 0
				clearInterval(this._timer)
				this.show_timer = false
				this.zheng_or_dao_flag = false
				this.timer_flag = true
				this.min = 60
				this.sec = 0
				this.context.setStrokeStyle("white")
				this.context.setLineWidth(3 * this.a)
				this.context.moveTo(220 * this.a, 0)
				this.context.arc(120 * this.a, 0, 100 * this.a, 0, Math.PI, false)
				this.context.stroke()
				this.context.draw()
			},
			close_things() {

				setTimeout(() => {
					this.show_of_setting_things = false
					this.time_of_index = 0
					this.show_or_not_show = true
					if (!this.zheng_or_dao_flag)
						this.zheng_or_dao_showing = false
				}, 701);
				this.content_style.pop();
				this.content_style.push('slide-bottom');


			},
			change_time_in_dao() {
				if (!this.zheng_or_dao_flag && !this.time_of_index) {
					this.show_timer = false

				}
			},
			gogogo() {
				if (this.target != "" && this.target != "请输入专注目标")
					{
						this.need_to_do_list.push(this.target)
						this.current_target='为了达成'+this.target+'这个目标,请坚持!'
					}else{
						if(this.index)
							this.current_target='为了达成'+this.need_to_do_list[this.index]+'这个目标,请坚持!'
					}
				if (this.target == "请输入专注目标" && this.index == 0) {
					this.style.pop()
					this.style.push("red")
				} else {
					this.jitang_current=this.jitang_messages[Math.floor(Math.random()*(this.jitang_messages.length))]
					this.target = "请输入专注目标"
					this.show_of_setting_things = false
					this.timer_flag = !this.timer_flag
					clearInterval(this._timer)
					if (!this.zheng_or_dao_flag) { //倒计时
						this.i = 1
						this.context.setStrokeStyle("white")
						this.context.setLineWidth(3 * this.a)
						this.context.moveTo(220 * this.a, 0)
						this.context.arc(120 * this.a, 0, 100 * this.a, 0, Math.PI, false) //正计时一小时的时候,弧将充满
						this.context.stroke()
						this.context.draw(true)
						this._timer = setInterval(() => {
							if (this.min || this.sec) { //正常计时
								if (!this.sec && this.min) {
									this.min--
									this.sec = 60
								}
								this.sec--
								this.context.setStrokeStyle("rgb(170,169,167)")
								this.context.setLineWidth(3 * this.a)
								this.context.moveTo(220 * this.a, 0)
								this.context.arc(120 * this.a, 0, 100 * this.a, 0, (1.0 / this.dao_total_time) * this.i * Math.PI, false) //正计时一小时的时候,弧将充满
								this.context.stroke()
								this.context.draw(true)
								this.i++
							} else { //计时结束
								console.log("计时结束")
								uni.showModal({
									title: '提示',
									content: '恭喜您！完成了相应的任务~',
									success: function(res) {
										if (res.confirm) {
											console.log('用户点击确定');
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									},
								})
								this.ScanAudio()
								clearInterval(this._timer)
								this.timer_flag = !this.timer_flag
								this.show_or_not_show = true
								this.time_of_index = 0
								if (this.zheng_or_dao_flag)
									this.total_time += this.min * 60 + this.sec
								else {
									this.total_time += this.begin_min * 60 + this.begin_sec - this.min * 60 - this.sec
									this.zheng_or_dao_showing = false
								}
								
							}
						}, 1000)
					} else {
						this.i = 1
						this.sec = 0
						this.min = 0
						this.context.setStrokeStyle("rgb(170,169,167)")
						this.context.setLineWidth(3 * this.a)
						this.context.moveTo(220 * this.a, 0)
						this.context.arc(120 * this.a, 0, 100 * this.a, 0, Math.PI, false)
						this.context.stroke()
						this.context.draw()
						this._timer = setInterval(() => {
							this.sec++
							if (this.sec == 60) {
								this.sec = 0
								this.min++
							}
							this.context.setStrokeStyle("white")
							this.context.setLineWidth(3 * this.a)
							this.context.moveTo(220 * this.a, 0)
							this.context.arc(120 * this.a, 0, 100 * this.a, 0, (1.0 / 3600) * this.i * Math.PI, false) //正计时一小时的时候,弧将充满
							this.context.stroke()
							this.context.draw(true)
							this.i++
							if (this.i == 3601) {
								console.log("您已经学习了一个小时了")
								this.context.setStrokeStyle("rgb(170,169,167)")
								this.context.setLineWidth(3 * this.a)
								this.context.moveTo(220 * this.a, 0)
								this.context.arc(120 * this.a, 0, 100 * this.a, 0, Math.PI, false)
								this.context.stroke()
								this.context.draw()
								this.i = 1
							}
						}, 1000)
					}
				}
			},
			input_in() {
				if (this.target == "请输入专注目标")
					this.target = ""
				this.style.pop()
			},
			input_out() {
				if (this.target == "")
					this.target = "请输入专注目标"
				this.style.push("white")
			},
			change_to_history() {
				uni.navigateTo({
					url: "../history/history"
				})
			}
		}
	}
</script>

<style>
	#myCanvas {
		position: absolute;
		top: 92rpx;
		left: 136.5rpx;
		height: 220rpx;
		width: 500rpx;
		pointer-events: none;
	}
    .current_target{
		height: 57rpx;
		text-align: center;
	}
	.right {
		width: 55rpx;
		height: 55rpx;
	}

	.total {
		color: white;
		padding-top: 30rpx;
		background: url(~@/static/BGT/BGT.jpg) no-repeat;
		background-size: 100% 100%;
		background-position: 0 0;
	}

	.time-top {
		display: flex;
		justify-content: space-around;
		margin-bottom: 30rpx;
		margin-top: 30rpx;
	}

	.liebiao {
		width: 300rpx;
		height: 55rpx;
	}

	.liebiao img {
		margin-left: 8rpx;
		width: 55rpx;
		height: 55rpx;
		margin-right: 20rpx;
	}

	.method-of-timer {
		display: flex;
		justify-content: space-between;
		width: 300rpx;
		height: 55rpx;
	}

	.method-of-timer view {
		width: 150rpx;
		height: 55rpx;
		line-height: 55rpx;
		text-align: center;
	}

	.zheng {
		border: 1rpx solid white;
		border-top-left-radius: 22.5rpx;
		border-bottom-left-radius: 22.5rpx;
	}

	.dao {
		border: 1rpx solid white;
		border-top-right-radius: 22.5rpx;
		border-bottom-right-radius: 22.5rpx;
		color: rgb(98, 39, 37);

	}

	.jitang {
		margin: 0 auto;
		text-align: center;
		width: 600rpx;
		height: 55rpx;
		line-height: 55rpx;
		font-weight: bold;
		color: white;
		font-size: 40rpx;
		margin-bottom: 40rpx;
		padding-left: 20rpx;
	}

	.total-time {
		margin: 0 auto;
		text-align: center;
		width: 520rpx;
		border: 1rpx solid #FFFFFF;
		height: 55rpx;
		line-height: 55rpx;
		border-radius: 22.5rpx;

	}

	.time-bottom {
		height: 720rpx;
		margin-top: 60rpx;
	}

	.min-second {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}

	.min {
		width: 300rpx;
		text-align: right;
		font-size: 30rpx;
	}

	.second {
		width: 300rpx;
		font-size: 30rpx;
	}

	.timer {
		width: 50%;
		margin: 0rpx auto 250rpx auto;
		z-index: 1;
		text-align: center;
		font-size: 114rpx;
		/*border: 1px solid #000000;*/
		position: relative;
	}

	.time-bottom img {
		width: 100rpx;
		height: 100rpx;
	}

	.botton-begin-timer {
		text-align: center;
	}

	.box-of-stop {
		display: flex;
		justify-content: space-around;
	}

	.set-goal {
		bottom: 0;
		position: fixed;
	}

	.content {
		position: fixed;
		bottom: 0rpx;
		background-color: white;
		width: 100%;
		color: #000000;
		border-top-right-radius: 70rpx;
		border-top-left-radius: 70rpx;
		text-align: center;
		z-index: 8;
		height: 40%;
	}

	.henggan {
		background-color: rgb(221, 221, 221);
		height: 6rpx;
		width: 60rpx;
		margin: 30rpx auto;
	}

	.grey {
		width: 100%;
		height: 100%;
		z-index: 6;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(159, 159, 159, 0.1);
	}

	.title {
		font-weight: bold;
		margin-bottom: 40rpx;
	}

	.things {
		display: flex;
		justify-content: space-around;
	}

	.write {
		background-color: rgb(240, 240, 240);
		height: 130rpx;
		line-height: 130rpx;
		border-radius: 24rpx;
		font-size: 20rpx;
		width: 300rpx;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		margin-left: 50rpx;
	}

	.white {
		color: rgb(193, 191, 191);
	}

	.red {
		color: red;
	}

	.choice-things {
		margin-right: 40rpx;
		margin-top: 80rpx;
		font-weight: bold;
	}

	.begin-to-time {
		height: 55rpx;
		line-height: 55rpx;
		border-radius: 22.5rpx;
		background-color: #000000;
		color: white;
		width: 60%;
		margin: 35rpx auto;
	}

	.slide-top {
		-webkit-animation: slide-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: slide-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	.slide-bottom {
		-webkit-animation: slide-bottom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: slide-bottom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
