-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 03, 2020 at 05:58 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u979190364_online_stories`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(128) NOT NULL,
  `category_image` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `category_image`) VALUES
(1, 'Funny', 'http://stories.codematrix.xyz///userfiles/young.png'),
(2, 'Love', 'http://stories.codematrix.xyz///userfiles/heart.png'),
(3, 'Fairy Tails', 'http://stories.codematrix.xyz///userfiles/party.png'),
(4, 'Mythology', 'http://stories.codematrix.xyz///userfiles/united-states.png'),
(5, 'Comedy', 'http://stories.codematrix.xyz///userfiles/protest.png');

-- --------------------------------------------------------

--
-- Table structure for table `stories`
--

CREATE TABLE `stories` (
  `id` int(11) NOT NULL,
  `story_title` varchar(128) NOT NULL,
  `story_image` longtext NOT NULL,
  `category` varchar(128) NOT NULL,
  `story_date` date NOT NULL,
  `story_content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stories`
--

INSERT INTO `stories` (`id`, `story_title`, `story_image`, `category`, `story_date`, `story_content`) VALUES
(1, 'The Little Gingerbread Man', 'http://stories.codematrix.xyz///userfiles/party.png', '3', '2020-07-03', '<p>Once upon a time there was an old woman who loved baking gingerbread. She would bake gingerbread cookies, cakes, houses and gingerbread people, all decorated with chocolate and peppermint, caramel candies and colored frosting.</p>\r\n\r\n<p>She lived with her husband on a farm at the edge of town. The sweet spicy smell of gingerbread brought children skipping and running to see what would be offered that day.</p>\r\n\r\n<p>Unfortunately the children gobbled up the treats so fast that the old woman had a hard time keeping her supply of flour and spices to continue making the batches of gingerbread. Sometimes she suspected little hands of having reached through her kitchen window because gingerbread pieces and cookies would disappear. One time a whole gingerbread house vanished mysteriously. She told her husband, &quot;Those naughty children are at it again. They don&#39;t understand all they have to do is knock on the door and I&#39;ll give them my gingerbread treats.&quot;</p>\r\n\r\n<p>One day she made a special batch of gingerbread men because they were extra big. Unfortunately for the last gingerbread man she ran out of batter and he was half the size of the others.</p>\r\n\r\n<p>She decorated the gingerbread men with care, each having socks, shirt and pants of different colors. When it came to the little gingerbread man she felt sorry for him and gave him more color than the others. &quot;It doesn&#39;t matter he&#39;s small,&quot; she thought, &quot;He&#39;ll still be tasty.&quot;</p>\r\n'),
(2, 'Wolstencroft the bear', 'http://www.magickeys.com/books/wolstencroft/tag_pct33.jpg', '1', '2020-07-03', '<p>Not long ago and not far away there was a beautiful, big teddy bear who sat on a shelf in a drug store waiting for someone to buy him and give him a home. His name was Wolstencroft. And he was no ordinary bear.</p>\r\n\r\n<p>His fur was a lovely shade of light grey, and he had honey colored ears, nose and feet. His eyes were warm and kind and he had a wonderfully wise look on his face.</p>\r\n\r\n<p>Wolstencroft looked very smart in a brown plaid waistcoat with a gold satin bow tie at his neck.</p>\r\n\r\n<p>Attached to the tie was a tag with his name written in bold, black letters:&nbsp;<strong>Wolstencroft</strong>.</p>\r\n\r\n<p>He had arrived in the store just before Christmas when there had been a lovely big tree in the window, all decorated with fairy lights. Yards and yards of sparkling tinsel had been draped over everything, and holiday music had been playing all the time. Wolstencroft was especially fond of Jingle Bells. He liked its light, tinkling sounds. It always made him feel merry.</p>\r\n\r\n<p>At that time there had been lots of other bears to keep him company. In fact, there had been so many teddy bears crowded onto that one narrow shelf that he had scarcely had room to move.</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;But, one by one they had all gone. Gleefully waving goodbye as they were carried off to their new homes. Until finally, he was the only teddy bear left in the entire store.</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He had hoped that Santa Claus would drop by on Christmas Eve and deliver him to a good home. But he hadn&#39;t. Santa had been too busy that year, delivering even more presents than usual.</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wolstencroft felt sad and lonely sitting there all by himself on the shelf that was high above the Christmas cards. He longed to have a child take him home and love him and play with him. But, most of all, to hug him. For no hug is ever too big for a teddy bear.</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He was trying hard not to cry because he knew that tears would make his eyes all puffy and red and then he would have even less chance of finding a home.</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;But why oh why didn&#39;t someone choose him?</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Why, he wondered, was he passed over so many times for other less beautiful bears?</p>\r\n'),
(3, 'Testing Story Title for the Category Comedy', 'http://stories.codematrix.xyz///userfiles/img_98632547-270x162.jpg', '5', '2020-07-04', '<p>Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.</p>\r\n\r\n<p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>\r\n\r\n<p>Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>\r\n<script src=\"chrome-extension://hhojmcideegachlhfgfdhailpfhgknjm/web_accessible_resources/index.js\"></script>\r\n'),
(4, 'Testing Story Title for the Category Mythology', 'http://stories.codematrix.xyz///userfiles/img_32165498.jpg', '4', '2020-07-06', '<p>Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.</p>\r\n\r\n<p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>\r\n\r\n<p>Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.</p>\r\n'),
(5, 'Testing Story Title for the Category Love', 'http://stories.codematrix.xyz///userfiles/img_98745630-1.jpg', '2', '2020-07-03', '<p>Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.</p>\r\n\r\n<p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>\r\n\r\n<p>Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.</p>\r\n<script src=\"chrome-extension://hhojmcideegachlhfgfdhailpfhgknjm/web_accessible_resources/index.js\"></script>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(32) NOT NULL,
  `user_birthday` date NOT NULL,
  `user_first_name` varchar(128) NOT NULL,
  `user_last_name` varchar(128) NOT NULL,
  `user_company` varchar(128) NOT NULL,
  `user_email` varchar(128) NOT NULL,
  `user_website` varchar(128) NOT NULL,
  `user_level` enum('admin','user') NOT NULL DEFAULT 'user',
  `user_password` varchar(128) NOT NULL,
  `user_token` varchar(128) NOT NULL,
  `user_address_1` varchar(256) NOT NULL,
  `user_address_2` varchar(256) NOT NULL,
  `user_city` varchar(128) NOT NULL,
  `user_state` varchar(128) NOT NULL,
  `user_postcode` varchar(128) NOT NULL,
  `user_country` varchar(128) NOT NULL,
  `user_phone` text NOT NULL,
  `user_note` text NOT NULL,
  `user_expired` datetime NOT NULL,
  `user_status` enum('banned','active','pending') NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_birthday`, `user_first_name`, `user_last_name`, `user_company`, `user_email`, `user_website`, `user_level`, `user_password`, `user_token`, `user_address_1`, `user_address_2`, `user_city`, `user_state`, `user_postcode`, `user_country`, `user_phone`, `user_note`, `user_expired`, `user_status`) VALUES
(1, 'administrator', '1990-03-30', 'Administrator', '', '', 'dev@codematrix.xyz', 'https://codematrix.xyz', 'admin', '4ac8d9aa31d6988199c12cffebad4d84ad865afd', '', '', '', '', '', '', '', '', '', '0000-00-00 00:00:00', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stories`
--
ALTER TABLE `stories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `stories`
--
ALTER TABLE `stories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
