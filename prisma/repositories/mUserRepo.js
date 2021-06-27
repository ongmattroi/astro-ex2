import prisma from '../prisma';

const findAllUsers = async () => {
  try {
    const users = await prisma.m_user.findMany({
      select: {
        m_user_role: {
          select: {
            m_role: {
              select: {
                m_role_permission: {
                  select: {
                    role_id: true,
                    permission_id: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return users;
  } catch (error) {
    console.error(error);
  }
};
const getUserAuthen = async (userName, password) => {
  try {
    const users = await prisma.m_user.findMany({
      select: {
        m_user_role: {
          select: {
            m_role: {
              select: {
                m_role_permission: {
                  select: {
                    role_id: true,
                    permission_id: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return users;
  } catch (error) {
    console.error(error);
  }
};

export { findAllUsers };
