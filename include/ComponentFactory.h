
#ifndef COPONENT_FACTORY_H
#define COPONENT_FACTORY_H

#include <iostream>
#include <stdlib.h>
#include <memory>
#include <typeinfo>
#include <LibraryLoader.h>

typedef std::shared_ptr<LibraryLoader> LoaderPtr;
class ComponentFactory
{
    public:
        ComponentFactory()
        { 
            _loader = std::make_shared<LibraryLoader>();
        }
        virtual ~ComponentFactory()
        {
            _loader->freeLibrary();
        }
        
        template<typename InterfaceType> std::shared_ptr<InterfaceType> create(std::string path)
        {
            typedef std::shared_ptr<InterfaceType> InterfaceTypePtr;

            void* load = _loader->loadLibrary(path);

            InterfaceTypePtr componentObject = nullptr;
            if(load)
            {
                typedef InterfaceTypePtr ( *Factory ) (std::string);
                Factory factory = ( Factory ) _loader->getExternalFunction( "create" );

                if(factory)
                {

                    InterfaceTypePtr createdComponent = factory(typeid(InterfaceType).name());
                    if( std::dynamic_pointer_cast<InterfaceType> (createdComponent) != nullptr )
                    {
                        componentObject = createdComponent;
                    }
                    else
                    {
                        _loader->freeLibrary();
                        std::cout << "Error: The component doesn't implement the interface: " << typeid(InterfaceType).name() << std::endl;
                        exit(-1);
                    }
                }
                else
                {
                    _loader->freeLibrary();
                    std::cout << "Error:  Failed creating a component from "
                            << path << ", there is no external function \"create(void)\"." << std::endl;
                    exit(-1);
                }
            }
            else
            {
                _loader->freeLibrary();
                std::cout << "Error: Failed to load the component: " << path << std::endl;
                exit(-1);
            }
            return componentObject;
        }
    private:
         LoaderPtr _loader;
};
#endif // COPONENT_FACTORY_H