<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<body>
<div id="grid-content" class="userInfoForm" style="width:100%;">
	<div id="jteSingleGrid" class="userInfoForm"></div>
</div>
<div style="display:none;">
	<div id="jtePopForm" class="userInfoForm-div">
		<form id="jtePopForm_form" class="userInfoForm">
			<table id="jtePopForm_master" class="BasicTable">
			<colgroup>
				<col style="width:20%;">
				<col style="width:30%;">
				<col style="width:20%;">
				<col style="width:30%;">
			</colgroup>
			<tr><td colspan="4"></td></tr>			
				<tr>
				<!-- 아이디 -->
					<td><i class="fas fa-caret-right"></i><spring:message code = "col_userId"/> : </td>
					<td colspan="3"><input type="text" id="userId" name="userId"/></td>
				</tr>
				<tr>
				<!-- 이름 -->
					<td><i class="fas fa-caret-right"></i><spring:message code = "col_userNm"/> : </td>
					<td colspan="3">
						<input type="text" id="userNm" name="userNm" format="text"/>
					</td>
				</tr>
				<tr>
				<!-- 부서명 -->
					<td><i class="fas fa-caret-right"></i><spring:message code = "col_deptNm"/> : </td>
					<td colspan="3">
						<input type="text" id="deptNm" class="btn-input" name="deptNm" format="text" readonly/>
						<input type="hidden" id="deptId" name="deptId"/>
						<button class="k-button k-primary" type="button" onclick="lfn_deptInfoPop_Open()">
				<!-- 조회 -->
						<spring:message code = "btn_search"/></button>
					</td>
				</tr>
				<tr>
				<!-- 직급명 -->
					<td><i class="fas fa-caret-right"></i><spring:message code = "col_positionNm"/> : </td>
					<td colspan="3">
						<input type="text" id="positionNm" class="btn-input" name="positionNm" format="text" readonly/>
						<input type="hidden" id="positionId" name="positionId"/>
						<button class="k-button k-primary" type="button"  onclick="lfn_positionInfoPop_Open()">
				<!-- 조회 -->
					<spring:message code = "btn_search"/></button>
					</td>
				</tr>
				<tr>
				<!-- 언어 -->
					<td><i class="fas fa-caret-right"></i><spring:message code = "col_lang"/> : </td>
					<td colspan="3"><input id="langCd" name="langCd" format = "selBox" keyGbn="cdVal" msg="msgLangCode"/></td>
				</tr>
				<tr>
				<!-- 설명 -->
					<td><i class="fas fa-caret-right"></i><spring:message code = "col_desc"/> : </td>
					<td colspan="3"><input type="text" id="description" name="description" format="text"/></td>
				</tr>
				<tr>
					<td colspan="4">
						<div class="group-checkbox"> <!-- en) height:280px -->
							<table id="userRoleList" style="width:100%; "></table>
						</div>
					</td>
				</tr>
				<%--
				<tr>				
				<!-- 예비1 -->
					<td><i class="fas fa-caret-right"></i>예비1 :</td>
					<td><input type="text" id="userStd01" class="left-input" name="userStd01" format="numeric"/></td>
				<!-- 예비1(str) -->
					<td><i class="fas fa-caret-right"></i>예비1(str) :</td>
					<td><input type="text" id="userStdStr01" class="right-input" name="userStdStr01"  /></td>
				</tr>
				
				 --%>
				
				
				
				<tr style="display:hidden;">
					<td>
						<input type="hidden" name="action" id="user_action"/>
					</td>
				</tr>
			</table>
		</form>
		<div class="final-btn-area userInfoForm-final-btn-area">
			<button class="k-button k-primary jte-create final-btn" type="button" style="display : none;"><spring:message code = "pop_save"/></button>													<!-- 저장 -->
			<button class="k-button k-primary jte-update final-btn" type="button" style="display : none;"><spring:message code = "pop_save"/></button>													<!-- 저장 -->
			<button class="k-button k-primary final-btn" type="button" onclick = "lfn_pwClear('jtePopForm')" id="userPw_reset" style="display:hidden;"><spring:message code = "pop_pwReset"/></button>			<!-- 비밀번호 초기화 -->
			<button class="k-button k-primary final-btn" type="button" onclick = "gfn_closePop('jtePopForm');"><spring:message code = "pop_cancel"/></button>													<!-- 취소 -->
		</div>
	</div>
</div>

<!-- 이윤민 주임 작업 CSS -->
<!-- <link href='/resources/mes/css/contents/basMgt/userMgt/userInfo/userInfoForm_lym.css' rel="stylesheet">-->
<!-- 전주원 주임 작업 CSS -->
 <link href='/resources/mes/css/contents/basMgt/userMgt/userInfo/userInfoForm_JJW.css' rel="stylesheet">

<script>
window.onload = function(){lfn_init();}
var lfo_common = {};//Form 내부에서 사용될 Object 

//진입 이벤트(공통코드에서 실행)
this.lfn_init = function(){
	//그리드 생성
	lfn_jteSgGrd_setGrd();
};


this.lfn_jteSgGrd_setGrd = function(){
	lfo_common = {};//Form 내부에서 사용될 Object 
	/* 
		1. gridObject.layoutId = gridId
		2. gridObject.popId = popId
		3. gridObject.ctrlUrl = 조회 url
		4. gridObject.crud  = {
			read:{url:"",auth:"", prmt:{}}, 
			create:{url:"",auth:"",openFunc:function, callback:function}, 
			update:{url:"",auth:"",openFunc:function, callback:function}, 
			delete:{url:"",auth:"", callback:function}}
		5. gridObject.model = fieldType
		6. gridObject.columns = foeldColumns
		7. gridObject.selectBox = SelectBox 매핑 값 
	*/
	
	//1.
	lfo_common.layoutId = "jteSingleGrid";
	
	//2.
	lfo_common.popId = "jtePopForm";
	
	//3.
	lfo_common.ctrlUrl = "/form/basMgt/userMgt/userInfo";
	
	//4.
	lfo_common.crud  = {
		read:{url:"/getUserList", auth:"", prmt:{}},
		create:{url:"/setUserSave", auth:"", openFunc:lfn_jtePop_open, callback : lfn_popSave},
		update:{url:"/setUserSave", auth:"", openFunc:"", callback : lfn_popSave},
		//destroy:{url:"", auth:"", callback:""}
	};
	
	//5.
	lfo_common.model = {
		id: "userId",
		fields: {
			userId: { type: "string" },
			userNm: { type: "string" },
			isLock: { type: "bool" },
			langCd: { type: "string" },
			deptId: { type: "string" },
			deptNm: { type: "string" },
			positionId: { type: "string" },
			positionNm: { type: "string" },
			userStd01: { type: "float" },
			userStd02: { type: "float" },
			userStd03: { type: "float" },
			userStd04: { type: "float" },
			userStd05: { type: "float" },
			userStdStr01: { type: "String" },
			userStdStr02: { type: "String" },
			userStdStr03: { type: "String" },
			userStdStr04: { type: "String" },
			userStdStr05: { type: "String" }
		}
	};
	
	//6.
	lfo_common.columns = [
		{field: "userId",template:'<button class="k-button k-primary" type="button" onclick = "lfn_jtePop_open(\'EDT\',this); " style="min-width:60px;">' + "보기" + '</button>',
			title:"수정", width: 90},
		{field: "userId", title:gfn_getMsg("col_userId"), width: "150px"},												//아이디
		{field: "userNm", title:gfn_getMsg("col_userNm"), width: "150px"},												//이름
		{field: "deptNm", title:gfn_getMsg("col_deptNm"), width: "200px"},												//부서명
		{field: "positionNm", title:gfn_getMsg("col_positionNm"), width: "200px"},										//직급명
		//{field: "userStd01", title:"예비1", width: "200px"},															//예비1
		//{field: "userStd02", title:"예비2", width: "200px"},															//예비2
		//{field: "userStd03", title:"예비3", width: "200px"},															//예비3
		//{field: "userStd04", title:"예비4", width: "200px"},															//예비4
		//{field: "userStd05", title:"예비5", width: "200px"},															//예비5
		//{field: "userStdStr01", title:"예비1(str)", width: "200px"},													//예비1(str)
		//{field: "userStdStr02", title:"예비2(str)", width: "200px"},													//예비2(str)
		//{field: "userStdStr03", title:"예비3(str)", width: "200px"},													//예비3(str)
		//{field: "userStdStr04", title:"예비4(str)", width: "200px"},													//예비4(str)
		//{field: "userStdStr05", title:"예비5(str)", width: "200px"},													//예비5(str)
		{field: "isLock", title:gfn_getMsg("col_isLock"), width:"100px",			//잠금처리
				template : function(rows) {
					if(rows.lock == true){
						return "<a onclick='lfn_jteSgGrd_changeIsUse(this)'><img src='/resources/mes/img/useY.png' style='width:25px;'/></a>";
					}else if (rows.lock == false){
						return "<a onclick='lfn_jteSgGrd_changeIsUse(this)'><img src='/resources/mes/img/useN.png' style='width:25px;'/></a>";
					}else{
						return ""+gfn_getMsg("val_basic")+" : Y";															//기본
					}
				}
		}
	];
	
	//7.
	lfo_common.selectBox = [
		{ text: gfn_getMsg("col_userId"), value: "ur.user_id" },				//아이디
		{ text: gfn_getMsg("col_userNm"), value: "ur.user_nm" },				//이름
		{ text: gfn_getMsg("col_deptNm"), value: "dept.dept_nm" },				//부서명
		{ text: gfn_getMsg("col_positionNm"), value: "pos.dept_nm" }			//직급명
	];
	
	//공통 그리드 세팅 호출 
	lfo_common.grid = gfn_grid_set(lfo_common);
}

//더블클릭 콜백(팝업)
this.lfn_jtePop_open = function(mode, selectedItem){
	var options = {
		modal:true, 
		width: "460px",
		height: "583px", // 200519 JJW 600-> 580_201201 YUMI 580->585px
		id : lfo_common.popId, 
		resizable : true,
		animation:{open :{effects:"expand:vertical fadeIn"},
		close :{effects:"expand:vertical fadeIn", reverse: true}},
		actions:[/*"Minimize", "Maximize", */"Close"]
	};
	if(mode =="NEW"){
		options.title = gfn_getMsg("pop_userRegist");			//유저 등록
	}else if(mode=="EDT"){
		options.title = gfn_getMsg("pop_userDetailSrh");			//유저 상세조회
	}
	
	//팝업이 생성된 뒤 동작해야할 함수 입력
	options.callback = function(){
		lfn_jtePop_set(mode, selectedItem);
	};
	
	this.gfn_winOpen(options);
}

//팝업내용 세팅
this.lfn_jtePop_set = function(mode,selectedItem){
	lfo_common.gridSelected = "";
	if(mode=='NEW'){
		$("#userPw_reset").hide();
		gfn_popform_set(lfo_common, mode,selectedItem);
		//권한 리스트 세팅
		lfn_getUserRole_list();
	}else if(mode == 'EDT'){
		$("#userPw_reset").show();
		
		if(typeof(selectedItem) == "object"){
			lfo_common.gridSelected = lfo_common.grid.dataItem($(selectedItem).closest("tr"));
		}else if(typeof(selectedItem) == "string"){
			lfo_common.gridSelected = {userId : selectedItem};
		}
		
		$.ajax({
			async:false,
			url : lfo_common.ctrlUrl + lfo_common.crud.read.url,
			type: "POST",
			data: {userId : lfo_common.gridSelected.userId},
			success: function(data){
				gfn_popform_set(lfo_common, mode,data.rows[0]);
			},error: function(ex){
				gfn_loading(false);
				gfn_errBox({msg : gfn_getMsg("pop_errorFailed","오류가 발생했습니다. \n 관리자에게 문의해주세요.")});
			}
		});
		
		$("#userId").prop("readonly",true);
		
		//권한 리스트 세팅
		lfn_getUserRole_list(lfo_common.gridSelected.userId);
	}
}
//권한리스트 불러오기
this.lfn_getUserRole_list = function(userId){
	$.ajax({
		async:false,
		url : lfo_common.ctrlUrl + "/getUserRoleList",
		type: "POST",
		data: {"userId" : userId},
		success: function(data){
			var authHTML = "";
			$(data).each(function(index,item){
				$("#userRoleList").html("");
				var isChk = "";
				if(!gfn_isNull(item.userId)) isChk="checked=\"checked\"";
				authHTML+='<tr>'
					+'<td>'
						+'<input type="checkbox" name="role" id="'+item.roleId+'" class="k-checkbox" style="margin: 0 10px 0 10px;" '+isChk+' >'
						+'<label class="userInfoForm-label" for="'+item.roleId+'" value ="'+item.roleId+'">'+item.roleNm+'</label>'
					+'</td>'
				+'</tr>';
				$("#userRoleList").append(authHTML);
			});
		},error: function(ex){
			gfn_loading(false);
			gfn_errBox({msg : gfn_getMsg("pop_errorFailed","오류가 발생했습니다. \n 관리자에게 문의해주세요.")});			//오류가 발생했습니다.
		}
	});
}


//pop - 부서 팝업 오픈
this.lfn_deptInfoPop_Open = function(){
	gfn_openCustomPop('deptInfo',lfn_deptInfoPop_callback);
}

//pop - 부서 팝업 콜백
this.lfn_deptInfoPop_callback = function(rtnObj){
	$("#deptNm").val(rtnObj["deptNm"]);
	$("#deptId").val(rtnObj["deptId"]);
}

//pop - 직급 팝업 오픈
this.lfn_positionInfoPop_Open = function(){
	gfn_openCustomPop('positionInfo',lfn_positionInfoPop_callback);
}

//pop - 직급 팝업 콜백
this.lfn_positionInfoPop_callback = function(rtnObj){
	$("#positionNm").val(rtnObj["positionNm"]);
	$("#positionId").val(rtnObj["positionId"]);
}
//Form내용 입력/저장
this.lfn_popSave = function(mode){
	$("input[name=role]").each(function(){
		$(this).val($(this).attr("id"));
	});
	//저장 하기전에 validationCheck
	var validation = $("#"+lfo_common.popId+"_form").getKendoValidator();
	if(gfn_isEmpty(validation) || validation.validate()){
		
		//입력폼 serialize 
		var savePrmt = $("#"+lfo_common.popId+"_form").serializeObject();
		//권한이 한개인 경우 배열로 인식하지 못하기 때문에 예외처리
		var role=[];
		if(typeof(savePrmt.role) =="string"){
			role.push(savePrmt.role);
			savePrmt.role = role;
		}
		
		//저장된 다국어가 있다면 추가
		var msgId = $("#"+lfo_common.popId+"_form").find(".jte-msgBox").attr("defId");
		var msgList = $("#msg_"+ msgId).val();
		if(!gfn_isNull(msgList)){
			savePrmt.msgList = JSON.parse(msgList);
		}
		
		$.ajax({
			async:false,
			url : lfo_common.ctrlUrl + lfo_common.crud[mode].url,
			type: "POST",
			data: JSON.stringify(savePrmt),
			traditional :true,
			contentType : 'application/json',
			dataType : 'json',
			success: function(data){
				if(data != ""){
					gfn_closePop(lfo_common.popId);
					gfn_msgBox({msg :  gfn_getMsg("pop_successConfirm", "성공적으로 저장되었습니다.")});
					lfo_common.grid.dataSource.read();
				}else{
					gfn_errBox(gfn_getMsg("pop_failedConfirm", "실패하였습니다. \n 값이 제대로 입력되었는지 확인 후 다시 시도해주세요."));
				}
			},error: function(ex){
				gfn_loading(false);
				gfn_errBox({msg : gfn_getMsg("pop_errorFailed","오류가 발생했습니다. \n 관리자에게 문의해주세요.")});
			}
		});
	}
}

//잠금유무
this.lfn_jteSgGrd_changeIsUse = function(rows){
	var dataItem = lfo_common.grid.dataItem($(rows).closest("tr"));
	var prmt = {userId : dataItem.userId, action : "LOCK", lock : dataItem.lock};
	$.ajax({
		async:false,
		url : lfo_common.ctrlUrl + "/setUserSave",
		type: "POST",
		data: JSON.stringify(prmt),
		traditional :true,
		contentType : 'application/json',
		dataType : 'json',
		success: function(data){
			if(data > 0){
				lfo_common.grid.dataSource.read();
			}else{
				gfn_warnBox({msg : gfn_getMsg("pop_failedConfirm", "실패하였습니다. \n 값이 제대로 입력되었는지 확인 후 다시 시도해주세요.")});				//실패
			}
		},error: function(ex){
			gfn_loading(false);
			gfn_errBox({msg : gfn_getMsg("pop_errorFailed","오류가 발생했습니다. \n 관리자에게 문의해주세요.")});			//오류가 발생했습니다.
		}
	});
}

//비밀번호 초기화
this.lfn_pwClear = function(formID){
	var sObj = $("#"+formID+"_form").serializeObject();
	var prmt = {userId : sObj.userId, action : "PW"};
	$.ajax({
		async:false,
		url : lfo_common.ctrlUrl + "/setUserSave",
		type: "POST",
		data: JSON.stringify(prmt),
		traditional :true,
		contentType : 'application/json',
		dataType : 'json',
		success: function(data){
			if(data > 0){
				gfn_closePop(formID);
				gfn_msgBox({msg :  gfn_getMsg("pop_successConfirm", "성공적으로 저장되었습니다.")});			//성공
				lfo_common.grid.dataSource.read();
			}else{
				gfn_warnBox({msg : gfn_getMsg("pop_failedConfirm", "실패하였습니다. \n 값이 제대로 입력되었는지 확인 후 다시 시도해주세요.")});				//실패
			}
		},error: function(ex){
			gfn_loading(false);
			gfn_errBox({msg : gfn_getMsg("pop_errorFailed","오류가 발생했습니다. \n 관리자에게 문의해주세요.")});			//오류가 발생했습니다.
		}
	});
}
</script>
</body>
</html>