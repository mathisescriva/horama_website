"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Eye, 
  Search, 
  FileText, 
  Cpu, 
  GitBranch,
  ArrowRight,
  CheckCircle,
  Server,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

const services = [
  {
    id: "detection",
    title: "Détection & suivi d'objets",
    icon: Eye,
    description: "Solutions complètes d'object detection, tracking et counting pour applications industrielles et de surveillance",
    problems: [
      "Surveillance de zones sensibles",
      "Comptage de personnes/véhicules",
      "Suivi d'objets en mouvement",
      "Détection d'intrusions"
    ],
    solutions: [
      "Modèles YOLO optimisés",
      "Tracking multi-objets (DeepSORT)",
      "Détection en temps réel",
      "Algorithmes de comptage précis"
    ],
    results: [
      "Précision >95%",
      "Latence <50ms",
      "24/7 fiabilité",
      "Réduction coûts surveillance"
    ],
    deployment: "Edge computing, serveurs on-prem, intégration caméras IP"
  },
  {
    id: "inspection",
    title: "Inspection visuelle & contrôle qualité",
    icon: Search,
    description: "Automatisation de l'inspection qualité pour l'industrie manufacturière avec détection de défauts microscopiques",
    problems: [
      "Contrôle qualité manuel lent",
      "Défauts microscopiques",
      "Variabilité humaine",
      "Cadences industrielles élevées"
    ],
    solutions: [
      "Vision industrielle haute résolution",
      "IA de classification des défauts",
      "Inspection multi-spectrale",
      "Systèmes d'éclairage adaptatifs"
    ],
    results: [
      "Détection défauts 0.1mm",
      "Cadence >1000 pièces/h",
      "Réduction faux positifs 90%",
      "ROI <12 mois"
    ],
    deployment: "Intégration lignes de production, systèmes PLC, reporting MES"
  },
  {
    id: "ocr",
    title: "OCR & lecture de documents",
    icon: FileText,
    description: "Extraction automatique de données à partir de documents, compteurs, écrans et interfaces visuelles",
    problems: [
      "Saisie manuelle de données",
      "Documents variés/dégradés",
      "Relevés de compteurs",
      "Écritures manuscrites"
    ],
    solutions: [
      "OCR multi-langues avancé",
      "Reconnaissance écriture manuscrite",
      "Extraction de données structurées",
      "Preprocessing d'images adaptatif"
    ],
    results: [
      "Précision texte >99%",
      "Support 50+ langues",
      "Traitement temps réel",
      "Réduction erreurs 95%"
    ],
    deployment: "APIs REST, intégration ERP/CRM, batch processing"
  },
  {
    id: "edge",
    title: "Edge AI & embarqué",
    icon: Cpu,
    description: "Déploiement de modèles IA sur dispositifs edge, caméras intelligentes et systèmes embarqués",
    problems: [
      "Latence réseau critique",
      "Bande passante limitée",
      "Confidentialité données",
      "Fiabilité connexion"
    ],
    solutions: [
      "Optimisation modèles (ONNX/TensorRT)",
      "Quantification et pruning",
      "Déploiement multi-plateformes",
      "Edge computing distribué"
    ],
    results: [
      "Latence <10ms",
      "Consommation optimisée",
      "Fonctionnement offline",
      "Sécurité renforcée"
    ],
    deployment: "Jetson, Intel NUC, caméras IP, dispositifs IoT industriels"
  },
  {
    id: "mlops",
    title: "MLOps on-prem",
    icon: GitBranch,
    description: "Pipeline complet CI/CD, monitoring, versioning et gouvernance pour modèles Computer Vision",
    problems: [
      "Dérive des modèles",
      "Déploiement complexe",
      "Monitoring performance",
      "Gouvernance IA"
    ],
    solutions: [
      "Pipeline MLOps automatisé",
      "Monitoring drift detection",
      "A/B testing modèles",
      "Versioning données/modèles"
    ],
    results: [
      "Time-to-production -70%",
      "Uptime >99.9%",
      "Détection drift automatique",
      "Conformité réglementaire"
    ],
    deployment: "Kubernetes, Docker, infrastructure on-prem, cloud hybride"
  }
];

const deploymentOptions = [
  {
    title: "Déploiement local / On-prem",
    description: "Infrastructure entièrement contrôlée",
    features: [
      "Serveurs dédiés dans vos locaux",
      "Contrôle total des données",
      "Latence ultra-faible",
      "Conformité réglementaire maximale"
    ]
  },
  {
    title: "Cloud souverain",
    description: "Solutions cloud européennes certifiées",
    features: [
      "Hébergement France/Europe",
      "Certification SecNumCloud",
      "Chiffrement bout-en-bout",
      "Audit trails complets"
    ]
  }
];

export default function ServicesPage() {
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
              <span className="horama-gradient-text">Nos Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Solutions complètes de Computer Vision, de la conception à la production industrielle, 
              avec une approche souveraine et sécurisée
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="glass-effect-dark border-blue-500/20">
                    <CardHeader className="pb-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 rounded-xl horama-gradient">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-lg">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Problèmes */}
                        <div>
                          <h4 className="font-semibold text-red-400 mb-4 flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                            Problèmes
                          </h4>
                          <ul className="space-y-2">
                            {service.problems.map((problem) => (
                              <li key={problem} className="text-sm text-muted-foreground">
                                • {problem}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-4 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            Solutions
                          </h4>
                          <ul className="space-y-2">
                            {service.solutions.map((solution) => (
                              <li key={solution} className="text-sm text-muted-foreground">
                                • {solution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Résultats */}
                        <div>
                          <h4 className="font-semibold text-green-400 mb-4 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                            Résultats
                          </h4>
                          <ul className="space-y-2">
                            {service.results.map((result) => (
                              <li key={result} className="text-sm text-muted-foreground flex items-center">
                                <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Déploiement */}
                        <div>
                          <h4 className="font-semibold text-purple-400 mb-4 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                            Déploiement
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {service.deployment}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Options de déploiement */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Options de déploiement</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez l'approche qui correspond le mieux à vos contraintes de sécurité et de performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full glass-effect-dark border-blue-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {index === 0 ? (
                        <Server className="h-6 w-6 text-blue-400" />
                      ) : (
                        <Shield className="h-6 w-6 text-green-400" />
                      )}
                      <CardTitle className="text-xl">{option.title}</CardTitle>
                    </div>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="glass-effect-dark border-blue-500/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">
                  Discutons de votre projet
                </CardTitle>
                <CardDescription className="text-lg">
                  Nos experts analysent vos besoins et vous proposent la solution Computer Vision la plus adaptée
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="horama-gradient text-white hover:opacity-90"
                  asChild
                >
                  <Link href="/contact">
                    Demander un diagnostic
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 hover:bg-blue-500/10"
                  asChild
                >
                  <Link href="/expertise">
                    Voir notre expertise
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
