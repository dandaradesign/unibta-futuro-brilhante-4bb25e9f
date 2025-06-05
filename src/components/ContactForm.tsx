
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Phone, Mail, User, GraduationCap } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+55",
    course: ""
  });

  const countryCodes = [
    { code: "+55", country: "Brasil", flag: "🇧🇷" },
    { code: "+1", country: "EUA/Canadá", flag: "🇺🇸" },
    { code: "+54", country: "Argentina", flag: "🇦🇷" },
    { code: "+56", country: "Chile", flag: "🇨🇱" },
    { code: "+57", country: "Colômbia", flag: "🇨🇴" },
    { code: "+51", country: "Peru", flag: "🇵🇪" },
    { code: "+598", country: "Uruguai", flag: "🇺🇾" },
    { code: "+595", country: "Paraguai", flag: "🇵🇾" },
    { code: "+591", country: "Bolívia", flag: "🇧🇴" },
    { code: "+593", country: "Equador", flag: "🇪🇨" }
  ];

  const courses = [
    "Análise e Desenvolvimento de Sistemas",
    "Administração", 
    "Psicologia",
    "Direito",
    "Gestão de Recursos Humanos",
    "Pedagogia",
    "Ciências Contábeis",
    "Enfermagem",
    "Logística",
    "Ciência da Computação",
    "Redes de Computadores",
    "Marketing Digital",
    "Relações Internacionais"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você implementaria o envio do formulário
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-unibta-blue via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-unibta-yellow rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-unibta-yellow to-yellow-400 text-unibta-blue px-6 py-2 rounded-full text-sm font-bold">
                Fale Conosco
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Pronto para
              <br />
              <span className="bg-gradient-to-r from-unibta-yellow via-yellow-300 to-unibta-yellow bg-clip-text text-transparent">
                começar sua jornada?
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato para esclarecer 
              todas suas dúvidas sobre nossos cursos e processo de admissão.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-unibta-yellow" />
                </div>
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-gray-300">(11) 3824-3100</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-unibta-yellow" />
                </div>
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-gray-300">contato@unibta.edu.br</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-unibta-blue">
                Solicite Informações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-unibta-blue font-medium flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Nome Completo</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="border-gray-300 focus:border-unibta-blue focus:ring-unibta-blue"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-unibta-blue font-medium flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>E-mail</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-gray-300 focus:border-unibta-blue focus:ring-unibta-blue"
                    required
                  />
                </div>

                {/* Telefone */}
                <div className="space-y-2">
                  <Label className="text-unibta-blue font-medium flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Telefone</span>
                  </Label>
                  <div className="flex space-x-2">
                    <Select value={formData.countryCode} onValueChange={(value) => handleInputChange('countryCode', value)}>
                      <SelectTrigger className="w-32 border-gray-300 focus:border-unibta-blue focus:ring-unibta-blue">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            <span className="flex items-center space-x-2">
                              <span>{country.flag}</span>
                              <span>{country.code}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 border-gray-300 focus:border-unibta-blue focus:ring-unibta-blue"
                      required
                    />
                  </div>
                </div>

                {/* Curso de Interesse */}
                <div className="space-y-2">
                  <Label className="text-unibta-blue font-medium flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Curso de Interesse</span>
                  </Label>
                  <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                    <SelectTrigger className="border-gray-300 focus:border-unibta-blue focus:ring-unibta-blue">
                      <SelectValue placeholder="Selecione um curso" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-unibta-yellow to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-unibta-blue font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitação
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar este formulário, você concorda em receber comunicações da UniBTA sobre nossos cursos e serviços.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
