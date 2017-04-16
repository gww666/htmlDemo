/**
 * Created by Administrator on 2017/3/29 0029.
 */


//function num(id, name) {
//    return id;
//}

function c(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }

    };
}
//定义一个保存对象的数组
var data =[{name : "zhangsan", age : 20}, {name : "lisi", age : 21}];

data.sort(c("age"));
console.log(data[0].name);

function cc() {
  var array = [];
    for (var i = 0; i < 10; i++) {
        array[i] = (function(rum) {
            return rum;
        })(i);
    }
    return array;
}

function bb() {
    var array = [];
    for (var i = 0; i < 10; i++) {
        array[i] = (function(num) {
            return function () {
                return num;
            };
        })(i);
    }
    return array;
}

for (var i = 0; i < cc().length; i++) {
    console.log(bb()[i]());
}