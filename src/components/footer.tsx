import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Détection & suivi", href: "/services#detection" },
    { name: "Inspection qualité", href: "/services#inspection" },
    { name: "OCR & documents", href: "/services#ocr" },
    { name: "Edge AI", href: "/services#edge" },
    { name: "MLOps on-prem", href: "/services#mlops" },
  ],
  company: [
    { name: "Expertise", href: "/expertise" },
    { name: "Conférences", href: "/conferences" },
    { name: "Contact", href: "/contact" },
    { name: "Mentions légales", href: "/legal" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t grain-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/Logo-1.svg"
                alt="HORAMA"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold horama-gradient-text">
                HORAMA
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Vision par Ordinateur souveraine, performante et responsable. 
              Spécialistes en IA locale et on-prem pour une maîtrise totale de vos données.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@horama.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+33 (0)1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Entreprise</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 HORAMA. Tous droits réservés.</p>
          <p className="mt-2 sm:mt-0">
            SIREN: 123 456 789 | Fait avec ❤️ en France
          </p>
        </div>
      </div>
    </footer>
  );
}
