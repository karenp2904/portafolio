import React from 'react';
import { Card, CardBody, Progress } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'technical' | 'soft';
}

export const Skills: React.FC = () => {
  const technicalSkills: Skill[] = [
    { name: "Java", icon: "lucide:coffee", level: 85, category: 'technical' },
    { name: "JavaScript", icon: "logos:javascript", level: 80, category: 'technical' },
    { name: "Servicios de Nube", icon: "lucide:cloud", level: 75, category: 'technical' },
    { name: "Documentación", icon: "lucide:file-text", level: 90, category: 'technical' },
    { name: "Análisis de Datos", icon: "lucide:bar-chart", level: 70, category: 'technical' },
    { name: "Bases de Datos", icon: "lucide:database", level: 80, category: 'technical' }
  ];
  
  const softSkills: Skill[] = [
    { name: "Trabajo en Equipo", icon: "lucide:users", level: 95, category: 'soft' },
    { name: "Comunicación", icon: "lucide:message-circle", level: 90, category: 'soft' },
    { name: "Resolución de Problemas", icon: "lucide:puzzle", level: 85, category: 'soft' },
    { name: "Gestión del Tiempo", icon: "lucide:clock", level: 80, category: 'soft' }
  ];

  return (
    <div className="section-spacing">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 text-primary flex items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon icon="lucide:code" className="mr-3 text-3xl" /> Habilidades
        </motion.h2>
        
        {/* Technical Skills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
            <Icon icon="lucide:terminal" className="mr-2" /> Habilidades Técnicas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <Card className="card-shadow border-none hover-lift">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mr-4">
                        <Icon icon={skill.icon} className="text-white text-xl" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-medium text-gray-800">{skill.name}</h4>
                      </div>
                    </div>
                    <Progress 
                      value={skill.level} 
                      color="primary"
                      className="h-2"
                      aria-label={`${skill.name} skill level: ${skill.level}%`}
                    />
                    <p className="text-right text-sm text-gray-500 mt-1">{skill.level}%</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Soft Skills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
            <Icon icon="lucide:heart-handshake" className="mr-2" /> Habilidades Blandas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              >
                <Card className="card-shadow border-none hover-lift">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mr-4">
                        <Icon icon={skill.icon} className="text-white text-xl" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-medium text-gray-800">{skill.name}</h4>
                      </div>
                    </div>
                    <Progress 
                      value={skill.level} 
                      color="secondary"
                      className="h-2"
                      aria-label={`${skill.name} skill level: ${skill.level}%`}
                    />
                    <p className="text-right text-sm text-gray-500 mt-1">{skill.level}%</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
