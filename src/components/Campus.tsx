
import { MapPin, Train, Users, Coffee, Wifi, BookOpen, Building2, GraduationCap, Clock, Car } from "lucide-react";

export const Campus = () => {
  const benefits = [
    {
      icon: Train,
      title: "Localização Privilegiada",
      description: "A apenas 5 minutos da estação Higienópolis-Mackenzie",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Conexões reais com colegas e professores",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Coffee,
      title: "Ambiente Inspirador",
      description: "Espaços modernos para estudo e convivência",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      icon: Wifi,
      title: "Infraestrutura Completa",
      description: "Laboratórios, biblioteca e tecnologia de ponta",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: BookOpen,
      title: "Aulas Práticas",
      description: "Experiência hands-on com equipamentos profissionais",
      gradient: "from-teal-500 to-teal-700"
    },
    {
      icon: GraduationCap,
      title: "Suporte Acadêmico",
      description: "Orientação personalizada e acompanhamento próximo",
      gradient: "from-pink-500 to-pink-700"
    }
  ];

  const facilities = [
    { icon: Building2, name: "Salas Modernas" },
    { icon: Wifi, name: "Wi-Fi Gratuito" },
    { icon: Coffee, name: "Cantina" },
    { icon: Car, name: "Estacionamento" },
    { icon: Clock, name: "Acesso 24h" },
    { icon: Users, name: "Áreas de Convivência" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, #002F6C 2px, transparent 2px), radial-gradient(circle at 70% 30%, #FFD700 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue px-6 py-2 rounded-full text-sm font-bold">
              Ensino Presencial
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-unibta-blue via-blue-600 to-unibta-blue bg-clip-text text-transparent mb-8">
            Campus no coração
            <br />
            <span className="text-unibta-yellow">de São Paulo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estude em uma localização privilegiada, com fácil acesso e toda infraestrutura 
            necessária para sua formação acadêmica e profissional.
          </p>
        </div>

        {/* Location Highlight */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-700 w-12 h-12 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-unibta-blue">Localização Estratégica</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nosso campus está localizado no bairro de Higienópolis, uma das regiões mais 
                nobres e centrais de São Paulo, oferecendo fácil acesso através do transporte público.
              </p>
              <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl">
                <Train className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-unibta-blue">Estação Higienópolis-Mackenzie</div>
                  <div className="text-sm text-gray-600">Linha 4-Amarela do Metrô - 5 minutos a pé</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Campus UniBTA"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-unibta-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                <div className={`bg-gradient-to-r ${benefit.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-unibta-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities */}
        <div className="bg-gradient-to-r from-unibta-blue to-blue-800 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Infraestrutura Completa</h3>
            <p className="text-blue-100 text-lg">
              Tudo que você precisa para uma experiência acadêmica de excelência
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                  <facility.icon className="w-8 h-8" />
                </div>
                <div className="text-sm font-medium">{facility.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
