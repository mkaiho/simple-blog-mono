DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` char(36) NOT NULL,
  `name` varchar(32) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `users_chk_1` CHECK ((char_length(trim(`id`)) = 36))
);
