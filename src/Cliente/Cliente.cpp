#include "ICliente.h"

#include <memory>
#include<iostream>
#include <stdlib.h>
#include<string>
#include <list>
#include "IManejadorCliente.h"
#include "ComponentFactory.h"

typedef std::shared_ptr<IManejadorCliente> IManCliPtr;
typedef std::shared_ptr<ICliente> IClientePtr;
typedef std::shared_ptr<ComponentFactory> ComponentFactoryPtr;

class cliente : public ICliente
{
public:
	cliente(void);
	virtual ~cliente(void);
	int Guardar(void);
	void Obtener(int id);
	std::list<ICliente*> Listar(void);
	int Modificar(void);
	int Eliminar(int id);
	bool Validar(void);

	int getCodigoCta() { return codigocta; }
	void setCodigoCta(int value) { codigocta = value;}
	std::string getNombre() { return nombre; }
	void setNombre(std::string value) { nombre = value;}
	std::string getNombreFantasia() { return nombrefantasia; }
	void setNombreFantasia(std::string value) { nombrefantasia = value; }
	std::string getDireccion() { return direccion; }
	void setDireccion(std::string value) { direccion = value; }
	std::string getMail() { return mail; }
	void setMail(std::string value) { mail = value; }
	std::string getTelefono() { return telefono; }
	void setTelefono(std::string value) { telefono = value; }
private:
	IManCliPtr mc;
	//ManejadorCliente* mc;
	cliente(cliente* val);
	const cliente* operator=(const cliente* val);
	int codigocta;
	std::string nombre;
	std::string nombrefantasia;
	std::string direccion;
	std::string mail;
	std::string telefono;

};

cliente::cliente(void)
{
	
	//mc = new ManejadorCliente();
}

cliente::~cliente(void)
{
	//delete mc;
}

int cliente::Guardar(void)
{
	ComponentFactoryPtr cF(new ComponentFactory());
	mc = cF->create<IManejadorCliente>("ManejadorCliente");
	return mc->Guardar(this);
}

void cliente::Obtener(int id)
{
	ComponentFactoryPtr cF(new ComponentFactory());
	mc = cF->create<IManejadorCliente>("ManejadorCliente");
	mc->Obtener(id, this);
}

std::list<ICliente*> cliente::Listar(void)
{
	ComponentFactoryPtr cF(new ComponentFactory());
	mc = cF->create<IManejadorCliente>("ManejadorCliente");
	std::list<ICliente*> lst;
	std::list<CodigoCta> ids;
	ids = mc->Listar();
	std::list<int>::iterator it;
	for (it = ids.begin(); it != ids.end(); ++it)
	{
		cliente* cl;
		cl = new cliente();
		mc->Obtener(*it, cl);
		lst.push_back(cl);
	}
	return lst;
}

int cliente::Modificar(void)
{
	return Guardar();
}

int cliente::Eliminar(int id)
{
	ComponentFactoryPtr cF(new ComponentFactory());
	mc = cF->create<IManejadorCliente>("ManejadorCliente");
	return mc->Eliminar(id);
}

bool cliente::Validar(void)
{
	return true;
}

extern "C" IClientePtr create(std::string);

IClientePtr create(std::string typeinfo)
{
    return (typeid(ICliente).name() == typeinfo) ? std::make_shared<cliente>() : nullptr;
}


