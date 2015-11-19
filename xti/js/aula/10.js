$(document).ready(function(){
	
	$("span").click(function(){

		//Recupera o valor do p
		//alert($("p").html());
		
		//Alterar o conteúdo do p
		//$("p").html("<h1>Conheça o Brasil</h1>");
		
		//Adicionar conteúdo a div
		/*$("div").text("<h1>Conheça o Brasil</h1>");
		alert($("div").text());*/

		//Exibir o valor escrito na textarea
		//alert($("textarea").val());

		//A tag p recebe o valor escrito na text area
		$("p").html($("textarea").val());

	});
}); 