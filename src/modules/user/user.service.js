const { PrismaClient } = require("../../../prisma/client");
const prisma = new PrismaClient();

const select = {
  id: true,
  name: true,
  gender: true,
  email: true,
  username: true,
  password: false,
  phone: true,
};

class UserService {
  static async sync(users) {
    try {
      return await Promise.all(
        users.map(async (data) => {
          return await prisma.user.create({
            data,
            select,
          });
        })
      );
    } catch (err) {
      return {
        staus: 500,
        message: "Ocorreu um erro inesperado no sistema",
        err,
      };
    } finally {
      prisma.$disconnect();
    }
  }

  static async createMany(data) {
    try {
      return await prisma.user.createMany({ data, select });
    } catch (err) {
      return {
        staus: 500,
        message: "Ocorreu um erro inesperado no sistema",
        err,
      };
    } finally {
      prisma.$disconnect();
    }
  }

  static async create(data) {
    try {
      return await prisma.user.create({ data, select });
    } catch (err) {
      return {
        staus: 500,
        message: "Ocorreu um erro inesperado no sistema",
        err,
      };
    } finally {
      prisma.$disconnect();
    }
  }

  static async findAll() {
    try {
      return await prisma.user.findMany({ select });
    } catch (err) {
      return {
        staus: 500,
        message: "Ocorreu um erro inesperado no sistema",
        err,
      };
    } finally {
      prisma.$disconnect();
    }
  }

  static async findOne(id) {
    try {
      return await prisma.user.findUnique({ where: { id }, select });
    } catch (err) {
      return {
        staus: 500,
        message: "Ocorreu um erro inesperado no sistema",
        err,
      };
    } finally {
      prisma.$disconnect();
    }
  }

  static async update(id, data) {
    try {
      return await prisma.user.update({ where: { id }, data, select });
    } catch (err) {
      return {
        staus: 500,
        message: "Ocorreu um erro inesperado no sistema",
        err,
      };
    } finally {
      prisma.$disconnect();
    }
  }

  static async delete(id) {
    try {
      return await prisma.user.delete({ where: { id }, select });
    } catch (err) {
      return {
        staus: 500,
        message: "Ocorreu um erro inesperado no sistema",
        err,
      };
    } finally {
      prisma.$disconnect();
    }
  }
}

module.exports = UserService;
