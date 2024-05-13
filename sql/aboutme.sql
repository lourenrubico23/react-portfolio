-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2024 at 09:31 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_my_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `aboutme`
--

DROP TABLE IF EXISTS `aboutme`;
CREATE TABLE `aboutme` (
  `aboutme_aid` int(11) NOT NULL,
  `aboutme_description` text NOT NULL,
  `aboutme_startYear` varchar(20) NOT NULL,
  `aboutme_endYear` varchar(20) NOT NULL,
  `aboutme_course` varchar(50) NOT NULL,
  `aboutme_school` varchar(100) NOT NULL,
  `aboutme_is_active` tinyint(1) NOT NULL,
  `aboutme_created` varchar(50) NOT NULL,
  `aboutme_datetime` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aboutme`
--

INSERT INTO `aboutme` (`aboutme_aid`, `aboutme_description`, `aboutme_startYear`, `aboutme_endYear`, `aboutme_course`, `aboutme_school`, `aboutme_is_active`, `aboutme_created`, `aboutme_datetime`) VALUES
(3, '2019', '2019', 'Present', 'BS Information Technology', 'STI College San Pablo', 0, '', 0),
(4, 'education', '2017', '2019', 'Science, Technology, Engineering & Mathematics (ST', 'STI College San Pablo', 0, '', 0),
(5, 'education', '2013', '2017', 'Junior High school', 'STI College San Pablo', 0, '', 0),
(8, 'sadas', '2023', '1', 'asdsad', 'olsa', 0, '', 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutme`
--
ALTER TABLE `aboutme`
  ADD PRIMARY KEY (`aboutme_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutme`
--
ALTER TABLE `aboutme`
  MODIFY `aboutme_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
