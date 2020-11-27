<template>
	<view class="preset">
		<view class="preset-bgc">
			<image src="https://azoux.xyz/static/turnover/types/news.png" mode=""></image>
		</view>
		<view class="tipsinit">
			<view>
				<span>
					在这里你可以添加每天重复出现的记账项，<br/>设置完成后可直接从收支明细中填入金额。
				</span>
			</view>
		</view>
		<view class="preset-detail">
			<view class="preset-detail-wrapper">
				<view class="preset-item" v-for="(preItem, index) in presets" :key="preItem.pid" @click="editPreset(preItem)">
					<view class="preset-item-icon">
						<image :src="preItem.src" mode=""></image>
					</view>
					<view class="preset-desc">
						<view class="preset-item-title">
							{{preItem.typeId}}
						</view>
						<view class="preset-item-frequent">
							{{preItem.frequent}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="add-detail-button-wrapper">
			<view class="add-detail-button" @click="addPreset">
				<view class="detail-row"></view>
				<view class="detail-column"></view>
			</view>
		</view>
		<view class="add-preset-wrapper" v-show="showAddPreset">
			<view class="cancel-preset-detail" @click="cancelAddPreset"></view>
			<addPreset :class="addPresetClass"></addPreset>
		</view>
	</view>
</template>

<script>
	import addPreset from '../../compoments/addPreset.vue';
	import bus from '../../common/bus';
	
	export default {
		created() {
			// bus.$on('openEditPreset', () => {
			// 	this.addPreset()
			// })
			bus.$on('cancelAddPreset', () => {
				this.cancelAddPreset();
			});
			
			bus.$on('updatePreset', () => {
				this.getPresets();
			});
		},
		components: {
			addPreset,
		},
		data() {
			return {
				addPresetClass: ['add-preset'],
				showAddPreset: false,
				presets: [
				],
			};
		},
		mounted() {
			this.getPresets();
		},
		methods: {
			main() {
				console.log('onload');
			},
			editPreset(preItem) {
				bus.$emit('editPreset', preItem);
				this.showAddPreset = true;
				if (this.addPresetClass.length === 1) {
					this.addPresetClass.push('slide-top');
				} else {
					this.addPresetClass.pop();
					this.addPresetClass.push('slide-top');
				}
			},
			getPresets() {
				this.$request('/bookkeeping/preset/', {},'get').then(res => {
					console.log(res);
					for (let i = 0; i < res.length; i += 1) {
						res[i].src = `../../static/icon_${res[i].typeId}.png`;
					}
					this.presets = res;
				});
			},
			addPreset() {
				this.showAddPreset = true;
				bus.$emit('onCreate');
				if (this.addPresetClass.length === 1) {
					this.addPresetClass.push('slide-top');
				} else {
					this.addPresetClass.pop();
					this.addPresetClass.push('slide-top');
				}
			},
			cancelAddPreset() {
				bus.$emit('cancel_del');
				setTimeout(() => {
					this.showAddPreset = false;
				}, 501);
				if (this.addPresetClass.length === 1) {
					this.addPresetClass.push('slide-bottom');
				} else {
					this.addPresetClass.pop();
					this.addPresetClass.push('slide-bottom');
				}
			}
		}
	};
</script>

<style>
	image {
		width: 100%;
		height: 100%;
	}
	
	.preset-bgc {
		width: 100%;
		height: 400rpx;
		/* background-size: 100% 100%; */
		/* background-image: url(../../static/jizhan_icon/news.png); */
		/* background-repeat: no-repeat; */

	}
	
	.preset-bgc image {
		width: 80%;
		height: 80%;
		margin-top: 4%;
		margin-left: 10%;
	}
	
	.preset {
		width: 100%;
		height: 100%;
		z-index: 10;
	}
	.tipsinit{
		height: 153rpx;
		width: 80%;
		/* background-color: blue; */
		border: 3rpx solid #9691D9;
		border-radius: 28rpx;
		box-shadow: 1px 0px 12px 2px #9691D9;
		font-size: 30rpx;
		position: absolute;
		top: 140rpx;
		left: 10%;
		font-weight: 700;
		background-color: rgba(255, 255, 255, 0.5);;
		text-shadow: 1px 2px 1px 10px #000000;
	}
	.tipsinit view{
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.preset-detail {
		width: 88%;
		height: 100%;
		margin: 0 auto;
	}
	
	.preset-detail .preset-detail-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.preset-detail-wrapper .preset-item {
		width: 42%;
		height: 150rpx;
		border: 5rpx solid #ccc;
		box-shadow: 1px 0px 12px 2px #ccc;
		border-radius: 28rpx;
		display: flex;
		align-items: center;
		margin-bottom: 50rpx;
	}
	
	.preset-item .preset-item-icon {
		width: 70rpx;
		height: 70rpx;
		padding: 10rpx;
	}
	
	.preset-desc {
		width: calc(100% - 70rpx);
		height: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #fff;
		text-align: center;
	}
	
	.preset-desc .preset-item-title {
		height: 50%;
		
	}
	
	.preset-desc .preset-item-frequent {
		height: 50%;
	}
	
	.add-preset-wrapper {
		position: fixed;
		bottom: 0;
		/* left: 5%; */
		z-index: 11;
		height: 100%;
		width: 100%;
		background: rgba(14, 14, 14, 0.4);
		/* box-shadow: 10rpx black; */
	}
	
	.cancel-preset-detail {
		position: absolute;
		top: 0;
		height: 40%;
		width: 100%;
	}
	
	.add-preset {
		position: absolute;
		bottom: 0;
		height: 60%;
		width: 100%;
		background-color: #fff;
		border-top-left-radius: 45rpx;
		border-top-right-radius: 45rpx;
		border-top: 2rpx solid black;
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
		left: 46rpx;
		top: 14rpx;
	}

	.add-detail-button .detail-row {
		height: 10rpx;
		width: 70rpx;
		background-color: #fff;
		position: absolute;
		top: 45rpx;
		left: 15rpx;
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
