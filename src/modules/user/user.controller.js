const axios = require("axios");
const service = require("./user.service");

class UserController {
  static async sync(req, res) {
    const response = await axios.get("https://randomuser.me/api/?results=10");

    const results = response.data.results;

    const users = results.map((user) => {
      return {
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        email: user.email,
        username: user.login.username,
        password: user.login.password,
        phone: user.phone,
      };
    });

    await Promise.all(
      users.map(async (user) => {
        return await service.create(user);
      })
    );

    // await service.createMany(users);
    return res.status(201).json({
      status: 201,
      message: "Sincronização realizada com sucesso!",
    });
  }

  static async create(req, res) {
    const user = await service.create(req.body);

    if (user.err) {
      return res.status(user.err.status).send(user.err);
    }

    return res.json(user);
  }

  static async findAll(req, res) {
    const user = await service.findAll();

    if (user.err) {
      return res.status(user.err.status).send(user.err);
    }

    return res.status(201).json(user);
  }

  static async findOne(req, res) {
    const { id } = req.params;

    if (isNaN(+id)) {
      return res.status(400).send({
        status: 400,
        message: "O id do usuário deve ser numérico",
      });
    }

    const user = await service.findOne(+id);

    if (user.err) {
      return res.status(user.err.status).send(user.err);
    }

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "Registro não encontrado",
      });
    }

    return res.json(user);
  }

  static async update(req, res) {
    const { id } = req.params;

    if (isNaN(+id)) {
      return res.status(400).send({
        status: 400,
        message: "O id do usuário deve ser numérico",
      });
    }

    const user = await service.update(+id, req.body);

    if (user.err) {
      return res.status(user.err.status).send(user.err);
    }

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "Registro não encontrado",
      });
    }

    return res.json(user);
  }

  static async delete(req, res) {
    const { id } = req.params;

    if (isNaN(+id)) {
      return res.status(400).send({
        status: 400,
        message: "O id do usuário deve ser numérico",
      });
    }

    const user = await service.delete(+id);

    if (user.err) {
      return res.status(user.err.status).send(user.err);
    }

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "Registro não encontrado",
      });
    }

    return res.json(user);
  }
}

module.exports = UserController;
