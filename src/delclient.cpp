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
	cout << "Content-type:text/json\r\n\r\n";
	string s = str["codigo"];
	const int i {std::stoi(s)};
	cli->Eliminar(i);
	json response;
	string msg = "Cliente Eliminado";
	response["result"] = msg;
	cout << response.dump(0) << endl;
    //system("pause");
    return 0;
}