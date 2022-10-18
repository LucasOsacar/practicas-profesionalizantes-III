import { ClientModel } from "./model/ClientModel.js";
import { ClientMenuView } from "./view/ClientMenuView.js";

let myClientModel = new ClientModel();
let myClient = new ClientMenuView(myClientModel);
document.body.appendChild(myClient);