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
			this.Titulo.classList.add('h2');

			this.ContTit = document.createElement('div');
			this.ContTit.classList.add('shadowbox');
			this.ContTit.appendChild(this.Titulo);

			this.Cont1 = document.createElement('div');
			this.Cont1.classList.add('shadowbox');
			this.Cont2 = document.createElement('div');
			this.Cont2.classList.add('shadowbox');
			this.Cont3 = document.createElement('div');
			this.Cont3.classList.add('shadowbox');
			
			this.buttonGuardar = document.createElement('button');
			this.buttonGuardar.setAttribute('id',"btnguardar");
			this.buttonGuardar.innerText = 'Guardar';
			this.buttonGuardar.classList.add('menuButton');
			this.Cont1.appendChild(this.buttonGuardar);

			this.buttonEliminar = document.createElement('button');
			this.buttonEliminar.setAttribute('id',"btneliminar");
			this.buttonEliminar.innerText = 'Eliminar';
			this.buttonEliminar.classList.add('menuButton');
			this.Cont2.appendChild(this.buttonEliminar);

			this.buttonListar = document.createElement('button');
			this.buttonListar.setAttribute('id',"btnlistar");
			this.buttonListar.innerText = 'Listar';
			this.buttonListar.classList.add('menuButton');
			this.Cont3.appendChild(this.buttonListar);
	
		}
	
		connectedCallback()
		{
			//Append to itself
			this.appendChild(this.ContTit);
			this.appendChild(this.Cont1);
			this.appendChild(this.Cont2);
			this.appendChild(this.Cont3);
	
			//Attach event-handler functions to each element
			this.buttonGuardar.addEventListener('click', (event) =>  this.OnButtonGuardarClick(event));
			this.buttonEliminar.addEventListener('click', (event) => this.OnButtonBorrarClick(event) );
			this.buttonListar.addEventListener('click', (event) => this.OnButtonListarClick(event) );
					
		}

		OnButtonGuardarClick()
		{
			location.href ="SaveClient.html";
		}

		OnButtonListarClick()
		{
			location.href ="ListClient.html";
		}

		OnButtonBorrarClick()
		{
			location.href ="DelClient.html";
		}
	
}
customElements.define('x-client-menu', ClientMenuView);

export { ClientMenuView };