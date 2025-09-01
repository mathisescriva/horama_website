"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar,
  Users,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const contactInfo = {
  email: "contact@horama.ai",
  phone: "+33 (0)1 23 45 67 89",
  address: "Paris, France",
  hours: "Lun-Ven 9h-18h CET"
};

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Échange technique",
    description: "Discussion approfondie de vos besoins avec nos experts IA",
    duration: "45 min",
    action: "Planifier un appel"
  },
  {
    icon: Calendar,
    title: "Démonstration",
    description: "Présentation de nos solutions sur vos cas d'usage",
    duration: "30 min",
    action: "Réserver un créneau"
  },
  {
    icon: Users,
    title: "Atelier découverte",
    description: "Session collaborative pour définir votre stratégie IA",
    duration: "2 heures",
    action: "Organiser un atelier"
  }
];

const faqs = [
  {
    question: "Combien de temps prend un diagnostic initial ?",
    answer: "Notre diagnostic initial prend généralement 2-3 semaines, incluant l'analyse de vos données, l'évaluation technique et la présentation des recommandations."
  },
  {
    question: "Proposez-vous des POC avant engagement ?",
    answer: "Oui, nous réalisons systématiquement un POC pour valider la faisabilité technique et les performances avant tout engagement sur un projet complet."
  },
  {
    question: "Quels sont vos délais de mise en production ?",
    answer: "Les délais varient selon la complexité : 4-6 semaines pour un POC, 3-6 mois pour une solution complète avec MLOps on-prem."
  },
  {
    question: "Accompagnez-vous la formation des équipes ?",
    answer: "Absolument. Nous incluons systématiquement la formation de vos équipes et le transfert de compétences dans nos missions."
  }
];

export default function ContactPage() {
  return (
    <div className="pt-48 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="horama-gradient-text">Contactez-nous</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Démarrons ensemble votre projet de Computer Vision souveraine. 
              Nos experts sont là pour vous accompagner à chaque étape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">Comment souhaitez-vous échanger ?</h2>
            <p className="text-muted-foreground">
              Choisissez le format qui correspond le mieux à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full glass-effect-dark border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 rounded-full horama-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="text-center">
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4">
                        <Clock className="h-4 w-4" />
                        <span>{method.duration}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-blue-500/10 transition-colors duration-300"
                      >
                        {method.action}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-effect-dark border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Informations de contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a 
                          href={`mailto:${contactInfo.email}`}
                          className="text-sm text-blue-400 hover:underline"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <a 
                          href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                          className="text-sm text-blue-400 hover:underline"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="font-medium">Localisation</p>
                        <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="font-medium">Horaires</p>
                        <p className="text-sm text-muted-foreground">{contactInfo.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="glass-effect-dark border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Ressources utiles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link 
                      href="/services"
                      className="flex items-center justify-between p-2 rounded hover:bg-blue-500/10 transition-colors duration-200"
                    >
                      <span className="text-sm">Découvrir nos services</span>
                      <ArrowRight className="h-4 w-4 text-blue-400" />
                    </Link>
                    <Link 
                      href="/expertise"
                      className="flex items-center justify-between p-2 rounded hover:bg-blue-500/10 transition-colors duration-200"
                    >
                      <span className="text-sm">Notre expertise technique</span>
                      <ArrowRight className="h-4 w-4 text-blue-400" />
                    </Link>
                    <Link 
                      href="/conferences"
                      className="flex items-center justify-between p-2 rounded hover:bg-blue-500/10 transition-colors duration-200"
                    >
                      <span className="text-sm">Demander une intervention</span>
                      <ArrowRight className="h-4 w-4 text-blue-400" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass-effect-dark border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Questions fréquentes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-l-2 border-blue-500/20 pl-4">
                        <h4 className="font-medium text-sm mb-1 text-blue-400">
                          {faq.question}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">Temps de réponse garanti</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold horama-gradient-text mb-2">&lt; 4h</div>
                <p className="text-sm text-muted-foreground">Première réponse</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold horama-gradient-text mb-2">48h</div>
                <p className="text-sm text-muted-foreground">Analyse détaillée</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold horama-gradient-text mb-2">1 sem</div>
                <p className="text-sm text-muted-foreground">Proposition technique</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
