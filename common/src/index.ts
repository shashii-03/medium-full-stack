import z from 'zod'

//sign up zod schema
export const signUpSchema = z.object({
    username: z.string(),
    password: z.string().min(6),
    email: z.string().email(),
})
//infer signup zod schema

export type SignUpSchema = z.infer<typeof signUpSchema>;

//signin zod schema
export const signInSchema = z.object({
    username: z.string(),
    password: z.string().min(6),
})

//infer signin zod schema
export type SignInSchema = z.infer<typeof signInSchema>;

//create blog zod schema

export const createBlogSchema = z.object({
    title: z.string(),
    description: z.string(),

})

export type CreateBlogSchema = z.infer<typeof createBlogSchema>

export const updateBlogSchema = z.object({
    title: z.string(),
    description: z.string(),
    id: z.number(),
})

export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>;


