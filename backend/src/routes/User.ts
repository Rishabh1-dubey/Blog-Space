import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  //logic here for signup
  const body = await c.req.json();
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  //here you did for sign because sign is coming from hono/jwt
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.text(token);
});

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.zeyJpZCI6ImY2MWRhNGZmLWE1NzAtNDZjNC04ODU1LTg2OTI4ZTJkNGQ4YiJ9.EL546e-uh5RFaD6wRPvxjLlcsZorqMdy8rU9TV3HRII
//---------------------- sign in routes logic----------------------------

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "user NOt Found  " });
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({
    jwt: token,
  });
});
