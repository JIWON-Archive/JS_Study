// 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때

var fruits = ['apple', 'banana', 'peach'];
var txt = ['휴닝카이', '수빈', '연준', '범규', '태현'];
var $ul = document.createElement('ul');

txt.forEach(function(fruit) {
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', function(){
        alert('your choice is ' + fruit);    
    });
    $ul.appendChild($li);

});
document.body.appendChild($ul);


