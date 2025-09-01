# 🚀 Guide de Déploiement - Site HORAMA

## ✅ Build Statique Généré

Le site HORAMA a été buildé avec succès en version statique ! 

### 📁 Fichiers générés
- **Dossier `out/`** : Contient tous les fichiers statiques prêts à déployer
- **Taille totale** : ~3.5 MB (optimisé avec Next.js)
- **11 pages statiques** générées avec SEO optimisé

## 🔧 Étapes de Déploiement

### 1. **Préparation des fichiers**
```bash
# Le build a déjà été fait avec :
npm run build

# Tous les fichiers sont dans le dossier 'out/'
```

### 2. **Upload chez l'hébergeur**

#### Option A : FTP/SFTP
1. Connecte-toi à ton hébergeur via FTP/SFTP
2. Va dans le dossier `public_html/` (ou `www/`)
3. **Upload UNIQUEMENT le CONTENU du dossier `out/`** (pas le dossier lui-même)
4. Assure-toi que `index.html` est bien à la racine de `public_html/`

#### Option B : File Manager (cPanel/Plesk)
1. Connecte-toi à ton panneau d'administration
2. Ouvre le File Manager
3. Va dans `public_html/`
4. Upload et extrais le contenu de `out/`

### 3. **Configuration serveur (incluse)**
Le fichier `.htaccess` est déjà dans `out/` avec :
- ✅ **Redirection SPA** : toutes les routes → `index.html`
- ✅ **Cache optimisé** : assets statiques cachés 1 an
- ✅ **Compression gzip** activée
- ✅ **Headers de sécurité** configurés
- ✅ **Types MIME** pour les fonts

### 4. **Vérification**
Après upload, teste :
- ✅ Page d'accueil : `https://tondomaine.com/`
- ✅ Pages internes : `https://tondomaine.com/services/`
- ✅ Navigation directe : tape une URL dans la barre d'adresse
- ✅ Logo géant visible et animations fluides

## 🎯 Optimisations Incluses

### Performance
- **Images optimisées** : Logo SVG vectoriel
- **CSS/JS minifiés** : Build production Next.js
- **Lazy loading** : Composants chargés à la demande
- **Cache navigateur** : 1 an pour les assets statiques

### SEO
- **Sitemap.xml** : Généré automatiquement
- **Robots.txt** : Configuration pour les crawlers
- **Meta tags** : Open Graph et Twitter Cards
- **Structure HTML** : Sémantique et accessible

### Sécurité
- **Headers sécurisés** : XSS, CSRF, Clickjacking
- **Validation formulaires** : Protection honeypot
- **RGPD compliant** : Politique de confidentialité

## 🛠️ Cas Particuliers

### Site dans un sous-dossier
Si ton site est dans `https://tondomaine.com/horama/` :

1. **Modifie `next.config.js`** :
```javascript
const nextConfig = {
  basePath: '/horama',
  // ... reste de la config
}
```

2. **Rebuild** :
```bash
npm run build
```

3. **Modifie `.htaccess`** dans `out/` :
```apache
RewriteBase /horama/
```

### Domaine personnalisé
Pour `https://horama.ai`, assure-toi que :
- Le DNS pointe vers ton hébergeur
- Le certificat SSL est configuré
- La redirection HTTP → HTTPS est active

## 📊 Monitoring

### Métriques à surveiller
- **Lighthouse Score** : Vise 95+ en Performance
- **Core Web Vitals** : LCP, FID, CLS optimisés
- **Temps de chargement** : <2s sur 3G
- **Formulaires** : Taux de soumission et erreurs

### Outils recommandés
- **Google PageSpeed Insights**
- **GTmetrix**
- **Google Search Console**
- **Google Analytics 4**

## 🔄 Mises à jour

Pour mettre à jour le site :

1. **Modifie le code** localement
2. **Rebuild** : `npm run build`
3. **Upload** le nouveau contenu de `out/`
4. **Purge cache** CDN/hébergeur si nécessaire

## 🆘 Dépannage

### Page blanche
- ✅ Vérifier que `index.html` est à la racine
- ✅ Vérifier les erreurs dans la console (F12)
- ✅ Vérifier que `.htaccess` est présent

### Routes 404
- ✅ Vérifier la configuration `.htaccess`
- ✅ Vérifier que le serveur supporte les rewrites
- ✅ Tester avec `/#/route` (mode hash)

### Assets manquants
- ✅ Vérifier les chemins dans `_next/static/`
- ✅ Vérifier les permissions des fichiers
- ✅ Vérifier la configuration du cache

## 📞 Support

Pour toute question :
- **Repository** : https://github.com/mathisescriva/horama_website
- **Email** : contact@horama.ai

---

**Site HORAMA prêt à déployer ! 🚀🇫🇷**
