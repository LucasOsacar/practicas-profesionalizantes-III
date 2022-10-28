import { ClientModel } from "./model/ClientModel.js";
import { ClientMenuView } from "./view/ClientMenuView.js";
import { ClientViewSave } from "./view/ClientViewSave.js";
import { ClientViewList } from "./view/ClientViewList.js";
import { ClientViewDel } from "./view/ClientViewDel.js";

let myClientModel = new ClientModel();
let myClient = new ClientMenuView(myClientModel);

class ActionsButtons
{

    OnButtonGuardarClick()
    {
        document.body.removeChild(myClient);
        let myClientView = new ClientViewSave(myClientModel);
        document.body.appendChild(myClientView);
    }

    OnButtonListarClick()
    {
        document.body.removeChild(myClient);
        let myClientView = new ClientViewList(myClientModel);
        document.body.appendChild(myClientView);
    }

    OnButtonBorrarClick()
    {
        document.body.removeChild(myClient);
        let myClientView = new ClientViewDel(myClientModel);
        document.body.appendChild(myClientView);
    }
}

let ActionButtonObj = new ActionsButtons();

myClient.buttonGuardar.addEventListener('click', (event) =>  ActionButtonObj.OnButtonGuardarClick(event));
myClient.buttonEliminar.addEventListener('click', (event) => ActionButtonObj.OnButtonBorrarClick(event) );
myClient.buttonListar.addEventListener('click', (event) => ActionButtonObj.OnButtonListarClick(event) );

document.body.appendChild(myClient);