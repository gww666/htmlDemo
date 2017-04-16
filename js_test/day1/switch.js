/**
 * Created by Administrator on 2017/3/28 0028.
 */
var i = 7;
switch (i) {
    case 1 :
        console.log("星期一");
        break;
    case 2 :
        console.log("星期2");
        break;
    case 3 :
        console.log("星期3");
        break;
    case 4 :
        console.log("星期4");
        break;
    case 5 :
        console.log("星期5");
        break;
    case 6 :
        console.log("星期6");
        break;
    case 0 :
        console.log("星期7");
        break;
    default :
        console.log("error");
        break;
}

var month = parseInt(prompt("请输入月份", 1));

switch (month) {
    case 4:case 6:case 9:case 11:
        alert(month + "月有30天");
        break;
    case 2:
        alert(month + "月有28天");
        break;
    default:
        alert(month + "月有31天");
        break;
}