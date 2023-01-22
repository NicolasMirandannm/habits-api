import Fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./database/prisma";
import { appRoutes } from "./routes/routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("server listen in http://localhost:3333/");
  });
