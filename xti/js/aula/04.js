$(document).ready(function(){
	//Seletor de descentes
	$("div span").css("background-color","yellow");
	//Seletor de filho do Elementos
	$("li > ul").css("color","red");
	//Seletor de primeiro Irmão
	$("#Item1_1 + li").css("color","blue");
		//Seletor de todos Irmão
	$("#Item1_1 ~ li").css("color","blue");
});