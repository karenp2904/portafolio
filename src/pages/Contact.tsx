import React from 'react';
import { Card, CardBody, Input, Textarea, Button, addToast } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío con retraso para mostrar el estado de carga
    setTimeout(() => {
      addToast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo pronto.",
        color: "success"
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="section-spacing">
      <motion.div 
        id="contact"
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
          <Icon icon="lucide:message-circle" className="mr-3 text-3xl" /> Contacto
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="card-shadow border-none h-full">
              <CardBody className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-primary">Información de contacto</h3>
                
                <ul className="space-y-8 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon icon="lucide:mail" className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email principal</p>
                      <a href="mailto:karenperezlun04@gmail.com" className="text-primary hover:underline text-lg">
                        karenperezlun04@gmail.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon icon="lucide:mail" className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email alternativo</p>
                      <a href="mailto:patriciaardilabaez@hotmail.com" className="text-primary hover:underline text-lg">
                        patriciaardilabaez@hotmail.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon icon="logos:linkedin-icon" className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/karen-perez-b81497339" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-lg"
                      >
                        Karen Perez
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon icon="logos:whatsapp" className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                      <a 
                        href="https://wa.me/573157660279" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline text-lg"
                      >
                        +57 3157660279
                      </a>
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="card-shadow border-none">
              <CardBody className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Envíame un mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Nombre"
                    placeholder="Tu nombre completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    startContent={<Icon icon="lucide:user" className="text-gray-400" />}
                    className="card-shadow"
                  />
                  
                  <Input
                    label="Email"
                    placeholder="tu@email.com"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    startContent={<Icon icon="lucide:mail" className="text-gray-400" />}
                    className="card-shadow"
                  />
                  
                  <Input
                    label="Asunto"
                    placeholder="Asunto del mensaje"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    fullWidth
                    startContent={<Icon icon="lucide:edit-3" className="text-gray-400" />}
                    className="card-shadow"
                  />
                  
                  <Textarea
                    label="Mensaje"
                    placeholder="Escribe tu mensaje aquí"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    fullWidth
                    minRows={4}
                    className="card-shadow"
                  />
                  
                  <Button 
                    type="submit" 
                    color="primary"
                    fullWidth
                    className="py-6"
                    startContent={<Icon icon="lucide:send" />}
                    isLoading={isSubmitting}
                    isDisabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
