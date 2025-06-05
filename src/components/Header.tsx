
import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-unibta-blue to-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              UniBTA
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                <Phone className="w-4 h-4 text-unibta-blue" />
                <span className="font-medium">(11) 3259-2002</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                <Mail className="w-4 h-4 text-unibta-blue" />
                <span className="font-medium">contato@unibta.edu.br</span>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-unibta-yellow to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-unibta-blue font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6">
              Inscreva-se Agora
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden hover:bg-gray-100">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
