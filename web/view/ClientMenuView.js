class ClientMenuView extends HTMLElement
{
		constructor(model)
		{
			super();
	
			//Acquire model reference
			this.innerModel = model;
			//this.innerController = new ClientController(this,this.innerModel);
	
			//Create UI Elements from HTMLDocument	
			this.Titulo = document.createElement('h2');
			this.Titulo.innerText = 'Gestión de Clientes';
			
			this.buttonGuardar = document.createElement('button');
			this.buttonGuardar.setAttribute('id',"btnguardar");
			this.buttonGuardar.innerText = 'Guardar';
			this.buttonGuardar.classList.add('menuButton');
	
			this.buttonEliminar = document.createElement('button');
			this.buttonEliminar.setAttribute('id',"btneliminar");
			this.buttonEliminar.innerText = 'Eliminar';
			this.buttonEliminar.classList.add('menuButton');
	
			this.buttonListar = document.createElement('button');
			this.buttonListar.setAttribute('id',"btnlistar");
			this.buttonListar.innerText = 'Listar';
			this.buttonListar.classList.add('menuButton');
			
	
	
		}
	
		connectedCallback()
		{
			//Append to itself
			this.appendChild(this.Titulo);
			this.appendChild(this.buttonGuardar);
			this.appendChild(this.buttonEliminar);
			this.appendChild(this.buttonListar);
	
			//Attach event-handler functions to each element
			this.buttonGuardar.addEventListener('click', (event) => this.innerController.onButtonGuardarClick(event) );
			this.buttonEliminar.addEventListener('click', (event) => this.innerController.onbuttonEliminarClick(event) );
			this.buttonListar.addEventListener('click', (event) => this.innerController.onbuttonListarClick(event) );
					
		}
	
}
customElements.define('x-client-menu', ClientMenuView);

export { ClientMenuView };