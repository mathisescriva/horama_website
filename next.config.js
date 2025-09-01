/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour export statique
  output: 'export',
  
  // Désactiver l'optimisation d'images pour l'export statique
  images: {
    unoptimized: true
  },
  
  // Trailing slash pour compatibilité serveurs statiques
  trailingSlash: true,
  
  // Désactiver le serveur API pour l'export statique
  // (nos formulaires utilisent des handlers mock côté client)
  
  // Configuration ESLint pour le build
  eslint: {
    // Ignorer les erreurs ESLint pendant le build
    ignoreDuringBuilds: true,
  },
  
  // Configuration TypeScript pour le build
  typescript: {
    // Ignorer les erreurs TypeScript pendant le build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
