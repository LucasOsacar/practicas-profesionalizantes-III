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


int main()
{
	json str = "";
	cin >> str;
	ComponentFactoryPtr cF(new ComponentFactory());
	IClientePtr cli = cF->create<ICliente>("Cliente");
	cout << "Content-type:text/html\r\n\r\n";
    cout << "------------------Clientes------------------" << endl;
	cout << "-------Eliminando cliente------" << endl << endl;
	string s = str["codigo"];
	const int i {std::stoi(s)};
	cli->Eliminar(i);
	cout << "-----Cliente Cod:" << i << " Eliminado------" << endl << endl;	
    //system("pause");
    return 0;
}