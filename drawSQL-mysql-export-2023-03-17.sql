CREATE TABLE `User`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` CHAR(255) NOT NULL,
    `first_name` CHAR(255) NOT NULL,
    `last_name` CHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `User` ADD PRIMARY KEY `user_id_primary`(`id`);
CREATE TABLE `Reply`(
    `user` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `comment` BIGINT NOT NULL,
    `text` CHAR(255) NOT NULL
);
ALTER TABLE
    `Reply` ADD PRIMARY KEY `reply_user_primary`(`user`);
CREATE TABLE `Comment`(
    `user` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `video_id` CHAR(255) NOT NULL,
    `text` CHAR(255) NOT NULL,
    `likes` INT NOT NULL,
    `dislikes` INT NOT NULL
);
ALTER TABLE
    `Comment` ADD PRIMARY KEY `comment_user_primary`(`user`);
ALTER TABLE
    `Reply` ADD CONSTRAINT `reply_user_foreign` FOREIGN KEY(`user`) REFERENCES `Comment`(`user`);
ALTER TABLE
    `Reply` ADD CONSTRAINT `reply_text_foreign` FOREIGN KEY(`text`) REFERENCES `User`(`id`);
ALTER TABLE
    `Comment` ADD CONSTRAINT `comment_user_foreign` FOREIGN KEY(`user`) REFERENCES `User`(`id`);