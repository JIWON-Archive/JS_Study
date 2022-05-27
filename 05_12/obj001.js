// 객체의 가변성에 따른 문제점
var user = {
    name : 'Hueka',
    gender : 'male'

};

var changeName = function(user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user, 'kai');

if(user !== user2) {
    console.log('유저 정보가 변경되었습니다.');

}

// 원본 객체의 user.name 이 변경됨
console.log(user.name, user2.name); // kai kai
console.log(user === user2);    // true

