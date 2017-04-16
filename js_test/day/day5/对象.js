//基本类型和引用类型的区别1
var a = 10;
var b = a;
a = 20;
console.log(b); //10
var obj1 = {
    name : "san"
};

var obj2 = obj1;
obj1.name = "si";
console.log(obj2.name); //si

//
var person = {
    name : "lisi",
    age : 23,
    sayHello : function () {
        console.log(this.name + "age" + this.age);
    }
};

person.sayHello();

var cz = {
    width : 200,
    height : 100,
    weight : 400,
    ddd : function () {
        console.log("砸钉子");
    }
};
cz.ddd();
var car = {
    speed : 50,
    run : function (roadLong) {
        console.log("全长:" + roadLong + "km, " + "需要行驶" + (roadLong / 50) + "h")
    }
};

var road = {
  roadLong : 1000
};

car.run(road.roadLong);