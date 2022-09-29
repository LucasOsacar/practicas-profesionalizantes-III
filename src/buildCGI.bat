::Creo los directorios para el Binario y las bibliotecas

g++ -Wall -std=c++11 -I"C:/Program Files/MySQL/MySQL Server 8.0/include" -I"C:\Program Files\MySQL\MySQL Connector C++ 8.0\include" -I./ -I../include/ -I../include/nlohmann/ addclient.cpp -o "../bin/AddClient.cgi"
g++ -Wall -std=c++11 -I"C:/Program Files/MySQL/MySQL Server 8.0/include" -I"C:\Program Files\MySQL\MySQL Connector C++ 8.0\include" -I./ -I../include/ -I../include/nlohmann/ delclient.cpp -o "../bin/DelClient.cgi"
g++ -Wall -std=c++11 -I"C:/Program Files/MySQL/MySQL Server 8.0/include" -I"C:\Program Files\MySQL\MySQL Connector C++ 8.0\include" -I./ -I../include/ -I../include/nlohmann/ listclients.cpp -o "../bin/ListClient.cgi"