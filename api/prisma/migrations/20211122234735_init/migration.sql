-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "cookTime" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "image" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "prepTime" INTEGER NOT NULL DEFAULT 0;
