-- CreateTable
CREATE TABLE "purchases" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "purchase_base" DECIMAL(10,2) NOT NULL,
    "purchase_additional" DECIMAL(10,2) NOT NULL,
    "purchase_total" DECIMAL(10,2) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);
