// JSON을 활용한 깊은 복사
// 객체를 JSON 문법으로 표현한 문자열로 전환 했다가 다시 JSON 객체로 바꾸는 것

var copyObjectViaJSON = function(target) {
    return JSON.parse(JSON.stringify(target));

};

var obj = {
    a : 1,
    b : {
        c:null,
        d:[1,2],
        func1 : function() { console.log(3);}
    },
    func2 : function() {console.log(4); }
};

var obj2 = copyObjectViaJSON(obj);
obj2.a = 3;
obj.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log('----------------------');
// 메서드(함수)나 숨겨진 프로터피인 __proto__ 나 getter, setter와 같이
// JSON으로 변경할 수 없는 프로퍼티들으 모두 무시한다.
console.log(obj2);
