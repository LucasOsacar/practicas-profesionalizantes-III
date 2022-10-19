import { ClientModel } from "./model/ClientModel.js";
import { ClientView } from "./view/ClientViewSave.js";

let myClientModel = new ClientModel();
let myClient = new ClientView(myClientModel);
document.body.appendChild(myClient);