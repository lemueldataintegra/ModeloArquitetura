-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Cpf" TEXT NOT NULL,
    "Age" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
