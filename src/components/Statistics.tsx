
import { Users, Award, Clock, TrendingUp, BookOpen, Globe } from "lucide-react";

export const Statistics = () => {
  const stats = [
    {
      icon: Clock,
      number: "20+",
      label: "Anos de História",
      description: "Experiência sólida em educação superior",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Users,
      number: "10mil+",
      label: "Alunos Formados",
      description: "Profissionais atuando no mercado",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Award,
      number: "93%",
      label: "Mestres e Doutores",
      description: "Corpo docente altamente qualificado",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Empregabilidade",
      description: "Taxa de inserção no mercado",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      icon: BookOpen,
      number: "25+",
      label: "Cursos Oferecidos",
      description: "Graduação presencial e EAD",
      gradient: "from-pink-500 to-pink-700"
    },
    {
      icon: Globe,
      number: "100%",
      label: "Reconhecidos MEC",
      description: "Qualidade certificada",
      gradient: "from-teal-500 to-teal-700"
    }
  ];

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #002F6C 2px, transparent 2px), radial-gradient(circle at 75% 75%, #FFD700 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue px-6 py-2 rounded-full text-sm font-bold">
                Por que escolher a UniBTA?
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-unibta-blue via-blue-600 to-unibta-blue bg-clip-text text-transparent mb-8">
              Números que
              <br />
              <span className="text-unibta-yellow">impressionam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Mais de duas décadas transformando vidas através da educação de excelência
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl"
                  style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
                
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 group-hover:border-gray-200">
                  {/* Icon */}
                  <div className={`bg-gradient-to-r ${stat.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-center mb-6">
                    <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-unibta-blue to-blue-700 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xl font-bold text-gray-800 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${stat.gradient} h-2 rounded-full transition-all duration-1000 delay-300 group-hover:animate-pulse`}
                      style={{ 
                        width: `${Math.min(parseInt(stat.number.replace(/\D/g, '') || '0'), 100)}%`,
                        animation: 'slideIn 2s ease-out forwards'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Image Section */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Images */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                ].map((src, index) => (
                  <div key={index} className={`relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 ${index % 2 === 1 ? 'mt-8' : ''}`}>
                    <img 
                      src={src}
                      alt={`Estudante ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-unibta-blue/20 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Right Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-black text-unibta-blue mb-6">
                    Uma comunidade que
                    <span className="text-unibta-yellow"> cresce junto</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Mais que uma instituição de ensino, somos uma família que acredita no potencial de cada estudante. 
                    Nossos números refletem o compromisso com a excelência e o sucesso de nossos alunos.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "4.8★", label: "Avaliação Geral" },
                    { number: "98%", label: "Satisfação" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-unibta-yellow/10 to-transparent rounded-2xl border border-unibta-yellow/20">
                      <div className="text-3xl font-bold text-unibta-blue mb-2">{item.number}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideIn {
          from { width: 0%; }
          to { width: var(--final-width); }
        }
      `}</style>
    </>
  );
};
