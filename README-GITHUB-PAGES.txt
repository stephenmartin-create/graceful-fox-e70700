CAP PÊCHE PRO — ELSA II
PACK PRÊT POUR GITHUB PAGES

CONTENU
- index.html : page d'accueil
- app.js et styles.css : application
- assets/ : photo d'Elsa II et icônes
- manifest.webmanifest et sw.js : installation PWA et cache
- .nojekyll : désactive le traitement Jekyll

PUBLICATION
1. Décompresser cette archive.
2. Dans GitHub, ouvrir le dépôt qui hébergera le site.
3. Ajouter les fichiers et dossiers contenus dans cette archive à la racine du dépôt.
   Important : index.html doit être à la racine, et le dossier assets doit rester un dossier.
4. Dans le dépôt, ouvrir Settings > Pages.
5. Dans Build and deployment, choisir Deploy from a branch.
6. Choisir la branche main et le dossier /(root), puis Save.
7. Attendre la publication. GitHub affichera l'adresse Pages dans Settings > Pages.

IMPORTANT
- Ne téléverse pas le ZIP lui-même comme unique fichier : GitHub Pages doit recevoir les fichiers décompressés.
- Si le dépôt contient déjà un ancien index.html, remplacer les fichiers du site par ceux de cette archive.
- La météo, les fonds de carte et les photos distantes nécessitent une connexion Internet et peuvent dépendre de services tiers.
- Le cache PWA est limité aux fichiers de l'application ; il ne remplace pas les cartes marines, les prévisions ni les avis officiels.
- L'application est un outil d'information et de préparation, pas un système de navigation certifié.
