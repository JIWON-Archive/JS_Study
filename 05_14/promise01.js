'use strict';

// Promise is a JavaScript Object for asynchronous operation.
// 비동기적인 것을 수행할 때 콜백함수 대신에 유용하게 쓸 수 있다.
// state : 1. operation을 수행 중 pending 
// 2. operation을 끝낸 상태 fulfilled(성공) or reject(파일을 찾을 수 없거나 네트워크에 문제가 있는 경우)
// Producer vs Consumer

// 1. Producer(정보를 제공)
// executor 라는 콜백 함수를 전달
// resolve : 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달
// reject : 기능을 수행하다가 중간에 문제가 생기면 호출
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files) 
    // 네트워크에서 데이터를 받아오거나 파일을 무언가 큰 데이터를 읽어오는 과정 시간이 꽤 걸림
    // 동기적으로 처리하면 데이터를 받아오는 동안 다음 라인의 코드가 실행되지 않기 때문에 
    // 시간이 걸리는 일은 프로미스를 만들어 비동기적으로 처리한다.

    console.log('doing someting...')
    // 프로미스를 만드는 순간 우리가 전달한 ❗executor라는 콜백함수가 바로 전달된다.(자동 실행)
    // 즉, 프로미스 안에 네트워크 통신을 전달하는 코드를 작성했다면 프로미스가 만들어지는 순간 바로 네트워크 통신을 수행
    // 👀 주의 : 만약 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우라면(즉 사용자가 버튼을 눌렀을때 네트워크 요청해야하는 경우)
    // 사용자가 요구하지 않은 불필요한 통신이 일어날수 있다.

    setTimeout(()=> {
        resolve('hueka');
        // reject(new Error('no network')); // Error 에러가 발생하는걸 나타낸(이유를 잘작성해야한다.) JS 오브젝트
    }, 2000);
});

// 2. Consumer(정보를 소비) : then, catch, finally
// 프로미스가 정상적으로 수행되어서 마지막에 최종적으로 resolve라는 콜백 함수를 통해서 전달한 값이 value의 파라미터로 전달되어 들어온다. 
// then을 호출하게 되면 다시 Promise가 리턴되고 리턴된 Promise에 catch 등록 : 프로미스 체이닝
promise
.then(value => { // 값이 정상적으로 수행된다면 then(그러면) 값을 받아온다. 원하는 기능을 수행하는 콜백함수 작성해주면 된다!!
    console.log(value); // resolve 콜백함수에서 전달된 hueka라는 값이 들어온다.
})
.catch(error => { // 에러가 발생했을 때 처리할 것인지 콜백함수 등록
    console.log(error);
})
.finally(() => {
    console.log('finally');
}); //  finally는 성공 실패 상관없이 무조건 마지막에 호출


// 프로미스 오브젝트를 만들 때 우리가 비동기적으로 수행하고 싶은 그런 기능들의 코드를 여기에 작성하고
// 성공 resolve 호출 / 실패 reject(에러) 전달
// then 성공한 값 catch는 실패한 에러를 받아와서 우리가 원하는 방식으로 처리

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); // 1초 후 1을 전달
});

fetchNumber
.then(num => num * 2) // 1 * 2 = 2
.then(num => num * 3) // 2 * 3 = 6
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000); // 6 - 1 = 5
    });
})
.then(num => console.log(num));