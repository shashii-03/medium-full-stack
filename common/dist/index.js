"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.createBlogSchema = exports.signInSchema = exports.signUpSchema = void 0;
const zod_1 = __importDefault(require("zod"));
//sign up zod schema
exports.signUpSchema = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string().min(6),
    email: zod_1.default.string().email(),
});
//signin zod schema
exports.signInSchema = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string().min(6),
});
//create blog zod schema
exports.createBlogSchema = zod_1.default.object({
    title: zod_1.default.string(),
    description: zod_1.default.string(),
});
exports.updateBlogSchema = zod_1.default.object({
    title: zod_1.default.string(),
    description: zod_1.default.string(),
    id: zod_1.default.number(),
});
