-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2024 at 05:51 PM
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
-- Database: `realestate`
--

-- --------------------------------------------------------

--
-- Table structure for table `agents`
--

CREATE TABLE `agents` (
  `AgentID` int(11) NOT NULL,
  `FirstName` varchar(250) NOT NULL,
  `LastName` varchar(250) NOT NULL,
  `Phone` varchar(200) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `LicenseNumber` varchar(250) NOT NULL,
  `AgentImage` longtext DEFAULT NULL,
  `Likes` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `agents`
--

INSERT INTO `agents` (`AgentID`, `FirstName`, `LastName`, `Phone`, `Email`, `LicenseNumber`, `AgentImage`, `Likes`) VALUES
(1, 'Danni', 'Korda', '106-899-6468', 'dkorda0@paginegialle.it', 'JTHHP5BC4F5423595', './css/img/agent1.jpg', 'YToxOntpOjA7czo1OiJhZG1pbiI7fQ=='),
(2, 'Cindee', 'Raubenheim', '357-890-8700', 'craubenheim1@businessinsider.com', 'WDCYC3HF5AX942987', './css/img/agent5.jpg', 'YToxOntpOjA7czo1OiJhZG1pbiI7fQ=='),
(3, 'Krystle', 'Dobbson', '679-759-2700', 'kdobbson2@sakura.ne.jp', '4T1BF1FK1EU445381', './css/img/agent6.jpg', 'YToxOntpOjA7czo1OiJhZG1pbiI7fQ=='),
(4, 'Eduino', 'Kuna', '502-322-2461', 'ekuna3@usatoday.com', '1C3CDFAA0DD812249', './css/img/agent2.jpg', 'YToxOntpOjA7czo1OiJhZG1pbiI7fQ=='),
(5, 'Nealson', 'Morville', '784-710-1930', 'nmorville4@netvibes.com', 'JM3ER2W36A0183549', './css/img/agent3.jpg', 'YToxOntpOjA7czo1OiJhZG1pbiI7fQ=='),
(6, 'Charlena', 'Castelyn', '612-226-8086', 'ccastelyn5@blogtalkradio.com', 'JN8AF5MR6DT841211', './css/img/agent4.jpg', 'YToxOntpOjA7czo1OiJhZG1pbiI7fQ==');

-- --------------------------------------------------------

--
-- Table structure for table `propertylisting`
--

CREATE TABLE `propertylisting` (
  `PropertyID` int(11) NOT NULL,
  `Address` varchar(250) NOT NULL,
  `City` varchar(250) NOT NULL,
  `State` varchar(250) NOT NULL,
  `PostCode` int(11) NOT NULL,
  `ListingPrice` decimal(8,2) NOT NULL,
  `ListingDate` date NOT NULL,
  `SquareFootage` int(11) NOT NULL,
  `Bedrooms` int(11) NOT NULL,
  `Bathrooms` int(11) NOT NULL,
  `Garages` int(11) NOT NULL,
  `Status` enum('Available','Under Contract') NOT NULL,
  `Image` varchar(200) DEFAULT NULL,
  `AgentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `propertylisting`
--

INSERT INTO `propertylisting` (`PropertyID`, `Address`, `City`, `State`, `PostCode`, `ListingPrice`, `ListingDate`, `SquareFootage`, `Bedrooms`, `Bathrooms`, `Garages`, `Status`, `Image`, `AgentID`) VALUES
(1, '31 Ludington Center', 'San Diego', 'California', 92170, 202016.58, '2022-01-05', 3707, 6, 4, 3, 'Under Contract', './css/img/house1.jpg', 1),
(2, '25504 Carey Park', 'Chicago', 'Illinois', 60641, 746717.32, '2021-01-13', 4393, 5, 1, 3, 'Available', './css/img/house2.jpg', 2),
(3, '73158 Sullivan Place', 'West Palm Beach', 'Florida', 33421, 946183.50, '2020-09-21', 4767, 5, 3, 1, 'Available', './css/img/house3.jpg', 3),
(4, '05882 Delaware Trail', 'Pensacola', 'Florida', 32511, 651201.70, '2021-02-25', 1946, 6, 1, 3, 'Under Contract', './css/img/house4.jpg', 4),
(5, '6731 Judy Place', 'Des Moines', 'Iowa', 50362, 533975.14, '2022-10-11', 2348, 5, 2, 2, 'Under Contract', './css/img/house5.jpg', 5),
(6, '5402 Waywood Parkway', 'Long Beach', 'California', 90805, 845093.89, '2020-01-19', 3316, 1, 3, 3, 'Available', './css/img/house6.jpg', 6),
(7, '016 New Castle Hill', 'Houston', 'Texas', 77281, 928355.97, '2022-02-22', 649, 3, 3, 3, 'Under Contract', './css/img/house7.jpg', 1),
(8, '133 Twin Pines Drive', 'Missoula', 'Montana', 59806, 374766.32, '2022-08-01', 4106, 4, 4, 2, 'Under Contract', './css/img/house8.jpg', 2),
(9, '4 Kings Drive', 'Baton Rouge', 'Louisiana', 70826, 652753.63, '2021-06-01', 2957, 6, 4, 1, 'Under Contract', './css/img/house9.jpg', 3),
(10, '8954 Graceland Point', 'Charlottesville', 'Virginia', 22903, 191105.48, '2022-02-19', 1949, 5, 3, 1, 'Under Contract', './css/img/house10.jpg', 4),
(11, '93 Northport Street', 'Fairfax', 'Virginia', 22036, 784752.61, '2021-03-09', 3630, 5, 1, 2, 'Available', './css/img/house11.jpg', 5),
(12, '82 Eagle Crest Terrace', 'Amarillo', 'Texas', 79116, 777667.09, '2022-07-14', 938, 6, 3, 3, 'Available', './css/img/house12.jpg', 6),
(13, '973 Elka Center', 'New York City', 'New York', 10014, 634847.06, '2023-03-25', 2253, 4, 3, 2, 'Under Contract', './css/img/house13.jpg', 1),
(14, '77 Chinook Place', 'Los Angeles', 'California', 90010, 738661.01, '2022-09-08', 1271, 6, 1, 2, 'Available', './css/img/house14.jpg', 2),
(15, '07 Veith Way', 'Baton Rouge', 'Louisiana', 70894, 654648.43, '2024-06-20', 649, 5, 3, 2, 'Available', './css/img/house15.jpg', 3),
(16, '879 Mccormick Drive', 'Buffalo', 'New York', 14233, 515073.76, '2020-12-08', 4812, 1, 2, 2, 'Under Contract', './css/img/house16.jpg', 4),
(17, '1493 Vermont Park', 'Lexington', 'Kentucky', 40510, 964384.94, '2023-03-23', 3269, 5, 1, 3, 'Available', './css/img/house17.jpg', 5),
(18, '06698 Gerald Hill', 'Fort Collins', 'Colorado', 80525, 949341.64, '2022-09-23', 1947, 4, 1, 1, 'Available', './css/img/house18.jpg', 6),
(19, '8 Pine View Center', 'Springfield', 'Massachusetts', 1105, 736252.45, '2021-03-11', 4476, 2, 4, 1, 'Under Contract', './css/img/house19.jpg', 1),
(20, '3040 Cardinal Place', 'Lincoln', 'Nebraska', 68517, 123765.88, '2022-08-15', 3640, 4, 4, 1, 'Under Contract', './css/img/house20.jpg', 2),
(21, '10821 Farragut Place', 'Bethesda', 'Maryland', 20892, 483279.72, '2024-01-02', 2615, 6, 1, 2, 'Available', './css/img/house21.jpg', 3),
(22, '917 Ramsey Center', 'Los Angeles', 'California', 90040, 124318.95, '2021-03-22', 3394, 3, 1, 3, 'Under Contract', './css/img/house22.jpg', 4),
(23, '87936 Vidon Street', 'Milwaukee', 'Wisconsin', 53220, 416980.20, '2022-09-24', 2245, 5, 3, 2, 'Under Contract', './css/img/house23.jpg', 5),
(24, '15 Banding Way', 'Springfield', 'Illinois', 62705, 832443.72, '2024-07-19', 3338, 6, 2, 1, 'Available', './css/img/house24.jpg', 6),
(25, '3997 Boyd Point', 'Raleigh', 'North Carolina', 27658, 403874.96, '2024-04-24', 1702, 3, 4, 3, 'Available', './css/img/house25.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(250) NOT NULL,
  `Password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `UserName`, `Password`) VALUES
(1, 'admin', 'vue123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`AgentID`);

--
-- Indexes for table `propertylisting`
--
ALTER TABLE `propertylisting`
  ADD PRIMARY KEY (`PropertyID`),
  ADD KEY `AgentID_Foreign` (`AgentID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agents`
--
ALTER TABLE `agents`
  MODIFY `AgentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `propertylisting`
--
ALTER TABLE `propertylisting`
  MODIFY `PropertyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `propertylisting`
--
ALTER TABLE `propertylisting`
  ADD CONSTRAINT `AgentID_Foreign` FOREIGN KEY (`AgentID`) REFERENCES `agents` (`AgentID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
