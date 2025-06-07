
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, ArrowRight, Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nuvemhost-purple via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,107,53,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(124,58,237,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-r from-nuvemhost-orange to-orange-400 text-white px-8 py-4 rounded-2xl font-black text-3xl w-fit shadow-2xl">
                Nuvem Host
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Há mais de 10 anos oferecendo soluções de hospedagem com tecnologia de ponta. 
                Mais que um provedor, somos seu parceiro digital para o sucesso online.
              </p>
              
              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-nuvemhost-orange font-bold text-lg">Siga-nos nas redes</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, name: "Facebook", color: "hover:bg-blue-600" },
                    { icon: Instagram, name: "Instagram", color: "hover:bg-pink-600" },
                    { icon: Linkedin, name: "LinkedIn", color: "hover:bg-blue-700" },
                    { icon: Youtube, name: "YouTube", color: "hover:bg-red-600" }
                  ].map((social, index) => (
                    <div key={index} className={`group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center ${social.color} cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                      <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-nuvemhost-orange mb-8">Contato</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text1: "Av. Paulista, 1847", text2: "Bela Vista - São Paulo/SP" },
                  { icon: Phone, text1: "(11) 4000-1234", text2: "Suporte técnico especializado" },
                  { icon: Mail, text1: "suporte@nuvemhost.com.br", text2: "Resposta em até 30 minutos" },
                  { icon: Clock, text1: "Segunda à Domingo: 24/7", text2: "Suporte sempre disponível" }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="bg-gradient-to-r from-nuvemhost-orange to-orange-400 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{item.text1}</p>
                      {item.text2 && <p className="text-gray-400 text-sm">{item.text2}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-nuvemhost-orange mb-8">Links Rápidos</h3>
              <div className="space-y-3">
                {[
                  "Painel de Controle",
                  "Status dos Servidores", 
                  "Migração Gratuita",
                  "Suporte Técnico",
                  "Base de Conhecimento",
                  "Área do Cliente"
                ].map((link, index) => (
                  <div key={index} className="group flex items-center space-x-3 text-gray-300 hover:text-nuvemhost-orange cursor-pointer transition-all duration-300 hover:translate-x-2">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:font-medium">{link}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-nuvemhost-orange/10 to-orange-400/10 backdrop-blur-sm border border-nuvemhost-orange/20 rounded-3xl text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-nuvemhost-orange" />
              <h3 className="text-2xl font-bold text-white">Pronto para decolar?</h3>
              <Star className="w-6 h-6 text-nuvemhost-orange" />
            </div>
            <p className="text-gray-300 text-lg mb-6">Migre seu site agora e ganhe 3 meses grátis!</p>
            <button className="bg-gradient-to-r from-nuvemhost-orange to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Começar migração gratuita!
            </button>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-lg font-medium">
                  &copy; 2024 Nuvem Host. Todos os direitos reservados.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Tecnologia em nuvem de alta performance | CNPJ: 12.345.678/0001-90
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="hover:text-nuvemhost-orange cursor-pointer transition-colors">Política de Privacidade</span>
                <span className="hover:text-nuvemhost-orange cursor-pointer transition-colors">Termos de Uso</span>
                <span className="hover:text-nuvemhost-orange cursor-pointer transition-colors">SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
