
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Monitor, Users, Scale, Calculator, Heart, Truck, GraduationCap, Network, Globe, Brain, Briefcase, Database, TrendingUp, ArrowRight, Star, Clock } from "lucide-react";

export const Courses = () => {
  const courses = [
    { 
      name: "Análise e Desenvolvimento de Sistemas", 
      icon: Monitor, 
      category: "Tecnologia", 
      duration: "2,5 anos",
      description: "Forme-se no curso mais procurado do mercado tech",
      highlight: true,
      color: "from-blue-500 to-blue-700",
      students: "850+ alunos"
    },
    { 
      name: "Administração", 
      icon: Briefcase, 
      category: "Gestão", 
      duration: "4 anos",
      description: "Lidere empresas e empreenda seus próprios negócios",
      highlight: false,
      color: "from-green-500 to-green-700",
      students: "920+ alunos"
    },
    { 
      name: "Psicologia", 
      icon: Brain, 
      category: "Saúde", 
      duration: "5 anos",
      description: "Transforme vidas através do cuidado mental",
      highlight: false,
      color: "from-purple-500 to-purple-700",
      students: "650+ alunos"
    },
    { 
      name: "Direito", 
      icon: Scale, 
      category: "Jurídico", 
      duration: "5 anos",
      description: "Defenda a justiça e os direitos da sociedade",
      highlight: false,
      color: "from-red-500 to-red-700",
      students: "1200+ alunos"
    },
    { 
      name: "Gestão de Recursos Humanos", 
      icon: Users, 
      category: "Gestão", 
      duration: "2 anos",
      description: "Gerencie pessoas e transforme organizações",
      highlight: false,
      color: "from-orange-500 to-orange-700",
      students: "480+ alunos"
    },
    { 
      name: "Pedagogia", 
      icon: GraduationCap, 
      category: "Educação", 
      duration: "4 anos",
      description: "Forme o futuro através da educação infantil",
      highlight: false,
      color: "from-pink-500 to-pink-700",
      students: "380+ alunos"
    }
  ];

  const categories = [
    { name: "Todos", count: "13 cursos", active: true },
    { name: "Tecnologia", count: "5 cursos", active: false },
    { name: "Gestão", count: "4 cursos", active: false },
    { name: "Saúde", count: "2 cursos", active: false },
    { name: "Educação", count: "1 curso", active: false },
    { name: "Jurídico", count: "1 curso", active: false }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-unibta-blue via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-unibta-yellow rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue px-6 py-2 rounded-full text-sm font-bold">
              Cursos que Transformam Carreiras
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Encontre seu
            <br />
            <span className="bg-gradient-to-r from-unibta-yellow via-yellow-300 to-unibta-yellow bg-clip-text text-transparent">
              curso ideal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Escolha entre nossos cursos presenciais e EAD, todos com foco no mercado de trabalho
          </p>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Estudantes em sala de aula moderna" 
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-unibta-blue/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ambiente Moderno de Aprendizagem</h3>
                    <p className="text-gray-200">Tecnologia e conforto para seu desenvolvimento</p>
                  </div>
                  <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-unibta-blue">
                    Conheça o Campus
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button 
                key={category.name} 
                className={`group px-6 py-3 rounded-full transition-all duration-300 text-sm font-semibold ${
                  category.active 
                    ? "bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue shadow-lg" 
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span>{category.name}</span>
                  <span className="text-xs opacity-70">{category.count}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm border-0 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 ${
              course.highlight ? 'ring-2 ring-unibta-yellow shadow-2xl scale-105' : ''
            }`}>
              {course.highlight && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue px-3 py-1 rounded-full text-xs font-bold">
                  Mais Procurado
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-r ${course.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                    <course.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs border-white/30 text-white bg-white/10 backdrop-blur-sm mb-1">
                      {course.duration}
                    </Badge>
                    <div className="text-xs text-gray-400">{course.students}</div>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight text-white group-hover:text-unibta-yellow transition-colors duration-300">
                  {course.name}
                </CardTitle>
                <Badge variant="secondary" className="w-fit text-xs bg-white/10 text-gray-300 border-0">
                  {course.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10 space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">{course.description}</p>
                
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs border-green-400/30 text-green-400 bg-green-400/10">
                    Presencial
                  </Badge>
                  <Badge variant="outline" className="text-xs border-blue-400/30 text-blue-400 bg-blue-400/10">
                    EAD
                  </Badge>
                </div>

                <Button 
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-unibta-yellow hover:text-unibta-blue hover:border-unibta-yellow transition-all duration-300 group-hover:scale-105"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Não encontrou seu curso ideal?</h3>
            <p className="text-gray-300 mb-6">Temos mais de 25 opções de graduação para você escolher</p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-unibta-yellow to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-unibta-blue font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8"
            >
              Ver Todos os Cursos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
