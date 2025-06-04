
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a UniBTA?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Números que comprovam nossa excelência e compromisso com a educação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
