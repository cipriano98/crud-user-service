const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();
const loginRouters = require("./modules/login/login.router");
const userRouters = require("./modules/user/user.router");

class App {
  static bootstrap() {
    app
      .use(express.json())
      .use(cors())
      .use("/login", loginRouters)
      .use("/user", userRouters)
      .listen(port, () => {
        console.log(`Servidor está rodando em http://localhost:${port}`);
      });
  }
}

App.bootstrap();

// main()
// .catch((error) => {
//   throw error;
// })
// .finally(async () => {
//   await prisma.$disconnect();
// });
