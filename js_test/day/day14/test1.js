/**
 * Created by Administrator on 2017/4/13 0013.
 * param
 * return
 */
var reg = /\w^_{1,14}/;
var str = "asdfcsdfs_";
console.log(reg.test(str));
var r3 = /^[0-9a-z]{11,16}$/;
str = "121111111fd11";
console.log(r3.test(str));
str = "I am good man Man MAn";
reg = /mAn/gi;
console.log(str.match(reg)); // [man]
//console.log( reg.exec(str) ); // [man]
//console.log( reg.exec(str) ); // [man]
//console.log( reg.exec(str).length ); // [man]
