/**
 * Created by Administrator on 2017/4/10 0010.
 * param
 * return
 */
var EventUtil = {
    //获取兼容性的事件对象
    getEvent: function (event) {
        return event ? event : window.event;
        //另一种写法
        //var evt = event || window.event;
        //return evt;
    }

};

//随机改变某个元素的颜色
function randomColor(element) {
    //for (var i = 0; i < p.length; i++) {
    var r = parseInt((Math.random() * 256));
    var g = parseInt((Math.random() * 256));
    var b = parseInt((Math.random() * 256));
    var color = "rgb(" + b + "," + r + "," + g + ")";
    element.style.background = "rgb(" + r + "," + g + "," + b + ")";
    element.style.color = color;
    return color;
    //}
}

//cookie Util
var cookieUtil = {
    //添加cookie
    setCookie: function (name, value, expires, domain) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires && expires instanceof Date) {
            cookieText += "; expires=" + expires;
        }
        //if (path) {
        //    cookieText += "; path=" + path;
        //}
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        document.cookie = cookieText;
        //console.log(decodeURIComponent(cookieText));
    },
    //获取cookie
    getCookie: function (name) {
        var cookieText = decodeURIComponent(document.cookie);
        var cookieArr = cookieText.split("; ");
        for (var i = 0; i < cookieArr.length; i++) {
            var arr = cookieArr[i].split("=");
            if (arr[0] == name) {
                return arr[1];
            }
        }
        return null;
    },
    //删除cookie
    unsetCookie: function (name) {
        document.cookie = encodeURIComponent(name) + "=; expires=" + new Date(0);
    }
};

//根据ID返回某个元素
function $(id) {
    return document.getElementById(id);
}

function getStyle(element, styleName) {
    if (styleName == "scrollTop") {
        console.log("scrollTop:" + element[styleName]);
        return element[styleName];
    }
    if (window.getComputedStyle) {
        return getComputedStyle(element, null)[styleName];
    } else {
        return element.currentStyle[styleName];
    }
}

// (function () {
//缓冲运动
var timer = null;
function animation(element, cssStyle, callBack) {
    clearInterval(element.timer);
    
    element.timer = setInterval(function () {
        for (var styleName in cssStyle) {
            var flag = true;
            var targetValue = cssStyle[styleName];
            //判断是opacity还是普通属性
            var current;
            if (styleName == "opacity") {
                current = parseInt(getStyle(element, styleName) * 100);
                // console.log(current);
            } else {
                current = parseInt(getStyle(element, styleName));
            }
            // var current = parseInt(getStyle(element, styleName));
            var speed = (targetValue - current) / 20;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // if (current == targetValue) {
            //     clearInterval(element.timer);
            //     if (callBack) {
            //         callBack();
            //     }
            //     return false;
            // }
            if (current != targetValue) {
                flag = false;
            }
            if (styleName == "opacity") {
                // console.log("sss");
                element.style.opacity = (current + speed) / 100;
                element.style.filter = "alpha(opacity=" + (current + speed) + ")";
            } else if (styleName == "scrollTop") {
                console.log("重置scrollTop")
                element[styleName] = current + speed;
            } else {
                element.style[styleName] = current + speed + "px";
            }
            // element.style[styleName] = current + speed + "px";
        }
        if (flag) {
            console.log("停止动画");
            clearInterval(element.timer);
            if (callBack) {
                callBack();
            }
        }
    }, 16.7);
}

//匀速动画
var linearTimer = null;
function linearAnimate(element, cssStyle, callBack) {
    clearInterval(element.linearTimer);
    element.linearTimer = setInterval(function () {
        var flag = true;
        for (var styleName in cssStyle) {
            // var flag = true;
            var targetValue = cssStyle[styleName];
            //判断是opacity还是普通属性
            var current;
            if (styleName == "opacity") {
                current = parseInt(getStyle(element, styleName) * 100);
                // console.log(current);
            } else {
                current = parseInt(getStyle(element, styleName));
            }
            // var current = parseInt(getStyle(element, styleName));
            // var speed = (targetValue - current) > 0 ? 5 : -5;
            var speed;
            if (targetValue - current > 0) {
                speed = 5;
            } else if (targetValue - current < 0) {
                speed = -5;
            } else {
                speed = 0;
            }
            // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (Math.abs(targetValue - current) > Math.abs(speed)) {
                flag = false;
            }
            if (styleName == "opacity") {
                // console.log("sss");
                element.style.opacity = (current + speed) / 100;
                element.style.filter = "alpha(opacity=" + (current + speed) + ")";
            } else if (styleName == "scrollTop") {
                console.log("重置scrollTop")
                element[styleName] = current + speed;
            } else {
                element.style[styleName] = current + speed + "px";
            }
            // element.style[styleName] = current + speed + "px";
        }
        if (flag) {
            console.log("停止动画");
            clearInterval(element.linearTimer);

            if (callBack) {
                callBack();
            }
        }
    }, 16.7);
}
// })();

//线性运动
var flexTimer = null;
function flexAnimate(element, styleName, targetValue, callBack) {
    clearInterval(element.flexTimer);
    var speed = 0;
    element.flexTimer = setInterval(function () {
        console.log("ssss");
        // var flag = true;
        // for (var styleName in cssStyle) {
            // var flag = true;
            // var targetValue = cssStyle[styleName];
            var current = parseInt(getStyle(element, styleName));
            // console.log(current + "px");
            // var current = parseInt(getStyle(element, styleName));
            // var speed = (targetValue - current) > 0 ? 5 : -5;
            speed += (targetValue - current) / 10;
            console.log("speed" + speed);
            speed *= 0.9;
            if (Math.abs(speed) < 1 && Math.abs(targetValue - current) < 1) {
                //清除计时器
                console.log("动画结束");
                clearInterval(element.flexTimer);
                element.style[styleName] = targetValue + "px";
            }
            // if (targetValue - current > 0) {
            //     speed = 5;
            // } else if (targetValue - current < 0) {
            //     speed = -5;
            // } else {
            //     speed = 0;
            // }
            // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // if (Math.abs(targetValue - current) > Math.abs(speed)) {
            //     flag = false;
            // }
            // if (styleName == "opacity") {
            //     // console.log("sss");
            //     element.style.opacity = (current + speed) / 100;
            //     element.style.filter = "alpha(opacity=" + (current + speed) + ")";
            // } else if (styleName == "scrollTop") {
            //     console.log("重置scrollTop")
            //     element[styleName] = current + speed;
            // } else {
            //     element.style[styleName] = current + speed + "px";
            // }
            element.style[styleName] = current + speed + "px";
            // console.log(current + speed + "px");
        // }
        // if (flag) {
        //     console.log("停止动画");
        //     clearInterval(element.flexTimer);

        //     if (callBack) {
        //         callBack();
        //     }
        // }
    }, 16.7);
}