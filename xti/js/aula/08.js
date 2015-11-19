$(document).ready(function(){
	
	$(":button").click(function(){
		//$(":text").css("border","3px solid red");
		//$(":password").css("border","3px solid red");
		//$(":radio").parent().css("border","3px solid red");
		//Elementos habilitados
		//$(":enabled").parent().css("border","3px solid red");
		//Elementos desabilitados
		$(":disabled").parent().css("border","3px solid red");
	});

}); 