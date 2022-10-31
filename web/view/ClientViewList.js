import { ClientController } from "../controller/ClientController.js";

class ClientViewList extends HTMLElement
{
	constructor(model)
	{
		super();

		//Acquire model reference
		this.innerModel = model;
		this.innerController = new ClientController(this,this.innerModel);

		//Create UI Elements from HTMLDocument

		
		this.displayList = document.createElement('table');
		this.displayList.setAttribute("border", "2");
		this.displayList.classList.add('styled-table');
		this.th1 = document.createElement('th');
		this.th1.innerText = "Codigo";
		this.displayList.appendChild(this.th1);
		this.th2 = document.createElement('th');
		this.th2.innerText = "Nombre";
		this.displayList.appendChild(this.th2);
		this.th3 = document.createElement('th');
		this.th3.innerText = "Nombre Fantasia";
		this.displayList.appendChild(this.th3);
		this.th4 = document.createElement('th');
		this.th4.innerText = "Direccion";
		this.displayList.appendChild(this.th4);
		this.th5 = document.createElement('th');
		this.th5.innerText = "Telefono";
		this.displayList.appendChild(this.th5);
		this.th6 = document.createElement('th');
		this.th6.innerText = "Mail";
		this.displayList.appendChild(this.th6);
		this.tblBody = document.createElement("tbody");
		this.displayList.appendChild(this.tblBody);

		this.buttonBack = document.createElement('button');
		this.buttonBack.setAttribute('id',"btnvolver");
		this.buttonBack.innerText = 'Volver';
		this.buttonBack.classList.add('listButton');

		this.ContBack = document.createElement('div');
        this.ContBack.classList.add('shadowbox');
        this.ContBack.appendChild(this.buttonBack);

	}

	connectedCallback()
	{
		//Append to itself
		this.appendChild(this.displayList);
		this.appendChild(this.ContBack);

		//Attach event-handler functions to each element
		this.innerController.onbuttonListarClick();
	}

}
customElements.define('x-client-list', ClientViewList);

export { ClientViewList };