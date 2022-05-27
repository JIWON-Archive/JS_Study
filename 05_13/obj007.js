// 객체 속성 추가하고 수정하기
// 객체의 프로퍼티는 객체를 처음 만들때 넣어줄 수도 있지만, 나중에 추가할 수도 있고 수정도 가능하다.
// 존재하지 않는 속성명에 접근해서 값을 할당하면 추가가 되고
// 이미 존재하는 속성명에 접근해서 값을 할당하면 수정이 된다.
const myObejct = {
    name : {
        firstName : "Huening",
        middleName : "Kamal",
        lastName : "Kai",
    },
    age : 21,
    phoneNumber : "01020020814",
    address : "Somewhere in KOREA",
    nickName : "hueranghae"

};

// 속성 추가
myObejct.gender = "male";
myObejct.name.fullName = "Kai Kamal Huening" 


// 속성 수정
myObejct.nickName = "OngsimKai";
myObejct.address = "YongSan";
console.log(myObejct);

// 속성 삭제
delete myObejct['nickName']; 
delete myObejct["age"]; 
delete myObejct.address; 
console.log(myObejct);