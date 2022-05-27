let userInfo = {
    name : 'Hueka',
    age : 21,
    address : 'seoul'
};

for(let key in userInfo) {
    console.log(`${key}: ${userInfo[key]}`);
}

/* 

name: Hueka
age: 21
address: seoul

*/