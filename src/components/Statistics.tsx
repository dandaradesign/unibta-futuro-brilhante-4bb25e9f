
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
    <section className="py-20 bg-gradient-to-r from-unibta-light-gray to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Grupo de jovens estudantes celebrando formatura" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-unibta-blue to-blue-700 bg-clip-text text-transparent mb-6">
            Por que escolher a UniBTA?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Números que comprovam nossa excelência e compromisso com a educação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-unibta-yellow to-yellow-400 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-12 h-12 text-unibta-blue" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-unibta-blue to-blue-700 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              alt: "Jovem estudante masculino sorrindo",
              quote: "A UniBTA transformou minha carreira"
            },
            {
              img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              alt: "Jovem estudante feminina sorrindo",
              quote: "Professores incríveis e ensino de qualidade"
            },
            {
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              alt: "Jovem estudante sorrindo",
              quote: "Flexibilidade que eu precisava"
            }
          ].map((testimonial, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-6">
                <img 
                  src={testimonial.img}
                  alt={testimonial.alt}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl group-hover:scale-110 transition-transform duration-300 ring-4 ring-white"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-unibta-blue/20 to-transparent"></div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-600 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
