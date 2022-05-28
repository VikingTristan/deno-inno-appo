import { Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { innovationDays } from "./data.ts"
const port = 3000;

const app = new Application();
const router = new Router();

// API
router.get("/api", context => {
  context.response.body = "Api online!"
})
router.get("/api/innovation-days", context => {
  context.response.body = innovationDays
})

app.use(router.routes())
app.use(router.allowedMethods())

// Static content
app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/src/client`,
      index: "index.html",
    });
  } catch {
    next();
  }
});

console.log(`Server listening to ${port}`)
await app.listen({ port });