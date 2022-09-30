class ClientController
{
	constructor(view, model)
	{
		this.innerView = view;
		this.innerModel = model;
	}

	onbuttonListarClick()
	{   	
		this.innerModel.listarClientes().then(response => this.innerView.displayDebug.value=response);
	}	

	onButtonGuardarClick()
	{   	
		this.innerModel.guardarCliente().then(response => this.innerView.displayDebug.value=response);
	}

	onbuttonEliminarClick()
	{   	
		this.innerModel.eliminarCliente().then(response => this.innerView.displayDebug.value=response);
	}	
}

export { ClientController };