
import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-unibta-blue text-white px-4 py-2 rounded-lg font-bold text-xl">
              UniBTA
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(11) 3259-2002</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>contato@unibta.edu.br</span>
              </div>
            </div>
            <Button className="bg-unibta-yellow hover:bg-yellow-600 text-unibta-blue font-semibold">
              Inscreva-se Agora
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
