// JSON VS JSON 배열 JSON을 많이 쓰는 이유 -> 데이터를 전달하고, 교환하고, 저장할 때 -> 가볍고, 텍스트기반, js기반
// [1] : JSON 객체 -> 중괄호 {} 사용 JSON에서 객체(Obejct) 란? 
// -> key : value의 한 쌍으로 이루어진 정렬되지 않은 속성(property)들의 집합 콤마(,)로 구분하여 여러개의 속성을 가질 수 있다.
//  문자열은 반드시 큰 따옴표("") 로 묶어준다. 
// [2] 객체 안의 객체 -> 계층적 구조 
// [3] JSON 배열 -> 대괄호 [] 사용 역시 콤마(,)를 사용하여 여러 JSON 객체를 추가 및 구분할수 있다. 
// 배열의 이름이 person이고, 3개의 JSON객체를 이 배열의 요소로 가지는 JSON 배열을 만들어보시오?
//  JSON과 JavaScript Obejct의 차이는 "" : "" Obejct는 name : "고양이" JSON "name": "고양이"

const json1 = {
    "name": "고양이",
    "age": 20,
    "nationality": "한국",
    "hobby": "영화보기"
}

const json2 = {

    "group1": {
        "name": "고양이",
        "age": 20,
        "nationality": "한국",
        "hobby": "영화보기",
        "company": {
            "cname": "XX원자력발전소",
            "cphone": "02-1234-5678",
            "caddress": "경기도 용인시 용인동 용인 신도로 1234"
        }
    }
}

const json3 = {
    "person": [

        {
            "name": "고양이",
            "age": 20,
            "nationality": "한국"},
             {
            "name": "토끼",
            "age": 22,
            "nationality": "미국"}, 
        {
            "name": "곰돌이",
            "age": 21,
            "nationality": "캐나다"}
    ]
}
