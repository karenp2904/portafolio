import React from 'react';
import { Card, CardBody, Button, CardFooter, CardHeader } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Projects: React.FC = () => {
  return (
    <div className="section-spacing">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 text-primary flex items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon icon="lucide:folder" className="mr-3 text-3xl" /> Proyectos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Placeholder Project Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="card-shadow border-none hover-lift h-full">
              <CardHeader className="p-0">
                <img 
                  src="https://img.heroui.chat/image/ai?w=800&h=400&u=project1" 
                  alt="Proyecto en desarrollo" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </CardHeader>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Aplicación Web</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo de una aplicación web moderna utilizando tecnologías como React, 
                  Node.js y bases de datos NoSQL. Enfocada en proporcionar una experiencia 
                  de usuario intuitiva y responsive.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full">Node.js</span>
                  <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full">MongoDB</span>
                </div>
              </CardBody>
              <CardFooter className="p-6 pt-0">
                <p className="text-sm text-gray-500 italic mb-4">En desarrollo</p>
                <Button 
                  color="primary"
                  variant="flat"
                  className="w-full"
                  startContent={<Icon icon="lucide:info" />}
                >
                  Más información
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          {/* Placeholder Project Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="card-shadow border-none hover-lift h-full">
              <CardHeader className="p-0">
                <img 
                  src="https://img.heroui.chat/image/ai?w=800&h=400&u=project2" 
                  alt="Proyecto en desarrollo" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </CardHeader>
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Sistema en la Nube</h3>
                <p className="text-gray-600 mb-4">
                  Implementación de un sistema de gestión de datos en la nube utilizando 
                  servicios de AWS. Incluye funcionalidades de almacenamiento, procesamiento 
                  y visualización de datos en tiempo real.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full">AWS</span>
                  <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full">Python</span>
                  <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full">Data Analytics</span>
                </div>
              </CardBody>
              <CardFooter className="p-6 pt-0">
                <p className="text-sm text-gray-500 italic mb-4">En desarrollo</p>
                <Button 
                  color="primary"
                  variant="flat"
                  className="w-full"
                  startContent={<Icon icon="lucide:info" />}
                >
                  Más información
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
        
        {/* Add Project Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="card-shadow border-none w-full max-w-lg">
            <CardBody className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mb-6">
                  <Icon icon="lucide:plus" className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">¿Tienes un proyecto en mente?</h3>
                <p className="mb-6 text-gray-700">
                  Estoy constantemente desarrollando nuevos proyectos y buscando oportunidades para 
                  aplicar mis conocimientos en soluciones tecnológicas innovadoras.
                </p>
                <Button 
                  color="primary"
                  className="px-8 py-6"
                  startContent={<Icon icon="lucide:plus-circle" />}
                >
                  Agregar proyecto
                </Button>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};
