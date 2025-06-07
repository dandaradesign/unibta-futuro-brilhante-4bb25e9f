
import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, MapPin, Cloud, Zap } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-nuvemhost-orange to-orange-500 text-white px-6 py-3 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-nuvemhost-orange/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group flex items-center space-x-2">
              <Cloud className="w-8 h-8" />
              <span className="relative z-10">Nuvem Host</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6 text-sm">
              {[
                { icon: Zap, text: "99.9% Uptime Garantido", color: "text-green-600" },
                { icon: Phone, text: "(11) 4000-1234", color: "text-nuvemhost-orange" },
                { icon: Mail, text: "suporte@nuvemhost.com.br", color: "text-nuvemhost-blue" }
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
            <Button className="group bg-gradient-to-r from-nuvemhost-orange to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-3 text-lg relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                COMEÇAR AGORA
                <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden hover:bg-gray-100 p-3">
            <Menu className="w-6 h-6 text-nuvemhost-orange" />
          </Button>
        </div>
      </div>
    </header>
  );
};
