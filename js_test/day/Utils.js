/**
 * Created by Administrator on 2017/4/10 0010.
 * param
 * return
 */
var EventUtil = {
    //获取兼容性的事件对象
    getEvent : function (event) {
        return event ? event : window.event;
        //另一种写法
        //var evt = event || window.event;
        //return evt;
    }

};

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

//移动某个元素
function move(element, styleName, value) {
    var current;
    if (styleName == "left" || styleName == "right") {
        current = parseInt(element.style.left);
    } else {
        current = parseInt(element.style.top);
    }
    switch (styleName) {
        case "bottom" :
            styleName = "top";
            element.style[styleName] = (current + value) + "px";
            break;
        case "left" :
            if (current >= value)
                element.style[styleName] = (current - value) + "px";
            break;
        case "right" :
            styleName = "left";
            console.log(current + value);
            element.style[styleName] = (current + value) + "px";
            break;
        case "top" :
            element.style[styleName] = (current - value) + "px";
            break;
    }
}

//拖拽某个单元素
function drag(element, doc) {
    element.onmousedown = function (e) {
        //去除元素的默认事件
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            element.returnValue = false;
        }

        var event = e || window.event;
        var disX = event.offsetX;
        var disY = event.offsetY;
        doc.onmousemove = function (e) {
            var event = e || window.event;
            element.style.left = event.pageX - disX + "px";
            element.style.top = event.pageY - disY + "px";
        };

        doc.onmouseup = function () {
            doc.onmousemove = null;
            doc.onmouseup = null;
        }
    }
}

//cookie Util
var cookieUtil = {
    //添加cookie
    setCookie : function (name, value, expires, domain) {
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
    getCookie : function (name) {
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
    unsetCookie : function (name) {
        document.cookie = encodeURIComponent(name) + "=; expires=" + new Date(0);
    }
};
