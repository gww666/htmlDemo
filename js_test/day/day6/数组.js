/**
 * Created by Administrator on 2017/4/1 0001.
 * param
 * return
 */
var arr = new Array(2);
arr[0] = "f";
arr[1] = 123;
//console.log(arr);

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arr2.length; i++) {
    arr2[i] *= arr2[i];
}
//console.log(arr2);


//数组去重
var arr1 = ["a", "b", "c", "d", "f", "f", "g", "h","f","c"];
//var arr2 = ["v", "z", "h", "d", "k", "l", "p", "m"];

function qc(arr1) {
    //var qcArr = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if (j == i) {
                //console.log("执行");
                continue;
            }
            if (arr1[i] == arr1[j]) {
                //console.log(arr1[i]);
                arr1.splice(i, 1);
            }
            //console.log(arr1.length);
        }
    }
    return arr1;
}
//qc(arr1);
//console.log(arr1);
console.log(qc(arr1));

