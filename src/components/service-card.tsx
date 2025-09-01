"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Search, FileText, Cpu, GitBranch } from "lucide-react";
import Link from "next/link";

const iconMap = {
  Eye,
  Search,
  FileText,
  Cpu,
  GitBranch,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  benefits: string[];
  index: number;
}

export function ServiceCard({ title, description, icon, benefits, index }: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full glass-effect-dark border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
        <CardHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 rounded-lg horama-gradient">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl group-hover:horama-gradient-text transition-all duration-300">
              {title}
            </CardTitle>
          </div>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {benefits.map((benefit) => (
              <Badge
                key={benefit}
                variant="secondary"
                className="text-xs bg-blue-500/10 text-blue-300 border-blue-500/20"
              >
                {benefit}
              </Badge>
            ))}
          </div>
          
          <Button
            variant="ghost"
            className="w-full justify-between group-hover:bg-blue-500/10 transition-colors duration-300"
            asChild
          >
            <Link href="/services">
              En savoir plus
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
