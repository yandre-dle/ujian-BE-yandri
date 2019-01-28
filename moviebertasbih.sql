-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.14 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for moviebertasbih
CREATE DATABASE IF NOT EXISTS `moviebertasbih` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `moviebertasbih`;

-- Dumping structure for table moviebertasbih.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table moviebertasbih.categories: ~0 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `nama`) VALUES
	(1, 'Action'),
	(2, 'Drama'),
	(3, 'Comedy'),
	(4, 'Horror'),
	(5, 'Thriller'),
	(7, 'Sci-Fi');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Dumping structure for table moviebertasbih.movcat
CREATE TABLE IF NOT EXISTS `movcat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idmovie` int(11) NOT NULL,
  `idcategory` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table moviebertasbih.movcat: ~0 rows (approximately)
/*!40000 ALTER TABLE `movcat` DISABLE KEYS */;
INSERT INTO `movcat` (`id`, `idmovie`, `idcategory`) VALUES
	(1, 1, 1),
	(4, 1, 2),
	(5, 2, 1),
	(6, 2, 3),
	(7, 2, 3),
	(8, 3, 5);
/*!40000 ALTER TABLE `movcat` ENABLE KEYS */;

-- Dumping structure for table moviebertasbih.movies
CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) NOT NULL DEFAULT '0',
  `tahun` int(11) NOT NULL DEFAULT '0',
  `description` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table moviebertasbih.movies: ~0 rows (approximately)
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` (`id`, `nama`, `tahun`, `description`) VALUES
	(1, 'Equalizer', 2012, 'Keren abis'),
	(2, 'Transformers', 2010, 'Boleh lah'),
	(3, 'The Joker', 2019, 'paling ditunggu banget'),
	(5, 'Dark Phoenix', 2019, 'Filmnya X-Men'),
	(7, 'Bumblebee', 2018, 'Seru juga');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
