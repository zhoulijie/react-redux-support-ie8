//把对象转成url的queryString
//使用：
//var json = {
//    firstName: 'Phil',
//    lastName: 'Huang'
//}
//object2Query(json)  // ?firstName=Phil&lastName=Huang

const enc = encodeURIComponent;
const object2Query = function (object) {
    object = object || {};
    var query = Object.keys(object).map(function (k) {
        return enc(k) + '=' + enc(object[k]);
    });
    if(query.length===0){
        return false;
    }
    return '?' + query.join('&');
}
export default object2Query;