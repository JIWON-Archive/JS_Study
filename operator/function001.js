function square(number) {
    return number * number;
}

// 함수 객체의 프로퍼티
square.x = 10;
square.y = 20;
console.log(square.x, square.y);
console.dir(square);