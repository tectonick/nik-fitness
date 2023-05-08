require("dotenv").config();
const { CreateApp, CreateServer } = require("./server");

const app = CreateApp();
CreateServer(app);