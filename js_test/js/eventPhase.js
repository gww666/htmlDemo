/**
 * Created by Administrator on 2017/3/28 0028.
 */
onload = function() {
    var d4 = document.getElementById("d4");
    var btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", function(event) {
        alert(event.eventPhase);
        event.stopPropagation(); // 阻止事件在DOM层次中的传播，这里是阻止冒泡
    }, true);

    d4.addEventListener("click", function(event) {
        alert(event.eventPhase);
    }, false);
};
