# Learning Analytics Solution — Driver Tree global

Construire son agent analytics, puis utiliser le même arbre pour produire un diagnostic du chiffre d’affaires vérifiable.

**CA = Trafic × TT × IV × Prix brut moyen × (1 − taux de démarque commerciale)**

Une seule offre : méthode, cours de construction, outil guidé et rapport global exportable. Exemple synthétique, calculs locaux sans appel modèle payant. Aucun sous-outil ou agent autonome par branche.

## En préparation : parcours Data Apps

Un parcours e-learning pour data analysts : construire avec Claude Code des data apps actionnables sur ce même arbre global du CA. Chaque module livre une app HTML/JS, un cours pas à pas et des cas d'auto-évaluation. Aucune de ces apps n'est encore publiée sur le site.

| App | Question | Décision |
|---|---|---|
| DA-1 Diagnostic deux périodes | Quel levier explique l'écart de CA ? | Levier prioritaire et responsable |
| DA-2 Suivi hebdomadaire | Quels leviers dérivent cette semaine ? | Alerte et action corrective |
| DA-3 Simulateur d'objectifs | Quelle combinaison de leviers atteint la cible ? | Plan chiffré par levier |
| DA-4 Comparateur par segment | Quel canal ou segment décroche, et sur quel levier ? | Priorisation des segments |
| DA-5 Adaptation de domaine | Le même arbre fonctionne-t-il sur mes données ? | Arbre adapté et vérifié |

Les skills Claude Code associées sont regroupées dans [data-business-skills](https://github.com/Learning-Analytics-IA/data-business-skills).

## Démarrer

Node.js 24 : `npm ci`, `npm test`, `npm run build`, puis `npm run dev` pour servir dist. Routes : #accueil, #methode, #cours, #outil. Les anciens liens de parcours/outils renvoient vers le périmètre global. Le site est publié par l’intégration GitHub → Vercel.

[Mode d’emploi et limites](docs/driver-tree.md). [Exemple JSON à importer](examples/driver-tree/exemple.json).

Les comptes et historiques précédemment enregistrés restent accessibles via #compte ; Driver Tree n’enregistre pas automatiquement ses rapports dans le cloud. Aucune migration de base n’est requise pour cette version. Les documents et exemples historiques du dépôt ne constituent pas un catalogue de fonctionnalités actuelles du site.
