onload = function() {
//var a = 100, b = 600;
//console.log("a = " + ((a+b)-a));
//console.log("b = " + ((a+b)-b));
//
//var n = 0;
//if(n%2 == 0) {
//    console.log("even");
//} else {
//    console.log("odd");
//}
////for (var i = 0; i < 7 && i !=5 && 1 != 6; i++) {
////    console.log(i + 1);
////}
////    console.log("ddddd" + parseInt(5/2));
////    console.log("ddddd" + parseFloat(5/2));
//if(parseInt(n/2) == parseFloat(n/2)) {
//    console.log("even");
//} else {
//    console.log("odd");
//}
//
////判断最大数
//var c = 200, d =199;
//if(c > d) {
//    console.log(c);
//} else if (c < d) {
//    console.log(d);
//} else {
//    console.log("c = d");
//}
//
////判断一个年份是闰年还是平年
//var year = 1986;
//if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//    console.log(year + "是闰年");
//} else {
//    console.log(year + "是平年");
//}
//
//var yearData = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)?"闰年":"平年";
//console.log(yearData);

//
//var y, x = 1;
//if (x < 1) {
//    y = x;
//} else if (x >=1 && x <10) {
//    y = 2 * x + 1;
//} else if (x >= 10) {
//    y = 5 * x -17;
//}
//console.log(y);
    //获取每个输入框
    var ipt_year = document.getElementById("year");
    var ipt_month = document.getElementById("month");
    var ipt_day = document.getElementById("day");
    var btn = document.getElementById("btn");
    var ipt_dayth = document.getElementById("dayth");

    //为btn添加点击处理事件
    btn.addEventListener("click", function () {
        var year = parseInt(ipt_year.value);
        var month = parseInt(ipt_month.value);
        var day = parseInt(ipt_day.value);
        ipt_dayth.value = year + "年" + month + "月" + day + "日是该年第" +showDay(year, month, day) + "天";
    }, false);

    //计算多少天的方法
    function showDay(year, month, day) {
        var yearType; //年份类型

        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            yearType = 1; //闰年
        } else {
            yearType = 0; //平年
        }
        var dayResult = 0; //第几天
        for (var i = 1; i < month; i++) {
            switch (i) {
                case 2 :
                    if (yearType) {
                        dayResult += 29;
                    } else {
                        dayResult += 28;
                    }
                    break;
                case 4:;
                case 6:;
                case 9:;
                case 11:
                    dayResult += 30;
                    break;
                default :
                    dayResult += 31;
                    break;
            }
        }
        //循环完毕加上day
        dayResult += day;
        return dayResult;
    }

    //var year = 2000, month = 12, day = 20;
    //var dayResult = 0;
    //if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    //    //闰年情况
    //    for (var i = 1; i < month; i++) {
    //        switch (i) {
    //            case 2 :
    //                dayResult += 29;
    //                break;
    //            case 4:
    //            case 6:
    //            case 9:
    //            case 11:
    //                dayResult += 30;
    //                break;
    //            default :
    //                dayResult += 31;
    //                break;
    //        }
    //    }
    //} else {
    //    //平年情况
    //    for (var i = 1; i < month; i++) {
    //        switch (i) {
    //            case 2 :
    //                dayResult += 28;
    //                break;
    //            case 4:
    //                ;
    //            case 6:
    //                ;
    //            case 9:
    //                ;
    //            case 11:
    //                dayResult += 30;
    //                break;
    //            default :
    //                dayResult += 31;
    //                break;
    //        }
    //    }
    //}
    //dayResult += day;
    //console.log(dayResult);

//判断成绩
//var score = 79;
//if (score > 85) {
//    console.log("优秀");
//} else if (score >= 75 && score <= 85) {
//    console.log("良好");
//} else if (score >= 60 && score > 75) {
//    console.log("合格");
//} else {
//    console.log("不及格");
//}
//
////体重
//var high = 172, rWeight = 110;
//var sWeight = (high - 108) * 2;
//if (rWeight > sWeight + 10) {
//    console.log("超重");
//} else if (rWeight < sWeight - 10) {
//    console.log("过轻");
//} else {
//    console.log("合格");
//}
};

