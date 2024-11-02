import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  //Bearer token => ["Brearer" ,"your jwtsnlkfkldsfkdskfjsfdsk"]
  const token = authHeader.split(" ")[1];
  // console.log(token)
  if (!token) {
    c.status(401);
    return c.json({ message: "Unauthorized, Token missing" });
  }
  try {
    const response = await verify(token, c.env.JWT_SECRET);

    if (response) {
      //@ts-ignore
      c.set("userId", response.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        Message: "UnAuthroziated , You are not logged-In",
      });
    }
  } catch (e) {
    console.log("verification error", e);
    c.status(403);
    return c.json({
      Message: "You are not Logged IN",
    });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
const authorId = c.get("userId")
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId)
    }
  });
  return c.json({
    id: blog.id,
  });
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({
    id: blog.id,
  });
});

blogRouter.get("/:id", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: body.id,
      },
    });
    return c.json({
      blog,
    });
  } catch (e) {
    c.status(411);
    return c.json({ message: "Error While fetecing blog post" });
  }
});

//add pagenation
blogRouter.get("/bulk", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.post.findMany();
  return c.json({
    blogs,
  });
});
