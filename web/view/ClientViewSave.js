import { ClientController } from "../controller/ClientController.js";

class ClientViewSave extends HTMLElement
{
	constructor(model)
	{
		super();

		//Acquire model reference
		this.innerModel = model;
		this.innerController = new ClientController(this,this.innerModel);

		//Create UI Elements from HTMLDocument
        this.Titulo = document.createElement('h2');
        this.Titulo.innerText = 'Guardar Cliente';
        this.Titulo.classList.add('h2');

        this.ContTit = document.createElement('div');
        this.ContTit.classList.add('shadowbox');
        this.ContTit.appendChild(this.Titulo);

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

		this.buttonBack = document.createElement('button');
		this.buttonBack.setAttribute('id',"btnvolver");
		this.buttonBack.innerText = 'Volver';
		this.buttonBack.classList.add('listButton');

		this.ContBack = document.createElement('div');
        this.ContBack.classList.add('shadowbox');
        this.ContBack.appendChild(this.buttonBack);
		
        this.Cont1 = document.createElement('div');
		this.Cont1.classList.add('shadowbox');
        this.Cont1.appendChild(this.displayCta);
		this.Cont1.appendChild(this.displayNom);
		this.Cont1.appendChild(this.displayNomF);
		this.Cont1.appendChild(this.displayDir);
		this.Cont1.appendChild(this.displayMail);
		this.Cont1.appendChild(this.displayTel);
		this.Cont1.appendChild(this.buttonGuardar);
	}

	connectedCallback()
	{
		//Append to itself
        this.appendChild(this.ContTit);
		this.appendChild(this.Cont1);
		this.appendChild(this.ContBack);

		//Attach event-handler functions to each element
		this.buttonGuardar.addEventListener('click', (event) => this.innerController.onButtonGuardarClick(event) );		
		this.buttonBack.addEventListener('click', (event) => this.OnButtonBackClick(event) );		
	}

	OnButtonBackClick()
	{
		location.href ="Main.html";
	}
}
customElements.define('x-client-save', ClientViewSave);

export { ClientViewSave };