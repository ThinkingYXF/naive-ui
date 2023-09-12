export const FILE_URL = `https://thinkingyxf.top`

export const $message = function(title, icon = "error", duration = 2000){
    uni.showToast({
        title,
        icon,
        duration
    })
}