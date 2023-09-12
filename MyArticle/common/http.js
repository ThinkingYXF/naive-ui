import { $message } from './util';
class FetchHttp {
    constructor() {
        this.baseUrl = ''
    }

    postFileData(url, data) {
        return this._http(url, 'post', data)
    }

    postData(url, data) {
        return this._http(url, 'post', JSON.stringify(data), {
            header: {
                'content-type': 'application/json'
            }
        }
        )
    }

    getData(url, data) {
        return this._http(url, 'get', data)
    }

    _http(url, method = 'get', data, extraConfig) {
        url = this.baseUrl + url
        const token = uni.getStorageSync('loginToken');
        if (token) extraConfig.header.Authorization = `Bearer ${token}`
        let config = {
            url,
            method: method,
            data: data,
            cache: 'no-cache',
            referrer: 'no-referrer',
            header: extraConfig ? extraConfig.header : {}
        }
        this._renderLoading()
        return new Promise((resolve, reject) => {
            uni.request(config).then(response => {
                let res = response.data;
                if (res.code === 900) {
                    this._toLogin()
                    reject(res)
                } else if (res.code === 500) {
                    if (res.message === 'jwt expired') {
                        this._toLogin()
                    } else {
                        $message(res.message || '系统出错，请联系管理员！');
                    }
                    reject(res)
                } else if (res.code !== 200) {
                    $message('系统出错，请稍后重试！');
                    reject(res)
                } else if (res.code === 200) {
                    let t = response.header['x-jwt-token'];
                    if (t) {
                        uni.setStorageSync('loginToken', t)
                    }
                    resolve(res);
                }
                // resolve(res)
            }).catch((err) => reject(err)).finally(() => {
                this._removeLoading()
            })
        })
    }

    _setHeaders() {
    }

    _renderLoading() {
        uni.showLoading({
            title: '加载中',
        })
    }
    _removeLoading() {
        uni.hideLoading();
    }

    _toLogin() {
        $message('登录超时');
        uni.reLaunch({
            url: '/pages/login/login'
        })
        // localStorage.removeItem('loginToken')
    }
}

export default FetchHttp