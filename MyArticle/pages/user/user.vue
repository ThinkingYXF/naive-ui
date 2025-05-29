<template>
	<view class="user">
		<view class="user_header">
			<image class="user_icon" v-if="userInfo.userIcon" :src="`${FILE_URL}${userInfo.userIcon}`" />
			<view class="user_info">
				<view>{{userInfo.nickname}}</view>
				<view class="f_small">{{userInfo.mobile}}</view>
			</view>
		</view>
		<!-- <uni-list>
			<uni-list-item title="个人信息" link to="/pages/index/index"></uni-list-item>
		</uni-list> -->
	</view>
</template>

<script>
	import { FILE_URL } from "../../common/util";
	import { getUserInfo } from "../../common/api";
	export default {
		data() {
			return {
				userInfo: {},
				FILE_URL,
			}
		},
		onLoad(){
			this.init();
		},
		methods: {
			init(){
			      getUserInfo().then(res=>{
			        if(res.code == 200){
			          this.userInfo = res.result;
			        }
			      })
			    }
		}
	}
</script>

<style scoped lang="less" src="./user.less"></style>