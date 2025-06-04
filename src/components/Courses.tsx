
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
    <section className="py-16 bg-white relative">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Pessoa usando laptop em ambiente de estudo" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-unibta-blue mb-4">
            Cursos que Transformam Carreiras
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Escolha entre nossos cursos presenciais e EAD, todos com foco no mercado de trabalho
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "Todos" ? "default" : "secondary"}
                className={`px-4 py-2 cursor-pointer hover:bg-unibta-yellow hover:text-unibta-blue transition-colors ${
                  category === "Todos" ? "bg-unibta-blue text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-unibta-yellow w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <course.icon className="w-6 h-6 text-unibta-blue" />
                  </div>
                  <Badge variant="outline" className="text-xs border-unibta-blue text-unibta-blue">
                    {course.duration}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight text-gray-900">{course.name}</CardTitle>
                <Badge variant="secondary" className="w-fit text-xs bg-unibta-light-gray text-gray-700">
                  {course.category}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-unibta-blue text-unibta-blue">Presencial</Badge>
                  <Badge variant="outline" className="text-xs border-unibta-blue text-unibta-blue">EAD</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-unibta-yellow hover:bg-yellow-600 text-unibta-blue font-semibold"
          >
            Ver Todos os Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};
