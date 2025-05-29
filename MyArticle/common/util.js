export const FILE_URL = `https://thinkingyxf.top`

export const $message = function(title, icon = "error", duration = 2000) {
	uni.showToast({
		title,
		icon,
		duration
	})
}
export const formatDate = function(time, mark, n) {
	if (time == null || time == '') {
		return '';
	} else {
		var date = new Date(parseInt(time));
		var dYear = date.getFullYear();
		var dMonth = date.getMonth() + 1;
		var dDate = date.getDate();
		var dHours = date.getHours();
		var dMinutes = date.getMinutes();
		var dSeconds = date.getSeconds();
		if (dMonth < 10) {
			dMonth = '0' + dMonth
		};
		if (dDate < 10) {
			dDate = '0' + dDate
		};
		if (dHours < 10) {
			dHours = '0' + dHours
		};
		if (dMinutes < 10) {
			dMinutes = '0' + dMinutes
		};
		if (dSeconds < 10) {
			dSeconds = '0' + dSeconds
		};
		if (mark) {
			if (n == 1) {
				return dYear + mark + dMonth + mark + dDate;
			} else if (n == 2) {
				return dYear + mark + dMonth;
			} else if (n == 3) {
				return dYear;
			} else {
				return dYear + mark + dMonth + mark + dDate + ' ' + dHours + ':' + dMinutes + ':' + dSeconds;
			}
		} else {
			if (n == 1) {
				return dYear + '-' + dMonth + '-' + dDate;
			} else if (n == 2) {
				return dYear + '-' + dMonth + '-' + dDate + ' ' + dHours + ':' + dMinutes;
			} else if (n == 3) {
				return dYear + "-" + dMonth + "-" + dDate + " " + dHours + ":00:00";
			} else if (n == 4) {
				return dYear + "年" + dMonth + "月" + dDate + "日";
			} else {
				return dYear + '-' + dMonth + '-' + dDate + ' ' + dHours + ':' + dMinutes + ':' + dSeconds;
			}
		}
	}
}