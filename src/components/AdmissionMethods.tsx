
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Múltiplas Formas de Ingresso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha a forma de ingresso que melhor se adapta ao seu perfil
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                method.highlight ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-purple-50' : ''
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  method.highlight ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-gray-100 to-gray-200'
                }`}>
                  <method.icon className={`w-8 h-8 ${method.highlight ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 text-sm">
                  {method.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={method.highlight ? "default" : "outline"} 
                  size="sm" 
                  className={method.highlight ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full" : "w-full"}
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
