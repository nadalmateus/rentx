import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Hello World");
});

const port = 3333;
app.listen(port, () => console.log(`Server running on ${port}!`));
