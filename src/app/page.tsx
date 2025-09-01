"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { copy } from "@/lib/copy";
import { 
  Shield, 
  Server, 
  Eye, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Company Description */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Ce que fait HORAMA</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {copy.company.description.replace(/\*\*(.*?)\*\*/g, '$1')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes de Computer Vision, du POC à la production industrielle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon as keyof typeof import("@/components/service-card").iconMap}
                benefits={service.benefits}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approche" className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">{copy.approach.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de vos projets IA
            </p>
          </motion.div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {copy.approach.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass-effect-dark border-blue-500/20 text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full horama-gradient flex items-center justify-center text-white font-bold text-xl mb-4">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Sovereignty Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-effect-dark border-green-500/20 bg-green-500/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-green-400" />
                  <CardTitle className="text-2xl text-green-400">
                    {copy.approach.sovereignty.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {copy.approach.sovereignty.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Preuves & cas d'usage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des résultats concrets qui transforment les opérations de nos clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass-effect-dark border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-3xl font-bold horama-gradient-text mb-2">
                      {study.metric}
                    </div>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center">
                      {study.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HORAMA */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Pourquoi HORAMA</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {copy.whyHorama.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">{reason.replace(/\*\*(.*?)\*\*/g, '$1')}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-effect-dark border-blue-500/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
        >
          <Image
                        src="/photo_baptiste_huvelle.png"
                        alt="Baptiste Huvelle - Fondateur HORAMA"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-2xl mx-auto"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                    </motion.div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h3 className="text-2xl font-bold mb-2 horama-gradient-text">
                        Baptiste Huvelle
                      </h3>
                      <p className="text-lg text-blue-400 mb-4">
                        Fondateur & CEO
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Expert en Computer Vision et IA souveraine, Baptiste a fondé HORAMA avec la vision 
                        de démocratiser l'accès aux technologies de Vision par Ordinateur tout en garantissant 
                        la souveraineté des données. Fort de son expérience dans l'industrie et la recherche, 
                        il accompagne les entreprises dans leur transformation numérique responsable.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-blue-500/10 text-blue-300 border-blue-500/20">
                          Computer Vision
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">
                          IA Souveraine
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/10 text-green-300 border-green-500/20">
                          MLOps
                        </Badge>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Expertise Sharing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-effect-dark border-purple-500/20 bg-purple-500/5">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-purple-400" />
                  <CardTitle className="text-2xl">Partage d'expertise</CardTitle>
                </div>
                <p className="text-lg text-muted-foreground">
                  {copy.expertise.description.replace(/\*\*(.*?)\*\*/g, '$1')}
                </p>
              </CardHeader>
              <CardContent>
                <Button 
                  className="horama-gradient text-white hover:opacity-90"
                  asChild
                >
                  <Link href="/conferences">
                    {copy.expertise.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Prêt à transformer vos données visuelles en intelligence actionnable ?
            </h2>
            <Button 
              size="lg"
              className="horama-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/contact">
                {copy.finalCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}