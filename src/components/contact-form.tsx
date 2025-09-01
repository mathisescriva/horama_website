"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Send, CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  consent: z.boolean().refine((val) => val === true, "Vous devez accepter le traitement de vos données"),
  honeypot: z.string().max(0, "Champ honeypot détecté"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      honeypot: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", data);
    toast.success("Message envoyé avec succès ! Nous vous recontacterons rapidement.");
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Message envoyé !</h3>
        <p className="text-muted-foreground">
          Merci pour votre message. Notre équipe vous recontactera dans les plus brefs délais.
        </p>
      </motion.div>
    );
  }

  return (
    <Card className="glass-effect-dark border-blue-500/20">
      <CardHeader>
        <CardTitle className="text-2xl horama-gradient-text">
          Parlons de votre projet
        </CardTitle>
        <CardDescription>
          Décrivez-nous vos besoins en Computer Vision et nous vous proposerons une solution sur-mesure.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            {...register("honeypot")}
            type="text"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom *
              </label>
              <Input
                {...register("name")}
                id="name"
                placeholder="Votre nom"
                className="bg-background/50 border-blue-500/20 focus:border-blue-400"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="votre@email.com"
                className="bg-background/50 border-blue-500/20 focus:border-blue-400"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <Textarea
              {...register("message")}
              id="message"
              placeholder="Décrivez votre projet, vos besoins en Computer Vision, vos contraintes techniques..."
              rows={6}
              className="bg-background/50 border-blue-500/20 focus:border-blue-400 resize-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <input
              {...register("consent")}
              id="consent"
              type="checkbox"
              className="mt-1 h-4 w-4 text-blue-600 rounded border-blue-500/20"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              J'accepte que mes données soient traitées par HORAMA dans le cadre de ma demande de contact, 
              conformément à notre{" "}
              <a href="/legal" className="text-blue-400 hover:underline">
                politique de confidentialité
              </a>
              . *
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
                <span>Envoyer le message</span>
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
