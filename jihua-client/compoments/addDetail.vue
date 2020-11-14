<!-- 这是添加流水组件 -->
<template>
	<view class="addDetail">
		<view class="add-choose-type">
			<scroll-view scroll-x="true" scroll-left="120">
				<view v-for="(item, index) in typeArr_line1" class="type" @click="switchType(item.type, index)" :key="item.typeId">
					<image :src="item.src" @click="imgClick(e)"></image>
					<view >{{item.type}}</view>
				</view>	
				</scroll-view>
				<scroll-view scroll-x="true" scroll-left="120">
				<view v-for="(item, index) in typeArr_line2" class="type" @click="switchType(item.type, index + 6)" :key="item.typeId">
					<image :src="item.src" @click="imgClick(e)"></image>
					<view >{{item.type}}</view>
				</view>		
			</scroll-view>
		</view>
		<view class="add-options">
			<view class="add-options-time">
				<picker mode="date" :value="recordDate" @change="bindDateChange">
					  <view class="picker">
						记录日期：<span class="span-date">{{recordDate}}</span>
					  </view>
				</picker>
			</view>
			<view class="add-options-type">
				<span>支出</span>
				<switch color="#111" :checked="switchCost" @click="() => this.switchCost = !this.switchCost"></switch>
				<span>收入</span>
			</view>
		</view>
		<view class="add-input">
			<view class="add-money">
				<view class="input-wrapper">
					<input type="text" v-model="money" placeholder="请输入金额....">
				</view>
			</view>
			<view class="add-remarks">
				<view class="input-wrapper">
					<input type="text" v-model="remarks" placeholder="备注..." maxlength="20">
				</view>
			</view>
		</view>
		<view class="add-options-avg">
			<view class="add-options-avg-check">
				<span>是否均摊&nbsp;&nbsp;&nbsp;</span>
				<switch color="#111" :checked="doAvg" @change="showConseal()"></switch>
			</view>
			<view class="add-conseal" v-show="showAvg">
				<picker mode="date" :start="recordDate" :value="avgDate" @change="bindDateChangeEnd">
					  <view class="picker">
						<span class="span-date">{{avgDate}}</span>
					  </view>
				</picker>
			</view>
		</view>
		<view class="add-submit">
			<button @click="submitRecord">记录</button>
		</view>
	</view>
</template>

<script>
	export default {
		mounted() {
			const date = new Date();
			this.recordDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
			this.openid = wx.getStorageSync('openid');
		},
		data() {
			return {
				typeArr_line1: [
					{
						src: '../static/jizhan_icon/icon_food.png',
						typeId: 'food',
						type: '食物',
					},
					{
						src: '../static/jizhan_icon/icon_entertainment.png',
						typeId: 'entertainment',
						type: '娱乐',
					},
					{
						src: "../static/jizhan_icon/icon_traffic.png",
						typeId: 'traffic',
						type: '交通',
					},
					{
						src: "../static/jizhan_icon/icon_shopping.png",
						typeId: 'shopping',
						type: '购物',
					},
					{
						src: '../static/jizhan_icon/icon_study.png',
						typeId: 'study',
						type: '学习',
					},
					{
						src: '../static/jizhan_icon/icon_bonus.png',
						typeId: 'bonus',
						type: '津贴',
					},
				],
				typeArr_line2: [{
						src: '../static/jizhan_icon/icon_medicine.png',
						typeId: 'medicine',
						type: '医药',
					},
					{
						src: '../static/jizhan_icon/icon_clothes.png',
						typeId: 'clothes',
						type: '衣物',
					},
					{
						src: '../static/jizhan_icon/icon_daily.png',
						typeId: 'daily',
						type: '日常',
					},
					{
						src: '../static/jizhan_icon/icon_donate.png',
						typeId: 'donate',
						type: '捐助',
					},
					{
						src: '../static/jizhan_icon/icon_salary.png',
						typeId: 'salary',
						type: '薪水',
					},
					{
						src: '../static/jizhan_icon/icon_tour.png',
						typeId: 'tour',
						type: '旅行',
					}],
				typeArr: [
					{
						src: '../static/jizhan_icon/icon_food.png',
						typeId: 'food',
						type: '食物',
					},
					{
						src: '../static/jizhan_icon/icon_entertainment.png',
						typeId: 'entertainment',
						type: '娱乐',
					},
					{
						src: "../static/jizhan_icon/icon_traffic.png",
						typeId: 'traffic',
						type: '交通',
					},
					{
						src: "../static/jizhan_icon/icon_shopping.png",
						typeId: 'shopping',
						type: '购物',
					},
					{
						src: '../static/jizhan_icon/icon_study.png',
						typeId: 'study',
						type: '学习',
					},
					{
						src: '../static/jizhan_icon/icon_bonus.png',
						typeId: 'bonus',
						type: '津贴',
					},
					{
						src: '../static/jizhan_icon/icon_medicine.png',
						typeId: 'medicine',
						type: '医药',
					},
					{
						src: '../static/jizhan_icon/icon_clothes.png',
						typeId: 'clothes',
						type: '衣物',
					},
					{
						src: '../static/jizhan_icon/icon_daily.png',
						typeId: 'daily',
						type: '日常',
					},
					{
						src: '../static/jizhan_icon/icon_donate.png',
						typeId: 'donate',
						type: '捐助',
					},
					{
						src: '../static/jizhan_icon/icon_salary.png',
						typeId: 'salary',
						type: '薪水',
					},
					{
						src: '../static/jizhan_icon/icon_tour.png',
						typeId: 'tour',
						type: '旅行',
					}
				],
				showAvg: false,
				recordDate: '20201106',
				avgDate: '请设置均摊时间..',
				money: '',
				doAvg: false,
				switchCost: false,
				recordType: 'food',
				lastSelectType: 0,
				remarks: '',
			};
		},
		methods: {
			bindDateChange(e) {
				this.recordDate = e.target.value;
				console.log(e.target)
			},
			bindDateChangeEnd(e) {
				this.avgDate = e.target.value;
				console.log(new Date(this.avgDate));
			},
			showConseal() {
				this.doAvg = !this.doAvg;
				if (this.doAvg) this.showAvg = true;
				else this.showAvg = false;
			},
			switchType(typeId, index) {
				// 选择流水类型
				// const type = wx.createSelectorQuery().selectAll('.type').fields({
				// 	 computedStyle: ['backgroundColor']
				// })
				this.recordType = typeId;
				console.log(type)
			},
			submitRecord() {
				// 提交流水
				const sendData = {
					cost: -this.money,
					remarks: this.remarks,
					date: this.recordDate,
					openid: this.openid,
					isAvg: this.doAvg,
					typeId: this.recordType
				}
				if (Number(this.money)) {
					// 金额正确且已填写
					// 是否均摊
					if (this.doAvg) {
						sendData.end = this.avgDate;
					}
					
					if (this.switchCost) {
						sendData.cost = this.money;
					}
					console.log(sendData);
					wx.request({
						url: 'http://localhost:3000/api/bookkeeping/turnover',
						data: sendData,
						method: 'POST',
						success(res) {
							wx.showToast({
							  title: '记录成功！',
							  icon: 'success',
							  duration: 1500
							})
							console.log(res);
						},
						fail() {
							wx.showToast({
							  title: '可能网络有点小问题T^T',
							  icon: 'none',
							  duration: 1500
							})
						}
					})
				} else {
					wx.showToast({
					  title: '请输入正确的金额...',
					  icon: 'none',
					  duration: 1500
					})
					return false;
				}
			},
			imgClick(e) {
				console.log(e);
			},
		}
	};
</script>

<style scoped>
	switch {
		margin: 0 15rpx;
		zoom: .75;
	}
	
	.input-wrapper {
		padding: 15rpx;
		width: 100%;
		height: 100%;
		background-color: #fff;
		border: none;
		border-bottom: 4rpx solid #ccc;
		box-shadow: 0px 2px #777;
		/* box-shadow: 0px 1px 10px #777; */
		margin-top: 20rpx;
		width: 90%;
	}
	
	input {
		width: 100%;
	}
	
	button {
		border: none;
		background-color: #333;
		color: white;
		position: absolute;
		right: 75rpx;
		bottom: 35rpx;
		padding: 0 60rpx;
		font-size: 22rpx;
	}
	
	
	.addDetail {
		width: 90%;
		height: 100%;
		padding: 10rpx;
		margin: 20rpx auto;
	}
	
	.add-choose-type {
		list-style: none;
		height: 30%;
		width: 100%;
		margin-top: 30rpx;
	}
	
	.add-choose-type scroll-view {
		width: 100%;
		white-space: nowrap;
		 
	}
	
	.add-choose-type scroll-view .type {
		width: 80rpx;
		height: 80rpx;
		display: inline-block;
		margin: 10rpx 30rpx;
		/* height: 80rpx; */
	}
	
	.add-choose-type scroll-view .type image {
		width: 100%;
		height: 100%;
	}
	
	.type view {
		font-family: "agency fb" "arial, helvetica, sans-serif";
		font-weight: 300;
		font-size: 27rpx;
		margin-left: 12rpx;
	}
	
	.add-options {
		/* background-color: #F0AD4E; */
		height: 10%;
		width: 100%;
		margin-top: 50rpx;
		margin-left: 5px;
		display: flex;
		align-items: center;
		font-size: 32rpx;
	}
	
	.add-options-type {
		width: 40%;	
	}
	
	.add-input {
		/* background-color: #007AFF; */
		height: 20%;
		width: 100%;
		margin-top: 30rpx;
	}
	
	.add-options-time {
		width: 60%;
	}
	
	.add-options-avg {
		height: 10%;
		width: 100%;
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		font-size: 27rpx;
	}
	
	.add-options-avg-check {
		padding: 5rpx;
	}
	
	.add-conseal {
	}
	
	.span-date {
		font-family: "agency fb" "arial, helvetica, sans-serif";
		font-weight: 600;
		padding: 5rpx;
		background-color: #eee;
	}
	
	.special {
		background-color: #111;
		color: white;
		padding: 5rpx;
	}
</style>
