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

void showlistcliente(list<ICliente *> g)
{
	list<ICliente *>::iterator it;
	for (it = g.begin(); it != g.end(); ++it)
		cout << (*it)->getCodigoCta() << ";" << (*it)->getNombre() << ";" << (*it)->getNombreFantasia() << ";" << (*it)->getDireccion() << ";" << (*it)->getMail() << ";" << (*it)->getTelefono() << endl;
	cout << '\n';
}


int main()
{
	ComponentFactoryPtr cF(new ComponentFactory());
	IClientePtr cli = cF->create<ICliente>("Cliente");
	cout << "Content-type:text/html\r\n\r\n";
    cout << "------------------Clientes------------------" << endl;
	showlistcliente(cli->Listar());
	cout << "--------------------------------------------" << endl;	
    //system("pause");
    return 0;
}