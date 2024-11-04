import { Hono } from "hono";
import { blogRouter } from "./routes/Blog";
import { userRouter } from "./routes/User";




//{

// const app = new Hono();
// if don't want to write below code then simpply we can use @ts-ignore something like that we won't get any type eroor but for industry praactices we should use  below code -----
//}
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables:{
    userId: string
  }
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


export default app;
