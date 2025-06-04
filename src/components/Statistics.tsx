
import { Users, Award, Clock, TrendingUp } from "lucide-react";

export const Statistics = () => {
  const stats = [
    {
      icon: Clock,
      number: "20+",
      label: "Anos de História",
      description: "Experiência sólida em educação superior"
    },
    {
      icon: Users,
      number: "10mil+",
      label: "Alunos Formados",
      description: "Profissionais atuando no mercado"
    },
    {
      icon: Award,
      number: "93%",
      label: "Mestres e Doutores",
      description: "Corpo docente altamente qualificado"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Empregabilidade",
      description: "Taxa de inserção no mercado"
    }
  ];

  return (
    <section className="py-16 bg-unibta-light-gray relative">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Grupo de jovens estudantes celebrando formatura" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-unibta-blue mb-4">
            Por que escolher a UniBTA?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Números que comprovam nossa excelência e compromisso com a educação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-unibta-yellow w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-unibta-blue" />
              </div>
              <div className="text-4xl font-bold text-unibta-blue mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Jovem estudante masculino sorrindo" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <p className="text-gray-600 italic">"A UniBTA transformou minha carreira"</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Jovem estudante feminina sorrindo" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <p className="text-gray-600 italic">"Professores incríveis e ensino de qualidade"</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Jovem estudante sorrindo" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <p className="text-gray-600 italic">"Flexibilidade que eu precisava"</p>
          </div>
        </div>
      </div>
    </section>
  );
};
