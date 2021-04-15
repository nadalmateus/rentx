import express from "express";
import { createCourse } from "./routes";
const app = express();

app.get('/', createCourse)

const port = 3333
app.listen(port, () => console.log(`Server running on ${port}!`))