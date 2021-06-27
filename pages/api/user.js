import { findAllUsers } from '../../prisma/repositories/mUserRepo';

const getAllUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    res.status(200).json({ users: users });
  } catch (error) {
    console.error(error);
  }
};

function toJson(data) {
  return JSON.stringify(data, (_, v) =>
    typeof v === 'bigint' ? `${v}n` : v
  ).replace(/"(-?\d+)n"/g, (_, a) => a);
}

export default getAllUsers;
