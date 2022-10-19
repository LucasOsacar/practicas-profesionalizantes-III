class ClientController
{
	constructor(view, model)
	{
		this.innerView = view;
		this.innerModel = model;
	}

	onbuttonListarClick()
	{   	
		this.innerModel.listarClientes().then(response => {
			var jsonData = response;
			
			for (var i = 0; i < jsonData.length; i++)
			{
				console.log(jsonData[i]);
				var hilera = this.innerView.tblBody.insertRow();
						
				var celda1 = hilera.insertCell();
				var celda2 = hilera.insertCell();
				var celda3 = hilera.insertCell();
				var celda4 = hilera.insertCell();
				var celda5 = hilera.insertCell();
				var celda6 = hilera.insertCell();

				var textoCelda = document.createTextNode(jsonData[i]['CodigoCta']);
				celda1.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['Nombre']);
				celda2.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['NombreFantasia']);
				celda3.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['Direccion']);
				celda4.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['Telefono']);
				celda5.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['Mail']);
				celda6.appendChild(textoCelda);

				hilera.appendChild(celda1);
				hilera.appendChild(celda2);
				hilera.appendChild(celda3);
				hilera.appendChild(celda4);
				hilera.appendChild(celda5);
				hilera.appendChild(celda6);
							
				this.innerView.tblBody.appendChild(hilera);
			}
			
		});
	}	

	onButtonGuardarClick()
	{   
		
		this.innerModel.guardarCliente().then(response => alert(response.result));
	}

	OnLoadDelClient()
	{
		this.innerModel.listarClientes().then(response => {
			var jsonData = response;
			
			for (var i = 0; i < jsonData.length; i++)
			{
				var hilera = this.innerView.tblBody.insertRow();
						
				var celda1 = hilera.insertCell();
				var celda2 = hilera.insertCell();
				var celda3 = hilera.insertCell();
				var celda4 = hilera.insertCell();
				var celda5 = hilera.insertCell();
				var celda6 = hilera.insertCell();
				var celda7 = hilera.insertCell();

				var buttonEliminar = document.createElement('button');
				buttonEliminar.innerText = 'Eliminar';
				buttonEliminar.classList.add('deleteButton');
				buttonEliminar.addEventListener('click', (event) => {
					this.innerView.displayCta.value = event.target.parentNode.parentNode.firstChild.innerText
					this.innerModel.eliminarCliente().then(response => alert(response.result));
					
				});

				var textoCelda = document.createTextNode(jsonData[i]['CodigoCta']);
				celda1.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['Nombre']);
				celda2.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['NombreFantasia']);
				celda3.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['Direccion']);
				celda4.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['Telefono']);
				celda5.appendChild(textoCelda);
				textoCelda = document.createTextNode(jsonData[i]['Mail']);
				celda6.appendChild(textoCelda);
				celda7.appendChild(buttonEliminar);
				

				hilera.appendChild(celda1);
				hilera.appendChild(celda2);
				hilera.appendChild(celda3);
				hilera.appendChild(celda4);
				hilera.appendChild(celda5);
				hilera.appendChild(celda6);
				hilera.appendChild(celda7);
							
				this.innerView.tblBody.appendChild(hilera);
			}
			
		});
	}

	onbuttonEliminarClick()
	{   
		this.innerModel.eliminarCliente().then(response => alert(response.result));
	}	
}

export { ClientController };