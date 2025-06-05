
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-unibta-blue via-blue-800 to-unibta-blue text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-unibta-blue/90 to-blue-800/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo e Descrição */}
          <div>
            <div className="bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue px-6 py-3 rounded-2xl font-bold text-2xl mb-6 w-fit shadow-lg">
              UniBTA
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Centro Universitário UniBTA - Transformando vidas através da educação há mais de 20 anos.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <div key={index} className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-unibta-yellow hover:text-unibta-blue cursor-pointer transition-all duration-300 hover:scale-110">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-unibta-yellow">Contato</h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, text1: "R. da Consolação, 847", text2: "São Paulo - SP" },
                { icon: Phone, text1: "(11) 3259-2002" },
                { icon: Mail, text1: "contato@unibta.edu.br" },
                { icon: Clock, text1: "Seg-Sex: 8h às 22h" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-unibta-yellow mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-200">{item.text1}</p>
                    {item.text2 && <p className="text-gray-200">{item.text2}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cursos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-unibta-yellow">Áreas de Estudo</h3>
            <ul className="space-y-3 text-gray-200">
              {["Tecnologia", "Gestão e Negócios", "Direito", "Psicologia", "Pedagogia", "Ver todos os cursos"].map((item, index) => (
                <li key={index} className="hover:text-unibta-yellow cursor-pointer transition-colors duration-300 hover:translate-x-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Links Úteis */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-unibta-yellow">Links Úteis</h3>
            <ul className="space-y-3 text-gray-200">
              {["Portal do Aluno", "Biblioteca Digital", "Estágios", "Financiamento", "Bolsas de Estudo", "Ouvidoria"].map((item, index) => (
                <li key={index} className="hover:text-unibta-yellow cursor-pointer transition-colors duration-300 hover:translate-x-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
          <p className="text-lg">&copy; 2024 Centro Universitário UniBTA. Todos os direitos reservados.</p>
          <p className="mt-3 text-sm opacity-80">
            Credenciamento: Portaria MEC nº 1.234/2024 | CNPJ: 12.345.678/0001-90
          </p>
        </div>
      </div>
    </footer>
  );
};
