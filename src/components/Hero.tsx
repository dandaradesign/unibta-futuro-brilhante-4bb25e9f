
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Grupo diverso de estudantes universitários sorrindo" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-unibta-blue opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-1 bg-unibta-yellow text-unibta-blue px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                <span>Vestibular 2025/2 Aberto</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-unibta-blue mb-6 leading-tight">
              Seu futuro começa aqui:
              <br />
              <span className="text-unibta-blue">
                Graduação com qualidade e flexibilidade
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Cursos presenciais e EAD em São Paulo com professores qualificados e foco no mercado de trabalho
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-unibta-yellow hover:bg-yellow-600 text-unibta-blue text-lg px-8 py-4 h-auto font-semibold"
              >
                Inscreva-se Agora - Gratuito
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-unibta-blue text-unibta-blue hover:bg-unibta-blue hover:text-white text-lg px-8 py-4 h-auto font-semibold"
              >
                Conheça os Cursos
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Inscrição 100% online</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Resultado imediato</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-unibta-blue" />
                <span>R. da Consolação, 847 - SP</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Jovens estudantes usando laptops e estudando juntos" 
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-unibta-blue">Inscrições Abertas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
