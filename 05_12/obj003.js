// copyObject 함수를 통해 객체 얕은 복사
var copyObject = function(target) {
    var result = {};
    for(var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

var user = {
    name : 'Hueka',
    gender : 'male'
};

var user2 = copyObject(user);

user2.name = 'kai';

if(user !== user2) {
    console.log('유저 정보가 변경되었습니다.');

}

// 객체를 복사
// 얕은 복사 shallow copy : 바로 아래 단계의 값만 복사하는 방법
// 중첩된 객체에서 참조형 데이터가 저장된 프로퍼티를 복사할 때 주솟값만 복사
// 프로퍼티에 대해 원본과 사본이 모두 동일한 참조형 데이터의 주소를 가리키게 된다.
// 사본을 바꾸면 원본도 바뀌고, 원본을 바꾸면 사본도 바뀐다.
console.log(user.name, user2.name); // Hueka kai
console.log(user === user2);    // false