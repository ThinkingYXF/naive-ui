import Http from './http'

const request = new Http()

request.baseUrl = 'https://thinkingyxf.top/api'
// request.baseUrl = '/api';

//登录
export const toLogin = (params) => request.postData('/openApi/login', params)
//歌曲列表
export const getMusicList = (params) => request.postData('/openApi/getMusicList', params)
//文章列表
export const getArticleList = (params) => request.postData('/articleList', params)
//获取个人信息
export const getUserInfo = (params) => request.postData('/userInfo', params)
