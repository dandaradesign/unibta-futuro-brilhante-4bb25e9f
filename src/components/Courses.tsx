
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
      color: "from-blue-500 to-blue-700"
    },
    { 
      name: "Administração", 
      icon: Briefcase, 
      category: "Gestão", 
      duration: "4 anos",
      color: "from-green-500 to-green-700"
    },
    { 
      name: "Psicologia", 
      icon: Brain, 
      category: "Saúde", 
      duration: "5 anos",
      color: "from-purple-500 to-purple-700"
    },
    { 
      name: "Direito", 
      icon: Scale, 
      category: "Jurídico", 
      duration: "5 anos",
      color: "from-red-500 to-red-700"
    },
    { 
      name: "Gestão de Recursos Humanos", 
      icon: Users, 
      category: "Gestão", 
      duration: "2 anos",
      color: "from-orange-500 to-orange-700"
    },
    { 
      name: "Pedagogia", 
      icon: GraduationCap, 
      category: "Educação", 
      duration: "4 anos",
      color: "from-pink-500 to-pink-700"
    },
    { 
      name: "Ciências Contábeis", 
      icon: Calculator, 
      category: "Gestão", 
      duration: "4 anos",
      color: "from-teal-500 to-teal-700"
    },
    { 
      name: "Enfermagem", 
      icon: Heart, 
      category: "Saúde", 
      duration: "5 anos",
      color: "from-rose-500 to-rose-700"
    },
    { 
      name: "Logística", 
      icon: Truck, 
      category: "Gestão", 
      duration: "2,5 anos",
      color: "from-amber-500 to-amber-700"
    },
    { 
      name: "Ciência da Computação", 
      icon: Database, 
      category: "Tecnologia", 
      duration: "4 anos",
      color: "from-indigo-500 to-indigo-700"
    },
    { 
      name: "Redes de Computadores", 
      icon: Network, 
      category: "Tecnologia", 
      duration: "2,5 anos",
      color: "from-cyan-500 to-cyan-700"
    },
    { 
      name: "Marketing Digital", 
      icon: TrendingUp, 
      category: "Gestão", 
      duration: "2 anos",
      color: "from-violet-500 to-violet-700"
    },
    { 
      name: "Relações Internacionais", 
      icon: Globe, 
      category: "Gestão", 
      duration: "4 anos",
      color: "from-emerald-500 to-emerald-700"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-unibta-blue via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-unibta-yellow rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue px-6 py-2 rounded-full text-sm font-bold">
              Nossos Cursos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Encontre seu
            <br />
            <span className="bg-gradient-to-r from-unibta-yellow via-yellow-300 to-unibta-yellow bg-clip-text text-transparent">
              curso ideal
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Escolha entre nossos cursos presenciais e EAD, todos com foco no mercado de trabalho
          </p>
        </div>
        
        {/* Courses Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`bg-gradient-to-r ${course.color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                  <course.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">
                    {course.name}
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs bg-white/10 text-gray-300 border-0">
                  {course.category}
                </Badge>
                <span className="text-xs text-gray-400">{course.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Quer saber mais sobre nossos cursos?</h3>
            <p className="text-gray-300 mb-6 text-sm">Conheça detalhes sobre grade curricular, modalidades e muito mais</p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-unibta-yellow to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-unibta-blue font-bold shadow-lg hover:shadow-xl transition-all duration-300 px-8"
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
