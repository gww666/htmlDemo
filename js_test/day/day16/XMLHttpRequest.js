//http是一种无状态协议
// if (condition) {
    
// }
// function createXHR() {
//     if (typeof XMLHttpRequest != "undefined") {
//         return new XMLHttpRequest();
//     } else if (typeof ActiveXObject != "undefined") {

//     }
// }
//创建XMLHttpRequest对象
function createXMLHttpRequest() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        try {
            request = new ActiveXObject("MSXML2.XMLHTTP");
        } catch(e) {
            console.log(e);
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (error) {
                console.log(error);
            }
        }
    }
    return request;
}

