// 깊은 복사 개어렵다...
var copyObjectDeep = function(target) {
    var result = {};
    if(typeof target === 'object' && target !== null) {
        for(var prop in target) {
            // target 객체의 모든 프로퍼티 개수 만큼 반복
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
};

var obj = {
    a : 1,
    b : {
        c : null,
        d : [1,2]
    }
};

var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;
console.log(obj); // { a: 1, b: { c: null, d: [ 1, 3 ] } }
console.log(obj2); // { a: 3, b: { c: 4, d: { '0': 1, '1': 2 } } }
console.log(obj === obj2); // false