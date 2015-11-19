window.onload = function(){

	document.getElementById("botao").onclick =  function(){

		// status=200, statusText=OK, responseText, responseXML
		var ajax =  new XMLHttpRequest();

		var r =document.getElementById("resposta");

		//Houve uma requisição ao servidor	
		ajax.onreadystatechange = function(){

			if(ajax.readyState == 4){
				//alert(ajax.responseText); // Pega a resposta

				//r.appendChild(document.createTextNode(ajax.responseText)); // Cria um objeto Text e pega os dados vindos do Ajax  

				//r.innerHTML = ajax.responseText; // Substitui sempre o qu está escrito forma certa é a de cima

				//r.innerHTML = ajax.responseText;

				//Primeira forma de trabalhar com XML	
				var xml = innerHTML = ajax.responseXML;
				var url = xml.getElementsByTagName("url")[0].firstChild.nodeValue;
				r.appendChild(document.createTextNode(url));

				// Utilizando E4X
				/*var xml = new XML(ajax.responseText)
				r.appendChild(document.createTextNode(xml.url));*/

			}
		}

		//Fala para o ajax o que ela deve acessar
		//GET POST
		//ajax.open("POST", "http://xti.com.br"); // Primeiro parametro ó método e o segundo a URL
		//Apenas os dois primeiros parametros são obrigatorios
		//o terceiro parametro fala se é assincrono ou sincrono, se não definir o default é ASSÌNCRONO
		// O quarto e quinto é o usuário e senha
		//Conexão segura, mas fica visivel ao publico
		
		//ajax.open("POST", "js/arquivo.txt");
		
		//ajax.open("POST", "js/arquivo.html");

		ajax.open("POST", "js/arquivo.xml");

		//Esta pé a funçaõ que vai transmissão para o servidor.
		//ajax.send("param1=132&param2=5"); // Pode passar parametros mesma sintaxe das URLS 
		
		ajax.send(null); //Estamos usando leitura de txt

		return false;

	}
}