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
		<view class="add-input">
			<view class="add-remarks">
				<view class="input-wrapper">
					<input type="text" v-model="remarks" placeholder="备注..." maxlength="20">
				</view>
			</view>
		</view>
		<view class="add-frequent">
			<view class="add-frequent-title">频率：</view>
			<view class="add-frequent-select">
				<view :class="one_f" @click="checkDay('one_f', 0)">
					<view>一</view>
				</view>
				<view :class="two_f" @click="checkDay('two_f', 1)">
					<view>二</view>
				</view>
				<view :class="three_f" @click="checkDay('three_f', 2)">
					<view>三</view>
				</view>
				<view :class="four_f" @click="checkDay('four_f', 3)">
					<view>四</view>
				</view>
				<view :class="five_f" @click="checkDay('five_f', 4)">
					<view>五</view>
				</view>
				<view :class="six_f" @click="checkDay('six_f', 5)">
					<view>六</view>
				</view>
				<view :class="seven_f" @click="checkDay('seven_f', 6)">
					<view>日</view>
				</view>
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
				recordType: 'food',
				lastSelectType: 0,
				remarks: '',
				openid: '',
				// frequent
				frequent: [],
				one_f: ['select-item'],
				two_f: ['select-item'],
				three_f: ['select-item'],
				four_f: ['select-item'],
				five_f: ['select-item'],
				six_f: ['select-item'],
				seven_f: ['select-item']
			};
		},
		methods: {
			switchType(typeId, index) {
				// 选择流水类型
				// const type = wx.createSelectorQuery().selectAll('.type').fields({
				// 	 computedStyle: ['backgroundColor']
				// })
				this.recordType = typeId;
			},
			submitRecord() {
				// 提交预设
				const sendData = {
					remarks: this.remarks,
					openid: this.openid,
					typeId: this.recordType,
					frequent: this.frequent
				}
				
				if (this.frequent.length === 0) {
					wx.showToast({
						title: '请选择频率',
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				
				console.log(sendData);
				
				// wx.request({
				// 	url: 'http://localhost:3000/api/bookkeeping/preset',
				// 	data: sendData,
				// 	method: 'POST',
				// 	success(res) {
				// 		wx.showToast({
				// 		  title: '预设添加成功！',
				// 		  icon: 'success',
				// 		  duration: 1500
				// 		})
				// 		console.log(res);
				// 	},
				// 	fail() {
				// 		wx.showToast({
				// 		  title: '可能网络有点小问题T^T',
				// 		  icon: 'none',
				// 		  duration: 1500
				// 		})
				// 	}
				// })
				this.$request('/bookkeeping/preset/', sendData,'POST').then(res => {
						wx.showToast({
						  title: '预设添加成功！',
						  icon: 'success',
						  duration: 1500
						})
						console.log(res);
				})
			},
			imgClick(e) {
				console.log(e);
			},
			checkDay(day_f, index) {
				if (this[day_f].length > 1) {
					this[day_f].pop();
					for (let i = 0; i < this.frequent.length; i += 1) {
						if (this.frequent[i] === index) {
							this.frequent.splice(i, 1);
							break;
						}
					}
				} else {
					this[day_f].push('frequent_day_bgc');
					this.frequent.push(index);
				}
				console.log(this.frequent);
			}
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
	
	.add-input {
		/* background-color: #007AFF; */
		width: 100%;
		margin-top: 100rpx;
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
	
	.add-frequent {
		margin-top: 40rpx;
	}
	
	.add-frequent-select {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
	}
	
	.select-item {
		width: 50rpx;
		height: 50rpx;
		border: 1px solid;
		border-radius: 50%;
		box-shadow: 1px 0px 12px 2px #9691D9;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.frequent_day_bgc {
		background-color: #ccc;
	}
</style>
