
#ifndef LIBRARY_LOADER_H
#define LIBRARY_LOADER_H


#include <windows.h>

#include <string>
#include <iostream>

class LibraryLoader
{
    public:
        LibraryLoader();
        virtual ~LibraryLoader();
        static LibraryLoader* getInstance();

        void* loadLibrary(std::string name);
        void* getExternalFunction(std::string name);
        bool freeLibrary();

    private:
        static LibraryLoader* instance;
        void* library;
        void* method;
        bool freedom;
};

LibraryLoader::LibraryLoader()
{

}

LibraryLoader::~LibraryLoader()
{

}

void* LibraryLoader::loadLibrary(std::string name)
{

    name += ".dll";
    library = (void*) LoadLibrary(name.c_str());


    return library;
}

void* LibraryLoader::getExternalFunction(std::string name)
{

        method = (void*) GetProcAddress((HINSTANCE)library, name.c_str());

    return method;
}

bool LibraryLoader::freeLibrary()
{

    freedom = FreeLibrary((HINSTANCE)library);

    return freedom;
}

#endif // LIBRARY_LOADER_H

