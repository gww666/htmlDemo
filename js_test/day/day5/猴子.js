/**
 * Created by Administrator on 2017/3/31 0031.
 * param
 * return
 */
function hz(n) {
    if (n == 10) {
        return 1;
    }
    return hz(n + 1) * 2 + 2;
}
console.log(hz(1));