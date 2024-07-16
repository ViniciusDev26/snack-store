import fastify from "fastify"
import { env } from "./config/env"
const app = fastify()

app.get("/", async (request, reply) => {
  return { hello: "world" }
})

app.listen({
  port: env.PORT,
  host: "0.0.0.0",
}, (error, address) => {
  if(error) {
    console.error(error)
    process.exit(1)
  }

  console.log(`🚀 Server listening at ${address}`)
})