"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Mail, 
  MapPin, 
  Phone,
  FileText,
  Lock,
  Eye,
  UserCheck
} from "lucide-react";

export default function LegalPage() {
  return (
    <div className="pt-48 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-500/5 via-transparent to-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="horama-gradient-text">Mentions Légales</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Informations légales et politique de confidentialité
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mentions Légales */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-effect-dark border-blue-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-2xl">Mentions Légales</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Éditeur du site</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Raison sociale :</strong> HORAMA</p>
                      <p><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
                      <p><strong>Capital social :</strong> 100 000 €</p>
                      <p><strong>SIREN :</strong> 123 456 789</p>
                      <p><strong>Code APE :</strong> 6201Z - Programmation informatique</p>
                      <p><strong>TVA Intracommunautaire :</strong> FR12345678901</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Siège social</h3>
                    <div className="flex items-start space-x-3 text-muted-foreground">
                      <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <p>123 Avenue de l'Innovation</p>
                        <p>75001 Paris, France</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Contact</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>contact@horama.ai</span>
                      </div>
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+33 (0)1 23 45 67 89</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Directeur de la publication</h3>
                    <p className="text-muted-foreground">
                      M. Jean DUPONT, Président de HORAMA
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Hébergement</h3>
                    <div className="text-muted-foreground">
                      <p><strong>Hébergeur :</strong> OVHcloud</p>
                      <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                      <p><strong>Téléphone :</strong> 1007</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Politique de Confidentialité */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-effect-dark border-green-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-400" />
                  <CardTitle className="text-2xl text-green-400">Politique de Confidentialité</CardTitle>
                </div>
                <CardDescription>
                  Dernière mise à jour : 1er janvier 2024
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                      <UserCheck className="h-5 w-5 mr-2" />
                      Responsable du traitement
                    </h3>
                    <p className="text-muted-foreground">
                      HORAMA, SAS au capital de 100 000 €, dont le siège social est situé 
                      123 Avenue de l'Innovation, 75001 Paris, France, est responsable du 
                      traitement de vos données personnelles.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                      <Eye className="h-5 w-5 mr-2" />
                      Données collectées
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Nous collectons les données suivantes dans le cadre de l'utilisation de notre site :
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li><strong>Données d'identification :</strong> nom, prénom, adresse email</li>
                      <li><strong>Données de contact :</strong> numéro de téléphone, adresse postale</li>
                      <li><strong>Données professionnelles :</strong> entreprise, fonction, secteur d'activité</li>
                      <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
                      <li><strong>Données de communication :</strong> messages envoyés via nos formulaires</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">Finalités du traitement</h3>
                    <p className="text-muted-foreground mb-3">
                      Vos données sont traitées pour les finalités suivantes :
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Répondre à vos demandes de contact et d'information</li>
                      <li>Vous proposer nos services et solutions</li>
                      <li>Améliorer notre site web et nos services</li>
                      <li>Respecter nos obligations légales et réglementaires</li>
                      <li>Réaliser des statistiques d'usage anonymisées</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">Base légale</h3>
                    <p className="text-muted-foreground">
                      Le traitement de vos données repose sur votre consentement explicite, 
                      notre intérêt légitime à développer notre activité commerciale, 
                      et l'exécution de mesures précontractuelles prises à votre demande.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">Conservation des données</h3>
                    <div className="text-muted-foreground space-y-2">
                      <p><strong>Données de contact :</strong> 3 ans à compter du dernier contact</p>
                      <p><strong>Données de navigation :</strong> 13 mois maximum</p>
                      <p><strong>Données contractuelles :</strong> 10 ans après la fin du contrat</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">Vos droits</h3>
                    <p className="text-muted-foreground mb-3">
                      Conformément au RGPD, vous disposez des droits suivants :
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                      <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                      <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                      <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                      <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                      <li><strong>Droit de limitation :</strong> limiter le traitement de vos données</li>
                    </ul>
                    <p className="text-muted-foreground mt-3">
                      Pour exercer ces droits, contactez-nous à l'adresse : 
                      <strong className="text-blue-400"> privacy@horama.ai</strong>
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                      <Lock className="h-5 w-5 mr-2" />
                      Sécurité des données
                    </h3>
                    <p className="text-muted-foreground">
                      Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
                      appropriées pour assurer la sécurité de vos données personnelles et les 
                      protéger contre toute destruction, perte, altération, divulgation ou accès 
                      non autorisé.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">Cookies</h3>
                    <p className="text-muted-foreground">
                      Notre site utilise des cookies techniques nécessaires au fonctionnement 
                      du site et des cookies de mesure d'audience anonymisés. Vous pouvez 
                      configurer votre navigateur pour refuser les cookies non essentiels.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">Contact DPO</h3>
                    <div className="text-muted-foreground">
                      <p>Pour toute question relative à la protection de vos données :</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <Mail className="h-4 w-4" />
                        <span>dpo@horama.ai</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">Réclamation</h3>
                    <p className="text-muted-foreground">
                      Vous avez le droit d'introduire une réclamation auprès de la Commission 
                      Nationale de l'Informatique et des Libertés (CNIL) si vous estimez que 
                      le traitement de vos données constitue une violation du règlement européen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Conditions d'utilisation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-effect-dark border-purple-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-purple-400" />
                  <CardTitle className="text-2xl text-purple-400">Conditions d'utilisation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">Propriété intellectuelle</h3>
                    <p className="text-muted-foreground">
                      L'ensemble du contenu de ce site (textes, images, logos, éléments graphiques) 
                      est protégé par le droit d'auteur et appartient à HORAMA ou à ses partenaires. 
                      Toute reproduction sans autorisation est interdite.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">Utilisation du site</h3>
                    <p className="text-muted-foreground">
                      L'utilisation de ce site implique l'acceptation pleine et entière des 
                      présentes conditions. HORAMA se réserve le droit de modifier ces conditions 
                      à tout moment.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">Limitation de responsabilité</h3>
                    <p className="text-muted-foreground">
                      HORAMA ne pourra être tenue responsable des dommages directs ou indirects 
                      causés au matériel de l'utilisateur lors de l'accès au site, et résultant 
                      soit de l'utilisation d'un matériel ne répondant pas aux spécifications, 
                      soit de l'apparition d'un bug ou d'une incompatibilité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
