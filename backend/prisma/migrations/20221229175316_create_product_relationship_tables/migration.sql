-- CreateTable
CREATE TABLE `manufacturers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `manufacturers_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `partNumber` VARCHAR(255) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `productTypeId` INTEGER NOT NULL,
    `manufacturerId` INTEGER NOT NULL,
    `createdAt` VARCHAR(191) NULL,
    `updatedAt` VARCHAR(191) NULL,

    UNIQUE INDEX `products_partNumber_key`(`partNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `product_types_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_productTypeId_fkey` FOREIGN KEY (`productTypeId`) REFERENCES `product_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_manufacturerId_fkey` FOREIGN KEY (`manufacturerId`) REFERENCES `manufacturers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
