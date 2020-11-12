<!-- 这是添加流水组件 -->
<template>
	
		<view>
			<picker mode="time" :value="recordTime" @change="bindTimeChange">
				<view class="picker">
					选择专注时间:<span>{{recordTime}}</span>
				</view>
			</picker>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				recordTime: '00:30',
			};
		},
		methods: {
			bindTimeChange(e) {
				this.recordTime = e.target.value;
			},

		}
	};
</script>

<style scoped>
</style>
