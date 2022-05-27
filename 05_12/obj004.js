var copyObject = function(target) {
    var result = {};
    for(var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

var user = {
    artist: 'txt',
    history: {
        songs: 'Good boy Gone bad',
        member: ['hueka', 'soobin', 'yeonjun', 'taehyun', 'bumgyu'],
        company: 'bighit'
    }
};

var user2 = copyObject(user);

user2.artist = 'tomorrow X together';
console.log(user.artist === user2.artist); // false

user.history.songs = 'Can you see me?';
console.log(user.history.songs === user2.history.songs); // true

/*

user 객체에 직접 속한 프로퍼티(artist)에 대해서는 복사해서 완전히 새로운 데이터가 만들어진 반면에
한 단계 더 들어간 history의 내부 프로퍼티들은 기존 데이터를 그대로 참조한다.


*/

