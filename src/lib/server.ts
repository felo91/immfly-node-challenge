import express from "express";
import routes from "./controller.js";

const PORT: number = 3000;
const app = express();

app.use(routes);
app.listen(PORT);

console.log(`Server is running on port ${PORT}`);

export default app;
