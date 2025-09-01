"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Presentation, 
  Users, 
  BookOpen,
  Clock,
  Target,
  CheckCircle,
  Send,
  Lightbulb
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const interventionFormats = [
  {
    title: "Keynote & Conférences",
    icon: Presentation,
    duration: "45-60 min",
    audience: "50-500 personnes",
    description: "Présentation inspirante sur les enjeux de l'IA responsable et la souveraineté numérique",
    objectives: [
      "Sensibiliser aux enjeux éthiques de l'IA",
      "Présenter les alternatives souveraines",
      "Démystifier la Computer Vision",
      "Inspirer l'innovation responsable"
    ]
  },
  {
    title: "Ateliers pratiques",
    icon: Users,
    duration: "2-4 heures",
    audience: "10-30 participants",
    description: "Sessions hands-on pour découvrir concrètement les technologies de Computer Vision",
    objectives: [
      "Expérimenter avec des modèles IA",
      "Comprendre les pipelines MLOps",
      "Évaluer les solutions on-prem",
      "Définir une stratégie IA"
    ]
  },
  {
    title: "Audit & Sensibilisation",
    icon: BookOpen,
    duration: "1-2 jours",
    audience: "Équipes dirigeantes",
    description: "Diagnostic complet de votre maturité IA et recommandations stratégiques",
    objectives: [
      "Auditer l'existant technologique",
      "Identifier les opportunités IA",
      "Évaluer les risques de sécurité",
      "Proposer une roadmap"
    ]
  }
];

const topics = [
  "IA responsable et éthique",
  "Souveraineté numérique et données",
  "Computer Vision industrielle",
  "Edge AI et systèmes embarqués",
  "MLOps et gouvernance des modèles",
  "Sécurité et confidentialité en IA",
  "ROI et mesure d'impact IA",
  "Transformation digitale responsable"
];

const formSchema = z.object({
  organizationName: z.string().min(2, "Le nom de l'organisation est requis"),
  contactName: z.string().min(2, "Le nom du contact est requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  eventType: z.string().min(1, "Veuillez sélectionner un type d'événement"),
  interventionFormat: z.string().min(1, "Veuillez sélectionner un format d'intervention"),
  expectedAudience: z.string().min(1, "Veuillez préciser l'audience attendue"),
  preferredTopics: z.string().min(10, "Veuillez préciser les sujets d'intérêt"),
  eventDate: z.string().optional(),
  budget: z.string().optional(),
  additionalInfo: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "Vous devez accepter le traitement de vos données"),
});

type FormData = z.infer<typeof formSchema>;

export default function ConferencesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Conference request submitted:", data);
    toast.success("Demande envoyée avec succès ! Nous vous recontacterons rapidement.");
    
    setIsSubmitting(false);
    reset();
  };

  return (
    <div className="pt-48 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="horama-gradient-text">Conférences & Interventions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sensibilisez vos équipes aux enjeux de l'IA responsable et découvrez les technologies 
              qui composent nos solutions de Computer Vision souveraine
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="glass-effect-dark border-purple-500/20 text-purple-300">
                <Lightbulb className="h-3 w-3 mr-1" />
                IA Responsable
              </Badge>
              <Badge variant="secondary" className="glass-effect-dark border-blue-500/20 text-blue-300">
                <Target className="h-3 w-3 mr-1" />
                Expertise Technique
              </Badge>
              <Badge variant="secondary" className="glass-effect-dark border-green-500/20 text-green-300">
                <Users className="h-3 w-3 mr-1" />
                Sensibilisation
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formats d'intervention */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Formats d'intervention</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Adaptés à vos besoins, de la sensibilisation générale à l'accompagnement stratégique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interventionFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full glass-effect-dark border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg horama-gradient">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{format.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {format.duration}
                            </span>
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {format.audience}
                            </span>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {format.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-blue-400">Objectifs pédagogiques :</h4>
                      <ul className="space-y-2">
                        {format.objectives.map((objective) => (
                          <li key={objective} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sujets d'expertise */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nos sujets d'expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des thématiques actuelles et stratégiques pour éclairer vos décisions technologiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full glass-effect-dark border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm group-hover:horama-gradient-text transition-all duration-300">
                      {topic}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de demande */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="glass-effect-dark border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-2xl horama-gradient-text text-center">
                  Demande d'intervention
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  Décrivez votre événement et nous vous proposerons un format d'intervention adapté
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="organizationName" className="block text-sm font-medium mb-2">
                        Organisation *
                      </label>
                      <Input
                        {...register("organizationName")}
                        id="organizationName"
                        placeholder="Nom de votre organisation"
                        className="bg-background/50 border-blue-500/20 focus:border-blue-400"
                      />
                      {errors.organizationName && (
                        <p className="text-red-400 text-sm mt-1">{errors.organizationName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                        Contact *
                      </label>
                      <Input
                        {...register("contactName")}
                        id="contactName"
                        placeholder="Votre nom"
                        className="bg-background/50 border-blue-500/20 focus:border-blue-400"
                      />
                      {errors.contactName && (
                        <p className="text-red-400 text-sm mt-1">{errors.contactName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="contact@organisation.com"
                        className="bg-background/50 border-blue-500/20 focus:border-blue-400"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Téléphone
                      </label>
                      <Input
                        {...register("phone")}
                        id="phone"
                        type="tel"
                        placeholder="01 23 45 67 89"
                        className="bg-background/50 border-blue-500/20 focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                        Type d'événement *
                      </label>
                      <select
                        {...register("eventType")}
                        id="eventType"
                        className="w-full p-2 rounded-md bg-background/50 border border-blue-500/20 focus:border-blue-400 focus:outline-none"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="conference">Conférence</option>
                        <option value="salon">Salon professionnel</option>
                        <option value="seminaire">Séminaire entreprise</option>
                        <option value="formation">Formation interne</option>
                        <option value="table-ronde">Table ronde</option>
                        <option value="autre">Autre</option>
                      </select>
                      {errors.eventType && (
                        <p className="text-red-400 text-sm mt-1">{errors.eventType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="interventionFormat" className="block text-sm font-medium mb-2">
                        Format souhaité *
                      </label>
                      <select
                        {...register("interventionFormat")}
                        id="interventionFormat"
                        className="w-full p-2 rounded-md bg-background/50 border border-blue-500/20 focus:border-blue-400 focus:outline-none"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="keynote">Keynote / Conférence</option>
                        <option value="atelier">Atelier pratique</option>
                        <option value="audit">Audit & Sensibilisation</option>
                        <option value="table-ronde">Participation table ronde</option>
                        <option value="sur-mesure">Format sur-mesure</option>
                      </select>
                      {errors.interventionFormat && (
                        <p className="text-red-400 text-sm mt-1">{errors.interventionFormat.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="expectedAudience" className="block text-sm font-medium mb-2">
                      Audience attendue *
                    </label>
                    <Input
                      {...register("expectedAudience")}
                      id="expectedAudience"
                      placeholder="Ex: 150 dirigeants d'entreprises industrielles"
                      className="bg-background/50 border-blue-500/20 focus:border-blue-400"
                    />
                    {errors.expectedAudience && (
                      <p className="text-red-400 text-sm mt-1">{errors.expectedAudience.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredTopics" className="block text-sm font-medium mb-2">
                      Sujets d'intérêt *
                    </label>
                    <Textarea
                      {...register("preferredTopics")}
                      id="preferredTopics"
                      placeholder="Décrivez les thématiques qui intéressent votre audience..."
                      rows={4}
                      className="bg-background/50 border-blue-500/20 focus:border-blue-400 resize-none"
                    />
                    {errors.preferredTopics && (
                      <p className="text-red-400 text-sm mt-1">{errors.preferredTopics.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                        Date souhaitée
                      </label>
                      <Input
                        {...register("eventDate")}
                        id="eventDate"
                        type="date"
                        className="bg-background/50 border-blue-500/20 focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget envisagé
                      </label>
                      <select
                        {...register("budget")}
                        id="budget"
                        className="w-full p-2 rounded-md bg-background/50 border border-blue-500/20 focus:border-blue-400 focus:outline-none"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="<2k">&lt; 2 000€</option>
                        <option value="2k-5k">2 000€ - 5 000€</option>
                        <option value="5k-10k">5 000€ - 10 000€</option>
                        <option value=">10k">&gt; 10 000€</option>
                        <option value="a-discuter">À discuter</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                      Informations complémentaires
                    </label>
                    <Textarea
                      {...register("additionalInfo")}
                      id="additionalInfo"
                      placeholder="Contexte de l'événement, contraintes particulières, attentes spécifiques..."
                      rows={3}
                      className="bg-background/50 border-blue-500/20 focus:border-blue-400 resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      {...register("consent")}
                      id="consent"
                      type="checkbox"
                      className="mt-1 h-4 w-4 text-blue-600 rounded border-blue-500/20"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      J'accepte que mes données soient traitées par HORAMA dans le cadre de ma demande d'intervention, 
                      conformément à notre politique de confidentialité. *
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-red-400 text-sm">{errors.consent.message}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full horama-gradient text-white hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Envoi en cours...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Envoyer la demande</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
