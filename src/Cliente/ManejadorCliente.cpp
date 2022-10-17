#include <memory>
#include<iostream>
#include <stdlib.h>
#include<string>
#include <list>
#include <mysql.h>
#include "IManejadorCliente.h"

typedef std::shared_ptr<IManejadorCliente> IManCliPtr;

class ManejadorCliente : public IManejadorCliente
{
public:
	ManejadorCliente(void);
	virtual ~ManejadorCliente(void);
	int Guardar(ICliente* value);
	void Obtener(int id, ICliente* cli);
	std::list<CodigoCta> Listar(void);
	int Eliminar(int id);

private:
	MYSQL* conectar;
	ManejadorCliente(ManejadorCliente* value);
	const ManejadorCliente* operator=(const ManejadorCliente* value);
};

ManejadorCliente::ManejadorCliente(void)
{
}

ManejadorCliente::~ManejadorCliente(void)
{
}

int ManejadorCliente::Guardar(ICliente * value)
{
	//std::cout << "inicio Guardar" << std::endl;
	int status;
	conectar = mysql_init(0);
	conectar = mysql_real_connect(conectar, "localhost", "root", "masterkey", "sistemactacte", 3306, NULL, 0);
	if (conectar) {
		std::string aux;
		aux = "CALL `sistemactacte`.`add_cliente`('" + std::to_string(value->getCodigoCta()) + "', '" + value->getNombre() + "', '" + value->getNombreFantasia() + "',  '" + value->getDireccion() + "', '" + value->getMail() + "',  '" + value->getTelefono() + "')";
		status = mysql_query(conectar, aux.c_str());
	}
	mysql_close(conectar);
	return status;
}

void ManejadorCliente::Obtener(int id, ICliente* cli)
{
//std::cout << "inicio" << std::endl;
	int status;
	conectar = mysql_init(0);
//	std::cout << "mysql_init" << std::endl;
	conectar = mysql_real_connect(conectar, "localhost", "root", "masterkey", "sistemactacte", 3306, NULL, 0);
	if (conectar) {
//		std::cout << "Conectó" << std::endl;
		std::string aux;
		aux = "CALL `sistemactacte`.`select_cliente`(" + std::to_string(id) + ")";
		status = mysql_query(conectar, aux.c_str());
		if (!status) {
//			std::cout << "query si" << std::endl;
			MYSQL_RES* result;
			MYSQL_ROW fila;
			result = mysql_store_result(conectar);
			while (fila = mysql_fetch_row(result)) {
				
				cli->setCodigoCta(id);
				cli->setNombre(fila[0]);
				cli->setNombreFantasia(fila[1]);
				cli->setDireccion(fila[2]);
				cli->setMail(fila[3]);
				cli->setTelefono(fila[4]);
			}
		}
	}
	mysql_close(conectar);
}

std::list<CodigoCta> ManejadorCliente::Listar(void)
{
	//std::cout << "inicio" << std::endl;
	std::list<CodigoCta> lst;
	int status;
	//std::cout << "Status" << std::endl;
	conectar = mysql_init(0);
	//std::cout << "mysql_init" << std::endl;
	conectar = mysql_real_connect(conectar, "localhost", "root", "masterkey", "sistemactacte", 3306, NULL, 0);
	if (conectar) {
	//	std::cout << "Conectó" << std::endl;
		std::string aux;
		aux = "CALL `sistemactacte`.`all_clientes`()";
		status = mysql_query(conectar, aux.c_str());
		if (!status) {
	//		std::cout << "query si" << std::endl;
			MYSQL_RES* result;
			MYSQL_ROW fila;
			result = mysql_store_result(conectar);
			while (fila = mysql_fetch_row(result)) {
	//			std::cout << "While si" << std::endl;
				int id;
				sscanf(fila[0], "%d", &id);
				lst.push_back(id);
			}
		}
	}
	mysql_close(conectar);	

	return lst;

}

int ManejadorCliente::Eliminar(int id)
{
	int status;
	conectar = mysql_init(0);
	conectar = mysql_real_connect(conectar, "localhost", "root", "masterkey", "sistemactacte", 3306, NULL, 0);
	if (conectar) {
		std::string aux;
		aux = "CALL `sistemactacte`.`del_cliente`(" + std::to_string(id) + ")";
		status = mysql_query(conectar, aux.c_str());
	}
	mysql_close(conectar);
	return status;
}

extern "C" IManCliPtr create(std::string);

IManCliPtr create(std::string typeinfo)
{
    return (typeid(IManejadorCliente).name() == typeinfo) ? std::make_shared<ManejadorCliente>() : nullptr;
}






