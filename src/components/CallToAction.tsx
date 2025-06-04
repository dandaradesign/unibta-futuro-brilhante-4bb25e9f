
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-unibta-blue relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Grupo de jovens estudantes felizes celebrando" 
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Inscreva-se agora e transforme seu futuro!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Não perca a oportunidade de estudar em uma das melhores instituições de São Paulo. 
              Vestibular 2025/2 com inscrições abertas!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-unibta-yellow" />
                <span className="text-lg">Inscrição Gratuita</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-unibta-yellow" />
                <span className="text-lg">Resultado Imediato</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-unibta-yellow" />
                <span className="text-lg">Qualidade Garantida</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-unibta-yellow text-unibta-blue hover:bg-yellow-600 text-xl px-10 py-6 h-auto font-bold"
              >
                Fazer Inscrição Agora
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-unibta-blue text-xl px-10 py-6 h-auto font-bold"
              >
                Falar com Consultor
              </Button>
            </div>
            
            <div className="mt-8 text-sm opacity-80">
              <p>🔥 Últimas semanas para se inscrever! Garante já sua vaga.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Jovem estudante feminina sorrindo" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Jovem estudante masculino confiante" 
                className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Jovem estudante estudando" 
                className="w-full h-48 object-cover rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Estudante feliz com laptop" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-unibta-yellow text-unibta-blue p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">2025/2</div>
                <div className="text-sm">Inscrições Abertas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
