/**
 * Created by Administrator on 2017/3/29 0029.
 * param
 * return
 */
onload = function () {
    EventUtil = {
        addHandler : function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        //获得事件
        getEvent : function(event) {
            return event ? event : window.event;
        },
        //获得目标元素
        getTarget : function(event) {
            return event.target || event.srcElement;
        },
        //阻止特定事件的默认行为
        preventDefault : function(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        //阻止事件在DOM层次中的传播，IE9以下只能阻止冒泡（因为IE9以下没有事件捕获）
        stopPropagation : function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },
        //取得相关元素
        getRelatedTarget : function (event) {
            if (event.relatedTarget) {
                return event.relatedTarget;
            } else if (event.toElement) {
                return event.toElement;
            } else if (event.fromElement) {
                return event.fromElement;
            } else {
                return null;
            }
        }

    };
    var box = document.getElementById("box");
    //box.onmouseenter = function () {
    //    alert("box");
    //}
    box.onclick = function (event) {
        alert(event.clientX + ", " + event.clientY);
        event.stopPropagation();
    };
    document.body.onclick = function (event) {
        alert(event.clientX + ", " + event.clientY);
    };

    //relatedTarget
    EventUtil.addHandler(box, "mouseout", function(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        var relatedTarget = EventUtil.getRelatedTarget(event);
        alert(target.tagName);
        alert(relatedTarget.tagName);
        //alert(relatedTarget.targetName);
        //alert(event.type);
        //alert(event.relatedTarget);
    });
    //Firefox DOMMouseScroll
    EventUtil.addHandler(window, "DOMMouseScroll", function(event) {
        alert(event.detail);
    });
};