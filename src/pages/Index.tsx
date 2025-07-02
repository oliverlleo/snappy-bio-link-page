
import React, { useState } from 'react';
import { MessageCircle, MapPin, Instagram, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Index = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5515996499570";
    const message = "Olá! Vim através do seu link da bio 😊";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLocationClick = () => {
    setIsMapModalOpen(true);
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      action: handleWhatsAppClick,
      description: "Fale conosco agora!"
    },
    {
      name: "Localização",
      icon: MapPin,
      color: "from-red-500 to-red-600",
      action: handleLocationClick,
      description: "Encontre nossa loja"
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      action: () => window.open('https://www.instagram.com/fascinioedesejo?igsh=MXFzYXN4aXE1anQ5ag==', '_blank'),
      description: "Siga-nos no Instagram"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header com Logo */}
        <div className="text-center mb-8 floating-animation">
          <div className="relative inline-block mb-6">
            <div className="glass-effect rounded-full p-6 pulse-glow">
              <img 
                src="/logo.png" 
                alt="Fascinio & Desejo Logo" 
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Fascinio & Desejo
          </h1>
          <p className="text-gray-600 text-lg font-medium">
            Todos os nossos links em um só lugar ✨
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 mb-8">
          {socialLinks.map((link, index) => (
            <div
              key={link.name}
              className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button
                onClick={link.action}
                className={`w-full h-16 bg-gradient-to-r ${link.color} hover:shadow-2xl transition-all duration-300 text-white font-semibold text-lg rounded-2xl border-0 group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex items-center justify-center space-x-4 relative z-10">
                  <link.icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="font-bold">{link.name}</div>
                    <div className="text-sm opacity-90">{link.description}</div>
                  </div>
                </div>
                <div className="absolute right-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </Button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">💜 Criado com amor</p>
        </div>
      </div>

      {/* Modal do Mapa */}
      <Dialog open={isMapModalOpen} onOpenChange={setIsMapModalOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nossa Localização
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 p-6 pt-2">
            <div className="w-full h-full min-h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.143!2d-47.745!3d-23.461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI3JzQwLjAiUyA0N8KwNDQnNDIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Loja"
              ></iframe>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <MapPin className="text-red-500" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">R. Cel. Guilherme Francisco Wincler, 54</p>
                  <p className="text-gray-600">Centro, Capela do Alto - SP, 18195-000</p>
                </div>
              </div>
              <Button
                onClick={() => window.open('https://g.co/kgs/v2jCMzv', '_blank')}
                className="w-full mt-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Abrir no Google Maps
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
