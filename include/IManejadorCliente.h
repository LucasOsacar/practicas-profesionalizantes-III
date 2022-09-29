#pragma once
#include <list>
#include "ICliente.h"
typedef int CodigoCta;

class IManejadorCliente
{
public:
	virtual void Guardar(ICliente* value) = 0;
	virtual void Obtener(int id, ICliente* cli) = 0;
	virtual std::list<CodigoCta> Listar(void) = 0;
	virtual void Eliminar(int id) = 0;

};