// 객체의 가변성에 따른 문제점의 해결 방법
var user = {
    name : 'Hueka',
    gender : 'male'
};

var changeName = function(user, newName) {
    return {
        name : newName,
        gender : user.gender // 하드코딩
    };
};

// 하드코딩하면 대상 객체에 정보가 많을 수록, 
// 변경해야 할 정보가 많을 수록 사용자가 입력하는 수고가 늘어난다. 

var user2 = changeName(user, 'kai');

if(user !== user2) {
    console.log('유저 정보가 변경되었습니다.');

}

// 원본 객체의 user.name 이 변경됨
console.log(user.name, user2.name); // Hueka kai
console.log(user === user2);    // false