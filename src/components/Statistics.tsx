
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
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Grupo de estudantes colaborando" 
          className="w-full h-full object-cover opacity-5"
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
      </div>
    </section>
  );
};
