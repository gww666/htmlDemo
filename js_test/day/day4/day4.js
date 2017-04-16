/**
 * Created by Administrator on 2017/3/30 0030.
 * param
 * return
 */
function cfTable() {
    for (var i = 1; i <= 9; i++) {
        document.write("<span>");
        for (var j = 1; j <= i; j++) {
            document.write(i + "*" + j + "=" + (i * j) + "&nbsp;&nbsp;");
        }
        document.write("</span>");
        document.write("<br/>");
    }
}

//cfTable();
function aaa(num) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        console.log("质数");
    } else {
        console.log("合数");
    }
}

//aaa(5);

function add(num1, num2, operator) {
    var result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    return result;
}

console.log(add(2, 5, "/"));

function mMax(a, b ,c) {
    var temp;
    //if (a > b && a > c) {
    //    temp = a;
    //}
    //if (b > a && b > c) {
    //    temp = b;
    //}
    //if (c > a && c > b) {
    //    temp = b;
    //}

}

function mMax2(a) {
    //var arr = [a, b, c];
    //return arguments;
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    return arr.sort(function (m, n){
       return m - n;
    })[arguments.length - 1];
    //return arr.sort(function(m, n) {
    //    return m - n;
    //});
    //return arguments.sort(function(m, n) {
    //    return m - n;
    //})

}

console.log(mMax2(23, 222, 3)[2]);
//console.log(mMax2(2,36,4,77,-8,-98,198,206,123));

function num(a) {
    var maxNum = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (maxNum > arguments[i]) {
            maxNum = arguments[i];
        }
    }
    return maxNum;
}
console.log(num(1,23,45,-66,-456,0,78,-456,35,-22,555,190));