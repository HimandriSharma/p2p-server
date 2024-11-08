import express from "express";
import { getRandomSeedServer } from "./src/getRandomSeedServer";
import { registerWithSeedServer } from "./src/registerWithSeedServer";
import { register } from "./src/routes/register";
import { lookup } from "./src/routes/lookup";
import { seeds } from "./seed";
import { addNode } from "./src/servers";
import { send } from "./src/routes/send";
import { message } from "./src/routes/message";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post("/register", register);
app.get("/lookup", lookup);
app.post("/send", send);
app.post("/message", message);


app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

async function initialize() {
  for (let seed of seeds) {
    addNode(seed);
  }
  const randomSeedServerUri = getRandomSeedServer();
  await registerWithSeedServer(randomSeedServerUri.uri);
}

setTimeout(() => {
  initialize();
}, 500);
