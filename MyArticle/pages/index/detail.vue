<template>
	<view>
		<view class="title">{{dataInfo.title}}</view>
		<uni-list v-if="dataInfo">
			<uni-list-chat :title="dataInfo.username" 
			:avatar-circle="true" :avatar="`${FILE_URL}${dataInfo.userIcon}`" 
			:note="dataInfo.description" :time="formatDate(dataInfo.createTime)"></uni-list-chat>
		</uni-list>
		<view class="content">
			<mp-html :content="dataInfo.content" />
		</view>
	</view>
</template>

<script>
	import { FILE_URL, formatDate } from '../../common/util.js'
	import { getArticleInfo } from '../../common/api.js'
	export default {
		data() {
			return {
				id: "",
				dataInfo: "",
				FILE_URL
			}
		},
		onLoad(e){
			this.id = e.id;
			this.init();
		},
		methods: {
			formatDate,
			init(){
				getArticleInfo({ id: this.id }).then(res=>{
					this.dataInfo = res.result;
				})
			}
		}
	}
</script>

<style scoped lang="less">
	page{
		background-color: #fff;
	}
	.title{
		text-align: center;
		margin: 30upx 0;
		font-size: 42upx;
		font-weight: bold;
	}
	.content{
		max-width: 100%;
		box-sizing: border-box;
		margin-top: 20upx;
		padding: 20upx;
		padding-bottom: 80upx;
	}
</style>
