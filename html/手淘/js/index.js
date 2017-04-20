onload = function () {
    var countDown = document.getElementsByClassName("q_info")[0];//获取倒计时div
    var span = countDown.children;//1 , 3 , 5

    var countDown_span = countDown.children;
    var timeString = "2017/4/19 9:15:00";
    
    // console.log(time);
    //实现倒计时的方法
    function countDownFun() {
        //time:毫秒数,小于24h
        var time = (new Date(timeString).getTime()) - (new Date().getTime());
        var hour = parseInt(time / (1000 * 60 * 60)) > 9 ? parseInt(time / (1000 * 60 * 60)) : "0" + parseInt(time / (1000 * 60 * 60));
        var minutes = parseInt(time / (1000 * 60)) % 60 > 9 ? parseInt(time / (1000 * 60)) % 60 : "0" + parseInt(time / (1000 * 60)) % 60;
        var seconds = Math.round((time / 1000) % 60) > 9 ? Math.round((time / 1000) % 60) : "0" + Math.round((time / 1000) % 60);
        console.log(hour + ":" + minutes + ":" + seconds);
        span[0].innerHTML = hour;
        span[2].innerHTML = minutes;
        span[4].innerHTML = seconds;
    }

    // countDownFun(132*1000*456);
    setInterval(function () {
        countDownFun();
    }, 1000);
}