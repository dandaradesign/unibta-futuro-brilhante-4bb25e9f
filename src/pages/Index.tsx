
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Users, Award, BookOpen, Clock, Smartphone, Monitor, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Statistics } from "@/components/Statistics";
import { Courses } from "@/components/Courses";
import { AdmissionMethods } from "@/components/AdmissionMethods";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <Statistics />
      <Courses />
      <AdmissionMethods />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
