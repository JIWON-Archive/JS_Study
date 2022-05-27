$(function() {
    $("#ajaxSend").click(function() {
        var request = $.ajax({
            url : "send01.html", // 호출 주소(응답 페이지 url)
            method : "POST", // 호출 방식
            dataType : "html" // 응답 페이지의 콘텐츠 타입
        });

        // 정상적인 통신이 완료되었을 경우 반응하는 메서드
        // 인수에 삽입된 함수 실행이 되며, 결과값은 콜백 데이터로 전달
        request.done(function(data){
            console.log(data);
            $("#htmlPrint").html(data);
        });

        // 비정상적인 통신이거나 실패 경우 실행되는 메서드
        // 인수에 삽입된 함수가 실행되며, 결과값은 실패에 관련된 내용이 콜백 데이터로 전달된다.
        request.fail(function(jqXHR, textStaus){
            alert("Request failed : " + textStaus);
        });
    });
});

$(document).on("click", "#send01", function(){ // 동적바인딩
    alert("안녕 ajax");
})