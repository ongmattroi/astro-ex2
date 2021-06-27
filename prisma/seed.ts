/*
only working with TS
*/

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('seed');
  const permission = await prisma.m_permission.createMany({
    data: [
      {
        permission_id: 'ALL_PERMISSION',
        permission_name: 'permission.all',
      },
      {
        permission_id: 'HOME_PERMISSION',
        permission_name: 'permission.home',
      },
      {
        permission_id: 'GUEST_PERMISSION',
        permission_name: 'permission.guest',
      },
    ],
  });

  const role = await prisma.m_role.createMany({
    data: [
      {
        role_id: 'ROLE_ADMIN',
        role_name: 'role.admin',
      },
      {
        role_id: 'ROLE_SALE',
        role_name: 'role.sale',
      },
      {
        role_id: 'ROLE_GUEST',
        role_name: 'role.guest',
      },
    ],
  });

  const position = await prisma.m_position.createMany({
    data: [
      {
        position_id: 'IT_Manager',
        position_name: 'it.manager',
      },
      {
        position_id: 'CEO',
        position_name: 'ceo',
      },
      {
        position_id: 'SALE',
        position_name: 'sale',
      },
    ],
  });

  const shop = await prisma.m_shop.createMany({
    data: [
      {
        shop_id: 'Shop_A',
        shop_name: 'Shop A',
        full_address: 'Hoàn Kiếm, Hà Nội',
      },
      {
        shop_id: 'Shop_B',
        shop_name: 'Shop B',
        full_address: 'Đống Đa, Hà Nội',
      },
    ],
  });

  const user = await prisma.m_user.createMany({
    data: [
      {
        user_id: 1,
        user_name: 'admin',
        user_fullname: 'This is Admin',
        email: 'admin@admin',
        user_password: '1',
      },
      {
        user_id: 2,
        user_name: 'saleA',
        user_fullname: 'This is Sale A',
        email: 'saleA@sale',
        user_password: '1',
      },
      {
        user_id: 3,
        user_name: 'saleB',
        user_fullname: 'This is Sale B',
        email: 'saleB@sale',
        user_password: '1',
      },
    ],
  });

  const rolePermission = await prisma.m_role_permission.createMany({
    data: [
      {
        role_id: 'ROLE_ADMIN',
        permission_id: 'ALL_PERMISSION',
      },
      {
        role_id: 'ROLE_ADMIN',
        permission_id: 'HOME_PERMISSION',
      },
      {
        role_id: 'ROLE_ADMIN',
        permission_id: 'GUEST_PERMISSION',
      },
      {
        role_id: 'ROLE_GUEST',
        permission_id: 'GUEST_PERMISSION',
      },
      {
        role_id: 'ROLE_SALE',
        permission_id: 'HOME_PERMISSION',
      },
      {
        role_id: 'ROLE_SALE',
        permission_id: 'GUEST_PERMISSION',
      },
    ],
  });

  const userRole = await prisma.m_user_role.createMany({
    data: [
      {
        user_id: 1,
        role_id: 'ROLE_ADMIN',
      },
      {
        user_id: 2,
        role_id: 'ROLE_SALE',
      },
      {
        user_id: 3,
        role_id: 'ROLE_SALE',
      },
    ],
  });
  const userPosition = await prisma.m_user_position.createMany({
    data: [
      {
        user_id: 1,
        position_id: 'IT_Manager',
      },
      {
        user_id: 2,
        position_id: 'SALE',
      },
      {
        user_id: 3,
        position_id: 'SALE',
      },
    ],
  });
  const userShop = await prisma.m_user_shop.createMany({
    data: [
      {
        user_id: 1,
        shop_id: 'Shop_A',
      },
      {
        user_id: 2,
        shop_id: 'Shop_A',
      },
      {
        user_id: 3,
        shop_id: 'Shop_B',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
export default main;
