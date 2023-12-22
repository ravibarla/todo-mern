import { Todos } from "../models/Todos.js";

//get all the todos
export const getTodos = async (req, res) => {
  await Todos.find({}).then((todos) => {
    res.json(todos);
  });
};

//add a todo
export const addTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = new Todos({
    title: title,
  })
    .save()
    .then((succ) => console.log("added successfully"))
    .catch((err) => res.status(400).send("err :", err));
};
