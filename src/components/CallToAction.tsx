
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-unibta-blue via-blue-800 to-unibta-blue relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Grupo de jovens estudantes felizes celebrando" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-unibta-blue/90 to-blue-800/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Inscreva-se agora e transforme seu 
              <span className="text-unibta-yellow"> futuro!</span>
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Não perca a oportunidade de estudar em uma das melhores instituições de São Paulo. 
              Vestibular 2025/2 com inscrições abertas!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: CheckCircle, text: "Inscrição Gratuita" },
                { icon: Clock, text: "Resultado Imediato" },
                { icon: Award, text: "Qualidade Garantida" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                  <feature.icon className="w-6 h-6 text-unibta-yellow" />
                  <span className="text-lg font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue hover:from-yellow-400 hover:to-yellow-500 text-xl px-12 py-6 h-auto font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Fazer Inscrição Agora
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-unibta-blue text-xl px-12 py-6 h-auto font-bold transition-all duration-300 hover:scale-105"
              >
                Falar com Consultor
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl text-center">
              <p className="text-lg">🔥 <span className="font-bold text-unibta-yellow">Últimas semanas</span> para se inscrever! Garanta já sua vaga.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {[
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              ].map((src, index) => (
                <div key={index} className={`relative overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 ${index % 2 === 1 ? 'mt-8' : ''}`}>
                  <img 
                    src={src}
                    alt={`Estudante ${index + 1}`}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-unibta-blue/20 to-transparent"></div>
                </div>
              ))}
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue p-6 rounded-3xl shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold">2025/2</div>
                <div className="text-sm font-semibold">Inscrições Abertas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
