<template>
	<view class="index">
		<view class="search_content">
			<view class="index_search">
				<icon size="16" type="search" />
				<input type="text" v-model="searchInput" placeholder="请输入搜索内容" @confirm="search" />
			</view>
		</view>
		<view class="item_content">
			<view class="item" v-for="(item, i) in dataList" :key="i" @click="goDetail(item)">
				<image class="item_logo" :src="FILE_URL + item.imgUrl" />
				<view class="item_right">
					<view class="title">{{ item.title }}</view>
					<view class="desc">{{ item.description }}</view>
				</view>
			</view>
			<view class="loadmore">{{ loadmore }}</view>
		</view>

		<view style="height: 30px"></view>
	</view>
</template>

<script>
	import {
		getArticleList
	} from "../../common/api";
	import {
		FILE_URL
	} from "../../common/util";
	export default {
		data() {
			return {
				FILE_URL,
				searchInput: "",
				form: {
					pageNo: 1,
					pageSize: 10,
					title: "",
					// userId: this.$store.getters.loginUserId
				},
				dataList: [],
				loadmore: "暂无数据",
			}
		},
		onLoad() {
			this.getArticle();
		},
		methods: {
			getArticle() {
				getArticleList(this.form).then((res) => {
					this.dataList = [...this.dataList, ...res.result.rows];
					if (res.result.rows.length < 10) {
						this.loadmore = "- 已经到底了 -";
					}
					if (this.dataList.length == 0) {
						this.loadmore = "- 暂无数据 -";
					}
				});
			},
			search() {
				this.form.title = this.searchInput;
				this.form.pageNo = 1;
				this.dataList = [];
				this.getArticle();
			},
			goDetail(item){
				uni.navigateTo({
					url: `/pages/index/detail?id=${item.id}`
				})
			}
		},
		onReachBottom() {
			setTimeout(() => {
				this.form.pageNo++;
				this.getArticle();
			});
		}
	}
</script>

<style scoped lang="less" src="./index.less"></style>