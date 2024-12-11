/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Matricula` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Matricula" ADD COLUMN     "code" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_code_key" ON "Matricula"("code");
