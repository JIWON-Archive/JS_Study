

$ajax({
	url : requestUrl, // 요청 url
	type : 'DELETE', // 요청방식
	async : true,   // 디폴트 값 true (false 시 동기 통신으로 변경되며 서버에서 응답이 올때까지 기다림)
	data :JSON.stirngify(requestParam), // 전달할 파라미터
    dataType : "json", // 서버에서 반환되는 데이터 형식
    timeout : 10000, // 제한시간 설정
    contentType : "application/json" // 서버에서 데이터를 보낼 때 사용(conten-type 헤더의 값)
});

