/*
  Warnings:

  - You are about to drop the column `productId` on the `ProductPhoto` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductPhoto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL
);
INSERT INTO "new_ProductPhoto" ("id", "url") SELECT "id", "url" FROM "ProductPhoto";
DROP TABLE "ProductPhoto";
ALTER TABLE "new_ProductPhoto" RENAME TO "ProductPhoto";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
