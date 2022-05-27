function changeNick(obj) {
    txt.nick = 'KIB';
    console.log(txt.nick + '로 변경');
}

const txt = {
    name : 'hueka',
    nick : 'Ongsimmy'
}

console.log(txt);
console.log(txt.nick);
changeNick(txt);
console.log(txt);
console.log(txt.nick);