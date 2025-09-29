import React from 'react';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const downloadCV = () => {
    import('jspdf').then(({ default: jsPDF }) => {
      const doc = new jsPDF();
      doc.text("Karen Yulieth Perez - CV", 10, 10);
      doc.text("Estudiante de Ingeniería de Sistemas e Informática", 10, 20);
      doc.text("Universidad Pontificia Bolivariana", 10, 30);
      doc.text("Email: karenperezlun04@gmail.com", 10, 50);
      doc.text("LinkedIn: www.linkedin.com/in/karen-perez-b81497339", 10, 60);
      doc.text("WhatsApp: +57 3157660279", 10, 70);
      doc.save("Karen_Perez_CV.pdf");
    });
  };

  return (
    <div className="section-spacing">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden card-shadow border-4 border-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img 
              src="https://img.heroui.chat/image/avatar?w=600&h=600&u=karen123" 
              alt="Karen Perez" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Karen Yulieth Perez
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-gray-700 max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Estudiante de Ingeniería de Sistemas e Informática en la Universidad Pontificia Bolivariana, 
              comprometida con la innovación y el aprendizaje constante.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button 
                color="primary" 
                className="px-6 py-6 card-shadow"
                onPress={downloadCV}
                startContent={<Icon icon="lucide:download" />}
              >
                Descargar CV
              </Button>
              
              <Button 
                as={Link}
                to="/contact"
                color="secondary" 
                variant="flat"
                className="px-6 py-6"
                startContent={<Icon icon="lucide:message-square" />}
              >
                Contactarme
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Features Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-2xl card-shadow hover-lift flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6">
              <Icon icon="lucide:code" className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Desarrollo</h3>
            <p className="text-gray-600">Apasionada por crear soluciones tecnológicas innovadoras y eficientes</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-2xl card-shadow hover-lift flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mb-6">
              <Icon icon="lucide:lightbulb" className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Creatividad</h3>
            <p className="text-gray-600">Enfoque creativo para resolver problemas complejos con soluciones innovadoras</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-2xl card-shadow hover-lift flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6">
              <Icon icon="lucide:book-open" className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Aprendizaje</h3>
            <p className="text-gray-600">Constante búsqueda de conocimiento y nuevas habilidades tecnológicas</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
