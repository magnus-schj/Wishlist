-- MySQL Script generated by MySQL Workbench
-- Thu 15 Apr 2021 01:10:41 AM CEST
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema wishlist
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `wishlist` ;

-- -----------------------------------------------------
-- Schema wishlist
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wishlist` ;
-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------
USE `wishlist` ;

-- -----------------------------------------------------
-- Table `wishlist`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wishlist`.`users` ;

CREATE TABLE IF NOT EXISTS `wishlist`.`users` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `created` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wishlist`.`wishlist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wishlist`.`wishlist` ;

CREATE TABLE IF NOT EXISTS `wishlist`.`wishlist` (
  `id` INT NOT NULL,
  `uid` INT NULL,
  `what` TEXT(500) NULL,
  `updated` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `created` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `uid_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `f2`
    FOREIGN KEY (`uid`)
    REFERENCES `wishlist`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wishlist`.`session`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wishlist`.`session` ;

CREATE TABLE IF NOT EXISTS `wishlist`.`session` (
  `id` INT NOT NULL,
  `uid` INT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `id_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `f5`
    FOREIGN KEY (`uid`)
    REFERENCES `wishlist`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wishlist`.`admin_session`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wishlist`.`admin_session` ;

CREATE TABLE IF NOT EXISTS `wishlist`.`admin_session` (
  `id` INT NOT NULL,
  `uid` INT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `id_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `f3`
    FOREIGN KEY (`uid`)
    REFERENCES `wishlist`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wishlist`.`password`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wishlist`.`password` ;

CREATE TABLE IF NOT EXISTS `wishlist`.`password` (
  `uid` INT NOT NULL,
  `password` VARCHAR(45) NULL,
  `created` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  CONSTRAINT `f4`
    FOREIGN KEY (`uid`)
    REFERENCES `wishlist`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wishlist`.`admins`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wishlist`.`admins` ;

CREATE TABLE IF NOT EXISTS `wishlist`.`admins` (
  `id` INT NOT NULL,
  `created` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `f1`
    FOREIGN KEY (`id`)
    REFERENCES `wishlist`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;