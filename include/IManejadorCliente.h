#pragma once
#include <list>
#include "ICliente.h"
typedef int CodigoCta;

class IManejadorCliente
{
public:
	virtual int Guardar(ICliente* value) = 0;
	virtual void Obtener(int id, ICliente* cli) = 0;
	virtual std::list<CodigoCta> Listar(void) = 0;
	virtual int Eliminar(int id) = 0;

};