/**
 * Created by Administrator on 2017/3/28 0028.
 */
//onload = function () {
//    var num = 1200;
//    var u_name = document.getElementById("u_name");
//    u_name.onclick = function() {
//        //alert(this.value);
//        alert(this.value);
//    };
//    function hello() {
//        alert("hello");
//    }
//    function aaa() {
//        //alert("aaa");
//        alert(this === window);
//    }
//    var btn = document.getElementById("btn1");
//    var btn2 = document.getElementById("btn2");
//    //btn.addEventListener("click", hello, false);
//    //btn.addEventListener("click", aaa, false);
//    //btn2.attachEvent("onclick", function() {
//    //    alert(this === window);
//    //    //alert("这是全局变量：" + num);
//    //});
//
//
//    //button.setOnClikListener(new onClickListener() {
//    //
//    //});
//    /**
//     * element:元素名称
//     * type:事件类型(不加on)，现代浏览器默认采用DOM2级事件添加方式
//     * handler:function
//     *
//     */
//    var EventUtil = {
//        addHandler : function (element, type, handler) {
//            if(element.addEventListener) {
//                element.addEventListener(type, handler, false);
//            } else if (element.attachEvent) {
//                element.attachEvent("on" + type, handler); //默认添加到事件冒泡阶段
//            } else {
//                element["on" + type] = handler;
//            }
//        },
//        removeHandler : function () {
//            if(element.removeEventListener) {
//                element.removeEventListener(type, handler, false);
//            } else if (element.detachEvent) {
//                element.detachEvent("on" + type, handler); //默认添加到事件冒泡阶段
//            } else {
//                element["on" + type] = null;
//            }
//        }
//    };
//    var btn3 = document.getElementById("btn3");
//    function btn3_fun(event) {
//        //alert("btn3");
//        //alert(event.bubbles);
//        //alert(event.currentTarget);
//        //alert(event.target);
//        alert(event.view);
//
//    }
//    EventUtil.addHandler(btn3, "click", btn3_fun);
//    var a1 = document.getElementById("a1");
//    a1.onclick = function (event) {
//        event.preventDefault();
//        event.stopPropagation();
//    };
//    //给body注册一个点击事件
//    //document.body.onclick = function (event) {
//    //    alert("body clicked");
//    //}
//    function body_fun1(event) {
//            alert("body clicked");
//    }
//    //EventUtil.addHandler(document.body, "click", body_fun1);
//
//    EventUtil.addHandler(document, "load", body_fun1);
//
//};

var EventUtil = {
    addHandler : function (element, type, handler) {
        if(element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler); //默认添加到事件冒泡阶段
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler : function () {
        if(element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler); //默认添加到事件冒泡阶段
        } else {
            element["on" + type] = null;
        }
    }
};
function body_fun1(event) {
    //alert("body clicked");
    alert(event.target); //firefox chrome
}
EventUtil.addHandler(window, "load", body_fun1);
EventUtil.addHandler(window, "unload", function (event) {
    alert("unload");
});
EventUtil.addHandler(window, "resize", function (event) {
    alert("resize");
});
EventUtil.addHandler(window, "scroll", function (event) {
    if (document.compatMode == "CSS1Compat") {
        alert(document.documentElement.scrollTop);
    } else {
        alert(document.body.scrollTop);
    }
    //alert("resize");
});

//只能给window添加load事件
//

onload = function () {
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    btn5.onclick = function (event) {
        alert(event.type);
    };
    btn6.onclick = function () {
        alert(window.event.type);
        alert(window.event.target);
    };

};