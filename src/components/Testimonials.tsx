
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Yasmin Silva",
      course: "Análise e Desenvolvimento de Sistemas",
      text: "Sou aluna da UNIBTA e estou muito satisfeita com a qualidade do ensino. Os professores são dedicados, o conteúdo é atualizado e a plataforma é bem organizada. A faculdade tem me proporcionado uma ótima experiência acadêmica!",
      rating: 5
    },
    {
      name: "Luciana Oliveira",
      course: "Gestão de Recursos Humanos",
      text: "Profissionais dedicados, que proporcionam ótimas experiências e muito conhecimento. Atendimento realizado com carisma e dedicação. Boa infraestrutura e de fácil acesso ao metrô.",
      rating: 5
    },
    {
      name: "Daniel Gomes Teles",
      course: "Engenharia de Computação",
      text: "Recentemente fui um dos contemplados em realizar a formação do curso de Engenharia de Computação pela UNIBTA. A faculdade proporcionou-me uma estrutura tecnológica e pedagógica necessária, para que eu concluísse a graduação e pudesse me inserir no mercado de trabalho.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Mulher estudando com laptop" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-unibta-blue mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de quem já faz parte da família UniBTA
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-unibta-blue" />
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-unibta-yellow text-unibta-yellow" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12 bg-unibta-blue">
                    <AvatarFallback className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-unibta-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.course}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
