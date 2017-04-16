/**
 * Created by Administrator on 2017/4/1 0001.
 * param
 * return
 */
function fun1(arr) {
    var newArr = arr.slice(3,6);
    return newArr;
}

var arr1 = [3,2,4,5,8,6,3,9];
//console.log(fun1(arr1));

function fun2(arr) {
    arr.splice(4, 0, 5);
    return arr;
}

var arr2 = [1,2,3,4,6,7,8,9];
//console.log(fun2(arr2));

var arr3 = ["你","是","一","只","笨","鸟"];
function fun3(arr) {
    arr.splice(4, 1, "聪", "明");
    return arr;
}
console.log(fun3(arr3));

var arr4 = [20,23,21,34,54,55,32];

function fun4(arr) {
    arr.splice(-3, 2);
    return arr;
}
console.log(fun4(arr4));