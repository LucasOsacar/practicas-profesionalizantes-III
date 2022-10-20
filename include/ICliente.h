#pragma once
#include<string>
#include <list>

class ICliente
{
public:
	virtual int Guardar(void)= 0;
	virtual void Obtener(int id)= 0;
	virtual std::list<ICliente*> Listar(void)= 0;
	virtual int Modificar(void)= 0;
	virtual int Eliminar(int id)= 0;
	virtual bool Validar(void)= 0;
 
	virtual int getCodigoCta() = 0;
	virtual void setCodigoCta(int value) = 0;
	virtual std::string getNombre() = 0;
	virtual void setNombre(std::string value) = 0;
	virtual std::string getNombreFantasia() = 0;
	virtual void setNombreFantasia(std::string value) = 0;
	virtual std::string getDireccion() = 0;
	virtual void setDireccion(std::string value) = 0;
	virtual std::string getMail() = 0;
	virtual void setMail(std::string value) = 0;
	virtual std::string getTelefono() = 0;
	virtual void setTelefono(std::string value) = 0;

};