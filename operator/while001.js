// var count = 0;
// // 무한 루프를 탈출하기 위해서는 코드 블럭 탈출 조건을 if 문에 부여하고 break문으로 코드 블럭을 탈출한다.
// while(true) {
//     console.log(count);
//     count++;
//     if(count === 3) 
//         break;
// }

// // outer라는 식별자가 붙은 레이블 for 문
// outer: for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//       // i + j === 3이면 외부 for 문을 탈출한다.
//       if (i + j === 3) break outer;
//     }
//     // console.log(`${i}, ${j}`);
//   }
  
//   console.log('Done!');

//   // continue

  var string = "휴닝카이 옹심닝옹옹";
  var count1 = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] !== '옹') continue;
    count1++;
  }
  console.log(count1);