console.log("数组去重");
var arr = [1, null, 5, 4, 4, 4, 99, NaN, undefined, null, 3, 2, 99, NaN, 9, undefined];
var obj = {};
var newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]]++
    } else {
        obj[arr[i]] = 1;
    }
}
for (let key in obj) {
    newArr.push(key);
}
console.log(newArr);

//双重循环
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (i != j) {
            if(arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
}
console.log(arr);