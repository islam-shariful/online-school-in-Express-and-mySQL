-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2020 at 10:06 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sms`
--

-- --------------------------------------------------------

--
-- Table structure for table `access`
--

CREATE TABLE `access` (
  `type` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `assignment_id` int(20) NOT NULL,
  `filename` varchar(50) NOT NULL,
  `directory` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `duedate` varchar(50) NOT NULL,
  `class_id` int(20) NOT NULL,
  `section_id` int(20) NOT NULL,
  `subject_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assignment_id`, `filename`, `directory`, `date`, `duedate`, `class_id`, `section_id`, `subject_id`) VALUES
(8001, 'Bangla Assignment', 'class8_syllabus.pdf', '2020-07-09', '2020-08-12', 8, 1, 81),
(8002, 'English Assignment', 'Lab_EXam (1).pdf', '2020-08-12', '2020-08-12', 8, 1, 82);

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `class_id` int(20) NOT NULL,
  `classname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`class_id`, `classname`) VALUES
(8, 'Eight');

-- --------------------------------------------------------

--
-- Table structure for table `consult`
--

CREATE TABLE `consult` (
  `consult_id` int(20) NOT NULL,
  `teacher_id` int(20) NOT NULL,
  `consultday` date NOT NULL,
  `consultstarting` time NOT NULL,
  `consultending` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(10) NOT NULL,
  `title` varchar(30) NOT NULL,
  `starting` varchar(20) NOT NULL,
  `ending` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `title`, `starting`, `ending`) VALUES
(1, 'Christmas', '25 December', '25 December'),
(2, 'Craft Day', '06 January', '06 January'),
(3, 'School Picnic', '20 January', '30 January'),
(4, 'Multicultural Fair', '25 February', '29 February');

-- --------------------------------------------------------

--
-- Table structure for table `grade`
--

CREATE TABLE `grade` (
  `grade_id` int(20) NOT NULL,
  `student_id` varchar(20) NOT NULL,
  `subject_id` int(20) NOT NULL,
  `class_id` int(20) NOT NULL,
  `finalgrade` varchar(50) NOT NULL,
  `section_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grade`
--

INSERT INTO `grade` (`grade_id`, `student_id`, `subject_id`, `class_id`, `finalgrade`, `section_id`) VALUES
(8801, '20-8101-04', 83, 8, 'A+', 1),
(8802, '20-8101-04', 89, 8, 'A', 1);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(20) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `userpassword` varchar(100) NOT NULL,
  `usertype` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `user_id`, `userpassword`, `usertype`) VALUES
(1, '20-8101-04', 'Student-902', 'student'),
(3, '20-0000-01', 'Raiyan123@#', 'superadmin'),
(5, '20-8101-03', 'Teacher-902', 'teacher'),
(6, '20-8102-03', 'Teacher-902', 'teacher'),
(7, '20-8103-03', 'Teacher-902', 'teacher'),
(8, '20-8104-03', 'Teacher-902', 'teacher'),
(9, '20-8105-03', 'Teacher-902', 'teacher'),
(10, '20-8106-03', 'Teacher-902', 'teacher'),
(11, '20-8107-03', 'Teacher-902', 'teacher'),
(12, '20-8108-03', 'Teacher-902', 'teacher'),
(13, '20-8109-03', 'Teacher-902', 'teacher'),
(14, '20-8110-03', 'Teacher-902', 'teacher'),
(16, '20-0002-04', '5nb-q35', 'student'),
(17, '20-0001-02', '', 'schooladmin'),
(19, '20-0002-02', 'Schooladmin-902', 'schooladmin'),
(20, '20-0003-02', 'Schooladmin-92', 'schooladmin'),
(21, '20-0004-02', 'Raiyan123@#', 'schooladmin');

-- --------------------------------------------------------

--
-- Table structure for table `lostfound`
--

CREATE TABLE `lostfound` (
  `lostfound_id` int(20) NOT NULL,
  `lostname` varchar(50) NOT NULL,
  `lostdescription` varchar(50) NOT NULL,
  `lostday` date NOT NULL,
  `found` varchar(50) NOT NULL,
  `received` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lostfound`
--

INSERT INTO `lostfound` (`lostfound_id`, `lostname`, `lostdescription`, `lostday`, `found`, `received`) VALUES
(10, 'Pencil Box', 'Blue color box with two pencils', '2020-07-02', 'not', 'not');

-- --------------------------------------------------------

--
-- Table structure for table `note`
--

CREATE TABLE `note` (
  `note_id` int(20) NOT NULL,
  `filename` varchar(50) NOT NULL,
  `directory` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `subject_id` int(20) NOT NULL,
  `section_id` int(20) NOT NULL,
  `class_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `note`
--

INSERT INTO `note` (`note_id`, `filename`, `directory`, `date`, `subject_id`, `section_id`, `class_id`) VALUES
(801, 'Bangla', 'class8_syllabus.pdf', '2020-05-13', 81, 1, 8),
(802, 'English', '2dfe9cc400d3d74b6ca254230b9d71af.png', '2020-07-09', 82, 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `notice_id` int(20) NOT NULL,
  `noticedate` datetime NOT NULL,
  `class_id` int(20) NOT NULL,
  `subject_id` int(20) NOT NULL,
  `section_id` int(20) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notice`
--

INSERT INTO `notice` (`notice_id`, `noticedate`, `class_id`, `subject_id`, `section_id`, `description`) VALUES
(10, '2020-08-10 00:00:00', 8, 81, 1, 'Today\'s class cancel.'),
(10, '2020-08-11 00:00:00', 8, 86, 1, 'Class test in 20th August'),
(10, '2020-08-05 00:00:00', 8, 85, 1, 'Submit your assignment before 15th august');

-- --------------------------------------------------------

--
-- Table structure for table `noticeboard`
--

CREATE TABLE `noticeboard` (
  `id` int(11) NOT NULL,
  `nTitle` varchar(50) NOT NULL,
  `nDetails` varchar(10000) NOT NULL,
  `pBy` varchar(50) NOT NULL,
  `Date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `noticeboard`
--

INSERT INTO `noticeboard` (`id`, `nTitle`, `nDetails`, `pBy`, `Date`) VALUES
(12, 'Summer Vacation', 'School Will Remain Close Due to summer Holiday. From 11 January to 12 July.', 'Admin', '20/08/2020'),
(13, 'try', '', '20-0002-02', '');

-- --------------------------------------------------------

--
-- Table structure for table `parent`
--

CREATE TABLE `parent` (
  `id` int(11) NOT NULL,
  `parent_id` varchar(50) NOT NULL,
  `student_id` int(20) NOT NULL,
  `parentname` varchar(50) NOT NULL,
  `parentemail` varchar(50) NOT NULL,
  `parentphone` int(20) NOT NULL,
  `parentrelation` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `result_id` int(11) NOT NULL,
  `class_id` int(20) NOT NULL,
  `section_id` int(11) NOT NULL,
  `attendance` int(11) NOT NULL,
  `midmarks` int(11) NOT NULL,
  `finalmarks` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `subject_id` int(20) NOT NULL,
  `student_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`result_id`, `class_id`, `section_id`, `attendance`, `midmarks`, `finalmarks`, `total`, `subject_id`, `student_id`) VALUES
(8801, 8, 1, 30, 80, 80, 190, 83, '20-8101-04'),
(8802, 8, 1, 30, 60, 60, 150, 89, '20-8101-04');

-- --------------------------------------------------------

--
-- Table structure for table `routine`
--

CREATE TABLE `routine` (
  `routine_id` int(20) NOT NULL,
  `class_id` int(20) NOT NULL,
  `section_id` int(20) NOT NULL,
  `teacher_id` varchar(20) NOT NULL,
  `startingtime` time NOT NULL,
  `endingtime` time NOT NULL,
  `day` varchar(50) NOT NULL,
  `subject_id` int(20) NOT NULL,
  `teachername` varchar(50) NOT NULL,
  `sectionname` varchar(50) NOT NULL,
  `subjectname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `routine`
--

INSERT INTO `routine` (`routine_id`, `class_id`, `section_id`, `teacher_id`, `startingtime`, `endingtime`, `day`, `subject_id`, `teachername`, `sectionname`, `subjectname`) VALUES
(801, 8, 1, '20-8101-03', '09:00:00', '10:00:00', 'Sunday', 81, 'Mr. Teacher Bangla', 'A', 'Bangla'),
(802, 8, 1, '20-8102-03', '10:00:00', '11:00:00', 'Sunday', 82, 'Mr. Teacher English', 'A', 'English'),
(803, 8, 1, '20-8103-03', '11:00:00', '12:00:00', 'Sunday', 83, 'Mr. Teacher Math', 'A', 'Math'),
(804, 8, 1, '20-8104-03', '13:00:00', '14:00:00', 'Sunday', 84, 'Mr. Teacher Science', 'A', 'Science'),
(805, 8, 1, '20-8105-03', '09:00:00', '10:00:00', 'Saturday', 85, 'Mr. Teacher Sociology', 'A', 'Sociology'),
(806, 8, 1, '20-8106-03', '10:00:00', '11:00:00', 'Saturday', 86, 'Mr. Teacher Religion', 'A', 'Religion'),
(807, 8, 1, '20-8107-03', '11:00:00', '12:00:00', 'Saturday', 87, 'Mr. Teacher ICT', 'A', 'ICT'),
(808, 8, 1, '20-8108-03', '13:00:00', '14:00:00', 'Saturday', 88, 'Mr. Teacher World Knowledge', 'A', 'World Knowledge'),
(809, 8, 1, '20-8109-03', '09:00:00', '10:00:00', 'Monday', 89, 'Mr. Teacher Home Economics', 'A', 'Home Economics'),
(800, 8, 1, '20-8100-03', '10:00:00', '11:00:00', 'Monday', 80, 'Mr. Teacher Agriculture', 'A', 'Agriculture'),
(801, 8, 1, '20-8101-03', '11:00:00', '12:00:00', 'Monday', 81, 'Mr. Teacher Bangla', 'A', 'Bangla'),
(802, 8, 1, '20-8102-03', '13:00:00', '14:00:00', 'Monday', 82, 'Mr. Teacher English', 'A', 'English'),
(803, 8, 1, '20-8103-03', '09:00:00', '10:00:00', 'Tuesday', 83, 'Mr. Teacher Math', 'A', 'Math'),
(804, 8, 1, '20-8104-03', '10:00:00', '11:00:00', 'Tuesday', 84, 'Mr. Teacher Science', 'A', 'Science'),
(805, 8, 1, '20-8105-03', '11:00:00', '12:00:00', 'Tuesday', 85, 'Mr. Teacher Sociology', 'A', 'Sociology'),
(806, 8, 1, '20-8106-03', '13:00:00', '14:00:00', 'Tuesday', 86, 'Mr. Teacher Religion', 'A', 'Religion'),
(807, 8, 1, '20-8107-03', '09:00:00', '10:00:00', 'Wednessday', 87, 'Mr. Teacher ICT', 'A', 'ICT'),
(808, 8, 1, '20-8108-03', '10:00:00', '11:00:00', 'Wednessday', 88, 'Mr. Teacher World Knowledge', 'A', 'World Knowledge'),
(809, 8, 1, '20-8109-03', '11:00:00', '12:00:00', 'Wednessday', 89, 'Mr. Teacher Home Economics', 'A', 'Home Economics'),
(800, 8, 1, '20-8100-03', '13:00:00', '14:00:00', 'Wednessday', 80, 'Mr. Teacher Agriculture', 'A', 'Agriculture'),
(801, 8, 1, '20-8101-03', '09:00:00', '10:00:00', 'Thursday', 81, 'Mr. Teacher Bangla', 'A', 'Bangla'),
(802, 8, 1, '20-8102-03', '10:00:00', '11:00:00', 'Thursday', 82, 'Mr. Teacher English', 'A', 'English'),
(803, 8, 1, '20-8103-03', '11:00:00', '12:00:00', 'Thursday', 83, 'Mr. Teacher Math', 'A', 'Math'),
(804, 8, 1, '20-8104-03', '13:00:00', '14:00:00', 'Thursday', 84, 'Mr. Teacher Science', 'A', 'Science');

-- --------------------------------------------------------

--
-- Table structure for table `schooladmin`
--

CREATE TABLE `schooladmin` (
  `id` int(11) NOT NULL,
  `schooladmin_id` varchar(50) NOT NULL,
  `schooladminname` varchar(50) NOT NULL,
  `schooladminemail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schooladmin`
--

INSERT INTO `schooladmin` (`id`, `schooladmin_id`, `schooladminname`, `schooladminemail`) VALUES
(1, '20-0000-02', 'raiyanislammmm', 'raiyan@gmail.com'),
(2, '20-0001-02', 'Shihab Shahib', '123456@gmail.com'),
(4, '20-0002-02', 'yhvghbjn', 'jnfkjncjc@gmail.com'),
(5, '20-0003-02', 'uxdcfgvbhjn', 'student@example.com'),
(6, '20-0004-02', 'ofyghjm', 'student001@student.ac.bd');

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `section_id` int(20) NOT NULL,
  `class_id` int(20) NOT NULL,
  `sectionname` varchar(50) NOT NULL,
  `classteacher` varchar(50) NOT NULL,
  `subject_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`section_id`, `class_id`, `sectionname`, `classteacher`, `subject_id`) VALUES
(801, 8, 'A', 'Mr. Teacher Bangla', 1),
(802, 8, 'B', 'Mr. Teacher English', 2);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `staff_id` varchar(50) NOT NULL,
  `staffname` varchar(50) NOT NULL,
  `staffphone` int(20) NOT NULL,
  `stafffathername` varchar(50) NOT NULL,
  `staffmothername` varchar(50) NOT NULL,
  `staffaddress` varchar(250) NOT NULL,
  `staffdob` varchar(50) NOT NULL,
  `staffphoto` varchar(50) NOT NULL,
  `staffgender` varchar(50) NOT NULL,
  `staffreligion` varchar(50) NOT NULL,
  `staffjoiningdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(20) NOT NULL,
  `student_id` varchar(50) NOT NULL,
  `class_id` int(20) NOT NULL,
  `section_id` int(20) NOT NULL,
  `studentname` varchar(50) NOT NULL,
  `studentemail` varchar(50) NOT NULL,
  `studentaddress` varchar(250) NOT NULL,
  `studentimage` varchar(50) NOT NULL,
  `studentbloodgroup` varchar(50) NOT NULL,
  `studentfathername` varchar(50) NOT NULL,
  `studentmothername` varchar(50) NOT NULL,
  `guardiannumber` int(20) NOT NULL,
  `admissionclass` varchar(50) NOT NULL,
  `studentdob` varchar(50) NOT NULL,
  `studentgender` varchar(10) NOT NULL,
  `studentreligion` varchar(50) NOT NULL,
  `admissiondate` date NOT NULL,
  `disorder` varchar(50) NOT NULL,
  `allergic` varchar(50) NOT NULL,
  `heartproblem` varchar(50) NOT NULL,
  `otherdisease` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `student_id`, `class_id`, `section_id`, `studentname`, `studentemail`, `studentaddress`, `studentimage`, `studentbloodgroup`, `studentfathername`, `studentmothername`, `guardiannumber`, `admissionclass`, `studentdob`, `studentgender`, `studentreligion`, `admissiondate`, `disorder`, `allergic`, `heartproblem`, `otherdisease`) VALUES
(1, '20-8101-04', 8, 1, 'student', 'student001@student.ac.bd', '58/2 A, Mirpur,Dhaka', 'student.jpg', 'B+', 'Mr. Rahman', 'Mrs. Rahman', 801935245, 'One', '5/08/2004', 'Male', 'Muslim', '2012-01-01', 'No', 'No', 'No', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `studentt`
--

CREATE TABLE `studentt` (
  `id` int(20) NOT NULL,
  `sName` varchar(50) NOT NULL,
  `sid` varchar(20) NOT NULL,
  `fName` varchar(50) NOT NULL,
  `mName` varchar(50) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `dob` varchar(50) NOT NULL,
  `admissionDate` varchar(50) NOT NULL,
  `bGroup` varchar(20) NOT NULL,
  `religion` varchar(50) NOT NULL,
  `eMail` varchar(50) NOT NULL,
  `admissionClass` varchar(50) NOT NULL,
  `section` varchar(50) NOT NULL,
  `gPN` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `myImage` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentt`
--

INSERT INTO `studentt` (`id`, `sName`, `sid`, `fName`, `mName`, `gender`, `dob`, `admissionDate`, `bGroup`, `religion`, `eMail`, `admissionClass`, `section`, `gPN`, `address`, `myImage`) VALUES
(7, 'MD. ASiF B. ABEDIN', '20-0001-04', 'MD. JAINAL ABEDIN', 'KHODEZA BEGUM', 'Male', '22/10/1995', '14/08/2020', 'A+', 'Islam', 'WWW.ABA333@YMAIL.COM', '3', 'Neptune', '01964614266', 'BASHUNDHARA R/A, DHAKA-1200.', ''),
(45, 'Student 02', '20-0002-04', 'Mr khan', 'Mrs khan', 'Male', '13/11/2005', '18/08/2020', 'A+', 'Islam', 'student@gmail.com', '9', 'Jupiter', '78945612352', 'gjcvhbkxfcgv', 'teacher.png');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subject_id` int(20) NOT NULL,
  `subjectname` varchar(50) NOT NULL,
  `class_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `subjectname`, `class_id`) VALUES
(81, 'Bangla', 8),
(82, 'English', 8),
(83, 'Math', 8),
(84, 'Science', 8),
(85, 'Sociology', 8),
(86, 'Religion', 8),
(87, 'ICT', 8),
(88, 'World Knowledge', 8),
(89, 'Home Economics', 8),
(80, 'Agriculture', 8);

-- --------------------------------------------------------

--
-- Table structure for table `subjectt`
--

CREATE TABLE `subjectt` (
  `id` int(11) NOT NULL,
  `sName` varchar(50) NOT NULL,
  `sCode` varchar(50) NOT NULL,
  `sType` varchar(50) NOT NULL,
  `sClass` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjectt`
--

INSERT INTO `subjectt` (`id`, `sName`, `sCode`, `sType`, `sClass`) VALUES
(1, 'fgsdg', 'sgsdgs', 'Theory', 'Play'),
(3, 'fgsdgf', '4336h', 'Theory', 'Play'),
(4, 'wertyui', '3456', 'Lab', 'Nursery'),
(5, 't', '4336h', 'Theory', '1'),
(8, 'jklko;lk', 'dfhdfhd', 'Lab', '1'),
(9, 'eeee', 'eeeee', 'Lab', '1'),
(11, 'try', '', '', '0'),
(12, 'physics', '98765', 'Theory', '5');

-- --------------------------------------------------------

--
-- Table structure for table `superadmin`
--

CREATE TABLE `superadmin` (
  `id` int(11) NOT NULL,
  `superadmin_id` varchar(50) NOT NULL,
  `superadminname` varchar(50) NOT NULL,
  `superadminemail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `superadmin`
--

INSERT INTO `superadmin` (`id`, `superadmin_id`, `superadminname`, `superadminemail`) VALUES
(1, '20-0000-01', 'raiyanislam', 'raiyan@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `syllabus`
--

CREATE TABLE `syllabus` (
  `syllabus_id` int(20) NOT NULL,
  `title` varchar(50) NOT NULL,
  `directory` varchar(100) NOT NULL,
  `subject_id` int(20) NOT NULL,
  `section_id` int(20) NOT NULL,
  `class_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `syllabus`
--

INSERT INTO `syllabus` (`syllabus_id`, `title`, `directory`, `subject_id`, `section_id`, `class_id`) VALUES
(801, 'Bangla Syllabus', 'class8_syllabus.pdf', 81, 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `teacher_id` varchar(50) NOT NULL,
  `teachername` varchar(50) NOT NULL,
  `teacheremail` varchar(50) NOT NULL,
  `teacherdesignation` varchar(50) NOT NULL,
  `teacherdepartment` varchar(50) NOT NULL,
  `teacheraddress` varchar(50) NOT NULL,
  `teacherdob` varchar(50) NOT NULL,
  `teachergender` varchar(10) NOT NULL,
  `teacherreligion` varchar(50) NOT NULL,
  `teacherjoiningdate` date NOT NULL,
  `teacherfathername` varchar(50) NOT NULL,
  `teachermothername` varchar(50) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `teacher_id`, `teachername`, `teacheremail`, `teacherdesignation`, `teacherdepartment`, `teacheraddress`, `teacherdob`, `teachergender`, `teacherreligion`, `teacherjoiningdate`, `teacherfathername`, `teachermothername`, `subject_id`) VALUES
(1, '20-8101-03', 'Mr. Teacher Bangla', 'teacherB@gmail.com', 'Lecturer', 'Bangla', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Male', 'Muslim', '2010-01-01', 'Mr. Khan', 'Mrs. Khan', 81),
(2, '20-8102-03', 'Teacher English', 'teacherE@gmail.com', 'Lecturer', 'English', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Female', 'Muslim', '2010-01-01', 'Mr. Rahman', 'Mrs. Rahman', 82),
(3, '20-8103-03', 'Mr. Teacher Math', 'teacherM@gmail.com', 'Lecturer', 'Math', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Male', 'Muslim', '2010-01-01', 'Mr. Alam', 'Mrs. Alam', 83),
(4, '20-8104-03', 'Mr. Teacher Science', 'teacherS@gmail.com', 'Lecturer', 'Science', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Male', 'Muslim', '2010-01-01', 'Mr. Chowdhury', 'Mrs. Chowdhury', 84),
(5, '20-8105-03', 'Teacher Sociology', 'teacherSS@gmail.com', 'Lecturer', 'Sociology', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Female', 'Muslim', '2010-01-01', 'Mr. Haque', 'Mrs. Haque', 85),
(6, '20-8106-03', 'Mr. Teacher Religion', 'teacherR@gmail.com', 'Lecturer', 'Religion', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Male', 'Muslim', '2010-01-01', 'Mr. Kabir', 'Mrs. Kabir', 86),
(7, '20-8107-03', 'Mr. Teacher ICT', 'teacherICT@gmail.com', 'Lecturer', 'ICT', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Male', 'Muslim', '2010-01-01', 'Mr. Islam', 'Mrs. Islam', 87),
(8, '20-8108-03', 'Mr. Teacher World Knowledge', 'teacherWK@gmail.com', 'Lecturer', 'World Knowledge', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Male', 'Muslim', '2010-01-01', 'Mr. Khan', 'Mrs. Khan', 88),
(9, '20-8109-03', 'Teacher Home Economics', 'teacherHE@gmail.com', 'Lecturer', 'Home Economics', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Female', 'Muslim', '2010-01-01', 'Mr. Rahman', 'Mrs. Rahman', 89),
(10, '20-8100-03', 'Mr. Teacher Agriculture', 'teacherA@gmail.com', 'Lecturer', 'Agriculture', '98/2,Dhanmondi. 32 Dhaka-1209', '5/2/1986', 'Male', 'Muslim', '2010-01-01', 'Mr. Alam', 'Mrs. Alam', 80);

-- --------------------------------------------------------

--
-- Table structure for table `teacherr`
--

CREATE TABLE `teacherr` (
  `id` int(11) NOT NULL,
  `tid` varchar(50) NOT NULL,
  `tName` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `dob` varchar(50) NOT NULL,
  `department` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacherr`
--

INSERT INTO `teacherr` (`id`, `tid`, `tName`, `gender`, `dob`, `department`, `email`, `phone`, `address`) VALUES
(3, '20-0004-03', 'ASIF', 'Male', '22/10/1995', 'CSE', 'www.aba333@ymail.com', '+893472592352', 'sdfgskdllnbldsmlsdgsgds'),
(8, '20-0005-03', 'Teacher A', 'Female', '13/11/1990', 'Math', 'teacherrrr@gmail.com', '98756412369', 'jdnedjkfnhsdrgjvnlsndvfgbh');

-- --------------------------------------------------------

--
-- Table structure for table `upload`
--

CREATE TABLE `upload` (
  `upload_id` int(20) NOT NULL,
  `assignment_id` int(20) NOT NULL,
  `uploadfilename` varchar(50) NOT NULL,
  `uploaddate` varchar(50) NOT NULL,
  `student_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `upload`
--

INSERT INTO `upload` (`upload_id`, `assignment_id`, `uploadfilename`, `uploaddate`, `student_id`) VALUES
(1, 8002, '2dfe9cc400d3d74b6ca254230b9d71af.png', '2020-08-18 20:48:45', 20),
(2, 8001, '1783da03d8e21ca6ebc26b42a7450f4c.jpg', '2020-08-19 02:02:09', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `noticeboard`
--
ALTER TABLE `noticeboard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parent`
--
ALTER TABLE `parent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schooladmin`
--
ALTER TABLE `schooladmin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentt`
--
ALTER TABLE `studentt`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjectt`
--
ALTER TABLE `subjectt`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `superadmin`
--
ALTER TABLE `superadmin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacherr`
--
ALTER TABLE `teacherr`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upload`
--
ALTER TABLE `upload`
  ADD PRIMARY KEY (`upload_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `noticeboard`
--
ALTER TABLE `noticeboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `parent`
--
ALTER TABLE `parent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schooladmin`
--
ALTER TABLE `schooladmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `studentt`
--
ALTER TABLE `studentt`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `subjectt`
--
ALTER TABLE `subjectt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `superadmin`
--
ALTER TABLE `superadmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `teacherr`
--
ALTER TABLE `teacherr`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `upload`
--
ALTER TABLE `upload`
  MODIFY `upload_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
