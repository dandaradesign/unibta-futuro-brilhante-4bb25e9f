
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, FileText, ArrowRightLeft, GraduationCap, CheckCircle } from "lucide-react";

export const AdmissionMethods = () => {
  const methods = [
    {
      icon: Monitor,
      title: "Vestibular Online",
      description: "Processo seletivo 100% digital, rápido e seguro",
      features: ["Prova online", "Resultado imediato", "Inscrição gratuita"],
      highlight: true
    },
    {
      icon: FileText,
      title: "Nota do ENEM",
      description: "Use sua nota do ENEM para ingressar sem vestibular",
      features: ["ENEM 2023 ou 2024", "Processo simplificado", "Sem taxa adicional"],
      highlight: false
    },
    {
      icon: ArrowRightLeft,
      title: "Transferência",
      description: "Transfira de outra instituição e continue seus estudos",
      features: ["Análise de histórico", "Aproveitamento de matérias", "Processo ágil"],
      highlight: false
    },
    {
      icon: GraduationCap,
      title: "Segunda Graduação",
      description: "Já tem diploma? Faça uma segunda graduação conosco",
      features: ["Processo diferenciado", "Desconto especial", "Duração reduzida"],
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-unibta-light-gray to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Jovens estudantes diversos usando computadores" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-unibta-blue to-blue-700 bg-clip-text text-transparent mb-6">
            Múltiplas Formas de Ingresso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Escolha a forma de ingresso que melhor se adapta ao seu perfil
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            ].map((src, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                <img 
                  src={src}
                  alt={`Estudante ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-unibta-blue/20 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden ${
                method.highlight ? 'ring-2 ring-unibta-yellow shadow-xl scale-105' : ''
              }`}
            >
              <div className={`absolute inset-0 ${method.highlight ? 'bg-gradient-to-br from-unibta-yellow/10 to-transparent' : 'bg-gradient-to-br from-unibta-blue/5 to-transparent opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg ${
                  method.highlight ? 'bg-gradient-to-br from-unibta-yellow to-yellow-400' : 'bg-gradient-to-br from-unibta-light-gray to-gray-100 group-hover:from-unibta-yellow group-hover:to-yellow-400'
                }`}>
                  <method.icon className={`w-10 h-10 ${method.highlight ? 'text-unibta-blue' : 'text-gray-600 group-hover:text-unibta-blue'} transition-colors duration-300`} />
                </div>
                <CardTitle className="text-xl text-unibta-blue group-hover:scale-105 transition-transform duration-300">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {method.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={method.highlight ? "default" : "outline"} 
                  size="sm" 
                  className={method.highlight 
                    ? "bg-gradient-to-r from-unibta-yellow to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-unibta-blue w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                    : "w-full border-unibta-blue text-unibta-blue hover:bg-unibta-blue hover:text-white transition-all duration-300 hover:scale-105"
                  }
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
