<template>
	<view class="login">
		<image class="login_logo" src="../../static/logo.png" />
		<view class="login_content">
			<view class="login_input">
				<input type="text" v-model="form.username" placeholder="账号" />
			</view>
			<view class="login_input">
				<input type="password" v-model="form.password" placeholder="密码" />
			</view>
			<button type="warn" @tap="login">登录</button>
		</view>
	</view>
</template>

<script>
	import {
		$message
	} from "../../common/util.js";
	import {
		toLogin
	} from "../../common/api";
	export default {
		data() {
			return {
				form: {
					username: "",
					password: "",
				},
			}
		},
		methods: {
			login() {
				if (!this.form.username) {
					return $message("请输入账号");
				}
				if (!this.form.password) {
					return $message("请输入密码");
				}
				toLogin(this.form).then((res) => {
					uni.switchTab({
						url: "/pages/index/index",
					});
				});
			},
		}
	}
</script>

<style scoped lang="less" src="./login.less"></style>