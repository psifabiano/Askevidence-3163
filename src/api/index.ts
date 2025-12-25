import { Hono } from 'hono';
import { cors } from "hono/cors"

const app = new Hono()
  .basePath('api');

app.use(cors({
  origin: "*"
}))

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

export default app;