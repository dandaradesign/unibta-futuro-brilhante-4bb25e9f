
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ArrowRight, Play, Shield, Users, Server, Zap, Cloud } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-nuvemhost-purple to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-nuvemhost-orange/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-nuvemhost-orange/20 to-orange-400/20 backdrop-blur-sm border border-nuvemhost-orange/30 text-nuvemhost-orange px-6 py-3 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4 fill-current animate-pulse" />
              <span>Infraestrutura Premium • Performance Máxima</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                HOSPEDAGEM
                <br />
                <span className="bg-gradient-to-r from-nuvemhost-orange via-orange-300 to-nuvemhost-orange bg-clip-text text-transparent animate-pulse">
                  DE ALTA
                </span>
                <br />
                <span className="text-white">PERFORMANCE</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Hospedagem profissional com 99.9% de uptime, suporte 24/7 e tecnologia de ponta para seu site voar na web.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              {[
                { icon: Shield, number: "99.9%", label: "Uptime" },
                { icon: Users, number: "50k+", label: "Sites Ativos" },
                { icon: Server, number: "24/7", label: "Suporte" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-nuvemhost-orange/20 rounded-2xl mb-2 mx-auto">
                    <stat.icon className="w-6 h-6 text-nuvemhost-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-nuvemhost-orange to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white text-lg px-8 py-6 h-auto font-bold shadow-2xl hover:shadow-nuvemhost-orange/25 transition-all duration-500 hover:scale-105"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-nuvemhost-purple text-lg px-8 py-6 h-auto font-bold transition-all duration-500 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SSL Grátis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Backup Automático</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>CDN Global</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-nuvemhost-orange/20 to-transparent rounded-3xl transform rotate-6"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Centro de dados moderno" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nuvemhost-purple/30 to-transparent"></div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-bold text-nuvemhost-purple">99.9% Online</div>
                  <div className="text-xs text-gray-600">Servidores ativos</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-nuvemhost-orange to-orange-500 p-6 rounded-2xl shadow-xl text-white">
              <div className="text-center">
                <div className="text-3xl font-black">24/7</div>
                <div className="text-sm font-bold">Suporte</div>
                <div className="text-xs opacity-80">Sempre disponível</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-gradient-to-r from-nuvemhost-orange to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 right-1/4 w-16 h-16 bg-gradient-to-r from-nuvemhost-purple-light to-purple-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/60 text-sm mb-2">Descubra nossos planos</div>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
