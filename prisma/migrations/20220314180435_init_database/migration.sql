-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "infoId" INTEGER NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detail" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" VARCHAR(25) NOT NULL,
    "operatingTime" TIMESTAMP(3) NOT NULL,
    "moduleState" BOOLEAN NOT NULL DEFAULT true,
    "dataCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Detail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logs" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" VARCHAR(25) NOT NULL,
    "operatingTime" TIMESTAMP(3) NOT NULL,
    "moduleState" BOOLEAN NOT NULL,
    "moduleId" INTEGER NOT NULL,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Module_name_key" ON "Module"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Module_infoId_key" ON "Module"("infoId");

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "Detail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
