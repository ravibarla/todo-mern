import express from "express";
import { addTodo, getTodos } from "../controller/index.js";

export const router = express.Router();
router.get("/", getTodos);
router.post("/add", addTodo);
