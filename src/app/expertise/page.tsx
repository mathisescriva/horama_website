"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Brain,
  Code,
  Server,
  Shield,
  Zap,
  Database,
  GitBranch,
  Monitor,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

const techStack = [
  {
    category: "Frameworks IA",
    icon: Brain,
    technologies: [
      { name: "PyTorch", description: "Framework principal pour le développement de modèles" },
      { name: "ONNX", description: "Format d'échange pour l'interopérabilité des modèles" },
      { name: "OpenVINO", description: "Optimisation et déploiement Intel" },
      { name: "TensorRT", description: "Accélération GPU NVIDIA" },
      { name: "OpenCV", description: "Traitement d'images et Computer Vision" }
    ]
  },
  {
    category: "Modèles & Algorithmes",
    icon: Code,
    technologies: [
      { name: "YOLOv8/v9", description: "Détection d'objets en temps réel" },
      { name: "RT-DETR", description: "Detection Transformer temps réel" },
      { name: "SAM", description: "Segmentation universelle" },
      { name: "CLIP", description: "Vision-Language understanding" },
      { name: "DeepSORT", description: "Tracking multi-objets" }
    ]
  },
  {
    category: "Infrastructure & Déploiement",
    icon: Server,
    technologies: [
      { name: "Kubernetes", description: "Orchestration de conteneurs" },
      { name: "Docker", description: "Containerisation des applications" },
      { name: "Triton", description: "Serveur d'inférence NVIDIA" },
      { name: "FastAPI", description: "APIs haute performance" },
      { name: "Nginx", description: "Reverse proxy et load balancing" }
    ]
  },
  {
    category: "MLOps & Monitoring",
    icon: GitBranch,
    technologies: [
      { name: "MLflow", description: "Lifecycle management des modèles ML" },
      { name: "DVC", description: "Versioning des données et modèles" },
      { name: "Weights & Biases", description: "Tracking des expérimentations" },
      { name: "Prometheus", description: "Monitoring et alerting" },
      { name: "Grafana", description: "Visualisation des métriques" }
    ]
  },
  {
    category: "Sécurité & Gouvernance",
    icon: Shield,
    technologies: [
      { name: "Vault", description: "Gestion sécurisée des secrets" },
      { name: "Keycloak", description: "Identity & Access Management" },
      { name: "Falco", description: "Détection d'anomalies runtime" },
      { name: "OPA", description: "Policy as Code" },
      { name: "Cert-Manager", description: "Gestion automatique des certificats" }
    ]
  },
  {
    category: "Hardware & Edge",
    icon: Zap,
    technologies: [
      { name: "NVIDIA Jetson", description: "Computing edge pour IA" },
      { name: "Intel NUC", description: "Mini-PC industriels" },
      { name: "Coral TPU", description: "Accélérateurs IA Google" },
      { name: "Raspberry Pi", description: "Prototypage et IoT" },
      { name: "Caméras IP", description: "Intégration directe" }
    ]
  }
];

const mlopsArchitecture = {
  phases: [
    {
      title: "Data Ingestion",
      description: "Collecte et préparation des données",
      components: ["Data pipelines", "Quality checks", "Versioning", "Annotation tools"]
    },
    {
      title: "Model Development",
      description: "Entraînement et validation des modèles",
      components: ["Experiment tracking", "Hyperparameter tuning", "Model validation", "A/B testing"]
    },
    {
      title: "Model Deployment",
      description: "Mise en production sécurisée",
      components: ["CI/CD pipelines", "Container registry", "Staging environments", "Blue/green deployment"]
    },
    {
      title: "Monitoring & Governance",
      description: "Surveillance et gouvernance continue",
      components: ["Performance monitoring", "Drift detection", "Audit trails", "Compliance reporting"]
    }
  ]
};

const securityPolicies = [
  {
    title: "Chiffrement bout-en-bout",
    description: "Toutes les données sont chiffrées en transit et au repos",
    features: ["TLS 1.3", "AES-256", "Key rotation", "HSM integration"]
  },
  {
    title: "Zero Trust Architecture",
    description: "Vérification continue de tous les accès et communications",
    features: ["mTLS", "RBAC", "Network policies", "Identity verification"]
  },
  {
    title: "Audit & Compliance",
    description: "Traçabilité complète et conformité réglementaire",
    features: ["Audit logs", "GDPR compliance", "ISO 27001", "SOC 2"]
  },
  {
    title: "Isolation & Sandboxing",
    description: "Cloisonnement strict des environnements et données",
    features: ["Namespace isolation", "Network segmentation", "Resource quotas", "Security contexts"]
  }
];

export default function ExpertisePage() {
  return (
    <div className="pt-48 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="horama-gradient-text">Notre Expertise Technique</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Une stack technologique moderne et éprouvée pour des solutions de Computer Vision 
              souveraines, sécurisées et performantes
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="glass-effect-dark border-green-500/20 text-green-300">
                <Shield className="h-3 w-3 mr-1" />
                On-prem
              </Badge>
              <Badge variant="secondary" className="glass-effect-dark border-blue-500/20 text-blue-300">
                <Server className="h-3 w-3 mr-1" />
                MLOps
              </Badge>
              <Badge variant="secondary" className="glass-effect-dark border-purple-500/20 text-purple-300">
                <Zap className="h-3 w-3 mr-1" />
                Edge AI
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stack Technologique */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Stack Technologique</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies de pointe sélectionnées pour leur fiabilité, performance et souveraineté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full glass-effect-dark border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 rounded-lg horama-gradient">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        {category.technologies.map((tech) => (
                          <div key={tech.name} className="border-l-2 border-blue-500/20 pl-3">
                            <h4 className="font-medium text-blue-400">{tech.name}</h4>
                            <p className="text-xs text-muted-foreground">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture MLOps */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Architecture MLOps On-Prem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pipeline complet de développement, déploiement et monitoring des modèles IA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mlopsArchitecture.phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full glass-effect-dark border-blue-500/20">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full horama-gradient flex items-center justify-center text-white font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.components.map((component) => (
                        <li key={component} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                          <span>{component}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow between phases */}
                {index < mlopsArchitecture.phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Politiques de Sécurité */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Politiques de Sécurité</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sécurité by-design avec les plus hauts standards de l'industrie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {securityPolicies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass-effect-dark border-green-500/20 bg-green-500/5">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Shield className="h-6 w-6 text-green-400" />
                      <CardTitle className="text-lg text-green-400">{policy.title}</CardTitle>
                    </div>
                    <CardDescription>{policy.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {policy.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="secondary"
                          className="text-xs bg-green-500/10 text-green-300 border-green-500/20"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Certifications & Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conformité aux standards internationaux de sécurité et qualité
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { name: "ISO 27001", description: "Sécurité de l'information" },
              { name: "SOC 2", description: "Contrôles de sécurité" },
              { name: "GDPR", description: "Protection des données" },
              { name: "SecNumCloud", description: "Cloud de confiance" }
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full glass-effect-dark border-blue-500/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-blue-400 mb-1">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
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
                  Discutons de votre architecture
                </CardTitle>
                <CardDescription className="text-lg">
                  Nos architectes solutions analysent vos contraintes et conçoivent 
                  l'infrastructure IA la plus adaptée à vos besoins
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="horama-gradient text-white hover:opacity-90"
                  asChild
                >
                  <Link href="/contact">
                    Audit technique
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 hover:bg-blue-500/10"
                  asChild
                >
                  <Link href="/services">
                    Nos services
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
