var lfo_common = {};//Form 내부에서 사용될 Object


//진입 이벤트(공통코드에서 실행)
this.lfn_init = function(){
	//그리드 생성
	lfn_jteSgGrd_setGrd();
};

//main - grid 생성
this.lfn_jteSgGrd_setGrd = function(){
	lfo_common = {};//Form 내부에서 사용될 Object 
	
	//1.
	lfo_common.layoutId = "jteSingleGrid";
	
	//2.
	lfo_common.popId = "jtePopForm";
	
	//3.
	lfo_common.ctrlUrl = "/form/basMgt/operMgt/itemMgt"
	
	//4.
	lfo_common.crud  = {
		read:{url:"/getItemList", auth:"", prmt:{}}, 
		create:{url:"/setItem", auth:"", openFunc : lfn_jtePop_open, callback : lfn_popSave}, 
		update:{url:"/setItem", auth:"", openFunc : "", callback : lfn_popSave}
	};
    	//5.
	lfo_common.model = {
        id: "itemId",
        fields: {
            itemId: { type: "string" },
            itemNm: { type: "string" },
            itemPrice: { type: "int" },
            itemMtrlCost: { type: "int" },
            itemPersonCost: { type: "int" },
            itemType: { type: "string" },
            itemStd01: { type: "int" },
            itemStd02: { type: "int" },
            itemStd03: { type: "int" },
            itemStd04: { type: "int" },
            itemStd05: { type: "int" },
            itemStdStr01: { type: "string" },
            itemStdStr02: { type: "string" },
            itemStdStr03: { type: "string" },
            itemStdStr04: { type: "string" },
            itemStdStr05: { type: "string" },
            itemStdStr06: { type: "string" },
            itemDeduction : { type: "int"},
            itemTotalStock : { type: "int"},
            itemDayTarget : { type: "int"},
            itemUnit: { type: "string" },
            itemMtrl: { type: "string" },
            description: { type: "string" },
            isUse: { type: "bool" }
        }
    };

//6.
lfo_common.columns = [
    {field: "itemId",template:'<button class="k-button k-primary pop-off" type="button" onclick = "lfn_jtePop_open(\'EDT\',this); " style="min-width:60px;"><spring:message code = "btn_update"></spring:message></button>',
        title : gfn_getMsg("btn_search", "조회") , width: "90px"},	
    {field: "itemId", title:gfn_getMsg("col_itemCd", "부품코드"), width: "120px"},
    {field: "itemStdStr06", title:"내부코드", width: "120px"},
    {field: "itemNm", title:gfn_getMsg("col_itemNm", "부품명"), width: "180px"},
    {field: "itemStdStr01", title : "모델명", width: "240px"},
    {field: "itemStdStr05", title : gfn_getMsg("col_itemPermission", "부품허가번호"), width: "100px"},
    {field: "itemType", template:"# var item = gfn_isNull(gfn_getCode(itemType))== true ? '기초코드 없음' : gfn_getMsg('bc_'+ gfn_getCode(itemType).cdVal , gfn_getCode(itemType).cdNm) # #= item #",
        title:gfn_getMsg("col_itemType", "부품유형"), width: "110px"},
    {field: "itemStdStr02",template:"# var item = gfn_isNull(gfn_getCode(itemStdStr02))== true ? '기초코드 없음' : gfn_getMsg('bc_'+ gfn_getCode(itemStdStr02).cdId , gfn_getCode(itemStdStr02).cdNm) # #= item #",
         title : gfn_getMsg("col_itemDiv", "부품구분"), width: "100px"},
    {field: "itemPrice", title:gfn_getMsg("col_cost", "금액"), format: "{0:n0}", attributes : { style : "text-align : right;"}, width: "100px"},
    {field: "itemMtrlCost", title:gfn_getMsg("col_manufactCost", "제조원가"), format: "{0:n0}", attributes : { style : "text-align : right;"}, width: "110px"},
     {field: "itemStdStr03", title : "전원전압", width: "100px"},
     {field: "itemStdStr04", title : "소비전력", width: "100px"},
     {field: "itemMtrl", title : "보호형식", width: "100px"},
    {field: "itemUnit", title : "포장단위", width: "100px"},
    {field: "description", title:"사용 목적", width: "240px"},
    {field: "isUse", title:gfn_getMsg("col_isuse", "사용유무"), width:"110px",
        template : function(rows) {
            if(rows.use == true){
                return "<a onclick='lfn_jteSgGrd_changeIsUse(this)'><img src='/resources/mes/img/useY.png' style='width:25px; cursor:pointer;'/></a>";
            }else if (rows.use == false){
                return "<a onclick='lfn_jteSgGrd_changeIsUse(this)'><img src='/resources/mes/img/useN.png' style='width:25px; cursor:pointer;'/></a>";
            }else{
                return " ";
            }
        }
    } 
];
//7.
lfo_common.selectBox = [
    { text: gfn_getMsg("col_itemNm", "부품명"), value: "itemNm" },
    { text: gfn_getMsg("col_itemCd", "부품코드"), value: "itemId" }
];
//8.
lfo_common.validation ={
    itemNm:{
        messages : "제품명을 입력하세요",
        rules : function(input){
            if(input.is("[name=itemNm]")){
                return input.val().length != 0 && input.val().trim().length != "";
            }
            return true;
        }
    }
}
//공통 그리드 세팅 호출 
lfo_common.grid = gfn_grid_set(lfo_common);
}

console.log(this);