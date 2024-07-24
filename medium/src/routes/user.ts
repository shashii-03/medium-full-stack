import { Hono } from "hono";

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signInSchema, signUpSchema } from "@shashiiii/medium-common";


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

//signUpSchema
userRouter.post("/signup", async (c) => {

    const body = await c.req.json();
    const { success } = signUpSchema.safeParse(body)
    if (!success) {
        c.status(411);
        return c.json({
            msg: "Inavalid Inputs"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const user = await prisma.users.create({
            data: {
                username: body.username,
                password: body.password,
                email: body.email,
                name: body.name,
            }
        })

        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET)

        return c.text(jwt)
    }
    catch (err) {
        c.status(411);
        c.text("Invalid")

    }

    return c.text("Success");
})


//sign in Route


userRouter.post("/signin", async (c) => {

    const body = await c.req.json();
    const { success } = signInSchema.safeParse(body)
    if (!success) {
        c.status(411);
        return c.json({
            msg: "Inavalid Inputs"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    try {

        const user = await prisma.users.findFirst({
            where: {
                username: body.username,
                password: body.password,
            }
        })

        if (!user) {
            c.status(403)
            return c.json({
                msg: "Invalid Inpts"
            })
        }

        const jwt = await sign({
            id: user.id,
        }, c.env.JWT_SECRET)

        return c.text(jwt)

    } catch (err) {
        console.log(err);
        c.status(411);

        return c.text("Invalid")


    }



    return c.text("hell Hono");
})