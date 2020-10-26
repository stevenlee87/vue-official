<template>
	<view class="">
		<mycomponent title="hi" content="content...." @tap1="tap"></mycomponent>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	import mycomponent from "@/components/mycomponent.vue"
	export default {
		data() {
			return {
				title: 'Hello....'
			}
		},
		onLoad() {

		},
		methods: {
			tap : function(e){
				console.log(e)
			}
		},
		components: {
			uniNumberBox,
			mycomponent
		}
	}
</script>
<style lang="less">
@import "../../less.less";
</style>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
