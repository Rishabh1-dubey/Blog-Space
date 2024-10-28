import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()



app.post('/api/v1/signup', async(c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())
//logic here for signup
const body =  await c.req.json();

await prisma.user.create({
  data:{
    email:body.email,
    password:body.password,  
  }
})




  return c.text('Hello Hono!')
})
app.post('/api/v1/signin', (c) => {
  return c.text('Hello Hono!')
})
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put("/api/v1/blog",(c)=>{
return c.text("hello rishabh")
})

app.get("/api/v1/blog/:id", (c)=>{
  return c.text("get the value rishabh")
})
  

export default app
