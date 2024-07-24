import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogSchema } from "@shashiiii/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: any
    }
}>();

//implement authentication middelware

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || ""
    const user = await verify(authHeader, c.env.JWT_SECRET)
    if (user) {
        c.set("userId", user.id);
        await next();
    } else {
        c.status(403);
        return c.json({
            msg: "Not Logged In"
        })
    }
})

//add new blog route
blogRouter.post("/", async (c) => {

    const body = await c.req.json();
    const { success } = createBlogSchema.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            msg: "Inavlid Inputs"
        })
    }
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                description: body.description,
                Author_id: authorId
            }
        })

        if (!blog) {
            c.status(411);
            return c.json({
                msg: "Something went wrong"
            })
        }
        else {
            return c.json({
                blog
            })
        }
    } catch (err) {
        console.log(err);
        c.status(411);
        return c.json({
            msg: "Invalid Inputs"
        })

    }


})

//update blog route

blogRouter.put("/", async (c) => {

    const body = await c.req.json();
    const { success } = createBlogSchema.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            msg: "Inavlid Inputs"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                description: body.description,

            }
        })
        return c.json({ msg: "Success Updated", blog });
    } catch (err) {
        console.log(err);
        c.status(411);
        return c.json({
            msg: "oops"
        })
    }


})


//bulk post route

blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        const blog = await prisma.blog.findMany({
            select: {
                title: true,
                description: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return c.json({
            blog
        })
    } catch (err) {
        console.log(err);
        c.status(411);
        return c.json({
            msg: "oops"
        })
    }

    return c.text("hello hono")
})



//find blog route

blogRouter.get("/:id", async (c) => {

    const id = c.req.param("id")

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                title: true,
                description: true,
                id: true,
                Author_id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            blog
        })
    } catch (err) {
        console.log(err);
        c.status(411);
        return c.json({
            msg: "oops"
        })
    }
})

