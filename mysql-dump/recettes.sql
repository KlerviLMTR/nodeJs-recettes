-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : dim. 23 avr. 2023 à 16:28
-- Version du serveur : 8.0.32
-- Version de PHP : 8.1.18

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
(1, 19, 225),
(1, 20, 200),
(1, 21, 6),
(1, 22, 3),
(1, 31, 110),
(1, 35, 4),
(2, 14, 450),
(2, 15, 2),
(2, 16, 900),
(2, 17, 600),
(3, 2, 10),
(3, 3, 40),
(3, 7, 180),
(3, 8, 600),
(3, 9, 200),
(3, 10, 3),
(3, 11, 1),
(3, 12, 50),
(3, 13, 400),
(3, 43, 70),
(3, 44, 5),
(4, 2, 100),
(4, 3, 8),
(4, 4, 47),
(4, 5, 67),
(4, 6, 2),
(4, 31, 70),
(4, 35, 3),
(4, 43, 150),
(6, 12, 100),
(6, 15, 1),
(6, 35, 1),
(6, 36, 1),
(6, 37, 25),
(6, 39, 30),
(6, 44, 5),
(109, 41, 280),
(109, 42, 4),
(110, 3, 1500),
(110, 11, 3),
(110, 16, 200),
(110, 17, 750),
(110, 31, 50),
(118, 5, 200),
(118, 35, 7);

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
(10, 'Thym', 34.44, 'g', '/images/ing/herbes.svg'),
(11, 'Oignon', 2.99, 'pièce', '/images/ing/oignon.svg'),
(12, 'Ail', 15.3, 'g', '/images/ing/ail.svg'),
(13, 'Boeuf (haché)', 15.11, 'g', '/images/ing/boeuf.svg'),
(14, 'Cabillaud', 27.96, 'g', '/images/ing/poisson.svg'),
(15, 'Citron', 0.8, 'pièce', '/images/ing/citron.svg'),
(16, 'Pommes de terre', 3.45, 'g', '/images/ing/patate.svg'),
(17, 'Brocoli', 3.99, 'g', '/images/ing/brocoli.svg'),
(19, 'Chocolat à cuire', 12.38, 'g', '/images/ing/chocolat-tablette.svg'),
(20, 'Sucre (en poudre)', 2.2, 'g', '/images/ing/sucre.svg'),
(21, 'Crème liquide', 10.2, 'cL', '/images/ing/creme.svg'),
(22, 'Sucre glace', 3.6, 'g', '/images/ing/sucre.svg'),
(26, 'Noisettes', 40, 'g', '/images/ing/noisette.svg'),
(31, 'Beurre', 9.09, 'g', '/images/ing/beurre.svg'),
(35, 'Oeuf', 0.65, 'pièce', '/images/ing/oeuf.svg'),
(36, 'Laitue', 1.52, 'pièce', '/images/ing/salade.svg'),
(37, 'Parmesan', 28, 'g', '/images/ing/fromage.svg'),
(38, 'Pain', 3.5, 'pièce', '/images/ing/pain.svg'),
(39, 'Câpres', 18.06, 'g', '/images/ing/capres.png'),
(41, 'Muesli', 8.08, 'g', '/images/ing/muesli.png'),
(42, 'Banane', 0.5, 'pièce', '/images/ing/banane.svg'),
(43, 'Farine', 2.4, 'g', '/images/ing/farine.svg'),
(44, 'Huile d´olive', 9.06, 'cL', '/images/ing/huile.svg');

-- --------------------------------------------------------

--
-- Structure de la table `recette`
--

CREATE TABLE `recette` (
  `idrecette` int NOT NULL,
  `intitule` varchar(50) DEFAULT NULL,
  `nbcouverts` smallint DEFAULT '4',
  `deroule` text NOT NULL,
  `img` varchar(80) NOT NULL DEFAULT '/images/defaultR.svg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `recette`
--

INSERT INTO `recette` (`idrecette`, `intitule`, `nbcouverts`, `deroule`, `img`) VALUES
(1, 'Cloud cake au chocolat', 8, 'Avant de faire cette recette assurez-vous que votre crème liquide et votre récipient soient placés au frais pour faciliter la réalisation de votre chantilly.\nPréchauffez le four à 180°C. Faites ramollir le beurre au micro-ondes 15 secondes.\nCassez le chocolat et faites-le fondre au bain-marie ou au micro-ondes dans un saladier. Une fois le chocolat fondu, ajoutez-y le beurre hors du feu et mélangez.\nSéparez les blancs des jaunes de 4 œufs (quantité pour un gâteau).\nDans un saladier, ajoutez 2 œufs entiers, les 4 jaunes d\'œufs, la moitié du sucre et fouettez.\nVersez le chocolat fondu dans le mélange et mélangez jusqu\'à obtenir une préparation homogène.\nBattez les blancs restants en neige bien ferme avec une pincée de sel. Incorporez le reste du sucre et battez 5 minutes supplémentaires.\nIncorporez les blancs en neige délicatement à votre préparation de chocolat.\nTapissez le fond d\'un moule à manqué de papier sulfurisé (ne beurrez pas le moule ou le papier).\nVersez votre préparation dans le moule. Enfournez pendant 35 min à 180°C, jusqu\'à ce que le gâteau soit craquelé sur le dessus.\nSortez le gâteau du four et laissez-le refroidir avant de le démouler (le gâteau va s\'enfoncer sur lui-même en refroidissant).\nRéalisez ensuite la chantilly en ajoutant la crème liquide dans un récipient puis battez-la avec un fouet électrique jusqu\'à obtenir une consistance assez ferme. \nAjoutez ensuite le sucre glace tout en continuant à fouetter.\nÀ l\'aide d\'une spatule plate ou avec le dos d\'une cuillère à soupe, recouvrez le gâteau de la chantilly et parsemez de copeaux de chocolat râpés (optionnel). C\'est prêt ! ', '/images/rec/cloudcake.png'),
(2, 'Cabillaud et purée', 4, 'Épluchez les pommes de terre et coupez-les en petits dés.\r\nFaites bouillir une casserole d\'eau chaude, ajoutez-y les pommes de terre et laissez cuire 15 minutes.\r\nPendant ce temps, préparez une autre casserole d\'eau bouillante. Coupez le pied du brocoli puis détachez les fleurettes. Coupez les grosses en deux si nécessaire.\r\nAjoutez les fleurettes de brocolis dans l\'eau bouillante salée et faites-les cuire pendant 7 minutes. Égouttez en fin de cuisson.\r\n5 minutes avant la fin de cuisson des pommes de terre, dans une poêle chaude, faites dorer le cabillaud dans un filet d\'huile d\'olive 2 minutes de chaque côté.\r\nUne fois la cuisson des pommes de terre écoulée, égouttez-les. Versez les pommes de terre dans un récipient.\r\nAjoutez un filet d\'huile d\'olive, salez et poivrez. Écrasez le tout.\r\nRajoutez un peu d\'huile d\'olive si vous êtes gourmand et un filet de jus de citron.\r\nServez l\'écrasé de pommes de terre avec le cabillaud, les brocolis et quelques quartiers de citron à presser sur le poisson.\r\nAjoutez des zestes de citron si vous le souhaitez. Versez un filet d\'huile d\'olive, salez et poivrez. C\'est prêt !', '/images/rec/cabillaud.png'),
(3, 'Lasagnes alla bolognese', 4, 'Préchauffez le four à 180°C. Émincez les oignons finement.\r\nDans une casserole ou une grande poêle, ajoutez les oignons et râpez l\'ail. Faites revenir 2 minutes à feu vif.\r\nAjoutez la viande et faites-la dorer 4 minutes à feu vif.\r\nAjoutez la purée de tomate, salez, poivrez. Ajoutez le thym et un peu de basilic si vous en avez.\r\nLaissez mijoter le temps de réaliser la béchamel.\r\nDans une casserole, ajoutez le beurre et faites-le fondre à feu doux.\r\nAjoutez la farine et mélangez rapidement.\r\nAjoutez progressivement le lait en mélangeant jusqu\'à obtenir une texture de pâte à crêpes un peu épaisse.\r\nSalez, poivrez, ajoutez un peu de muscade si vous en avez et mélangez.\r\nDans un plat à gratin, faites 3 couches de : sauce bolognese, mozzarella, béchamel, feuilles de lasagnes (crues).\r\nUne fois les 3 couches réalisées, terminez par une couche de béchamel et de mozzarella.\r\nEnfournez à 180°C pendant 40 minutes.', '/images/rec/lasagnes.png'),
(4, 'Gougères maison', 4, 'Dans une casserole, ajoutez le lait ainsi que la même quantité en eau. Ajoutez le sel. \nAjoutez le beurre coupé en morceaux et une pincée de sel. Portez le mélange à ébullition.  \nRetirez la casserole du feu et ajoutez la farine d\'un seul coup en mélangeant énergiquement à l\'aide d\'une cuillère en bois. Il faut obtenir une pâte lisse. \nDéposez la casserole sur le feu, continuez de mélanger vivement environ 1 minute pour dessécher la pâte. \nRetirez du feu puis ajoutez un oeuf à la fois. Incorporez bien chaque œuf à la pâte avant d\'ajoutez le suivant. \nAjoutez le fromage râpé, poivrez puis mélangez.\nOptionnel : si vous en avez, ajoutez une pincée de paprika, piment doux et/ou de muscade puis mélangez. \nFormez les gougères à l\'aide de deux petites cuillères. Disposez-les en les espaçant sur une une plaque de cuisson recouverte d\'un papier sulfurisé. \nEnfournez pendant 20 à 25 minutes à 180°C. ', '/images/rec/gougeres.png'),
(6, 'Salade César', 4, 'Faites dorer le pain, coupé en cubes, 3 min dans un peu d\'huile.\n\nDéchirez les feuilles de romaine dans un saladier, et ajoutez les croûtons préalablement épongés dans du papier absorbant.\n\nPréparez la sauce : Faites cuire l\'oeuf 1 min 30 dans l\'eau bouillante, et rafraîchissez-le.\n\nCassez-le dans le bol d\'un mixeur et mixez, avec tous les autres ingrédients; rectifiez l\'assaissonnement et incorporez à la salade.\n\nDécorez de copeaux de parmesan, et servez.\n\n', '/images/rec/cesar.png'),
(109, 'Cookies 2 ingrédients', 4, 'Préchauffer le four à 180°. Ecraser la banane et la mélanger au muesli. \r\n\r\n📌 Etape 2\r\n\r\nFormer des boules avec la pâte obtenue et les aplatir pour former des cookies.\r\n\r\n\r\n📌 Etape 3\r\n\r\nMettre au four pendant 15 minutes. Les cookies doivent être légèrement dorés. C\'est prêt !\r\n\r\nUn jeu d\'enfant !', '/images/rec/cookies.png'),
(110, 'Velouté de brocolis et pommes de terre', 6, 'Couper les légumes en morceaux.\r\n\r\nFaire fondre le beurre et ajouter du bouillon. Attendre que ce soit bien homogène.\r\n\r\nFaire ensuite poêler les légumes quelques minutes avec le beurre et le bouillon ainsi que sel, poivre et muscade (pour ma part je rajoute aussi une pointe de gingembre en poudre).\r\n\r\nAjouter une partie du lait, jusqu’à hauteur des légumes.\r\n\r\nFaire mijoter à feux moyen pendant 15 à 20 min en remuant de temps en temps.\r\n\r\nVerser dans un saladier et mixer en ajoutant du lait jusqu’à que la soupe ait la texture adéquate : ni trop épaisse, ni trop liquide.  C’est prêt à être dégusté !', '/images/rec/veloute.png'),
(118, 'Omelette au fromage', 4, '1\r\nCassez les oeufs dans une terrine puis fouettez-les avec la crème, la ciboulette, la noix de muscade. Salez et poivrez à votre convenance.\r\n\r\n2\r\nFaites chauffer le beurre dans une grande poêle et versez le mélange. Faites cuire à feu très vif, puis baissez le feu, ajoutez le fromage râpé et laissez cuire encore quelques minutes.\r\n\r\n3\r\nPliez ensuite votre omelette à l\'aide d\'une spatule et faites-la dorer sur les deux faces. Servez bien chaud avec une salade verte bien assaisonnée.', '/images/rec/omelette.png');

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
(6, 3, 2, '2023-04-26'),
(10, 6, 4, '2023-05-01'),
(11, 2, 4, '2023-04-25'),
(15, 1, 3, '2023-04-25'),
(17, 6, 4, '2023-03-29'),
(19, 2, 2, '2023-03-31'),
(22, 1, 10, '2023-04-30'),
(23, 109, 3, '2023-04-28'),
(27, 110, 4, '2023-04-27'),
(30, 118, 6, '2023-04-29');

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
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `idIng` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT pour la table `recette`
--
ALTER TABLE `recette`
  MODIFY `idrecette` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT pour la table `repas`
--
ALTER TABLE `repas`
  MODIFY `idRepas` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `constituer`
--
ALTER TABLE `constituer`
  ADD CONSTRAINT `constituer_ibfk_1` FOREIGN KEY (`idRecette`) REFERENCES `recette` (`idrecette`),
  ADD CONSTRAINT `constituer_ibfk_2` FOREIGN KEY (`idRecette`) REFERENCES `recette` (`idrecette`);

--
-- Contraintes pour la table `repas`
--
ALTER TABLE `repas`
  ADD CONSTRAINT `REPAS_IBFK_1` FOREIGN KEY (`idrecette`) REFERENCES `recette` (`idrecette`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
