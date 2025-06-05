
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Monitor, Users, Scale, Calculator, Heart, Truck, GraduationCap, Network, Globe, Brain, Briefcase, Database, TrendingUp } from "lucide-react";

export const Courses = () => {
  const courses = [
    { name: "Administração", icon: Briefcase, category: "Gestão", duration: "4 anos" },
    { name: "Análise e Desenvolvimento de Sistemas", icon: Monitor, category: "Tecnologia", duration: "2,5 anos" },
    { name: "Banco de Dados", icon: Database, category: "Tecnologia", duration: "2,5 anos" },
    { name: "Ciências Contábeis", icon: Calculator, category: "Gestão", duration: "4 anos" },
    { name: "Gestão Financeira", icon: TrendingUp, category: "Gestão", duration: "2 anos" },
    { name: "Gestão de Recursos Humanos", icon: Users, category: "Gestão", duration: "2 anos" },
    { name: "Logística", icon: Truck, category: "Gestão", duration: "2 anos" },
    { name: "Pedagogia", icon: GraduationCap, category: "Educação", duration: "4 anos" },
    { name: "Rede de Computadores", icon: Network, category: "Tecnologia", duration: "2,5 anos" },
    { name: "Sistemas para Internet", icon: Globe, category: "Tecnologia", duration: "2,5 anos" },
    { name: "Psicologia", icon: Brain, category: "Saúde", duration: "5 anos" },
    { name: "Direito", icon: Scale, category: "Jurídico", duration: "5 anos" },
    { name: "Sistemas de Informação", icon: Monitor, category: "Tecnologia", duration: "4 anos" }
  ];

  const categories = ["Todos", "Gestão", "Tecnologia", "Educação", "Saúde", "Jurídico"];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Estudantes diversos trabalhando em grupo com laptops" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-unibta-blue to-blue-700 bg-clip-text text-transparent mb-6">
            Cursos que Transformam Carreiras
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Escolha entre nossos cursos presenciais e EAD, todos com foco no mercado de trabalho
          </p>
          
          <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-12 max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Jovens estudantes diversos em sala de aula moderna" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-unibta-blue/30 to-transparent"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "Todos" ? "default" : "secondary"}
                className={`px-6 py-3 cursor-pointer transition-all duration-300 text-sm font-semibold ${
                  category === "Todos" 
                    ? "bg-gradient-to-r from-unibta-blue to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105" 
                    : "bg-gray-100 text-gray-700 hover:bg-unibta-yellow hover:text-unibta-blue hover:scale-105"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-unibta-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-unibta-yellow to-yellow-400 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <course.icon className="w-7 h-7 text-unibta-blue" />
                  </div>
                  <Badge variant="outline" className="text-xs border-unibta-blue text-unibta-blue bg-white/80 backdrop-blur-sm">
                    {course.duration}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight text-gray-900 group-hover:text-unibta-blue transition-colors duration-300">{course.name}</CardTitle>
                <Badge variant="secondary" className="w-fit text-xs bg-unibta-light-gray text-gray-700">
                  {course.category}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-unibta-blue text-unibta-blue bg-white/80">Presencial</Badge>
                  <Badge variant="outline" className="text-xs border-unibta-blue text-unibta-blue bg-white/80">EAD</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-unibta-yellow to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-unibta-blue font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-12 py-4 text-lg"
          >
            Ver Todos os Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};
