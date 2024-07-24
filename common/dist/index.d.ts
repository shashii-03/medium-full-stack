import z from 'zod';
export declare const signUpSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    email: string;
}, {
    username: string;
    password: string;
    email: string;
}>;
export type SignUpSchema = z.infer<typeof signUpSchema>;
export declare const signInSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type SignInSchema = z.infer<typeof signInSchema>;
export declare const createBlogSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
}, {
    title: string;
    description: string;
}>;
export type CreateBlogSchema = z.infer<typeof createBlogSchema>;
export declare const updateBlogSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    id: number;
}, {
    title: string;
    description: string;
    id: number;
}>;
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>;
