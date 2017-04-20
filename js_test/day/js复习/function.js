var a = 1;
function fn(a) {
    a = 2;
}
fn(a);
console.log(a);

function fun() {
    var b = c = 1;
}
fun();
console.log(c);