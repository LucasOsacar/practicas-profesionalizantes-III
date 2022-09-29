::Creo los directorios para el Binario y las bibliotecas

g++ -shared -Wall -std=c++11 -I"C:/Program Files/MySQL/MySQL Server 8.0/include" -I"C:\Program Files\MySQL\MySQL Connector C++ 8.0\include" -I./ -I../../include Cliente.cpp -o "../../bin/Cliente.dll" "libmysql.lib"

g++ -shared -Wall -std=c++11 -I"C:/Program Files/MySQL/MySQL Server 8.0/include" -I"C:\Program Files\MySQL\MySQL Connector C++ 8.0\include" -I./ -I../../include ManejadorCliente.cpp -o "../../bin/ManejadorCliente.dll" "libmysql.lib" 

