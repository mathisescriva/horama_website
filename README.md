# 🚀 Site Vitrine HORAMA

Site vitrine moderne et ultra-dynamique pour **HORAMA**, spécialiste en Vision par Ordinateur souveraine et performante.

## ✨ Fonctionnalités

### 🎨 Design & UX
- **Thème dark élégant** avec dégradés bleu ↔ violet
- **Logo SVG gigantesque** (288px) dans navbar compacte
- **Animations Framer Motion** fluides et micro-interactions
- **Effets verre dépoli** + grain texture subtil
- **Particules animées** dans la section hero
- **Responsive mobile-first** avec breakpoints optimisés

### 📄 Pages Complètes
1. **/** - Landing page avec hero, services, approche, fondateur
2. **/services** - Détail des 5 services avec matrices problème/solution
3. **/expertise** - Stack technique, MLOps, politiques sécurité
4. **/conferences** - Formats d'intervention + formulaire de demande
5. **/contact** - Formulaire + infos + FAQ + temps de réponse
6. **/legal** - Mentions légales + RGPD complet

### 🛡️ Tech Stack
- **Next.js 14** avec App Router et TypeScript
- **Tailwind CSS** + **shadcn/ui** pour le design system
- **Framer Motion** pour les animations
- **React Hook Form** + **Zod** pour la validation
- **Lucide React** pour les icônes
- **Sonner** pour les notifications

### 🔧 Fonctionnalités Techniques
- **SEO optimisé** : méta tags FR, Open Graph, sitemap.xml
- **Accessibilité WCAG AA** : focus states, aria-labels, contrastes
- **Formulaires validés** avec protection honeypot anti-spam
- **RGPD compliant** avec consentements explicites
- **Performance optimisée** avec lazy loading

### 🎯 Contenu & Positionnement
- **Thématique souveraineté** et confidentialité des données
- **IA on-prem** et edge computing
- **Section fondateur** avec photo Baptiste Huvelle
- **Cas d'usage** avec métriques de performance
- **Stack technique** détaillée (PyTorch, ONNX, Kubernetes...)

## 🚀 Installation & Développement

```bash
# Installation des dépendances
npm install

# Serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualisation de production
npm run start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js App Router
│   ├── (pages)/           # Pages du site
│   ├── globals.css        # Styles globaux + variables HORAMA
│   ├── layout.tsx         # Layout principal avec SEO
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── ui/               # Composants shadcn/ui
│   ├── navbar.tsx        # Navigation avec logo géant
│   ├── footer.tsx        # Footer avec liens
│   ├── hero-section.tsx  # Section hero avec particules
│   └── ...
├── lib/
│   ├── copy.ts           # Contenus textuels centralisés
│   └── utils.ts          # Utilitaires
└── public/               # Assets statiques
    ├── Logo-1.svg        # Logo HORAMA vectoriel
    ├── photo_baptiste_huvelle.png
    └── robots.txt
```

## 🎨 Personnalisation

### Couleurs HORAMA
Les couleurs sont définies dans `src/app/globals.css` :

```css
:root {
  --horama-primary: oklch(0.6 0.3 240);      /* Bleu vibrant */
  --horama-secondary: oklch(0.65 0.25 270);  /* Violet */
  --horama-accent: oklch(0.7 0.2 200);       /* Bleu cyan */
}
```

### Contenu
Tous les textes sont centralisés dans `src/lib/copy.ts` pour faciliter les modifications.

### Logo
Le logo peut être remplacé dans `public/Logo-1.svg`. La taille est contrôlée dans `src/components/navbar.tsx`.

## 📱 Responsive Design

- **Mobile** : Navigation hamburger, layout adaptatif
- **Tablet** : Grilles optimisées, espacement ajusté  
- **Desktop** : Logo géant, layout multi-colonnes

## 🛡️ Sécurité & Conformité

- **RGPD** : Politique de confidentialité complète
- **Honeypot** : Protection anti-spam dans les formulaires
- **Validation** : Sanitisation des inputs avec Zod
- **SEO** : Méta tags optimisés, sitemap automatique

## 🚀 Déploiement

Le site est prêt pour le déploiement sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify** 
- **AWS Amplify**
- Tout hébergeur supportant Node.js

```bash
# Build de production
npm run build

# Les fichiers statiques sont dans .next/
```

## 📞 Contact & Support

Pour toute question technique ou modification :
- **Email** : contact@horama.ai
- **Repository** : [https://github.com/mathisescriva/horama_website](https://github.com/mathisescriva/horama_website)

---

**HORAMA** - Vision par Ordinateur souveraine, performante et responsable 🇫🇷