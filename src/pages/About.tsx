import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="section-spacing">
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 text-primary flex items-center"
          variants={itemVariants}
        >
          <Icon icon="lucide:user" className="mr-3 text-3xl" /> Sobre mí
        </motion.h2>
        
        <motion.div variants={itemVariants} className="mb-10">
          <Card className="card-shadow border-none overflow-hidden">
            <CardBody className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mr-4">
                  <Icon icon="lucide:graduation-cap" className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Formación académica</h3>
              </div>
              
              <div className="ml-16 border-l-2 border-blue-100 pl-6 py-2">
                <div className="mb-6">
                  <p className="text-xl font-medium text-primary">Universidad Pontificia Bolivariana</p>
                  <p className="text-gray-700 mt-1">Estudiante de Ingeniería de Sistemas e Informática</p>
                  <p className="text-gray-500 text-sm mt-1">2022 - Presente</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="card-shadow border-none overflow-hidden">
            <CardBody className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mr-4">
                  <Icon icon="lucide:heart" className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Perfil personal</h3>
              </div>
              
              <ul className="space-y-6 text-gray-700 ml-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <Icon icon="lucide:check" className="text-primary" />
                  </div>
                  <p>Me considero una persona <span className="text-primary font-medium">comprometida y perseverante</span>, que siempre busca dar lo mejor en cada tarea. Mi dedicación me permite alcanzar objetivos incluso ante dificultades.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <Icon icon="lucide:check" className="text-primary" />
                  </div>
                  <p>Soy <span className="text-primary font-medium">analítica</span>, porque disfruto entender a fondo los problemas y encontrar soluciones prácticas. Mi enfoque metódico me ayuda a resolver situaciones complejas.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <Icon icon="lucide:check" className="text-primary" />
                  </div>
                  <p>Me identifico como <span className="text-primary font-medium">creativa</span>, ya que me motiva proponer ideas innovadoras y diferentes. Busco constantemente nuevas perspectivas para abordar desafíos.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <Icon icon="lucide:check" className="text-primary" />
                  </div>
                  <p>Me caracterizo por ser <span className="text-primary font-medium">responsable, organizada y con gran sentido de la integridad</span>, cualidades que aplico tanto en lo personal como en lo académico. Valoro la honestidad y la transparencia.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <Icon icon="lucide:check" className="text-primary" />
                  </div>
                  <p>Soy una persona <span className="text-primary font-medium">adaptable</span>, con gran disposición para aprender constantemente y mejorar mis habilidades, lo que me permite asumir nuevos retos con actitud positiva. Me entusiasma enfrentar situaciones desafiantes.</p>
                </li>
              </ul>
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};
