# CAP PÊCHE PRO — ELSA II

Application web progressive (PWA) statique, en français, prévue pour Netlify.

## Contenu
- Accueil CAP PÊCHE PRO et fiche Elsa II
- Carte Leaflet/OpenStreetMap, position GPS, filtres et liens d'itinéraire
- Ports et repères de Sète à Marseille
- 10 points GPS de pêche repris du document fourni par l'utilisateur
- Mouillages/nature, découvertes, recherches de restaurants et pique-nique
- Météo estimative via Open-Meteo (connexion nécessaire)
- Rubrique Urgence : 196, 112, VHF canal 16, position GPS et fiches réflexes
- Checklist départ, fiche technique, carnet de bord, favoris, export JSON
- PWA avec cache de l'application shell

## Déploiement Netlify
1. Conserver une copie de la version actuelle.
2. Extraire l'archive ZIP.
3. Dans Netlify, utiliser le flux de déploiement manuel / dépôt de fichiers (Drop new files) et déposer le contenu du dossier, ou pousser les fichiers dans le dépôt GitHub connecté.
4. Vérifier la prévisualisation avant publication.
5. Ne pas supprimer l'ancien déploiement tant que le nouveau n'a pas été testé.

## Limites importantes
- Les coordonnées de ports et de lieux sont des repères cartographiques indicatifs, pas des waypoints de navigation.
- Les 10 points de pêche sont repris du PDF GPS fourni. Ils ne sont pas vérifiés hydrographiquement et doivent être contrôlés sur cartes marines officielles, sondeur et réglementation avant usage.
- Aucun mouillage n'est garanti autorisé. Vérifier les arrêtés locaux, zones de baignade, zones protégées, herbiers, avis aux navigateurs et consignes de capitainerie.
- Les restaurants sont proposés par recherche géographique : aucun accès bateau n'est déclaré confirmé. Appeler l'établissement et la capitainerie.
- La météo Open-Meteo est une estimation et ne remplace pas Météo-France, les BMS, les observations locales et les bulletins VHF.
- Le bouton téléphonique 196 ouvre l'appel sur le téléphone. L'application ne transmet pas automatiquement la position aux secours. En mer, privilégier la VHF canal 16. En détresse immédiate, alerter sans délai.
- Les fiches d'urgence sont des rappels et ne remplacent pas les formations, le matériel, les procédures CROSS ni les instructions des secours.
- La carte et la météo nécessitent une connexion. Les fiches et données locales de l'application peuvent rester disponibles hors ligne après premier chargement ; les fonds cartographiques ne sont pas garantis hors ligne.
- Les données du carnet sont stockées localement dans le navigateur. Exporter régulièrement une sauvegarde.

## Sources publiques intégrées / à consulter
- Service-Public, numéros d'urgence : https://www.service-public.gouv.fr/particuliers/vosdroits/F33954
- Ministère de la Mer, pêche de loisir : https://www.mer.gouv.fr/peche-de-loisir-en-mer
- Préfecture maritime Méditerranée : https://www.premar-mediterranee.gouv.fr/
- Météo-France Marine : https://marine.meteofrance.com/
- Open-Meteo : https://open-meteo.com/
- OpenStreetMap : https://www.openstreetmap.org/copyright

## Fichiers
- index.html : structure et pages
- styles.css : interface responsive
- app.js : carte, données, météo, formulaires et interactions
- sw.js : cache PWA
- manifest.webmanifest : installation
- assets/ : visuels et icônes
