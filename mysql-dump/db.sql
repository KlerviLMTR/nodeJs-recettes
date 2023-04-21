-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : ven. 21 avr. 2023 à 12:14
-- Version du serveur : 8.0.32
-- Version de PHP : 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `recettes`
--

-- --------------------------------------------------------

--
-- Structure de la table `constituer`
--

CREATE TABLE `constituer` (
  `idRecette` int NOT NULL,
  `idIng` int NOT NULL,
  `quantite` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `constituer`
--

INSERT INTO `constituer` (`idRecette`, `idIng`, `quantite`) VALUES
(1, 4, 110),
(1, 6, 6),
(1, 19, 225),
(1, 20, 200),
(1, 21, 6),
(1, 22, 3),
(2, 14, 1000),
(2, 15, 1),
(2, 16, 8000),
(2, 17, 400),
(3, 2, 10),
(3, 3, 40),
(3, 4, 40),
(3, 7, 180),
(3, 8, 600),
(3, 9, 200),
(3, 10, 3),
(3, 11, 1),
(3, 12, 50),
(3, 13, 400),
(4, 2, 100),
(4, 3, 8),
(4, 4, 47),
(4, 5, 67),
(4, 6, 2);

-- --------------------------------------------------------

--
-- Structure de la table `ingredient`
--

CREATE TABLE `ingredient` (
  `idIng` int NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `cout` double DEFAULT NULL,
  `unite` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `img` varchar(80) NOT NULL DEFAULT '/images/ingredients/default.svg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `ingredient`
--

INSERT INTO `ingredient` (`idIng`, `nom`, `cout`, `unite`, `img`) VALUES
(3, 'Lait', 2.2, 'cL', '/images/ing/lait.svg'),
(5, 'Fromage rapé', 14.9, 'g', '/images/ing/fromage.svg'),
(8, 'Tomate (purée)', 4.95, 'g', '/images/ing/tomate-puree.svg'),
(9, 'Mozzarella', 7.52, 'g', '/images/ing/mozza.svg'),
(10, 'Thym', 34.44, 'g', '/images/default.svg'),
(11, 'Oignon', 2.99, 'pièce', '/images/ing/oignon.svg'),
(12, 'Ail', 15.24, 'g', '/images/ing/ail.svg'),
(13, 'Boeuf (haché)', 15.11, 'g', '/images/ing/boeuf.svg'),
(14, 'Cabillaud', 27.96, 'g', '/images/ing/poisson.svg'),
(15, 'Citron', 0.8, 'pièce', '/images/ing/citron.svg'),
(16, 'Pommes de terre', 3.45, 'g', '/images/ing/patate.svg'),
(17, 'Brocoli', 3.99, 'g', '/images/ing/brocoli.svg'),
(19, 'Chocolat à cuire', 12.38, 'g', '/images/ing/chocolat-tablette.svg'),
(20, 'Sucre (en poudre)', 2.2, 'g', '/images/default.svg'),
(21, 'Crème liquide', 10.2, 'cL', '/images/default.svg'),
(22, 'Sucre glace', 3.5, 'g', '/images/ing/sucre.svg'),
(26, 'Noisettes', 40, 'g', '/images/ing/noisette.svg'),
(31, 'Beurre', 9.08, 'g', '/images/ing/beurre.svg');

-- --------------------------------------------------------

--
-- Structure de la table `recette`
--

CREATE TABLE `recette` (
  `idrecette` int NOT NULL,
  `intitule` varchar(50) DEFAULT NULL,
  `nbcouverts` smallint DEFAULT '4',
  `deroule` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `recette`
--

INSERT INTO `recette` (`idrecette`, `intitule`, `nbcouverts`, `deroule`) VALUES
(1, 'Cloud cake au chocolat', 8, 'Avant de faire cette recette assurez-vous que votre crème liquide et votre récipient soient placés au frais pour faciliter la réalisation de votre chantilly.\r\nPréchauffez le four à 180°C. Faites ramollir le beurre au micro-ondes 15 secondes.\r\nCassez le chocolat et faites-le fondre au bain-marie ou au micro-ondes dans un saladier. Une fois le chocolat fondu, ajoutez-y le beurre hors du feu et mélangez.\r\nSéparez les blancs des jaunes de 4 œufs (quantité pour un gâteau).\r\nDans un saladier, ajoutez 2 œufs entiers, les 4 jaunes d\'œufs, la moitié du sucre et fouettez.\r\nVersez le chocolat fondu dans le mélange et mélangez jusqu\'à obtenir une préparation homogène.\r\nBattez les blancs restants en neige bien ferme avec une pincée de sel. Incorporez le reste du sucre et battez 5 minutes supplémentaires.\r\nIncorporez les blancs en neige délicatement à votre préparation de chocolat.\r\nTapissez le fond d\'un moule à manqué de papier sulfurisé (ne beurrez pas le moule ou le papier).\r\nVersez votre préparation dans le moule. Enfournez pendant 35 min à 180°C, jusqu\'à ce que le gâteau soit craquelé sur le dessus.\r\nSortez le gâteau du four et laissez-le refroidir avant de le démouler (le gâteau va s\'enfoncer sur lui-même en refroidissant).\r\nRéalisez ensuite la chantilly en ajoutant la crème liquide dans un récipient puis battez-la avec un fouet électrique jusqu\'à obtenir une consistance assez ferme. \r\nAjoutez ensuite le sucre glace tout en continuant à fouetter.\r\nÀ l\'aide d\'une spatule plate ou avec le dos d\'une cuillère à soupe, recouvrez le gâteau de la chantilly et parsemez de copeaux de chocolat râpés (optionnel). C\'est prêt ! '),
(2, 'Cabillaud et écrasé de pommes de terre', 4, 'Épluchez les pommes de terre et coupez-les en petits dés.\r\nFaites bouillir une casserole d\'eau chaude, ajoutez-y les pommes de terre et laissez cuire 15 minutes.\r\nPendant ce temps, préparez une autre casserole d\'eau bouillante. Coupez le pied du brocoli puis détachez les fleurettes. Coupez les grosses en deux si nécessaire.\r\nAjoutez les fleurettes de brocolis dans l\'eau bouillante salée et faites-les cuire pendant 7 minutes. Égouttez en fin de cuisson.\r\n5 minutes avant la fin de cuisson des pommes de terre, dans une poêle chaude, faites dorer le cabillaud dans un filet d\'huile d\'olive 2 minutes de chaque côté.\r\nUne fois la cuisson des pommes de terre écoulée, égouttez-les. Versez les pommes de terre dans un récipient.\r\nAjoutez un filet d\'huile d\'olive, salez et poivrez. Écrasez le tout.\r\nRajoutez un peu d\'huile d\'olive si vous êtes gourmand et un filet de jus de citron.\r\nServez l\'écrasé de pommes de terre avec le cabillaud, les brocolis et quelques quartiers de citron à presser sur le poisson.\r\nAjoutez des zestes de citron si vous le souhaitez. Versez un filet d\'huile d\'olive, salez et poivrez. C\'est prêt !'),
(3, 'Lasagnes alla bolognese', 4, 'Préchauffez le four à 180°C. Émincez les oignons finement.\r\nDans une casserole ou une grande poêle, ajoutez les oignons et râpez l\'ail. Faites revenir 2 minutes à feu vif.\r\nAjoutez la viande et faites-la dorer 4 minutes à feu vif.\r\nAjoutez la purée de tomate, salez, poivrez. Ajoutez le thym et un peu de basilic si vous en avez.\r\nLaissez mijoter le temps de réaliser la béchamel.\r\nDans une casserole, ajoutez le beurre et faites-le fondre à feu doux.\r\nAjoutez la farine et mélangez rapidement.\r\nAjoutez progressivement le lait en mélangeant jusqu\'à obtenir une texture de pâte à crêpes un peu épaisse.\r\nSalez, poivrez, ajoutez un peu de muscade si vous en avez et mélangez.\r\nDans un plat à gratin, faites 3 couches de : sauce bolognese, mozzarella, béchamel, feuilles de lasagnes (crues).\r\nUne fois les 3 couches réalisées, terminez par une couche de béchamel et de mozzarella.\r\nEnfournez à 180°C pendant 40 minutes.'),
(4, 'Gougères maison', 4, 'Dans une casserole, ajoutez le lait ainsi que la même quantité en eau. Ajoutez le sel. \r\nAjoutez le beurre coupé en morceaux et une pincée de sel. Portez le mélange à ébullition.  \r\nRetirez la casserole du feu et ajoutez la farine d\'un seul coup en mélangeant énergiquement à l\'aide d\'une cuillère en bois. Il faut obtenir une pâte lisse. \r\nDéposez la casserole sur le feu, continuez de mélanger vivement environ 1 minute pour dessécher la pâte. \r\nRetirez du feu puis ajoutez un oeuf à la fois. Incorporez bien chaque œuf à la pâte avant d\'ajoutez le suivant. \r\nAjoutez le fromage râpé, poivrez puis mélangez.\r\nOptionnel : si vous en avez, ajoutez une pincée de paprika, piment doux et/ou de muscade puis mélangez. \r\nFormez les gougères à l\'aide de deux petites cuillères. Disposez-les en les espaçant sur une une plaque de cuisson recouverte d\'un papier sulfurisé. \r\nEnfournez pendant 20 à 25 minutes à 180°C. ');

-- --------------------------------------------------------

--
-- Structure de la table `repas`
--

CREATE TABLE `repas` (
  `idRepas` int NOT NULL,
  `idrecette` int NOT NULL,
  `nbconvives` smallint DEFAULT NULL,
  `dater` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `repas`
--

INSERT INTO `repas` (`idRepas`, `idrecette`, `nbconvives`, `dater`) VALUES
(1, 4, 8, '2023-04-20'),
(2, 1, 2, '2023-04-25');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `idutil` int NOT NULL,
  `pseudo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`idutil`, `pseudo`) VALUES
(1, 'Alex');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `constituer`
--
ALTER TABLE `constituer`
  ADD PRIMARY KEY (`idRecette`,`idIng`),
  ADD KEY `idIng` (`idIng`);

--
-- Index pour la table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`idIng`);

--
-- Index pour la table `recette`
--
ALTER TABLE `recette`
  ADD PRIMARY KEY (`idrecette`);

--
-- Index pour la table `repas`
--
ALTER TABLE `repas`
  ADD PRIMARY KEY (`idRepas`),
  ADD KEY `REPAS_IBFK_1` (`idrecette`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`idutil`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `idIng` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `recette`
--
ALTER TABLE `recette`
  MODIFY `idrecette` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `repas`
--
ALTER TABLE `repas`
  MODIFY `idRepas` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `idutil` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `repas`
--
ALTER TABLE `repas`
  ADD CONSTRAINT `REPAS_IBFK_1` FOREIGN KEY (`idrecette`) REFERENCES `recette` (`idrecette`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
