import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { use } from "hono/jsx";

// const app = new Hono();


// if don't want to write below code then simpply we can use @ts-ignore something like that we won't get any type eroor but for industry praactices we should use  below code -----
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET : string
  };
}>();

// ---------------signup logic-----------------------------------
app.post("/api/v1/signup", async (c) => {
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
  return c.json({
    jwt: token,
  });
});

//---------------------- sign in routes logic----------------------------

app.post("/api/v1/signin", async (c) => {
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

app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

app.put("/api/v1/blog", (c) => {
  return c.text("hello rishabh");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("get the value rishabh");
});

export default app;
