-- CreateTable
CREATE TABLE "Warehouse" (
    "warehouseId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("warehouseId")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_id_fkey" FOREIGN KEY ("id") REFERENCES "Warehouse"("warehouseId") ON DELETE RESTRICT ON UPDATE CASCADE;
