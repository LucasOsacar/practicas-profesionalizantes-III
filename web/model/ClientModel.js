class ClientModel
{
	constructor()
	{

	}

	eliminarCliente()
	{
		let codigo = document.getElementById("codigocta");
		
	
		let data = {
			"codigo": codigo.value			
    	}
		
		return fetch('./backend/DelClient.cgi', { method:'post', body: JSON.stringify(data) } ).then( response => response.text() );
	}

	listarClientes()
	{
		return fetch('./backend/ListClient.cgi', { method:'post' } ).then( response => response.text() );
	}

	guardarCliente()
	{
		let codigo = document.getElementById("codigocta");
		let nombre = document.getElementById("nombre");
		let nombrefantasia = document.getElementById("nombref");
		let direccion = document.getElementById("direccion");
		let mail = document.getElementById("mail");
		let telefono = document.getElementById("telefono");
	
		let data = {
			"codigo": codigo.value,
			"nombre": nombre.value, 
			"nombrefantasia": nombrefantasia.value ,
			"direccion": direccion.value ,
			"mail": mail.value ,
			"telefono": telefono.value 
    	}
		
		return fetch('./backend/AddClient.cgi', { method:'post', body: JSON.stringify(data) } ).then( response => response.text() );
	}
	
}

export { ClientModel };