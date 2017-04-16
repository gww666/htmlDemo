/**
 * Created by Administrator on 2017/3/29 0029.
 */
//1
var m_year = 2000 * 12;
for (var i = 0; i < 20; i++) {
    m_year *= 1.05;
}
var m_month = m_year / 12;
console.log(m_month);

//2
var total = 50 - 15;
var num = 0;
while (total) {
    num++;
    total -= 5;
}
console.log(num);

//3
for (i = 100; i < 201; i++) {
    if (i % 3 == 0 || i % 7 == 0) {
        //console.log(i);
    }
}

//4
var sum = 0;
for (i = 0; i < 10; i++) {
    for (var j = 1, n = 1; j <= i + 1; j++) {
        n *= j;
    }
    sum += n;
}
console.log(sum);

//5
for (i = 1, sum = 0; i <= 99; i += 2) {
    sum += i;
}
console.log(sum);

//6
//for (i = 0; i < 9; i++) {
//    for (j = 1; j <= i + 1; j++) {
//        document.write((i+1) + "*" + j + "=" + (i * j) + "&nbsp;&nbsp;");
//    }
//    document.write("<br/>");
//}

//7和8
num = 389;
var count = 0;
for (i = 0; i < num; i++) {
    if (num % (i + 1) == 0) {
        count++;
    }
}
if (count > 2) {
    console.log(num + "是合数");
} else {
    console.log(num + "是质数");
    //console.log(count);

}

//9
sum = 1;
for (i = 1; i < 100; i++) {
    if ((i + 1) % 2 == 0) {
        sum -= 1 / (i + 1);
    } else {
        sum += 1 / (i + 1);
    }
}
console.log(sum);

//水仙花数1
num = 0; //非水仙花数的个数
for (var i=100, j = 1; j < 10; j++) { //控制百循环
    for (var k = 0; k < 10; k++) { //控制十循环
        for (var l = 0; l < 10; l++, i++) { //控制个循环
            if (i == Math.pow(j, 3)+ Math.pow(k, 3) + Math.pow(l, 3)) {
                console.log(i);
            } else {
                num++;
            }
        }
    }
}
console.log(num);

//水仙花数2
for (i = 100; i < 1000; i++) {
    var a = i % 10; //取得个位数
    var b = parseInt(i / 10) % 10; //取得十位
    var c = parseInt(i / 100);
    if (i == Math.pow(a, 3)+ Math.pow(b, 3) + Math.pow(c, 3)) {
        console.log(i);
    }
}

//1000以内的质数
for (i = 1; i < 1000; i++) {
    num = 0;
    for (j = 1; j <= i; j++) {
        if (i % j == 0) {
            num++;
        }
    }
    if (num <= 2) {
        console.log(i);
    }
}
//正三角形
for (i = 1; i <= 5; i++) {
    if (i % 2 != 0) {
        for (j = 5; j > i; j--) {
            //document.write("<span>*</span>");
            document.write("&nbsp;");
        }
        //document.write("&nbsp;&nbsp;");
        for (k = 1; k <= i; k++) {
            document.write("*");
        }
        document.write("<br/>");
    }
}
