/**
 * Created by Administrator on 2017/4/1 0001.
 * param
 * return
 */
var arr = [11, 2, 33, 8, 2];
function fun1(arr) {
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    var min_index;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
            min_index = i;
        }
    }
    console.log("sum:" + sum);
    console.log("max:" + max);
    console.log("min:" + min);
    console.log("min_index:" + min_index);
}

//fun1(arr);

function moveRight(arr) {
    var mArr = new Array(arr.length + 1);
    for (var i = 0; i < arr.length; i++) {
        //mArr[i] = arr[i];
        //arr[arr.length] = arr[length - 1];
        mArr[i + 1] = arr[i];
    }
    //arr[0] = null;
    //console.log(mArr);
    console.log(mArr);
}

//moveRight(arr);
//var arr = [11, 4, 33, 8, 2];

var arr2 = [1, 46, 74, 3, 5, 5];

function insert(arr) {
    for (var i = arr.length; i >= 0; i--) {
        if (i > 2) {
            arr[i] = arr[i - 1];
        } else if (i == 2) {
            arr[2] = 8;
        }
    }
    console.log(arr);
}
//insert(arr2);

function random() {
    var mArr = [];
    console.log(mArr.length);
    while (mArr.length != 10) {
        var num = parseInt((Math.random() * 49) + 1);
        console.log(num);
        var flag = false;
        for (var i = 0; i < mArr.length; i++) {
            if (arr[i] == num) {
                flag = true;
            }
        }
        if (!flag) {
            mArr[mArr.length] = num;
        }
    }
    return mArr;
}


console.log(random());