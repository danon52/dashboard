-- CreateTable
CREATE TABLE "Progile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "City" TEXT NOT NULL,
    "Contry" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Progile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
