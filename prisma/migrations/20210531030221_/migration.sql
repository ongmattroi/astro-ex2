-- CreateTable
CREATE TABLE "m_permission" (
    "permission_id" VARCHAR(50) NOT NULL,
    "permission_name" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("permission_id")
);

-- CreateTable
CREATE TABLE "m_position" (
    "position_id" TEXT NOT NULL,
    "position_name" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("position_id")
);

-- CreateTable
CREATE TABLE "m_role" (
    "role_id" VARCHAR(50) NOT NULL,
    "role_name" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "m_role_permission" (
    "role_id" VARCHAR(50) NOT NULL,
    "permission_id" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("role_id","permission_id")
);

-- CreateTable
CREATE TABLE "m_shop" (
    "shop_id" TEXT NOT NULL,
    "shop_name" TEXT NOT NULL,
    "full_address" TEXT NOT NULL,

    PRIMARY KEY ("shop_id")
);

-- CreateTable
CREATE TABLE "m_user" (
    "user_id" SERIAL NOT NULL,
    "user_name" VARCHAR(50) NOT NULL,
    "user_fullname" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "user_password" VARCHAR(250) NOT NULL,
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),

    PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "m_user_position" (
    "user_id" INTEGER NOT NULL,
    "position_id" TEXT NOT NULL,

    PRIMARY KEY ("user_id","position_id")
);

-- CreateTable
CREATE TABLE "m_user_role" (
    "user_id" INTEGER NOT NULL,
    "role_id" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("user_id","role_id")
);

-- CreateTable
CREATE TABLE "m_user_shop" (
    "user_id" INTEGER NOT NULL,
    "shop_id" TEXT NOT NULL,

    PRIMARY KEY ("user_id","shop_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "m_permission.permission_name_unique" ON "m_permission"("permission_name");

-- CreateIndex
CREATE UNIQUE INDEX "m_role.role_name_unique" ON "m_role"("role_name");

-- CreateIndex
CREATE UNIQUE INDEX "m_user_position.user_id_unique" ON "m_user_position"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "m_user_position.position_id_unique" ON "m_user_position"("position_id");

-- AddForeignKey
ALTER TABLE "m_user_role" ADD FOREIGN KEY ("role_id") REFERENCES "m_role"("role_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_user_role" ADD FOREIGN KEY ("user_id") REFERENCES "m_user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_role_permission" ADD FOREIGN KEY ("permission_id") REFERENCES "m_permission"("permission_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_role_permission" ADD FOREIGN KEY ("role_id") REFERENCES "m_role"("role_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_user_position" ADD FOREIGN KEY ("position_id") REFERENCES "m_position"("position_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_user_position" ADD FOREIGN KEY ("user_id") REFERENCES "m_user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_user_shop" ADD FOREIGN KEY ("shop_id") REFERENCES "m_shop"("shop_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_user_shop" ADD FOREIGN KEY ("user_id") REFERENCES "m_user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
