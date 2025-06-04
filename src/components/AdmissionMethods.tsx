
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
    <section className="py-16 bg-unibta-light-gray relative">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Jovens estudantes diversos usando computadores" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-unibta-blue mb-4">
            Múltiplas Formas de Ingresso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Escolha a forma de ingresso que melhor se adapta ao seu perfil
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Jovem estudante concentrada" 
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Estudante masculino sorrindo" 
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Jovem estudante feminina" 
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Estudante concentrado estudando" 
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white ${
                method.highlight ? 'ring-2 ring-unibta-yellow shadow-lg' : ''
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  method.highlight ? 'bg-unibta-yellow' : 'bg-unibta-light-gray'
                }`}>
                  <method.icon className={`w-8 h-8 ${method.highlight ? 'text-unibta-blue' : 'text-gray-600'}`} />
                </div>
                <CardTitle className="text-lg text-unibta-blue">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 text-sm">
                  {method.description}
                </p>
                <ul className="space-y-2 mb-6">
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
                  className={method.highlight ? "bg-unibta-yellow hover:bg-yellow-600 text-unibta-blue w-full font-semibold" : "w-full border-unibta-blue text-unibta-blue hover:bg-unibta-blue hover:text-white"}
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
