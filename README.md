# Gaming Portal - Next.js

Un site web de portail de jeux professionnel construit avec **Next.js 14**, **TypeScript**, et **Tailwind CSS**.

##  Technologies Utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Font Awesome** - Icônes professionnelles
- **Google Fonts (Rajdhani)** - Police gaming moderne

##  Structure du Projet

\\\
gaming-portal/
 app/
    layout.tsx          # Layout principal avec police Rajdhani
    page.tsx            # Page d'accueil
    globals.css         # Styles globaux et animations
 components/
    Header.tsx          # Navigation et menu
    Hero.tsx            # Section hero WELCOME HOME
    Platforms.tsx       # PC, Mobile, Xbox, PS4
    Games.tsx           # Grille de jeux
    Giveaway.tsx        # Section giveaway
 next.config.ts          # Configuration Next.js
 package.json
\\\

##  Fonctionnalités

###  Design Moderne
- Thème sombre professionnel (#0a1628)
- Couleur accent rouge (#e31e24)
- Animations fluides et effets hover
- Responsive sur tous les appareils

###  Composants
1. **Header** - Navigation fixe avec liens sociaux
2. **Hero** - Section d'accueil avec CTA
3. **Platforms** - 4 plateformes de jeu
4. **Games** - 8 jeux avec images HD
5. **Giveaway** - Promotions et offres

###  Optimisations Next.js
- **Image Component** - Optimisation automatique des images
- **Google Fonts** - Chargement optimisé de Rajdhani
- **App Router** - Routing moderne de Next.js 14
- **TypeScript** - Type safety complète
- **Tailwind CSS** - Styles performants

##  Installation

\\\ash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Démarrer en production
npm start
\\\

##  Utilisation

1. Le site sera disponible sur http://localhost:3000
2. Modifications en temps réel avec Hot Reload
3. Les images sont chargées depuis Unsplash (optimisées par Next.js)

##  Scripts Disponibles

- \
pm run dev\ - Serveur de développement
- \
pm run build\ - Build de production
- \
pm start\ - Serveur de production
- \
pm run lint\ - Linter ESLint

##  Configuration

### Next.js Config
Le fichier \
ext.config.ts\ est configuré pour :
- Autoriser les images depuis Unsplash
- Optimisation des images automatique

### Tailwind Config
Tailwind est configuré avec :
- Couleurs personnalisées
- Animations customisées
- Scrollbar stylée

##  Responsive Design

- **Desktop** : > 1024px - Grille 4 colonnes
- **Tablette** : 768px - 1024px - Grille 2 colonnes
- **Mobile** : < 768px - Grille 1 colonne

##  Personnalisation

### Modifier les Couleurs
Dans \pp/globals.css\ et les composants Tailwind :
- Fond principal : \#0a1628\
- Fond secondaire : \#0f1929\
- Accent : \#e31e24\

### Ajouter des Jeux
Dans \components/Games.tsx\, modifier l'array \games\

### Modifier la Police
Dans \pp/layout.tsx\, changer \Rajdhani\ par une autre police Google Fonts

##  Déploiement

### Vercel (Recommandé)
\\\ash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
\\\

### Autres Plateformes
- Netlify
- Railway
- Render
- Docker

##  Licence

Projet libre d'utilisation pour projets personnels et commerciaux.

##  Développement

Créé avec  utilisant Next.js et les meilleures pratiques modernes de développement web.

---

**Note** : Les images proviennent d'Unsplash et sont libres de droits.
