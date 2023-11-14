class loginController {
  static authenticate(req, res) {
    const { username, password } = req.body;

    if (username === "admin" && password === "123") {
      return res.json({ id: 1, username, ok: true });
    }

    return res.status(401).json({
      status: 401,
      message: "Usuário ou senha inválidos",
    });
  }
}

module.exports = loginController;
