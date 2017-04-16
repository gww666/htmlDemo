/**
 * Created by Administrator on 2017/4/1 0001.
 * param
 * return
 */
var arr = ["a", 1, 2];
//for (var i = 0; i < arr.length; i++) {
//
//}
var t = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = t;
console.log(arr);