/**
 * Created by Administrator on 2017/4/7 0007.
 * param
 * return
 */
//创建对象的方式：

//工厂模式
function Obj1() {

}

console.log(Obj1.prototype);

//var o1 = new Obj1();
//alert(navigator.appName);

//原型模式
function Person() {

}
Person.prototype = {
    name : "lisi",
    arr : [0, 1]
};

var p1 = new Person();
var p2 = new Person();

//console.log(p1.name);
p2.name = "lisan";
//console.log(p1.name);
//console.log(p2.name);
p2.arr[0] = 123;
console.log(p1.arr);
console.log(p2.arr);

//构造函数模式+原型模式
function Car() {
    this.arr = [0, 1];
}
Car.prototype.sayHello = function () {
    console.log("Hello");
};

var car1 = new Car();
var car2 = new Car();
car2.arr = [1, 2, 3];
console.log(car1.arr);
console.log(car2.arr);
