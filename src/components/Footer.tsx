
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-unibta-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="bg-unibta-yellow text-unibta-blue px-4 py-2 rounded-lg font-bold text-xl mb-4 w-fit">
              UniBTA
            </div>
            <p className="text-gray-200 mb-4">
              Centro Universitário UniBTA - Transformando vidas através da educação há mais de 20 anos.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-unibta-yellow cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-unibta-yellow cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-unibta-yellow cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-300 hover:text-unibta-yellow cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-unibta-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-200">R. da Consolação, 847</p>
                  <p className="text-gray-200">São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-unibta-yellow" />
                <p className="text-gray-200">(11) 3259-2002</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-unibta-yellow" />
                <p className="text-gray-200">contato@unibta.edu.br</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-unibta-yellow" />
                <p className="text-gray-200">Seg-Sex: 8h às 22h</p>
              </div>
            </div>
          </div>
          
          {/* Cursos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Áreas de Estudo</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Tecnologia</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Gestão e Negócios</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Direito</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Psicologia</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Pedagogia</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Ver todos os cursos</li>
            </ul>
          </div>
          
          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Portal do Aluno</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Biblioteca Digital</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Estágios</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Financiamento</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Bolsas de Estudo</li>
              <li className="hover:text-unibta-yellow cursor-pointer transition-colors">Ouvidoria</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-500 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Centro Universitário UniBTA. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Credenciamento: Portaria MEC nº 1.234/2024 | CNPJ: 12.345.678/0001-90
          </p>
        </div>
      </div>
    </footer>
  );
};
