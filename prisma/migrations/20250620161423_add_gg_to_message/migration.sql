/*
  Warnings:

  - Added the required column `gg` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Message` ADD COLUMN `gg` VARCHAR(191) NOT NULL;
