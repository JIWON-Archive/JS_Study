let myFunction = function(name1) {
    return `이것은 ${name1} 입니다.`;
}

let myArrow = function(name2) {
    return `이것은 ${name2} 입니다.`;
}

console.log(this);
console.log(myFunction("함수"));
console.log(myArrow("화살표 함수"));