
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Server, 
  Cloud, 
  Wordpress, 
  ShoppingCart, 
  Globe, 
  Database, 
  Zap, 
  Shield, 
  ArrowRight, 
  Star, 
  Clock,
  Layers,
  Monitor,
  Smartphone,
  Code
} from "lucide-react";

export const HostingServices = () => {
  const services = [
    { 
      name: "Hospedagem Compartilhada", 
      icon: Server, 
      category: "Iniciante", 
      price: "R$ 9,90/mês",
      color: "from-blue-500 to-blue-700",
      features: ["SSL Grátis", "cPanel", "99.9% Uptime"]
    },
    { 
      name: "WordPress Otimizado", 
      icon: Wordpress, 
      category: "Popular", 
      price: "R$ 19,90/mês",
      color: "from-indigo-500 to-indigo-700",
      features: ["Cache WP", "Staging", "Auto Updates"]
    },
    { 
      name: "VPS Cloud", 
      icon: Cloud, 
      category: "Avançado", 
      price: "R$ 49,90/mês",
      color: "from-purple-500 to-purple-700",
      features: ["Root Access", "SSD NVMe", "Backup Auto"]
    },
    { 
      name: "E-commerce Pro", 
      icon: ShoppingCart, 
      category: "Loja Virtual", 
      price: "R$ 39,90/mês",
      color: "from-green-500 to-green-700",
      features: ["SSL EV", "CDN", "Suporte 24/7"]
    },
    { 
      name: "Servidor Dedicado", 
      icon: Database, 
      category: "Enterprise", 
      price: "R$ 299,90/mês",
      color: "from-red-500 to-red-700",
      features: ["Hardware Dedicado", "IP Dedicado", "Gerenciamento"]
    },
    { 
      name: "Cloud Hosting", 
      icon: Layers, 
      category: "Escalável", 
      price: "R$ 29,90/mês",
      color: "from-teal-500 to-teal-700",
      features: ["Auto Scale", "Load Balance", "API Rest"]
    },
    { 
      name: "Revenda de Hosting", 
      icon: Globe, 
      category: "Negócio", 
      price: "R$ 89,90/mês",
      color: "from-orange-500 to-orange-700",
      features: ["WHM/cPanel", "White Label", "Suporte"]
    },
    { 
      name: "Hospedagem Aplicações", 
      icon: Code, 
      category: "Desenvolvimento", 
      price: "R$ 59,90/mês",
      color: "from-pink-500 to-pink-700",
      features: ["Node.js", "Python", "PHP 8+"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-nuvemhost-blue via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-nuvemhost-orange rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-nuvemhost-orange to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            A hospedagem ideal
            <br />
            <span className="bg-gradient-to-r from-nuvemhost-orange via-orange-300 to-nuvemhost-orange bg-clip-text text-transparent">
              para seu projeto
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Desde sites pessoais até aplicações enterprise, temos a solução perfeita para você
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {service.name}
                  </h3>
                  <div className="text-nuvemhost-orange font-bold text-lg">{service.price}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="text-xs bg-white/10 text-gray-300 border-0">
                  {service.category}
                </Badge>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                    <div className="w-1 h-1 bg-nuvemhost-orange rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Não encontrou o plano ideal?</h3>
            <p className="text-gray-300 mb-6 text-sm">Fale com nossos especialistas e monte uma solução personalizada</p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-nuvemhost-orange to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 px-8"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
