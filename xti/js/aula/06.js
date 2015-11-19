$(document).ready(function(){
	
	//$("tbody tr:first") // Apenas a primeira tr
	//$("tbody tr:last") // Apenas a ultim tr
	//$("tbody tr:not(tbody tr:last)") // Todas com exceção da Ultima
	//$("tbody tr:even") // Apenas as ocorrencias pares
	//$("tbody tr:odd") // Apenas as ocorrencias impares
	//$("tbody tr:eq(2)") // Especificas
	//$("tbody tr:gt(1)") // Apenas maior que essa
	//$("tbody tr:lt(1)") // Apenas menor que essa
	//$("td:contains(FILME 02)") // Contem texto
	//$("td:empty") // NÂO Contem texto
	//$("td:not(td:empty)") // Buscar todas que não contem células
	$("td:has(strong)") // Buscar todas que não contem células
	.css("background","#CCC");

}); 