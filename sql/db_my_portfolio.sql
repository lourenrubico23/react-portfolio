-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2024 at 08:08 AM
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
-- Table structure for table `aboutbanner`
--

CREATE TABLE `aboutbanner` (
  `aboutBanner_aid` int(11) NOT NULL,
  `aboutBanner_title` varchar(100) NOT NULL,
  `aboutBanner_category` varchar(100) NOT NULL,
  `aboutBanner_image` varchar(100) NOT NULL,
  `aboutBanner_publish_date` varchar(20) NOT NULL,
  `aboutBanner_description` text NOT NULL,
  `aboutBanner_is_active` tinyint(1) NOT NULL,
  `aboutBanner_created` varchar(20) NOT NULL,
  `aboutBanner_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aboutbanner`
--

INSERT INTO `aboutbanner` (`aboutBanner_aid`, `aboutBanner_title`, `aboutBanner_category`, `aboutBanner_image`, `aboutBanner_publish_date`, `aboutBanner_description`, `aboutBanner_is_active`, `aboutBanner_created`, `aboutBanner_datetime`) VALUES
(1, 'I am Louren Isobel Rubico', 'about banner', 'picabout.svg', '5/20/2024', 'A Filipino web designer and front-end developer based in the Philippines, I bring a unique blend of cultural insight, creativity, and technical expertise to every project I undertake. With a deep understanding of both local and global design trends, I strive to create visually stunning and user-friendly websites that resonate with diverse audiences.', 1, '2024-05-20 07:28:51', '2024-05-20 07:28:51');

-- --------------------------------------------------------

--
-- Table structure for table `aboutme`
--

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
(5, 'education', '2013', '2017', 'Junior High school', 'STI College San Pablo', 0, '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `homebanner`
--

CREATE TABLE `homebanner` (
  `homeBanner_aid` int(11) NOT NULL,
  `homeBanner_title` varchar(50) NOT NULL,
  `homeBanner_category` varchar(50) NOT NULL,
  `homeBanner_image` varchar(100) NOT NULL,
  `homeBanner_publish_date` varchar(20) NOT NULL,
  `homeBanner_description` text NOT NULL,
  `homeBanner_is_active` tinyint(1) NOT NULL,
  `homeBanner_created` varchar(20) NOT NULL,
  `homeBanner_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `homebanner`
--

INSERT INTO `homebanner` (`homeBanner_aid`, `homeBanner_title`, `homeBanner_category`, `homeBanner_image`, `homeBanner_publish_date`, `homeBanner_description`, `homeBanner_is_active`, `homeBanner_created`, `homeBanner_datetime`) VALUES
(1, 'pic 1', 'home banner', 'pichome.svg', 'asdas', 'I specialize in creating clean and user-friendly experiences as a web developer and front-end developer from the Philippines.\nMy life\\\'s work is creating high-quality software that makes a positive impact on the people around me.', 1, '2024-05-15 10:13:27', '2024-05-15 10:14:43');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `message_aid` int(11) NOT NULL,
  `message_name` varchar(100) NOT NULL,
  `message_email` varchar(100) NOT NULL,
  `message_subject` varchar(100) NOT NULL,
  `message_note` text NOT NULL,
  `message_publish_date` varchar(20) NOT NULL,
  `message_is_active` tinyint(1) NOT NULL,
  `message_created` varchar(50) NOT NULL,
  `message_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`message_aid`, `message_name`, `message_email`, `message_subject`, `message_note`, `message_publish_date`, `message_is_active`, `message_created`, `message_datetime`) VALUES
(1, 'isobel', 'asasas@sads', 'dsadsad', 'dsadasdas', 'asdasd', 1, '', '2024-05-14 14:12:30'),
(2, 'louren', 'lourens@sads', 'dsadsad', 'dsadasdas', 'asdasd', 1, '2024-05-14 14:18:09', '2024-05-14 14:18:09');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `projects_aid` int(11) NOT NULL,
  `projects_title` varchar(100) NOT NULL,
  `projects_description` text NOT NULL,
  `projects_image` varchar(100) NOT NULL,
  `projects_category` varchar(50) NOT NULL,
  `projects_is_active` tinyint(1) NOT NULL,
  `projects_created` varchar(50) NOT NULL,
  `projects_datetime` varchar(20) NOT NULL,
  `projects_publish_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`projects_aid`, `projects_title`, `projects_description`, `projects_image`, `projects_category`, `projects_is_active`, `projects_created`, `projects_datetime`, `projects_publish_date`) VALUES
(3, 'Shoes ni Sabel', 'An e-commerce platform dedicated to showcasing the Filipino pride in shoe craftsmanship and design, this website celebrates the rich heritage and tradition of shoe making in the Philippines. Through a curated collection of footwear, customers are invited to explore and purchase shoes that embody the unique craftsmanship and cultural identity of Filipino shoemakers.', 'card1.png', 'Web Design', 1, '', '2024-05-15 08:53:49', 'sasas'),
(4, 'Shoes ni Sabel', 'An e-commerce platform dedicated to showcasing the Filipino pride in shoe craftsmanship and design, this website celebrates the rich heritage and tradition of shoe making in the Philippines. Through a curated collection of footwear, customers are invited to explore and purchase shoes that embody the unique craftsmanship and cultural identity of Filipino shoemakers.', 'card2.png', 'Web Design', 1, '', '2024-05-15 08:54:17', 'asasa'),
(5, 'Shoes ni Sabel', 'An e-commerce platform dedicated to showcasing the Filipino pride in shoe craftsmanship and design, this website celebrates the rich heritage and tradition of shoe making in the Philippines. Through a curated collection of footwear, customers are invited to explore and purchase shoes that embody the unique craftsmanship and cultural identity of Filipino shoemakers.', 'card3.png', 'Web Design', 1, '', '2024-05-15 08:54:26', 'aSDAD');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `skills_aid` int(11) NOT NULL,
  `skills_title` varchar(50) NOT NULL,
  `skills_category` varchar(50) NOT NULL,
  `skills_image` varchar(50) NOT NULL,
  `skills_publish_date` varchar(20) NOT NULL,
  `skills_description` text NOT NULL,
  `skills_is_active` tinyint(1) NOT NULL,
  `skills_created` varchar(20) NOT NULL,
  `skills_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`skills_aid`, `skills_title`, `skills_category`, `skills_image`, `skills_publish_date`, `skills_description`, `skills_is_active`, `skills_created`, `skills_datetime`) VALUES
(2, 'css', 'language', 'css.png', 'asd', 'aaaaaaaaaa', 1, '2024-05-14 08:13:59', '2024-05-15 08:35:16'),
(3, 'html', 'web', 'html.png', 'sfsfsfs', 'sfssfsfs', 1, '2024-05-14 08:33:42', '2024-05-15 08:35:40'),
(6, 'java', 'language', 'java.png', 'asdasda', 'sdsadasda', 1, '2024-05-15 08:32:35', '2024-05-15 08:32:35'),
(7, 'react js', 'web', 'react.png', 'sdsd', 'sadsdsd', 1, '2024-05-15 08:36:20', '2024-05-15 08:36:20'),
(8, 'figma', 'designing', 'figma.png', 'asas', 'sasasas', 1, '2024-05-15 08:37:11', '2024-05-15 08:37:11');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_aid` int(11) NOT NULL,
  `user_is_active` tinyint(1) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_key` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_created` varchar(20) NOT NULL,
  `user_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutbanner`
--
ALTER TABLE `aboutbanner`
  ADD PRIMARY KEY (`aboutBanner_aid`);

--
-- Indexes for table `aboutme`
--
ALTER TABLE `aboutme`
  ADD PRIMARY KEY (`aboutme_aid`);

--
-- Indexes for table `homebanner`
--
ALTER TABLE `homebanner`
  ADD PRIMARY KEY (`homeBanner_aid`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_aid`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`projects_aid`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`skills_aid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutbanner`
--
ALTER TABLE `aboutbanner`
  MODIFY `aboutBanner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `aboutme`
--
ALTER TABLE `aboutme`
  MODIFY `aboutme_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `homebanner`
--
ALTER TABLE `homebanner`
  MODIFY `homeBanner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `projects_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `skills_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
