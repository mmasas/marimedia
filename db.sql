
-- Host: localhost
-- Generation Time: Jan 26, 2014 at 08:55 PM
-- Server version: 5.5.29
-- PHP Version: 5.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `marimedia`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks_tb`
--

CREATE TABLE `tasks_tb` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `date` datetime NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tasks_tb`
--

INSERT INTO `tasks_tb` (`id`, `title`, `description`, `date`) VALUES
(1, 'text text text', 'text text text text. text', '2014-01-02 00:00:00'),
(2, 'title2', 'description2', '2014-01-03 00:00:00');
