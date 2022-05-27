/*  콜백함수 109p
    콜백 지옥 해결 방법 기명함수로 변환
    코드의 가독성을 높일 수 있고 함수선언과 함수 호출을 구분 할 수 있다.
*/
var coffeList = '';

var addEspersso = function(name) {
    coffeList = name;
    console.log(coffeList);
    setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function(name) {
    coffeList += ', ' + name;
    console.log(coffeList);
    setTimeout(addMoca, 500, '카페모카');
};

var addMoca = function(name) {
    coffeList += ', ' + name;
    console.log(coffeList);
    setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function(name) {
    coffeList += ', ' + name;
    console.log(coffeList);
};

setTimeout(addEspersso, 500, '에스프레소');