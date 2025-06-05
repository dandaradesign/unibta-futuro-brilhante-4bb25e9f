
import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-unibta-blue to-blue-700 text-white px-8 py-4 rounded-2xl font-black text-3xl shadow-2xl hover:shadow-unibta-blue/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">UniBTA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6 text-sm">
              {[
                { icon: MapPin, text: "R. da Consolação, 847 - SP", color: "text-unibta-blue" },
                { icon: Phone, text: "(11) 3259-2002", color: "text-green-600" },
                { icon: Mail, text: "contato@unibta.edu.br", color: "text-blue-600" }
              ].map((item, index) => (
                <div key={index} className="group flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <item.icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="group bg-gradient-to-r from-unibta-yellow to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-unibta-blue font-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-3 text-lg relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                INSCREVA-SE AGORA
                <div className="w-2 h-2 bg-red-500 rounded-full ml-2 animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden hover:bg-gray-100 p-3">
            <Menu className="w-6 h-6 text-unibta-blue" />
          </Button>
        </div>
      </div>
    </header>
  );
};
