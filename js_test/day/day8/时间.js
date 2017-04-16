/**
 * Created by Administrator on 2017/4/6 0006.
 * param
 * return
 */
var date = new Date(2017,11,1,12,0,0);
console.log(date);
//console.log(date.getDate());
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dt = date.getDate();
var day = date.getDay();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var str = year + "-" + month + "-" + dt + " " + hour + ":" + minutes + ":" + seconds + " 星期" + day;
console.log(str);

