// 자바스크립트의 배열
// 다양한 타입을 담을 수 있지만 지양
   /*----------노마드코더-----------*/

const heukaInfo = {
        name: "Hueka", 
        age: 20,
        gender: "Male",
        isHandsome: true,
        favorites: ["soobin", "molang", "hwahwa"],
        favFood: [{
        name: "eggtart", fatty: false},{
        name : "Cheese burger", fatty:true}]
    }
    console.log(heukaInfo);
    console.log(heukaInfo.favFood[0].fatty);
    console.log(heukaInfo.name);
    heukaInfo.name = "huehue";
    // const 안에 있는 값을 바꿀 수 있다 왜 안되지..
    console.log(heukaInfo.name);