
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Inscreva-se agora e transforme seu futuro!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Não perca a oportunidade de estudar em uma das melhores instituições de São Paulo. 
            Vestibular 2025/2 com inscrições abertas!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Inscrição Gratuita</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6" />
              <span className="text-lg">Resultado Imediato</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="w-6 h-6" />
              <span className="text-lg">Qualidade Garantida</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-10 py-6 h-auto font-semibold"
            >
              Fazer Inscrição Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-10 py-6 h-auto font-semibold"
            >
              Falar com Consultor
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-80">
            <p>🔥 Últimas semanas para se inscrever! Garante já sua vaga.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
