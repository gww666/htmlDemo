/**
 * Created by Administrator on 2017/3/27 0027.
 */
var a1 = 10 + "10";
console.log(a1);
console.log(typeof a1);
console.log(typeof NaN);
//console.log()
console.log(1 - "1");

var sDay = parseInt(89/24) + "天" + 89%24 + "小时";
//var day = parseInt(89/24);
//var hour = 89%24;
console.log(sDay);

var fCtem = 5 / 9.0 * (80 - 32);
console.log(fCtem + "摄氏度");
var fFtem = fCtem * 9.0 / 5 + 32;
console.log(fFtem + "华氏度");

//console.log(null == undefined);
//console.log(1 == "1");
//console.log(NaN == "NaN");
//console.log(true);
//console.log(2 == true);
console.log(undefined == "undefined");
console.log();

onload = function () {
    //获得每个输入框
    var add = document.getElementById("add");
    //var add = document.getElementById("add");
    var reduce = document.getElementById("reduce");
    //获得每个按钮
    var add_btn = document.getElementById("add_btn");
    var reduce_btn = document.getElementById("reduce_btn");
    var c_btn = document.getElementById("c_btn");
    var cy_btn = document.getElementById("cy_btn");
    //加
    add_btn.onclick = function () {
        //console.log(add);
        //console.log(parseInt(add.value));

        alert(Number(add.value) + Number(reduce.value));
    };
    //减
    reduce_btn.onclick = function () {
        //console.log(document.getElementById("add").value);

        alert(Number(add.value) - Number(reduce.value));
    };
    //乘
    c_btn.onclick = function () {
        //console.log(document.getElementById("add").value);

        alert(Number(add.value) * Number(reduce.value));
    };
    //除
    cy_btn.onclick = function () {
        //console.log(document.getElementById("add").value);

        alert(Number(add.value) / Number(reduce.value));
    };

};

