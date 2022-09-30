import { ClientController } from "../controller/ClientController.js";

class ClientView extends HTMLElement
{
	constructor(model)
	{
		super();

		//Acquire model reference
		this.innerModel = model;
		this.innerController = new ClientController(this,this.innerModel);

		//Create UI Elements from HTMLDocument
		this.displayCta = document.createElement('input');
		this.displayCta.type = 'number';		
		this.displayCta.setAttribute('placeholder','Codigo Cta..');
		this.displayCta.setAttribute('required',true);
		this.displayCta.setAttribute('id',"codigocta");
		this.displayCta.value = '';
		this.displayCta.classList.add('displayResult');		

		this.displayNom = document.createElement('input');
		this.displayNom.type = 'text';
		this.displayNom.setAttribute('placeholder','Nombre..');
		this.displayNom.setAttribute('id',"nombre");
		this.displayNom.value = '';
		this.displayNom.classList.add('displayResult');

		this.displayNomF = document.createElement('input');
		this.displayNomF.type = 'text';
		this.displayNomF.setAttribute('placeholder','Nombre Fantasia..');
		this.displayNomF.setAttribute('id',"nombref");
		this.displayNomF.value = '';
		this.displayNomF.classList.add('displayResult');

		this.displayDir = document.createElement('input');
		this.displayDir.type = 'text';
		this.displayDir.setAttribute('placeholder','Dirección..');
		this.displayDir.setAttribute('id',"direccion");
		this.displayDir.value = '';
		this.displayDir.classList.add('displayResult');

		this.displayMail = document.createElement('input');
		this.displayMail.type = 'text';
		this.displayMail.setAttribute('placeholder','Mail..');
		this.displayMail.setAttribute('id',"mail");
		this.displayMail.value = '';
		this.displayMail.classList.add('displayResult');

		this.displayTel = document.createElement('input');
		this.displayTel.type = 'text';
		this.displayTel.setAttribute('placeholder','Teléfono..');
		this.displayTel.setAttribute('id',"telefono");
		this.displayTel.value = '';
		this.displayTel.classList.add('displayResult');

		this.buttonGuardar = document.createElement('button');
		this.buttonGuardar.setAttribute('id',"btnguardar");
		this.buttonGuardar.innerText = 'Guardar';
		this.buttonGuardar.classList.add('submitButton');

		this.buttonEliminar = document.createElement('button');
		this.buttonEliminar.setAttribute('id',"btneliminar");
		this.buttonEliminar.innerText = 'Eliminar';
		this.buttonEliminar.classList.add('deleteButton');

		this.buttonListar = document.createElement('button');
		this.buttonListar.setAttribute('id',"btnlistar");
		this.buttonListar.innerText = 'Listar';
		this.buttonListar.classList.add('listButton');
		
		this.displayDebug = document.createElement('textarea');
		this.displayDebug.value = '';
		this.displayDebug.classList.add('displayResult');


	}

	connectedCallback()
	{
		//Append to itself
		this.appendChild(this.displayCta);
		this.appendChild(this.displayNom);
		this.appendChild(this.displayNomF);
		this.appendChild(this.displayDir);
		this.appendChild(this.displayMail);
		this.appendChild(this.displayTel);
		this.appendChild(this.buttonGuardar);
		this.appendChild(this.buttonEliminar);
		this.appendChild(this.buttonListar);
		this.appendChild(this.displayDebug);

		//Attach event-handler functions to each element
		this.buttonGuardar.addEventListener('click', (event) => this.innerController.onButtonGuardarClick(event) );
		this.buttonEliminar.addEventListener('click', (event) => this.innerController.onbuttonEliminarClick(event) );
		this.buttonListar.addEventListener('click', (event) => this.innerController.onbuttonListarClick(event) );
				
	}
}
customElements.define('x-client', ClientView);

export { ClientView };