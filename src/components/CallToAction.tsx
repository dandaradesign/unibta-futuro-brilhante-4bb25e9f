
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Award, ArrowRight, Zap, Trophy, Target } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-unibta-blue via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-unibta-yellow/20 to-yellow-400/20 backdrop-blur-sm border border-unibta-yellow/30 text-unibta-yellow px-6 py-3 rounded-full text-sm font-bold">
              <Zap className="w-4 h-4" />
              <span>Últimas Semanas • Vagas Limitadas</span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="text-white">GARANTE</span>
                <br />
                <span className="bg-gradient-to-r from-unibta-yellow via-yellow-300 to-unibta-yellow bg-clip-text text-transparent">
                  SUA VAGA
                </span>
                <br />
                <span className="text-white">AGORA!</span>
              </h2>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-xl">
                Não deixe seu futuro para depois. O vestibular 2025/2 está com inscrições abertas e as vagas são limitadas!
              </p>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, title: "Inscrição", subtitle: "100% Gratuita" },
                { icon: Clock, title: "Resultado", subtitle: "Imediato" },
                { icon: Trophy, title: "Qualidade", subtitle: "Garantida" }
              ].map((benefit, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <benefit.icon className="w-8 h-8 text-unibta-yellow mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-lg font-bold">{benefit.title}</div>
                  <div className="text-sm opacity-80">{benefit.subtitle}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue hover:from-yellow-400 hover:to-yellow-500 text-xl px-12 py-8 h-auto font-black shadow-2xl hover:shadow-unibta-yellow/25 transition-all duration-500 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  INSCREVER AGORA
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-unibta-blue text-xl px-12 py-8 h-auto font-bold transition-all duration-500 hover:scale-105"
              >
                <Target className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                FALAR COM CONSULTOR
              </Button>
            </div>
            
            {/* Urgency Banner */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 p-6 rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-lg font-bold text-red-200">
                    ⚡ Restam apenas <span className="text-unibta-yellow">1.247 vagas</span> disponíveis
                  </p>
                  <p className="text-sm text-gray-300">Mais de 5.000 candidatos já se inscreveram este mês</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-unibta-yellow/20 to-transparent rounded-3xl transform rotate-6 scale-105"></div>
              
              {/* Main Image Grid */}
              <div className="relative grid grid-cols-2 gap-6">
                {[
                  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                ].map((src, index) => (
                  <div key={index} className={`relative overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700 ${index % 2 === 1 ? 'mt-12' : ''}`}>
                    <img 
                      src={src}
                      alt={`Estudante feliz ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-unibta-blue/30 to-transparent"></div>
                    
                    {/* Overlay Content */}
                    {index === 0 && (
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                          <div className="text-sm font-bold">✨ Aprovado!</div>
                          <div className="text-xs opacity-80">Análise de Sistemas</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-black text-unibta-blue">2025/2</div>
                <div className="text-sm font-bold text-gray-600">Vestibular Aberto</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-2xl shadow-xl text-white">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-bold">Inscrições Abertas</div>
                  <div className="text-xs opacity-80">Processo 100% online</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -right-16 w-32 h-32 bg-gradient-to-r from-unibta-yellow to-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-8 right-1/3 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(3deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};
