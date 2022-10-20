#include <iostream>
#include <string>
#include<iostream>
#include "ComponentFactory.h"
#include "ICliente.h"
#include <iterator>
#include <json.hpp>

using json = nlohmann::json;

typedef std::shared_ptr<ICliente> IClientePtr;
typedef std::shared_ptr<ComponentFactory> ComponentFactoryPtr;

using namespace std;

json response;

void showlistcliente(list<ICliente *> g)
{
	
	list<ICliente *>::iterator it;
	for (it = g.begin(); it != g.end(); ++it)
	{
		json client;
		client["CodigoCta"] = (*it)->getCodigoCta();
		client["Nombre"] = (*it)->getNombre();
		client["NombreFantasia"] = (*it)->getNombreFantasia();
		client["Direccion"] = (*it)->getDireccion();
		client["Mail"] = (*it)->getMail();
		client["Telefono"] = (*it)->getTelefono();
		response.push_back(client);	
	}
		
}


int main()
{
	ComponentFactoryPtr cF(new ComponentFactory());
	IClientePtr cli = cF->create<ICliente>("Cliente");
	cout << "Content-type:text/json\r\n\r\n";
	//response = json::array();
    //cout << "------------------Clientes------------------" << endl;
	showlistcliente(cli->Listar());
	cout << response.dump() << endl;
	//cout << "--------------------------------------------" << endl;	
    //system("pause");
    return 0;
}